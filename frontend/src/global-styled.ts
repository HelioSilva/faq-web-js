import React from "react";
import { createGlobalStyle } from "styled-components";

const Global = createGlobalStyle`
  
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box ;
    font-family: 'Roboto', sans-serif;
    font-size:14px;
  }
  body{
    background:#f0f0f0;
    /* color:#fff; */
    
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }


`;
export default Global;
