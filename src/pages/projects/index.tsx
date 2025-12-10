import Link from "@docusaurus/Link";
import { Card, CardHeader } from "@site/src/components/Card";
import Layout from "@theme/Layout";

export default function () {
    return (
        <Layout
            title="Projects"
        >
            <div style={{
                position: "relative",
                zIndex: 1,
                display: "flex",
                flexDirection: "column",
            }}>
                <div style={{ textAlign: "center" }}>
                    <h1 style={{ fontSize: "4rem", fontWeight: 800, marginTop: "3rem", marginBottom: "3rem" }}>Projects</h1>
                </div>

                <div className="card-grid project-card-grid">
                    <Project title="PivotOS" to="pivot-os" />
                    <Project title="Home Lab" to="homelab" />
                    <Project title="Safehouse" to="safehouse" />
                    <Project title="Field Network" to="field-net" />
                    <Project title="Vlogger" to="vlogger" />
                    <Project title="Wpiformatter" to="wpiformatter" />
                    <Project title="Zake" to="zake" />
                </div>
            </div>
        </Layout>
    );
}

function Project(props: { title: string, to: string }) {
    return <Link to={"/projects/" + props.to}>
        <Card><CardHeader><h2>{props.title}</h2></CardHeader></Card>
    </Link>
}