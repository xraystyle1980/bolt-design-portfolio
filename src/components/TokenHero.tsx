import { Canvas, useFrame } from '@react-three/fiber'
import { Environment } from '@react-three/drei'
import { useState, useRef, useMemo } from 'react'
import { Group, Vector3 } from 'three'
import { Token } from './Token'
import { EffectComposer, Bloom, Vignette, HueSaturation } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

interface TokenInstance {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  velocity: Vector3
  rotationSpeed: [number, number, number]
}

function TokenRain() {
  const [tokens, setTokens] = useState<TokenInstance[]>([])
  const [mousePosition, setMousePosition] = useState<[number, number]>([0, 0])
  const [isInteracting, setIsInteracting] = useState(false)
  const groupRef = useRef<Group>(null)

  // Physics constants
  const GROUND_Y = -2
  const GRAVITY = 0.015
  const DAMPING = 0.98
  const MOUSE_FORCE = 0.15  // Increased for more responsive interaction
  const BOUNCE_FORCE = 0.3
  const ATTRACTION_RADIUS = 8  // Increased range
  const TOKEN_SPACING = 2.5  // Slightly increased spacing

  // Initialize tokens
  useMemo(() => {
    const newTokens: TokenInstance[] = []
    const numTokens = 12  // Reduced for better performance

    for (let i = 0; i < numTokens; i++) {
      const angle = (i / numTokens) * Math.PI * 2
      const radius = 4 + Math.random() * 2
      
      newTokens.push({
        position: [
          Math.cos(angle) * radius,
          8 + Math.random() * 3,  // Lower initial height
          Math.sin(angle) * radius
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2
        ] as [number, number, number],
        scale: 0.8 + Math.random() * 0.4,
        velocity: new Vector3(
          (Math.random() - 0.5) * 0.01,  // Reduced initial velocity
          0,
          (Math.random() - 0.5) * 0.01
        ),
        rotationSpeed: [
          (Math.random() - 0.5) * 0.01,  // Slower rotation
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        ] as [number, number, number]
      })
    }
    setTokens(newTokens)
  }, [])

  // Handle pointer movement with raycasting
  const handlePointerMove = (event: any) => {
    if (!groupRef.current || !isInteracting) return
    
    // Convert pointer coordinates to scene coordinates
    const bounds = event.target.getBoundingClientRect()
    const x = ((event.clientX - bounds.left) / bounds.width) * 2 - 1
    const z = -((event.clientY - bounds.top) / bounds.height) * 2 + 1
    
    // Project mouse position onto a plane at y=0
    const distance = Math.abs(GROUND_Y)
    const mouseX = x * distance * 0.8  // Scale factor for better mapping
    const mouseZ = z * distance * 0.8
    
    setMousePosition([mouseX, mouseZ])
  }

  // Physics update
  useFrame(() => {
    setTokens(prevTokens => {
      const updatedTokens = [...prevTokens]

      // Update each token
      for (let i = 0; i < updatedTokens.length; i++) {
        const token = updatedTokens[i]
        const velocity = token.velocity.clone()

        // Apply gravity
        velocity.y -= GRAVITY

        // Mouse interaction with smoother force application
        if (isInteracting) {
          const dx = mousePosition[0] - token.position[0]
          const dz = mousePosition[1] - token.position[2]
          const distance = Math.sqrt(dx * dx + dz * dz)
          
          if (distance < ATTRACTION_RADIUS) {
            const force = Math.pow(1 - distance / ATTRACTION_RADIUS, 2) * MOUSE_FORCE  // Quadratic falloff
            velocity.x += dx * force
            velocity.z += dz * force
            velocity.y += 0.2 * force  // Increased lift
          }
        }

        // Token-token interaction with smoother repulsion
        for (let j = i + 1; j < updatedTokens.length; j++) {
          const other = updatedTokens[j]
          const dx = other.position[0] - token.position[0]
          const dy = other.position[1] - token.position[1]
          const dz = other.position[2] - token.position[2]
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < TOKEN_SPACING) {
            const force = Math.pow(1 - distance / TOKEN_SPACING, 2) * 0.08  // Increased and smoothed
            velocity.x -= dx * force
            velocity.y -= dy * force
            velocity.z -= dz * force
          }
        }

        // Ground collision with better bounce
        if (token.position[1] + velocity.y <= GROUND_Y) {
          velocity.y = Math.abs(velocity.y * BOUNCE_FORCE)
          const horizontalSpeed = Math.sqrt(velocity.x * velocity.x + velocity.z * velocity.z)
          if (horizontalSpeed > 0.01) {
            velocity.multiplyScalar(0.85) // More damping for moving tokens
          } else {
            velocity.multiplyScalar(0.95) // Less damping for settling tokens
          }
        }

        // Apply damping with velocity-based adjustment
        const speed = velocity.length()
        const dampingFactor = speed > 0.1 ? DAMPING : 0.995  // Less damping at low speeds
        velocity.multiplyScalar(dampingFactor)

        // Update position
        const newPosition: [number, number, number] = [
          token.position[0] + velocity.x,
          Math.max(token.position[1] + velocity.y, GROUND_Y),
          token.position[2] + velocity.z
        ]

        // Update rotation based on movement
        const rotationDamping = 0.985
        const newRotationSpeed = token.rotationSpeed.map(r => r * rotationDamping) as [number, number, number]
        
        // Add movement-based rotation
        if (speed > 0.01) {
          newRotationSpeed[0] += velocity.z * 0.1
          newRotationSpeed[1] += velocity.x * 0.1
        }

        const newRotation: [number, number, number] = [
          token.rotation[0] + newRotationSpeed[0],
          token.rotation[1] + newRotationSpeed[1],
          token.rotation[2] + newRotationSpeed[2]
        ]

        // Update token
        updatedTokens[i] = {
          ...token,
          position: newPosition,
          rotation: newRotation,
          velocity: velocity,
          rotationSpeed: newRotationSpeed
        }
      }

      return updatedTokens
    })
  })

  return (
    <group
      ref={groupRef}
      onPointerDown={() => setIsInteracting(true)}
      onPointerUp={() => setIsInteracting(false)}
      onPointerLeave={() => setIsInteracting(false)}
      onPointerMove={handlePointerMove}
    >
      {/* Enhanced Lighting */}
      <ambientLight intensity={0.7} color="#ffd1a4" />
      <directionalLight position={[5, 10, 7.5]} intensity={1} color="#ffffff" />
      <directionalLight position={[-5, 10, -7.5]} intensity={0.5} color="#ffffff" />
      <pointLight position={[0, 5, 0]} intensity={0.3} color="#ffffff" />

      {/* Invisible Ground for collision */}
      <mesh position={[0, GROUND_Y, 0]} rotation={[-Math.PI / 2, 0, 0]} visible={false}>
        <planeGeometry args={[30, 30]} />
        <meshBasicMaterial transparent opacity={0} />
      </mesh>

      {/* Render Tokens */}
      {tokens.map((token, index) => (
        <Token
          key={index}
          position={token.position}
          rotation={token.rotation}
          scale={token.scale}
          isHovered={isInteracting}
        />
      ))}
    </group>
  )
}

export function TokenHero() {
  return (
    <Canvas 
      camera={{ position: [0, 6, 12], fov: 40 }}
      style={{ width: '100%', height: '100%' }}
    >
      {/* Background Color */}
      <color attach="background" args={['#f0f0f0']} />
      
      {/* Token Rain and Interaction */}
      <TokenRain />
      
      {/* Environment for reflections */}
      <Environment preset="sunset" background={false} />

       {/* Post-processing: adjust hue & saturation */}
      <EffectComposer>
        <HueSaturation hue={0.05} saturation={0.7} />
      </EffectComposer>
    </Canvas>
  )
}