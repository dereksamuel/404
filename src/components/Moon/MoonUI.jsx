/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react';
import { useFrame } from '@react-three/fiber';

import Moon from './index.jsx';
import Astronaut from '../Astronaut/index.jsx';
import Error from '../Lobster/Error';
import Text404 from '../Lobster/Text404.jsx';

export default function MoonUI({ $audio, goAnimation }) {
  const [state, setState] = useState({
    counterRotation: 0.0
  })
  const $moon404 = useRef(null)

  useFrame(() => {
    if (goAnimation) {
      setState({
        ...state,
        counterRotation: state.counterRotation + 0.0180
      })

      $audio.current.play()

      $moon404.current.rotation.x = 0
      $moon404.current.rotation.z = 0
      $moon404.current.rotation.y = Math.sin(state.counterRotation)
    }

    if (!goAnimation) {
      $audio.current.pause()
    }
  })

  useEffect(() => {
    console.log('Change')
  }, [goAnimation])

  return (
    <group ref={$moon404}>
      <Astronaut />
      <Error />
      <Text404 />
      {/* <Play /> */}
      <Moon />
    </group>
  )
}
