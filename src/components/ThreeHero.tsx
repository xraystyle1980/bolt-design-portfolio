import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Ripple {
  position: THREE.Vector2;
  time: number;
  strength: number;    // Range: 0.5 to 2.0 (higher values cause extreme distortion)
  velocity: number;    // Range: 5 to 15 (above 15 causes choppy animation, below 5 feels unresponsive)
  frequency: number;   // Range: 0.8 to 2.0 (lower causes merged waves, higher causes noisy patterns)
  wavelength: number;  // Range: 8 to 25 (below 8 creates tight ripples, above 25 loses detail)
  damping: number;     // Range: 0.01 to 0.1 (below 0.01 causes infinite ripples, above 0.1 dies too fast)
}

export function ThreeHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const mousePosition = useRef({ x: 0, y: 0 });
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null);
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null);
  const sceneRef = useRef<THREE.Scene | null>(null);
  const ripplesRef = useRef<Ripple[]>([]);
  const lastTimeRef = useRef<number>(0);
  
  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color(0xffffff);
    sceneRef.current = scene;
    
    // Reduce FOV for flatter perspective
    const camera = new THREE.PerspectiveCamera(3, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: false,
      powerPreference: 'high-performance',
      precision: 'mediump'
    });
    
    cameraRef.current = camera;
    rendererRef.current = renderer;
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2)); // Limit pixel ratio
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Grid setup with optimized geometries
    const gridSize = 80;
    const spacing = 2.0;
    const lines: THREE.Line[] = [];

    // Create a group to hold all grid lines
    const gridGroup = new THREE.Group();
    scene.add(gridGroup);

    // Optimize shader for performance
    const gradientMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xD5ECE2) },
        mousePos: { value: new THREE.Vector2(0, 0) },
        time: { value: 0 }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform vec2 mousePos;
        
        void main() {
          vUv = uv;
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform vec2 mousePos;
        uniform vec3 color;
        uniform float time;

        void main() {
          float dist = length(vPosition.xy - mousePos * 25.0);
          float glow = smoothstep(25.0, 2.0, dist);
          float opacity = mix(0.15, 0.95, glow);
          gl_FragColor = vec4(color, opacity);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });

    // Pre-allocate buffers for better performance
    const positions = new Float32Array(gridSize * 3);
    const tempPoints: THREE.Vector3[] = [];
    
    // Create horizontal and vertical lines with shared geometry
    for (let j = 0; j < gridSize; j++) {
      tempPoints.length = 0;
      for (let i = 0; i < gridSize; i++) {
        tempPoints.push(new THREE.Vector3(
          (i - gridSize / 2) * spacing,
          (j - gridSize / 2) * spacing,
          0
        ));
      }
      const curve = new THREE.CatmullRomCurve3(tempPoints, false, 'catmullrom', 0.5);
      const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(gridSize * 2));
      const line = new THREE.Line(geometry, gradientMaterial);
      gridGroup.add(line);
      lines.push(line);
    }

    // Vertical lines with shared geometry
    for (let i = 0; i < gridSize; i++) {
      tempPoints.length = 0;
      for (let j = 0; j < gridSize; j++) {
        tempPoints.push(new THREE.Vector3(
          (i - gridSize / 2) * spacing,
          (j - gridSize / 2) * spacing,
          0
        ));
      }
      const curve = new THREE.CatmullRomCurve3(tempPoints, false, 'catmullrom', 0.5);
      const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(gridSize * 2));
      const line = new THREE.Line(geometry, gradientMaterial);
      gridGroup.add(line);
      lines.push(line);
    }

    // Adjust camera position for wider view
    camera.position.set(0, 0, 150);
    camera.lookAt(0, 0, 0);

    // Window resize handler
    const handleResize = () => {
      if (!cameraRef.current || !rendererRef.current || !sceneRef.current) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      // Update camera aspect ratio
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      
      // Update renderer size
      rendererRef.current.setSize(width, height);
      
      // Calculate viewport coverage
      const fov = cameraRef.current.fov * (Math.PI / 180);
      const viewportHeight = 2 * Math.tan(fov / 2) * Math.abs(camera.position.z);
      const viewportWidth = viewportHeight * cameraRef.current.aspect;
      
      // Scale grid to cover viewport with overflow
      const gridWorldSize = gridSize * spacing;
      const scaleX = (viewportWidth / gridWorldSize) * 1.85;
      const scaleY = (viewportHeight / gridWorldSize) * 1.85;
      const scale = Math.max(scaleX, scaleY);
      
      // Apply scale to grid group
      gridGroup.scale.set(scale, scale, 1);
    };

    // Mouse move handler
    const handleMouseMove = (event: MouseEvent) => {
      mousePosition.current = {
        x: (event.clientX / window.innerWidth) * 2 - 1,
        y: -(event.clientY / window.innerHeight) * 2 + 1,
      };
      // Update shader uniform
      gradientMaterial.uniforms.mousePos.value.set(
        mousePosition.current.x,
        mousePosition.current.y
      );
    };

    // Mouse click handler
    const handleClick = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      // Create new ripple with physics-based parameters
      ripplesRef.current.push({
        position: new THREE.Vector2(x, y),
        time: 0,
        strength: 1.2,     // Sweet spot for visible but controlled waves
        velocity: 12,      // Balanced speed for smooth propagation
        frequency: 1.2,    // Creates clear, distinct wave patterns
        wavelength: 18,    // Good spread without losing definition
        damping: 0.035     // Long-lasting but eventually fades (about 3-4 seconds)
      });
    };

    // Animation with optimized performance
    const animate = (currentTime: number) => {
      const id = requestAnimationFrame(animate);

      const deltaTime = Math.min((currentTime - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = currentTime;

      // Update time uniform for subtle animation
      gradientMaterial.uniforms.time.value += deltaTime * 0.5;

      // Update ripples with wave physics
      ripplesRef.current = ripplesRef.current.filter(ripple => {
        ripple.time += deltaTime * 0.24; // Time scale: 0.2 to 0.8 (below 0.2 is too slow, above 0.8 too fast)
        
        // Apply gentler energy loss over time and distance
        ripple.strength *= Math.exp(-ripple.damping * ripple.time);
        
        return ripple.strength > 0.001; // Threshold: 0.0005 to 0.002 (lower values keep waves longer but impact performance)
      });

      // Optimize grid updates
      const mouseX = mousePosition.current.x * 25;
      const mouseY = mousePosition.current.y * 25;

      lines.forEach((line) => {
        const positions = line.geometry.attributes.position;
        const array = positions.array;
        let needsUpdate = false;

        for (let i = 0; i < positions.count; i++) {
          const idx = i * 3;
          const x = array[idx];
          const y = array[idx + 1];
          
          const distX = mouseX - x;
          const distY = mouseY - y;
          const mouseDistance = Math.sqrt(distX * distX + distY * distY);
          const peakInfluence = 15 * Math.exp(-Math.pow(mouseDistance * 0.15, 2));
          
          let targetZ = peakInfluence;

          // Calculate wave interference pattern
          for (const ripple of ripplesRef.current) {
            const rippleX = ripple.position.x * 25;
            const rippleY = ripple.position.y * 25;
            const distance = Math.hypot(rippleX - x, rippleY - y);
            
            // Wave equation components
            const phase = (distance / ripple.wavelength) - (ripple.time * ripple.velocity);
            const amplitude = ripple.strength * Math.exp(-distance * 0.002); // Distance falloff: 0.001 to 0.004 (lower spreads further)
            
            // Combine multiple wave components with more pronounced sub-harmonics
            const waveform = (
              Math.sin(phase * ripple.frequency * Math.PI) +                    // Primary wave
              Math.sin(phase * ripple.frequency * 0.3 * Math.PI) * 0.7 +       // Sub-harmonic (ratio 0.2 to 0.4)
              Math.sin(phase * ripple.frequency * 0.15 * Math.PI) * 0.4        // Second sub-harmonic (ratio 0.1 to 0.2)
            );

            // Wavefront focusing factor
            const focusFactor = Math.exp(-Math.pow(distance - ripple.velocity * ripple.time, 2) * 0.0002); // Range: 0.0001 to 0.0004
            
            // Final amplitude scaling
            targetZ += waveform * amplitude * focusFactor * 35; // Scale: 20 to 50 (above 50 causes extreme displacement)
          }
          
          const currentZ = array[idx + 2];
          // Motion control parameters - Range: 0.1 to 0.3 (lower = smoother but slower)
          const dampingFactor = Math.abs(targetZ - currentZ) > 1 ? 0.10 : 0.18;
          const velocity = (targetZ - currentZ) * dampingFactor;
          const newZ = currentZ + velocity;
          
          if (Math.abs(newZ - currentZ) > 0.001) {
            array[idx + 2] = newZ;
            needsUpdate = true;
          }
        }
        
        if (needsUpdate) {
          positions.needsUpdate = true;
        }
      });

      renderer.render(scene, camera);
    };

    // Event listeners
    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    window.addEventListener('click', handleClick);

    // Initial setup
    handleResize();

    // Start animation with initial timestamp
    lastTimeRef.current = performance.now();
    animate(lastTimeRef.current);

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClick);
      containerRef.current?.removeChild(renderer.domElement);
      scene.clear();
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute top-0 left-0 w-full h-screen -z-10 bg-white"
    />
  );
}