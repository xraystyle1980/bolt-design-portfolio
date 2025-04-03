import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { Group, MeshStandardMaterial, Object3D } from 'three'

interface TokenProps {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
}

// Load the model once outside the component
const MODEL_PATH = '/temp-ref/token-face-export-1.glb'
let cachedScene: Object3D | null = null

export function Token({ position, rotation, scale }: TokenProps) {
  const groupRef = useRef<Group>(null)
  
  // Load the model
  const { scene } = useGLTF(MODEL_PATH)
  
  // Use cached scene or create new one
  if (!cachedScene && scene) {
    cachedScene = scene.clone()
    // Set up materials once
    cachedScene.traverse((child: any) => {
      if (child.isMesh && child.material) {
        // Preserve original colors but enhance material properties
        child.material = new MeshStandardMaterial({
          map: child.material.map, // Keep original texture
          color: child.material.color, // Keep original color
          metalness: 0.1, // Low metalness to preserve colors
          roughness: 0.6, // Higher roughness for matte look
          envMapIntensity: 0.5, // Subtle environment reflections
          emissive: child.material.color, // Match emissive to original color
          emissiveIntensity: 0.1, // Subtle glow
          side: 2, // Enable double-sided rendering (THREE.DoubleSide)
        })
      }
    })
  }

  // If no scene available, show fallback
  if (!scene || !cachedScene) {
    return (
      <group ref={groupRef} position={position} rotation={rotation}>
        <mesh scale={scale}>
          <boxGeometry args={[1, 1, 0.2]} />
          <meshStandardMaterial 
            color="#FFD700" // Gold color for fallback
            metalness={0.1}
            roughness={0.6}
            emissive="#FFD700"
            emissiveIntensity={0.1}
            side={2} // Enable double-sided rendering (THREE.DoubleSide)
          />
        </mesh>
      </group>
    )
  }

  // Clone the cached scene for this instance
  const instanceScene = cachedScene.clone()

  return (
    <group ref={groupRef} position={position} rotation={rotation} scale={scale}>
      <primitive object={instanceScene} />
    </group>
  )
}

// Preload the model
useGLTF.preload(MODEL_PATH) 