// import "bootstrap/dist/css/bootstrap.min.css";
//import "bootstrap/dist/css/bootstrap.min.css";
import GlobalStyle from "../styles/globals";
import Head from "next/head";
import Router from "next/router";
import { ContextAuth } from "../context/AuthContext";
import "react-quill/dist/quill.snow.css";
import { useState } from "react";
import { ContextQuestion } from "../context/QuestionContext";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
  });

  Router.events.on("routeChangeError", (url) => {
    setLoading(false);
  });

  return (
    <>
      <Head>
        <title>Base de Conhecimento</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ContextAuth>
        <ContextQuestion>
          {loading === false ? <Component {...pageProps} /> : <h1>Teste</h1>}
        </ContextQuestion>
      </ContextAuth>
    </>
  );
}

export default MyApp;
