import { useEffect } from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";
import styles from "./index.module.css";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { tsParticles } from "@tsparticles/engine";
import { loadBasic } from "@tsparticles/basic";

export default function Home() {
    useEffect(initParticles, []);
    return (
        <Layout
            title="Ishan Karmakar"
            description="Systems Programmer • OS Developer • Rust & C++"
        >
            <main className={styles.main}>
                <Particles />
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

function initParticles() {
    initParticlesEngine(async engine => {
        await loadBasic(engine)

        tsParticles.load({
            options: {
                particles: {
                    number: {
                        value: 100,
                    },
                    color: {
                        value: "#FFFFFF",
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
    });
}