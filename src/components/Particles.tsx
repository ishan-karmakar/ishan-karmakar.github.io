import { loadBasic } from "@tsparticles/basic";
import Particles, { ParticlesProvider } from "@tsparticles/react";
import { useMemo } from "react";
import { useColorMode } from "@docusaurus/theme-common";

export default function () {
    const particlesInit = async engine => await loadBasic(engine)
    const { colorMode } = useColorMode();

    const options = useMemo(() => ({
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
    }), [])

    return <ParticlesProvider init={particlesInit}>
        <Particles options={options} />
    </ParticlesProvider>
}