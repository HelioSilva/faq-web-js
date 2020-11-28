import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  
  * {
    margin:0;
    padding:0;
    outline:0;
    box-sizing: border-box ;
    font-family:
    // Safari for OS X and iOS (San Francisco)
      '-apple-system',
      // Chrome < 56 for OS X (San Francisco)
      'BlinkMacSystemFont',
      // Windows
      "Segoe UI",
      // Android
      "Roboto",
      // Basic web fallback
      "Helvetica Neue", Arial, sans-serif,
      // Emoji fonts
      "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  html{

    @media(max-width: 600px) {
    font-size:0.8rem;
  }
  }

  body{
    font-size: 1rem;
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
