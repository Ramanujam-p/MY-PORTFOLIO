import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBackground = () => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine);
    }).then(() => setReady(true));
  }, []);

  if (!ready) return null;

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0"
      options={{
        fullScreen: { enable: true, zIndex: 0 },
        fpsLimit: 60,
        interactivity: {
          events: {
            resize: { enable: true },
          },
        },
        particles: {
          color: { value: "#94a3b8" },
          links: { enable: false },
          move: {
            enable: true,
            speed: 0.1, // ultra slow
            random: true,
            outModes: { default: "out" },
          },
          number: { value: 18 },
          opacity: { value: 0.12 },
          size: { value: { min: 1, max: 2 } },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticlesBackground;
