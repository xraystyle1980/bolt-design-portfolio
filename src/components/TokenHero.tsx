import { Canvas, useFrame } from '@react-three/fiber'
import { Environment, OrbitControls } from '@react-three/drei'
import { useState, useRef, useMemo } from 'react'
import { Group, Vector3 } from 'three'
import { Token } from './Token'
import { EffectComposer, Vignette, HueSaturation, BrightnessContrast } from '@react-three/postprocessing'
import { BlendFunction } from 'postprocessing'

interface TokenInstance {
  position: [number, number, number]
  rotation: [number, number, number]
  scale: number
  velocity: Vector3
  rotationSpeed: [number, number, number]
  initialPosition: [number, number, number]
}

function TokenRain() {
  const [tokens, setTokens] = useState<TokenInstance[]>([])
  const [mousePosition, setMousePosition] = useState<[number, number]>([0, 0])
  const [isInteracting, setIsInteracting] = useState(false)
  const groupRef = useRef<Group>(null)

  // Physics constants
  const GROUND_Y = -2
  const GRAVITY = 0.01
  const DAMPING = 0.98
  const MOUSE_FORCE = 0.02
  const BOUNCE_FORCE = 0.3
  const MIN_DISTANCE = 4  // Increased minimum distance
  const MAX_DISTANCE = 10  // Increased maximum distance
  const TOKEN_ATTRACTION = 0.01  // Significantly reduced attraction force
  const CENTER_FORCE = 0
  const RETURN_FORCE = 0.001

  // Initialize tokens
  useMemo(() => {
    const newTokens: TokenInstance[] = []
    const numTokens = 10
    const baseRadius = 3  // Increased base radius for initial spread

    for (let i = 0; i < numTokens; i++) {
      const angle = (i / numTokens) * Math.PI * 2
      const radius = baseRadius + (Math.random() - 0.5) * 0.5  // Slight random variation
      const initialX = Math.cos(angle) * radius
      const initialZ = Math.sin(angle) * radius
      
      newTokens.push({
        position: [
          initialX,
          5 + Math.random() * 1,
          initialZ
        ] as [number, number, number],
        rotation: [
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2,
          Math.random() * Math.PI * 2
        ] as [number, number, number],
        scale: 1.6 + Math.random() * 0.3,
        velocity: new Vector3(
          (Math.random() - 0.5) * 0.01,  // Small initial random velocity
          (Math.random() - 0.5) * 0.01,
          (Math.random() - 0.5) * 0.01
        ),
        rotationSpeed: [
          (Math.random() - 0.5) * 0.001,
          (Math.random() - 0.5) * 0.001,
          (Math.random() - 0.5) * 0.001
        ] as [number, number, number],
        initialPosition: [initialX, 0, initialZ] as [number, number, number]
      })
    }
    setTokens(newTokens)
  }, [])

  // Handle pointer movement with raycasting
  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    if (!groupRef.current || !isInteracting) return
    
    // Convert pointer coordinates to scene coordinates
    const target = event.target as HTMLDivElement;
    const bounds = target.getBoundingClientRect();
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

        // Mouse interaction
        if (isInteracting) {
          const dx = mousePosition[0] - token.position[0]
          const dz = mousePosition[1] - token.position[2]
          const distance = Math.sqrt(dx * dx + dz * dz)
          
          if (distance < 8) {
            const force = (1 - distance / 8) * MOUSE_FORCE
            velocity.x -= dx * force
            velocity.z -= dz * force
          }
        } else {
          // Return to initial position when not interacting
          const dx = token.initialPosition[0] - token.position[0]
          const dz = token.initialPosition[2] - token.position[2]
          const distance = Math.sqrt(dx * dx + dz * dz)
          
          if (distance > 0.1) {  // Only apply return force if not close to initial position
            const force = RETURN_FORCE
            velocity.x += dx * force
            velocity.z += dz * force
          }
        }

        // Token-token interaction
        for (let j = i + 1; j < updatedTokens.length; j++) {
          const other = updatedTokens[j]
          const dx = other.position[0] - token.position[0]
          const dy = other.position[1] - token.position[1]
          const dz = other.position[2] - token.position[2]
          const distance = Math.sqrt(dx * dx + dy * dy + dz * dz)

          if (distance < MAX_DISTANCE && distance > MIN_DISTANCE) {
            // Inverse square law with smooth falloff
            const force = TOKEN_ATTRACTION * (1 / (distance * distance))
            const falloff = 1 - (distance - MIN_DISTANCE) / (MAX_DISTANCE - MIN_DISTANCE)
            
            velocity.x += (dx / distance) * force * falloff
            velocity.y += (dy / distance) * force * falloff
            velocity.z += (dz / distance) * force * falloff
          }
        }

        // Center force when not interacting
        if (!isInteracting) {
          velocity.x -= token.position[0] * CENTER_FORCE
          velocity.z -= token.position[2] * CENTER_FORCE
        }

        // Ground collision
        if (token.position[1] + velocity.y <= GROUND_Y) {
          velocity.y = Math.abs(velocity.y * BOUNCE_FORCE)
          velocity.multiplyScalar(0.95)  // Consistent damping
        }

        // Apply damping
        velocity.multiplyScalar(DAMPING)

        // Update position
        const newPosition: [number, number, number] = [
          token.position[0] + velocity.x,
          Math.max(token.position[1] + velocity.y, GROUND_Y),
          token.position[2] + velocity.z
        ]

        // Simple rotation
        const newRotation: [number, number, number] = [
          token.rotation[0] + token.rotationSpeed[0],
          token.rotation[1] + token.rotationSpeed[1],
          token.rotation[2] + token.rotationSpeed[2]
        ]

        // Update token
        updatedTokens[i] = {
          ...token,
          position: newPosition,
          rotation: newRotation,
          velocity: velocity
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
        />
      ))}
    </group>
  )
}

export function TokenHero() {
  return (
    <div className="relative w-full h-full">
      {/* Radial Gradient Background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <div className="absolute inset-0 w-full h-full" style={{
          background: 'radial-gradient(62.37% 58.17% at 48.63% 30.27%, #D2D4E0 0%, #A6B1BC 100%)'
        }} />
      </div>

      <Canvas 
        camera={{ position: [0, 4, 8], fov: 32 }}
        style={{ width: '100%', height: '100%', zIndex: 10 }}
        gl={{ alpha: true }}  // Enable alpha channel
      >
        {/* Remove background color entirely since we have alpha: true */}
        
        {/* Token Rain and Interaction */}
        <TokenRain />
        
        {/* Environment for reflections */}
        <Environment preset="sunset" background={false} />

        {/* Camera Controls */}
        <OrbitControls
          enableZoom={false}
          enablePan={false}
          minPolarAngle={Math.PI / 4} // Limit vertical rotation
          maxPolarAngle={Math.PI / 2}
          autoRotate
          autoRotateSpeed={0.5}
          dampingFactor={0.1}
        />

        {/* Post-processing effects */}
        <EffectComposer>
          <BrightnessContrast 
            brightness={0.0}
            contrast={0.4}
            blendFunction={BlendFunction.NORMAL}
          />
          <Vignette
            opacity={0.3}
            darkness={0.7}
            blendFunction={BlendFunction.NORMAL}
          />
          <HueSaturation 
            hue={0.0} 
            saturation={0.2}
          />
        </EffectComposer>
      </Canvas>
    </div>
  )
}