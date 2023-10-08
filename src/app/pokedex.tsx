import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export default function Pokedex(props: any) {
  const groupRef = useRef()
  const { nodes, materials } = useGLTF('/models/pokedex_3d_model.glb')
  return (
    <group {...props} dispose={null}>
    <group rotation={[-0.381, 0, 0]}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube001_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder001_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder003_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder005_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube003_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere001_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere002_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere003_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube007_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane002_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube010_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube012_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder010_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube014_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube015_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube017_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube018_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube019_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube020_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube021_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube022_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube023_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube024_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube025_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube026_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube027_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube029_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube032_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube033_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube036_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube037_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube040_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube041_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder013_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere004_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere005_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere006_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Sphere007_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder027_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder028_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder029_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cylinder030_pokedex_0.geometry}
          material={materials.pokedex}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane004_pokedex_0.geometry}
          material={materials.pokedex}
        />
      </group>
    </group>
  </group>
  )
}

useGLTF.preload('/models/pokedex_3d_model.glb')