import { useFrame } from "@react-three/fiber"
import { useState } from "react"

import Lobster from "."

export default function Error404() {
  const [state, setState] = useState({
    options404: {
      size: 0.32,
      bevelEnabled: true,
      bevelSize: 0.001,
      curveSegments: 15,
      bevelThickness: 0.1,
      height: 0.45,
      position: [-0.82, -0.5, 1.8],
    }
  })

  return (
    <Lobster anotherProps={state.options404}>404 Error</Lobster>
  )
}
