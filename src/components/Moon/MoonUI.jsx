import { useRef } from 'react';
import { useFrame } from '@react-three/fiber';

import Moon from './index.jsx';
import Astronaut from '../Astronaut/index.jsx';
import React from 'react'
import Error from '../Lobster/Error';
import Text404 from '../Lobster/Text404.jsx';

export default function MoonUI() {
  const $moon404 = useRef(null)

  // $moon404.current.rotation.y = 5

  useFrame(({ clock }) => {
    $moon404.current.rotation.x = 0
    $moon404.current.rotation.z = 0
    $moon404.current.rotation.y = Math.sin(clock.getElapsedTime())
  })

  return (
    <group ref={$moon404}>
      <Astronaut />
      <Error />
      <Text404 />
      <Moon />
    </group>
  )
}
