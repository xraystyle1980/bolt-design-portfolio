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
  const gridGroupRef = useRef<THREE.Group | null>(null);
  const linesRef = useRef<THREE.Line[]>([]);
  const lastTimeRef = useRef<number>(0);
  const gradientMaterialRef = useRef<THREE.ShaderMaterial | null>(null);

  const LIGHT_COLOR = 0xE5ECE9; // light theme color
  const DARK_COLOR = 0x8E8E8E;  // dark theme color (example)

  useEffect(() => {
    if (!containerRef.current) return;

    const isDark = document.documentElement.classList.contains('dark');
    const gridColor = isDark ? DARK_COLOR : LIGHT_COLOR;

    const scene = new THREE.Scene();
    scene.background = null;
    sceneRef.current = scene;
    
    const camera = new THREE.PerspectiveCamera(3, window.innerWidth / window.innerHeight, 0.1, 2000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true,
      powerPreference: 'high-performance',
      precision: 'mediump'
    });
    
    cameraRef.current = camera;
    rendererRef.current = renderer;
    
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setSize(window.innerWidth, window.innerHeight);
    containerRef.current.appendChild(renderer.domElement);

    const gridSize = 80;
    const spacing = 2.0;
    const gridGroup = new THREE.Group();
    gridGroupRef.current = gridGroup;
    scene.add(gridGroup);

    const gradientMaterial = new THREE.ShaderMaterial({
      uniforms: {
        color: { value: new THREE.Color(gridColor) },
        mousePos: { value: new THREE.Vector2(0, 0) }
      },
      vertexShader: `
        varying vec3 vPosition;
        
        void main() {
          vPosition = position;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        varying vec3 vPosition;
        uniform vec2 mousePos;
        uniform vec3 color;

        void main() {
          float centerDist = length(vPosition.xy);
          float mouseDist = length(vPosition.xy - mousePos * 25.0);
          float fadeStart = 35.0;
          float fadeEnd = 45.0;
          float radialFade = smoothstep(fadeEnd, fadeStart, centerDist);
          float glow = smoothstep(25.0, 2.0, mouseDist);
          float opacity = mix(0.35, 1.00, glow) * radialFade;
          
          gl_FragColor = vec4(color, opacity);
        }
      `,
      transparent: true,
      side: THREE.DoubleSide,
    });
    gradientMaterialRef.current = gradientMaterial;

    const pointPool: THREE.Vector3[] = Array(gridSize).fill(0).map(() => new THREE.Vector3());
    
    const createLines = (isHorizontal: boolean) => {
      for (let j = 0; j < gridSize; j++) {
        for (let i = 0; i < gridSize; i++) {
          const point = pointPool[i];
          point.set(
            isHorizontal ? (i - gridSize / 2) * spacing : (j - gridSize / 2) * spacing,
            isHorizontal ? (j - gridSize / 2) * spacing : (i - gridSize / 2) * spacing,
            0
          );
        }
        const curve = new THREE.CatmullRomCurve3(pointPool, false, 'catmullrom', 0.5);
        const geometry = new THREE.BufferGeometry().setFromPoints(curve.getPoints(gridSize * 2));
        const line = new THREE.Line(geometry, gradientMaterial);
        gridGroup.add(line);
        linesRef.current.push(line);
      }
    };

    createLines(true);  // Horizontal lines
    createLines(false); // Vertical lines

    camera.position.set(0, 0, 150);
    camera.lookAt(0, 0, 0);

    const handleResize = () => {
      if (!camera || !renderer || !gridGroup) return;
      
      const width = window.innerWidth;
      const height = window.innerHeight;
      
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      
      const fov = camera.fov * (Math.PI / 180);
      const viewportHeight = 2 * Math.tan(fov / 2) * Math.abs(camera.position.z);
      const viewportWidth = viewportHeight * camera.aspect;
      
      const gridWorldSize = gridSize * spacing;
      const scaleX = (viewportWidth / gridWorldSize) * 1.85;
      const scaleY = (viewportHeight / gridWorldSize) * 1.85;
      const scale = Math.max(scaleX, scaleY);
      
      gridGroup.scale.set(scale, scale, 1);
    };

    const handleMouseMove = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      mousePosition.current = { x, y };
      gradientMaterial.uniforms.mousePos.value.set(x, y);
    };

    const handleClick = (event: MouseEvent) => {
      const x = (event.clientX / window.innerWidth) * 2 - 1;
      const y = -(event.clientY / window.innerHeight) * 2 + 1;
      
      ripplesRef.current.push({
        position: new THREE.Vector2(x, y),
        time: 0,
        strength: 1.2,
        velocity: 12,
        frequency: 1.2,
        wavelength: 18,
        damping: 0.035
      });
    };

    const animate = (currentTime: number) => {
      requestAnimationFrame(animate);

      const deltaTime = Math.min((currentTime - lastTimeRef.current) / 1000, 0.1);
      lastTimeRef.current = currentTime;

      const rect = containerRef.current?.getBoundingClientRect();
      if (rect && rect.bottom >= 0 && rect.top <= window.innerHeight) {
      ripplesRef.current = ripplesRef.current.filter(ripple => {
        ripple.time += deltaTime * 0.24;
        ripple.strength *= Math.exp(-ripple.damping * ripple.time);
        return ripple.strength > 0.001;
      });

      const mouseX = mousePosition.current.x * 25;
      const mouseY = mousePosition.current.y * 25;

      linesRef.current.forEach((line) => {
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
          const peakInfluence = 25 * Math.exp(-Math.pow(mouseDistance * 0.15, 2));
          
          let targetZ = peakInfluence;

          for (const ripple of ripplesRef.current) {
            const rippleX = ripple.position.x * 25;
            const rippleY = ripple.position.y * 25;
            const distance = Math.hypot(rippleX - x, rippleY - y);
            
            const phase = (distance / ripple.wavelength) - (ripple.time * ripple.velocity);
            const amplitude = ripple.strength * Math.exp(-distance * 0.002);
            
            const waveform = (
              Math.sin(phase * ripple.frequency * Math.PI) +
              Math.sin(phase * ripple.frequency * 0.3 * Math.PI) * 0.7 +
              Math.sin(phase * ripple.frequency * 0.15 * Math.PI) * 0.4
            );

            const focusFactor = Math.exp(-Math.pow(distance - ripple.velocity * ripple.time, 2) * 0.0002);
            targetZ += waveform * amplitude * focusFactor * 35;
          }
          
          const currentZ = array[idx + 2];
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
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);
    window.addEventListener('click', handleClick);

    handleResize();
    lastTimeRef.current = performance.now();
    animate(lastTimeRef.current);

    const updateTheme = () => {
      const isDark = document.documentElement.classList.contains('dark');
      const gridColor = isDark ? DARK_COLOR : LIGHT_COLOR;
      if (gradientMaterialRef.current) {
        gradientMaterialRef.current.uniforms.color.value.set(gridColor);
      }
    };
    const observer = new MutationObserver(updateTheme);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ['class'] });
    updateTheme();

    return () => {
      const container = containerRef.current;
      const lines = linesRef.current;
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('click', handleClick);
      if (container) {
        container.removeChild(renderer.domElement);
      }
      lines.forEach(line => line.geometry.dispose());
      gradientMaterial.dispose();
      scene.clear();
      renderer.dispose();
      observer.disconnect();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="absolute top-0 left-0 w-full h-screen -z-10 pointer-events-none border-b border-1"
    />
  );
}