import { useEffect, useRef } from 'react';
import * as THREE from 'three';

interface Ripple {
  position: THREE.Vector2;
  time: number;
  strength: number;
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
    const camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: false
    });
    
    cameraRef.current = camera;
    rendererRef.current = renderer;
    
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    // Custom shader material for gradient effect
    const gradientMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(0xD5ECE2) }, // mint
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
          vec4 modelViewPosition = modelViewMatrix * vec4(position, 1.0);
          gl_Position = projectionMatrix * modelViewPosition;
        }
      `,
      fragmentShader: `
        varying vec2 vUv;
        varying vec3 vPosition;
        uniform vec2 mousePos;
        uniform vec3 color;
        uniform float time;

        void main() {
          float dist = length(vPosition.xy - mousePos * 15.0);
          float glow = smoothstep(20.0, 12.0, dist);
          vec3 finalColor = color;
          float opacity = mix(0.2, 0.9, glow);
          gl_FragColor = vec4(finalColor, opacity);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });

    // Grid setup
    const gridSize = 50;
    const spacing = 1;
    const lines: THREE.Line[] = [];

    // Create a group to hold all grid lines
    const gridGroup = new THREE.Group();
    scene.add(gridGroup);

    // Create horizontal lines with curve interpolation
    for (let j = 0; j < gridSize; j++) {
      const points: THREE.Vector3[] = [];
      for (let i = 0; i < gridSize; i++) {
        points.push(new THREE.Vector3(
          (i - gridSize / 2) * spacing,
          (j - gridSize / 2) * spacing,
          0
        ));
      }
      // Create a smooth curve from the points
      const curve = new THREE.CatmullRomCurve3(points);
      const smoothPoints = curve.getPoints(gridSize * 2); // Double the points for smoother curve
      
      const geometry = new THREE.BufferGeometry().setFromPoints(smoothPoints);
      const line = new THREE.Line(geometry, gradientMaterial);
      gridGroup.add(line);
      lines.push(line);
    }

    // Create vertical lines with curve interpolation
    for (let i = 0; i < gridSize; i++) {
      const points: THREE.Vector3[] = [];
      for (let j = 0; j < gridSize; j++) {
        points.push(new THREE.Vector3(
          (i - gridSize / 2) * spacing,
          (j - gridSize / 2) * spacing,
          0
        ));
      }
      // Create a smooth curve from the points
      const curve = new THREE.CatmullRomCurve3(points);
      const smoothPoints = curve.getPoints(gridSize * 2); // Double the points for smoother curve
      
      const geometry = new THREE.BufferGeometry().setFromPoints(smoothPoints);
      const line = new THREE.Line(geometry, gradientMaterial);
      gridGroup.add(line);
      lines.push(line);
    }

    // Adjust camera position for flatter perspective
    camera.position.set(0, -35, 50);
    camera.lookAt(0, 5, 0);

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
      
      // Add new ripple
      ripplesRef.current.push({
        position: new THREE.Vector2(x, y),
        time: 0,
        strength: 1.0
      });
    };

    // Animation
    const animate = (currentTime: number) => {
      requestAnimationFrame(animate);

      // Calculate delta time in seconds
      const deltaTime = (currentTime - lastTimeRef.current) / 1000;
      lastTimeRef.current = currentTime;

      // Update time uniform for subtle animation
      gradientMaterial.uniforms.time.value += deltaTime * 0.5;

      // Update ripples with delta time
      ripplesRef.current = ripplesRef.current.filter(ripple => {
        ripple.time += 0.005 * deltaTime * 60;
        ripple.strength *= 0.997;
        return ripple.strength > 0.01;
      });

      // Update grid based on mouse position and ripples
      lines.forEach((line) => {
        const positions = line.geometry.attributes.position;
        const count = positions.count;

        for (let i = 0; i < count; i++) {
          const x = positions.getX(i);
          const y = positions.getY(i);
          
          // Mouse hover effect - creates higher peaks
          const distX = mousePosition.current.x * 15 - x;
          const distY = mousePosition.current.y * 15 - y;
          const mouseDistance = Math.sqrt(distX * distX + distY * distY);
          const peakInfluence = Math.exp(-mouseDistance * 0.04) * 12; // Higher peaks, wider spread
          
          let targetZ = peakInfluence;

          // Add ripple effects
          ripplesRef.current.forEach(ripple => {
            const rippleX = ripple.position.x * 15;
            const rippleY = ripple.position.y * 15;
            const rippleDist = Math.sqrt(
              Math.pow(rippleX - x, 2) + 
              Math.pow(rippleY - y, 2)
            );
            
            // Slower, wider ripples
            const wave = Math.sin(rippleDist * 0.08 - ripple.time * 1.5) * 
                        ripple.strength * 
                        Math.exp(-rippleDist * 0.03);
            
            targetZ += wave * 12;
          });
          
          const currentZ = positions.getZ(i);
          positions.setZ(i, currentZ + (targetZ - currentZ) * 0.05);
        }
        
        positions.needsUpdate = true;
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