import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box ;
  }
  body{
    background:#fafafa;
    color:#fafafa;
    font-family:Arial, Helvetica, sans-serif;
    font-size:14px;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }


`;
