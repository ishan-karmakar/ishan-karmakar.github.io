import { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";
import { ISourceOptions } from "@tsparticles/engine";
import { Card, CardHeader, CardBody, CardFooter } from "../components/Card";

function particleColor(): string {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "#FFFFFF" : "#000000";
}

export default function Home() {
    const [particleOptions, setParticleOptions] = useState<ISourceOptions>({});
    useEffect(() => {
        initParticlesEngine(async engine => await loadBasic(engine))
        setParticleOptions({
            particles: {
                number: {
                    value: 100,
                },
                color: {
                    value: particleColor()
                },
                move: {
                    enable: true,
                    speed: 0.6,
                },
                opacity: {
                    value: 0.40
                },
            },
            detectRetina: false,
        });
        const observer = new MutationObserver(() => setParticleOptions(prev => ({
            ...prev,
            particles: {
                ...prev.particles,
                color: { value: particleColor() }
            }
        })))
        observer.observe(document.documentElement, {
            attributes: true,
            attributeFilter: ['data-theme']
        })
        return () => observer.disconnect()
    }, []);
    return (
        <div className="home">
            <Layout
                title="Ishan Karmakar"
                description="Systems Programmer • OS Developer • Rust & C++"
                noFooter
            >
                <Particles options={particleOptions} style={{ zIndex: 0 }} />
                <div style={{
                    position: "relative",
                    zIndex: 1,
                    minHeight: "100vh",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                }}>
                    <div style={{ textAlign: "center" }}>
                        <h1 style={{ fontSize: "4rem", fontWeight: 800, marginBottom: "0.5rem" }}>Ishan Karmakar</h1>
                        <p style={{ fontSize: "1.25rem", opacity: "0.8" }}>
                            Systems Programmer • OS Developer • Rust & C++ Enthusiast
                        </p>
                    </div>

                    <div className={styles.cardGrid}>
                        <Card style={{ maxWidth: "250px", paddingBottom: "10px" }}>
                            <CardHeader><h2>Projects</h2></CardHeader>
                            <CardBody>Kernel development, networking tools, and low-level systems work</CardBody>
                            <CardFooter style={{ justifyItems: "center" }}>
                                <Link to="/projects/pivot-os">
                                    <button style={{ maxWidth: "175px" }} className="button button--secondary" >View Projects &#8594;</button>
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card style={{ maxWidth: "250px", paddingBottom: "10px" }}>
                            <CardHeader><h2>Experience</h2></CardHeader>
                            <CardBody>Roles, internships, and open-source contributions</CardBody>
                            <CardFooter style={{ justifyItems: "center" }}>
                                <Link to="/experience/community-service">
                                    <button style={{ maxWidth: "175px" }} className="button button--secondary" >View Experience &#8594;</button>
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card style={{ maxWidth: "250px", paddingBottom: "10px" }}>
                            <CardHeader><h2>Certifications</h2></CardHeader>
                            <CardBody>Technical certifications and formal qualifications</CardBody>
                            <CardFooter style={{ justifyItems: "center" }}>
                                <Link to="/projects/pivot-os">
                                    <button style={{ maxWidth: "175px" }} className="button button--secondary" >View Certifications &#8594;</button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </Layout>
        </div>
    );
}
