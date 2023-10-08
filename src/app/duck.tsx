import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Duck(props: any) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('/models/Duck.gltf')
  return (
    <group ref={groupRef} {...props} dispose={null}>
      <mesh 
        castShadow 
        receiveShadow 
        geometry={nodes.LOD3spShape.geometry} 
        material={materials['blinn3-fx']}
        position={[0, -100, -200]}
      />
    </group>
  )
}

useGLTF.preload('/models/Duck.gltf')
