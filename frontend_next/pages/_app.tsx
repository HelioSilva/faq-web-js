import Head from "next/head";
import Router from "next/router";
import { ContextAuth } from "../context/AuthContext";

import { useState } from "react";
import { ContextQuestion } from "../context/QuestionContext";
import Loading from "../components/loading";

import NProgress from "nprogress";

import GlobalStyle from "../styles/globals";
import "suneditor/dist/css/suneditor.min.css";

import type { NextWebVitalsMetric } from "next/app";

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
        <meta
          http-equiv="Content-Security-Policy"
          content="upgrade-insecure-requests"
        ></meta>
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

export function reportWebVitals(metric: NextWebVitalsMetric) {
  console.log(metric);
}

export default MyApp;
