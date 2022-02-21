import Head from "next/head";
import { Props } from "./types";

import styles from "../../styles/Home.module.css";

const Layout = ({ children, title }: Props) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Titulo - {title}</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>Titulo</h1>
      </header>

      <main className={styles.main}>
        <div className={styles.wrapper}>{children}</div>
      </main>

      <footer className={styles.footer}>
        <span>
          Desenvolvido por <b>Samuel Cardoso</b>
        </span>
      </footer>
    </div>
  );
};

export default Layout;
