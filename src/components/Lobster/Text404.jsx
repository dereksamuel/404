import React from 'react'

import Lobster from '.'

export default function Text404(props) {
  const options404 = {
    size: 0.5,
    bevelEnabled: true,
    bevelSize: 0.02,
    curveSegments: 15,
    bevelThickness: 0.05,
    height: 0.01,
    position: [-1.5, -0.5, 1],
    rotation: [-0.1, -0.8, -0.1],
  }

  return (
    <Lobster anotherProps={options404} {...props}>404</Lobster>
  )
}
