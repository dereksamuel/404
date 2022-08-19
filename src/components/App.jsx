import React, { useRef, useState } from 'react';
import {Cloud, SpotLight, Stars} from '@react-three/drei';
import {Canvas} from '@react-three/fiber';

import MoonUI from './Moon/MoonUI.jsx';
import './styles.css';

export default function App () {
  const [goAnimation, setGoAnimation] = useState(false)
  const [randomColorState, setRandomColorState] = useState('black')
  const [randomAngleBlue, setRandomAngleBlue] = useState(0.10)
  const [timer, setTimer] = useState(null)

  const $audio = useRef(null)

  const onToggleMoon = () => {
    setGoAnimation(!goAnimation)

    if (timer) {
      clearInterval(timer)
      setTimer(null)
    }

    randomColor()
  }

  function randomColor() {
    if (!timer) {
      setTimer(setInterval(() => {
        console.log(timer)
        const random = Math.random() * 3
        setRandomAngleBlue((Math.random() * 0.1) + 0.05)
        if (random >= 2) {
          setRandomColorState('orange')
          return
        }

        if (random >= 1) {
          setRandomColorState('crimson')
          return
        }

        if (random < 1) {
          setRandomColorState('yellow')
          return
        }
      }, 300))
    }
  }

  return (
    <div id="canvas-container">
      <audio loop ref={$audio} src="/electric-light-orchestra-last-train-to-london-official-video-ytmp4converter.com-en.m4a" className='audio'></audio>
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

      <footer className="footer">
        <figure>
          {goAnimation ? (
            <img onClick={onToggleMoon} src="/pause.png" alt="pause" />
          ) : (
            <img onClick={onToggleMoon} src="/play.png" alt="play" />
          )}
        </figure>
      </footer>
      <Canvas
        colorManagement
        shadows
      >
        <MoonUI $audio={$audio} goAnimation={goAnimation} />

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

      {goAnimation && (
        <>
          <SpotLight
            distance={6}
            angle={randomAngleBlue}
            attenuation={5}
            position={[-1, -0.5, 0]}
            color="red"
            anglePower={2} // Diffuse-cone anglePower (default: 5)
          />
          <SpotLight
            distance={5}
            angle={randomAngleBlue}
            attenuation={7}
            position={[0, -0.5, 0]}
            color="blue"
            anglePower={3} // Diffuse-cone anglePower (default: 5)
          />
          <SpotLight
            distance={5}
            angle={randomAngleBlue}
            attenuation={5}
            position={[1, -0.5, 0]}
            color="green"
            anglePower={2} // Diffuse-cone anglePower (default: 5)
          />
        </>
      )}

      <ambientLight
        color={goAnimation ? randomColorState : 'rgb(93, 63, 141)'}
        intensity={1}
      />
      </Canvas>
    </div>
  );
}
