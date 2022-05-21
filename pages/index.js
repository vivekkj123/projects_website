import Card from "../components/Card";
import Navbar from "../components/Navbar";
import styles from "../styles/Home.module.css";
import projects from "../src/data.json";
import Head from "next/head";

export default function Home() {
  return (

    <div className={styles.Home}>
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="description"
          content="Projects Website of Vivek K J. Vivek K J is a opensource contributor and a Web developer. This website showcases all works done by me." />
        <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
        <title>Projects | VIVEK K J</title>

      </Head>
      <Navbar />
      <div className={styles.container}>
        {projects.map((project) => (
          <Card key={project.name} project={project} />
        ))}
      </div>
    </div>
  );
}