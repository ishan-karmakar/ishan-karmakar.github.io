import { loadBasic } from "@tsparticles/basic";
import { tsParticles } from "@tsparticles/engine";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect } from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function () {
    useEffect(() => {
        const { colorMode } = useColorMode();
        initParticlesEngine(async engine => {
            await loadBasic(engine)

            tsParticles.load({
                options: {
                    particles: {
                        number: {
                            value: 100,
                        },
                        color: {
                            value: colorMode === "dark" ? "#FFFFFF" : "#000000"
                        },
                        move: {
                            enable: true,
                            speed: 0.6,
                        },
                        opacity: {
                            value: 0.20
                        },
                    },
                    detectRetina: false,
                }
            })
        })
    }, []);

    return <Particles />
}