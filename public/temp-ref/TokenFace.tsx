'use client'

import { useGLTF } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { Group } from 'three'
import gsap from 'gsap'
import { ThreeEvent } from '@react-three/fiber'


// Make all props optional with default values
interface TokenFaceProps {
  rotation?: [number, number, number]
  scale?: number | [number, number, number]
  onPointerOver?: () => void
  onPointerOut?: () => void
  isHovered?: boolean
  onClick?: (e: ThreeEvent<MouseEvent>) => void
}

export default function TokenFace({ 
  rotation = [0, 0, 0], 
  scale = 1, 
  onPointerOver = () => {}, 
  onPointerOut = () => {}, 
  isHovered = false,
  onClick = () => {}
}: TokenFaceProps) {
  const { scene } = useGLTF('/models/token-face-export-1.glb')
  const groupRef = useRef<Group>(null)
  const modelRef = useRef<Group>(null)
  const isAnimating = useRef(false)

  // Initial bounce animation
  useEffect(() => {
    if (modelRef.current) {
      const startY = modelRef.current.position.y;
      
      // Set initial position
      gsap.set(modelRef.current.position, {
        y: startY + 6  // Start above
      });

      // Simple bounce animation
      gsap.to(modelRef.current.position, {
        y: startY,
        duration: 1,
        ease: "bounce.out",
        delay: 0.2
      });
    }
  }, []);

  const handleClick = (e: ThreeEvent<MouseEvent>) => {
    e.stopPropagation()
    
    if (modelRef.current && !isAnimating.current) {
      isAnimating.current = true
      
      // Calculate bounce height based on scale
      const scaleValue = typeof scale === 'number' ? scale : scale[1]
      const bounceHeight = scaleValue * 0.5

      // Create a timeline for the animation sequence
      const tl = gsap.timeline({
        onComplete: () => {
          isAnimating.current = false
        }
      })

      const startY = modelRef.current.position.y

      // Add spin and bounce animations
      tl.to(modelRef.current.rotation, {
        y: modelRef.current.rotation.y + Math.PI * 2,
        duration: 0.6,
        ease: "power2.inOut"
      }, 0)
      .to(modelRef.current.position, {
        y: startY + bounceHeight,
        duration: 0.3,
        ease: "power2.out"
      }, 0)
      .to(modelRef.current.position, {
        y: startY,
        duration: 0.3,
        ease: "bounce.out"
      }, 0.3)
    }
    onClick(e)
  }

  // Clone the scene and modify its materials for hover effect
  const clonedScene = scene.clone()
  clonedScene.traverse((child: any) => {
    if (child.isMesh && child.material) {
      child.material = child.material.clone()
      if (isHovered) {
        child.material.metalness = 0.4
        child.material.roughness = 0.4
        child.material.envMapIntensity = 1.1
      } else {
        child.material.metalness = 0.2
        child.material.roughness = 0.6
        child.material.envMapIntensity = 1.0
      }
      child.material.needsUpdate = true
    }
  })

  // Calculate hit area size based on scale
  const hitAreaSize = typeof scale === 'number' ? scale : scale[1]

  return (
    <group ref={groupRef}>
      {/* Pink light for glow effect */}
      <pointLight
        position={[1, 1, 1]}
        intensity={20}
        color="#F39"
        distance={10}
        decay={1}
      />
      
      {/* Ambient pink glow */}
      <pointLight
        position={[-1, -1, -1]}
        intensity={10}
        color="#F39"
        distance={10}
        decay={1}
      />

      {/* Invisible hit area */}
      <mesh 
        visible={false}
        scale={[hitAreaSize * 1.2, hitAreaSize * 1.2, hitAreaSize * 1.2]}
        onClick={handleClick}
        onPointerOver={onPointerOver}
        onPointerOut={onPointerOut}
      >
        <sphereGeometry args={[1, 32, 32]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>
      
      {/* Actual token model */}
      <primitive 
        ref={modelRef}
        object={clonedScene}
        rotation={rotation}
        scale={scale}
        position={[0, -0.125, 0]}
        onClick={undefined}
        onPointerOver={undefined}
      />
    </group>
  )
}

useGLTF.preload('/models/token-face-export-1.glb')