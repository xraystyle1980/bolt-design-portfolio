import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { GLTF, GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

export function GltfLogo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    scene.background = null; // Remove background for transparency

    // Camera setup
    const camera = new THREE.PerspectiveCamera(
      60,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 1); // Move camera back for smaller model

    // Renderer setup
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true,
      alpha: true, // Enable transparency
      premultipliedAlpha: false, // Better transparency handling
      preserveDrawingBuffer: true,
    });
    renderer.setClearColor(0xffffff, 0);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping; // Improved tone mapping
    renderer.toneMappingExposure = 1.0;
    containerRef.current.appendChild(renderer.domElement);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.5);
    scene.add(ambientLight);
    
    const directionalLight = new THREE.DirectionalLight(0xffffff, 1.2);
    directionalLight.position.set(0, 1, 0);
    scene.add(directionalLight);

    // Add a second directional light from the front
    const frontLight = new THREE.DirectionalLight(0xffffff, 1.0);
    frontLight.position.set(0, 0, 1);
    scene.add(frontLight);

    // Add a back light for rim lighting
    const backLight = new THREE.DirectionalLight(0xffffff, 0.8);
    backLight.position.set(0, 0, -1);
    scene.add(backLight);

    // Add fill light from the side
    const sideLight = new THREE.DirectionalLight(0xffffff, 0.6);
    sideLight.position.set(1, 0, 0);
    scene.add(sideLight);

    // Mouse tracking variables
    let mouseX = 0;
    let mouseY = 0;
    let targetRotationX = 0;
    let targetRotationY = 0;
    const baseRotationY = -Math.PI / 2; // 90 degrees base rotation
    const maxRotationOffset = Math.PI / 3; // 60 degrees max offset
    const maxVerticalRotation = Math.PI / 12; // Reduced to ±15 degrees
    const rotationSpeed = 0.35; // Much faster response

    // Helper function to clamp value between 0 and 1
    const clamp = (value: number, min: number, max: number) => Math.min(Math.max(value, min), max);

    // GLTF Loader
    const loader = new GLTFLoader();
    let mixer: THREE.AnimationMixer | null = null;
    let model: THREE.Object3D | null = null;

    loader.load(
      '/models/just-face.glb',
      (gltf: GLTF) => {
        model = gltf.scene;
        if (model) {
          scene.add(model);

          // Center the model
          const box = new THREE.Box3().setFromObject(model);
          const center = box.getCenter(new THREE.Vector3());
          model.position.sub(center);

          // Apply better material settings if the model has materials
          model.traverse((child) => {
            if ((child as THREE.Mesh).isMesh) {
              const mesh = child as THREE.Mesh;
              if (mesh.material) {
                const material = mesh.material as THREE.MeshStandardMaterial;
                material.needsUpdate = true;
                if (material.map) {
                  material.map.anisotropy = renderer.capabilities.getMaxAnisotropy();
                  material.map.minFilter = THREE.LinearFilter;
                  material.map.magFilter = THREE.LinearFilter;
                }
              }
            }
          });

          // Initial rotation
          model.rotation.x = 0;
          model.rotation.y = baseRotationY;

          // Setup animation if available
          if (gltf.animations && gltf.animations.length > 0) {
            mixer = new THREE.AnimationMixer(model);
            const action = mixer.clipAction(gltf.animations[0]);
            action.play();
          }
        }
      },
      (progress) => {
        console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
      },
      (error: unknown) => {
        console.error('Error loading GLTF model:', error);
      }
    );

    // Mouse move handler
    function onMouseMove(event: MouseEvent) {
      // Calculate mouse position relative to the window center
      mouseX = (event.clientX - window.innerWidth / 2) / window.innerWidth;
      mouseY = (event.clientY - window.innerHeight / 2) / window.innerHeight;
    }

    window.addEventListener('mousemove', onMouseMove);

    // Animation loop
    const clock = new THREE.Clock();
    
    function animate() {
      requestAnimationFrame(animate);
      
      if (mixer) {
        mixer.update(clock.getDelta());
      }
      
      if (model) {
        // Calculate rotation within constraints
        const rotationOffset = mouseX * maxRotationOffset;
        targetRotationY = baseRotationY + rotationOffset;

        // Limit vertical rotation with tighter constraints
        const normalizedMouseY = clamp(mouseY, -0.3, 0.3); // Reduced vertical range
        targetRotationX = normalizedMouseY * maxVerticalRotation;

        // Much faster rotation updates
        model.rotation.y += (targetRotationY - model.rotation.y) * rotationSpeed;
        model.rotation.x += (targetRotationX - model.rotation.x) * rotationSpeed;
      }
      
      renderer.render(scene, camera);
    }
    
    animate();

    // Handle resize
    function handleResize() {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(containerRef.current.clientWidth, containerRef.current.clientHeight);
    }

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', onMouseMove);
      if (containerRef.current) {
        containerRef.current.removeChild(renderer.domElement);
      }
      renderer.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="w-full h-full min-h-[60px]" // Reduced container height
      style={{
        aspectRatio: '1/1', // Maintain square aspect ratio for consistent model display
        maxWidth: '60px' // Match the height for square container
      }}
    />
  );
} 