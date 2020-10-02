import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box ;
    font-family: 'Roboto', sans-serif;
    font-size:14px;
  }
  body{
    background:#fafafa;
    color:#fff;
    
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px "Poppins", sans-serif;
  }

  button {
    cursor: pointer;
  }


`;
