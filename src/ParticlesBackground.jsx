// ParticlesBackground.jsx

import React from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';

const ParticlesBackground = () => {
  const particlesInit = async (main) => {
    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
    await loadFull(main);
  };

  const particlesLoaded = (container) => {
    // you can use the container to manage the particles instance (e.g. start/stop animation, etc.)
    console.log(container);
  };

  const ParticlesOptions = {
    fpsLimit: 60,
    interactivity: {
      events: {
        resize: true,
      },
      modes: {
        push: {
          quantity: 4,
        },
        repulse: {
          distance: 200,
          duration: 0.4,
        },
      },
    },
    detectRetina: true,
    particles: {
      color: {
        value: "#ffffff",
      },
      move: {
        direction: "none",
        enable: true,
        outModes: {
          default: "bounce",
        },
        random: false,
        speed: 0.6,
        straight: false,
      },
      number: {
        value: 25,
      },
      opacity: {
        animation: {
          enable: true,
          minimumValue: 0.2,
          speed: 1,
          sync: false,
        },
        random: true,
        value: 1,
      },
      rotate: {
        animation: {
          enable: true,
          speed: 5,
          sync: false,
        },
        direction: "random",
        random: true,
        value: 0,
      },
      size: {
        value: { min: 5, max: 16 },
      },
      shape: {
        type: ["image"],
        image: [
          { src: "./skills/firebase.png", height: 500, width: 500 },
          { src: "/bootstrap.png", height: 500, width: 500 },
          { src: "/css.png", height: 500, width: 500 },
          { src: "/react1.png", height: 500, width: 500 },
          { src: "/Redux.png", height: 500, width: 500 },
          { src: "/js.png", height: 500, width: 500 },
          { src: "/mui.png", height: 500, width: 500 },
          { src: "/.png", height: 500, width: 500 },
        ],
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={ParticlesOptions}
      style={{ position: "absolute", width: "100%", height: "100%" }}
    />
  );
};

export default ParticlesBackground;
