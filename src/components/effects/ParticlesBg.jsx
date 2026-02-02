import { useEffect, useState } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";

const ParticlesBg = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadSlim(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);

    if (!init) return null; // Wait for engine to be ready

    return (
        <Particles
            id="tsparticles"
            className="absolute inset-0 -z-10"
            options={{
                background: { color: "transparent" },
                fpsLimit: 120,
                particles: {
                    color: { value: "#64748b" },
                    links: { enable: true, color: "#cbd5e1", opacity: 0.2 },
                    move: { enable: true, speed: 0.6 },
                    number: { value: 35 },
                    opacity: { value: 0.4 },
                    size: { value: 2 },
                },
            }}
        />
    );
};

export default ParticlesBg;