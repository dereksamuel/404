import { Cloud, Stars } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";

import Moon from "./Moon/index.jsx";
import Astronaut from "./Astronaut/index.jsx";
import Error404 from "./Lobster/Error404.jsx";

import "./styles.css";

export default function App() {
  return (
    <div id="canvas-container">
      <Canvas shadows colorManagement>
        <group>
          <Error404 />
          <Astronaut />
          <Moon />
        </group>
        <Stars radius={45} count={3000} depth={25} saturation={0.5} fade speed={0.5} />
        <Cloud
          opacity={0.20}
          speed={2.5} // Rotation speed
          width={0.1} // Width of the full cloud
          depth={0} // Z-dir depth
          segments={15} // Number of particles
        />
        <pointLight color="rgb(208, 197, 228)" position={[400, 0, 500]} intensity={1} />
        <ambientLight color="rgb(93, 63, 141)" intensity={1} />
      </Canvas>
    </div>
  )
}
