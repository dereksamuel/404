import React from 'react'
import { useGLTF } from '@react-three/drei'

export default function Model(props) {
  const { nodes, materials } = useGLTF('/scene.gltf')
  return (
    <group {...props} dispose={null}>
      <group rotation={[5, 0, 0]} position={[0, -2.3, 0]} scale={1.4}>
        <mesh geometry={nodes.Object_2.geometry} material={materials['Material.001']} />
      </group>
    </group>
  )
}

useGLTF.preload('/scene.gltf')
