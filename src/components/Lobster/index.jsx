import React from 'react'
import { Text3D } from '@react-three/drei';
import { useLoader } from '@react-three/fiber';
import { TextureLoader } from 'three';

// eslint-disable-next-line react/prop-types
export default function Lobster({ children, anotherProps }) {
  const colorMap = useLoader(TextureLoader, '/textures/Material.001_baseColor.jpeg')

  return (
    <Text3D font={'/fonts/Lobster_Regular.json'} {...anotherProps}>
      {children}
      <meshLambertMaterial map={colorMap} color="white" />
      <pointLight color="red" position={[50, 0, 50]} intensity={0.3} />
      <pointLight color="white" position={[20, 0, 100]} intensity={0.25} />
      {/* FIXME: Fix this point in the future */}
    </Text3D>
  )
}
