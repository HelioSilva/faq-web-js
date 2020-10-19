import GlobalStyle from "../styles/globals";
import Head from "next/head";
import { ContextAuth } from "../context/AuthContext";
// import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "react-quill/dist/quill.snow.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Base de Conhecimento</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyle />
      <ContextAuth>
        <Component {...pageProps} />
      </ContextAuth>
    </>
  );
}

export default MyApp;
