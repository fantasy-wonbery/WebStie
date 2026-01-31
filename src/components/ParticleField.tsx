import { useRef, useMemo } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three'

interface ParticlesProps {
  count?: number
  color?: string
}

function Particles({ count = 500, color = '#ffffff' }: ParticlesProps) {
  const mesh = useRef<THREE.Points>(null)

  const particles = useMemo(() => {
    const positions = new Float32Array(count * 3)
    const scales = new Float32Array(count)

    for (let i = 0; i < count; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 50
      positions[i * 3 + 1] = (Math.random() - 0.5) * 50
      positions[i * 3 + 2] = (Math.random() - 0.5) * 50
      scales[i] = Math.random()
    }

    return { positions, scales }
  }, [count])

  useFrame((state) => {
    if (mesh.current) {
      mesh.current.rotation.x = state.clock.getElapsedTime() * 0.02
      mesh.current.rotation.y = state.clock.getElapsedTime() * 0.03
    }
  })

  return (
    <points ref={mesh}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={particles.positions.length / 3}
          array={particles.positions}
          itemSize={3}
        />
        <bufferAttribute
          attach="attributes-scale"
          count={particles.scales.length}
          array={particles.scales}
          itemSize={1}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.1}
        color={color}
        transparent
        opacity={0.6}
        sizeAttenuation
      />
    </points>
  )
}

interface ParticleFieldProps {
  color?: string
  count?: number
  className?: string
}

export default function ParticleField({
  color = '#ffffff',
  count = 500,
  className = '',
}: ParticleFieldProps) {
  return (
    <div className={`fixed inset-0 -z-10 ${className}`}>
      <Canvas camera={{ position: [0, 0, 15], fov: 60 }}>
        <Particles count={count} color={color} />
      </Canvas>
    </div>
  )
}
