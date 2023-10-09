'use client'

import * as THREE from 'three'
import React, { useRef, useState, Suspense } from 'react'
import { Canvas, useFrame, ThreeElements, useLoader } from '@react-three/fiber'
import Pokedex from './pokedex'


function Box(props: ThreeElements['mesh']) {
  const meshRef = useRef<THREE.Mesh>(null!)
  const [hovered, setHover] = useState(false)
  const [active, setActive] = useState(false)
  useFrame((state, delta) => (meshRef.current.rotation.x += delta))
  return (
    <mesh
      {...props}
      ref={meshRef}
      scale={active ? 1.5 : 1}
      onClick={(event) => setActive(!active)}
      onPointerOver={(event) => setHover(true)}
      onPointerOut={(event) => setHover(false)}>
      <boxGeometry args={[1, 1, 1]} />
      <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
    </mesh>
  )
}

export default function Home() {
  return (
    <div className='min-h-full h-screen'>
      <Canvas className='min-h-full h-screen'>
        <Suspense fallback={null}>
          <Pokedex />
          <ambientLight />
          <pointLight position={[10, 10, 10]} />
        </Suspense>
      </Canvas>
    </div>
  )
}
