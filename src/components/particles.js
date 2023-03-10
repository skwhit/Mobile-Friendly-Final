import React, { useCallback } from "react";
import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim"; // loads tsparticles-slim

export default function ParticlesComponent() {
  const particlesInit = useCallback(async (engine) => {
    // console.log(engine);
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async (container) => {
    // await console.log(container);
  }, []);
  return (
    <>
      {" "}
      <Particles
        id="tsparticles"
        init={particlesInit}
        loaded={particlesLoaded}
        options={{
          background: {
            color: {
            //   value: "#ffffff",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "repulse",
              },
              onHover: {
                enable: true,
                mode: "none",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 1000,
              },
              attract: {
                distance: 400,
                duration: 1,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
              bubble: {
                distance: 83.91608391608392,
                // size: 20,
                duration: 3,
                color: "#ffffff",
                speed: 3,
              },
            },
          },
          particles: {
            color: {
              value: "#707070",
            },
            links: {
              color: "#000000",
              distance: 50,
              enable: false,
              opacity: 0.2,
              width: 1,
            },
            collisions: {
              enable: false,
            },
            move: {
              direction: "right",
              enable: true,
              outModes: {
              // default: "bounce",
              },
              random: true,
              speed: 1,
              straight: false,
              rotateX: 600,
              rotateY: 1200,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 300,
            },
            opacity: {
              value: 1,
            },
            shape: {
              type: "triangle",
            },
            size: {
              value: { min: 1, max: 5 },
            },
          },
          detectRetina: true,
        }}
      />
    </>
  );
}
