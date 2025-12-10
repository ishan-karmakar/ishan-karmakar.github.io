import { useEffect } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";
import { Card, CardHeader, CardBody, CardFooter } from "../components/Card";

export default function Home() {
    useEffect(() => {
        initParticlesEngine(async engine => await loadBasic(engine))
    }, []);
    return (
        <div className="home">
            <Layout
                description="Systems Programmer • OS Developer • Rust & C++"
                noFooter
            >
                <Particles style={{ zIndex: 0 }} options={{
                    particles: {
                        number: {
                            value: 100,
                        },
                        color: {
                            value: "#FFFFFF"
                        },
                        move: {
                            enable: true,
                            speed: 0.6,
                        },
                        opacity: {
                            value: 0.80
                        },
                    },
                    detectRetina: false,
                }} />
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

                    <div className="card-grid">
                        <Card>
                            <CardHeader><h2>Projects</h2></CardHeader>
                            <CardBody>Kernel development, networking tools, and low-level systems work</CardBody>
                            <CardFooter>
                                <Link to="/projects">
                                    <button className="button button--secondary">View Projects &#8594;</button>
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader><h2>Experience</h2></CardHeader>
                            <CardBody>Roles, internships, and open-source contributions</CardBody>
                            <CardFooter>
                                <Link to="/experience/community-service">
                                    <button className="button button--secondary">View Experience &#8594;</button>
                                </Link>
                            </CardFooter>
                        </Card>
                        <Card>
                            <CardHeader><h2>Certifications</h2></CardHeader>
                            <CardBody>Technical certifications and formal qualifications</CardBody>
                            <CardFooter>
                                <Link to="/certs">
                                    <button className="button button--secondary">View Certifications &#8594;</button>
                                </Link>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </Layout>
        </div>
    );
}