import React from 'react';
import {Cloud, Stars} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';

import MoonUI from './Moon/MoonUI.jsx';
import './styles.css';

export default function App () {
  return (
    <div id="canvas-container">
      <header className="header">
        <img
          alt="logo"
          className="logo"
          src="https://dt2sdf0db8zob.cloudfront.net/wp-content/uploads/2019/08/dc-logo.png"
        />

        <h3>
          Inicio
        </h3>
      </header>

    {/* <footer className="footer">
      <h3>Page not found</h3>
    </footer> */}
      <Canvas
        colorManagement
        shadows
      >
        <MoonUI />

        <Stars
          count={3000}
          depth={25}
          fade
          radius={45}
          saturation={0.5}
          speed={0.5}
        />

        <Cloud
          depth={0}
          opacity={0.15} // Rotation speed
          segments={15} // Width of the full cloud
          speed={2.5} // Z-dir depth
          width={0.1}
        />

        <pointLight
          color="rgb(208, 197, 228)"
          intensity={1}
          position={[
              400,
              0,
              500
          ]}
        />

        <ambientLight
          color="rgb(93, 63, 141)"
          intensity={1}
        />
      </Canvas>
    </div>
  );
}
