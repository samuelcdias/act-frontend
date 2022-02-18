import type { NextPage } from "next";
import Head from "next/head";
import { InputStyled } from "../common/components/Input";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1>Teste</h1>
        <InputStyled name="teste" />
      </main>

      <footer className={styles.footer}>
        <span>
          Desenvolvido por <b>Samuel Cardoso</b>
        </span>
      </footer>
    </div>
  );
};

export default Home;
