import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";

const ParticlesBg = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      init={particlesInit}
      options={{
        fullScreen: { enable: false },
        background: { color: "transparent" },
        particles: {
          number: { value: 60 },
          color: { value: "#94a3b8" },
          links: {
            enable: true,
            color: "#cbd5f5",
            opacity: 0.3,
          },
          move: {
            enable: true,
            speed: 1,
          },
          opacity: { value: 0.5 },
          size: { value: 2 },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  );
};

export default ParticlesBg;
