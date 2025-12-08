import { useEffect, useState } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadBasic } from "@tsparticles/basic";

function particleColor(): string {
    return document.documentElement.getAttribute("data-theme") === "dark" ? "#FFFFFF" : "#000000";
}

function ProjectCard({ title, description, link }) {
    return (
        <div className={styles.card}>
            <h3>{title}</h3>
            <p>{description}</p>
            <Link className="button button--sm button--primary" to={link}>
                View Project →
            </Link>
        </div>
    );
}

export default function Home() {
    const [particleOptions, setParticleOptions] = useState({
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
    useEffect(() => {
        initParticlesEngine(async engine => await loadBasic(engine))
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
        <Layout
            title="Ishan Karmakar"
            description="Systems Programmer • OS Developer • Rust & C++"
            noFooter
        >
            <main className={styles.main}>
                <Particles options={particleOptions} />
                {/* HERO SECTION */}
                <section className={styles.hero}>
                    <h1 className={styles.title}>Ishan Karmakar</h1>
                    <p className={styles.subtitle}>
                        Systems Programmer • OS Developer • Rust & C++ Enthusiast
                    </p>
                    <div className={styles.buttons}>
                        <Link className="button button--primary" to="/projects">
                            View Projects
                        </Link>
                        <Link className="button button--secondary" to="/about">
                            About Me
                        </Link>
                        <a
                            className="button button--secondary"
                            href="https://github.com/ishan-karmakar"
                        >
                            GitHub
                        </a>
                    </div>
                </section>

                {/* FEATURED PROJECTS */}
                <section className={styles.section}>
                    <h2 className={styles.sectionTitle}>Featured Projects</h2>
                    <div className={styles.cardGrid}>
                        <ProjectCard
                            title="PivotOS Kernel"
                            description="A custom monolithic kernel with paging, interrupt handling, and memory management."
                            link="/projects/pivot-os"
                        />
                        <ProjectCard
                            title="WireGuard Over HTTPS"
                            description="A cloaked VPN tunnel for iOS using WireGuard encapsulated in HTTPS."
                            link="/projects/wireguard-https"
                        />
                        <ProjectCard
                            title="Memory Manager"
                            description="Virtual memory subsystem with paging, heap allocator, and fault handling."
                            link="/projects/memory-manager"
                        />
                    </div>
                </section>
            </main>
        </Layout>
    );
}
