import React from 'react'

import Lobster from '.'

export default function Error() {
  const options404 = {
    size: 0.3,
    bevelEnabled: true,
    bevelSize: 0.02,
    curveSegments: 15,
    bevelThickness: 0.1,
    height: 0.01,
    position: [0.82, -0.5, 1.7],
    rotation: [0, 1, 0]
  }

  return (
    <Lobster anotherProps={options404}>Error :(</Lobster>
  )
}
