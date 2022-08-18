import { Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Moon from "./Moon/index.jsx";
import Astronaut from "./Astronaut/index.jsx";

import "./styles.css";

export default function App() {
  return (
    <div id="canvas-container">
      <Canvas>
        <group>
          <Astronaut />
          <Moon />
        </group>
        <Stars radius={45} count={1000} depth={25} saturation={0.5} fade speed={0.5} />
        <pointLight color="rgb(208, 197, 228)" position={[400, 0, 500]} intensity={1} />
        <ambientLight color="rgb(93, 63, 141)" intensity={1} />
      </Canvas>
    </div>
  )
}
