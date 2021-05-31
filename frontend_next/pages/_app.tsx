// require("dotenv").config();
import GlobalStyle from "../styles/globals";
import Head from "next/head";
import Router from "next/router";
import { ContextAuth } from "../context/AuthContext";

import { useState } from "react";
import { ContextQuestion } from "../context/QuestionContext";
import Loading from "../components/loading";

import NProgress from "nprogress";

import "suneditor/dist/css/suneditor.min.css";

// import "froala-editor/css/froala_editor.pkgd.min.css";
// import "froala-editor/css/froala_style.css";
// import "file-loader?name=[name].[ext]!./basic.html";

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(false);

  Router.events.on("routeChangeStart", (url) => {
    setLoading(true);
    NProgress.start();
  });

  Router.events.on("routeChangeComplete", (url) => {
    setLoading(false);
    NProgress.done();
  });

  Router.events.on("routeChangeError", (url) => {
    setLoading(false);
    NProgress.done();
  });

  return (
    <>
      <Head>
        <title>Base de Conhecimento</title>
        {/* Import CSS for nprogress */}
        <link rel="stylesheet" type="text/css" href="/nprogress.css" />
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
        <link rel="shortcut icon" href="/favicon.ico" />
      </Head>
      <GlobalStyle />
      <ContextAuth>
        <ContextQuestion>
          {loading === false ? <Component {...pageProps} /> : <Loading />}
        </ContextQuestion>
      </ContextAuth>
    </>
  );
}

export default MyApp;
