import Head from "next/head";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Link from "next/link";
import Teste from "./teste";

const Home = () => {
  return (
    <div>
      <Head />
      <Title>Home com aero function</Title>
      <p className={styles.title}>
        <Link href="/teste">TEs</Link>
      </p>
      <Teste type="erro">Helio Silva</Teste>
    </div>
  );
};

const Title = styled.h1`
  font-size: 55;
  color: #2b6d8e;
`;

export default Home;
