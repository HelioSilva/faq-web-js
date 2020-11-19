import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box ;
    font-family: 'Roboto', sans-serif;
  }

  html{
    font-size:16px;

    @media(max-width: 600px) {
    font-size:14px;
  }
  }

  

  a {
    text-decoration: none;
  }
  
  body{
    background:#fafafa;
    font-size:16px;
    
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }


`;
