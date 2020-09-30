import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from "next/link";
import Teste from "./teste";

export default function Home() {
  return (
    <div>
      <Head />
      <h5>Hello (+) Helio</h5>
      <p className={styles.title}>
        <Link href="/teste">TEs</Link>
      </p>
      <Teste type="erro">Helio Silva</Teste>
    </div>
  );
}
