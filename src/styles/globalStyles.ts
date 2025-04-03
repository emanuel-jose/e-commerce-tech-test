import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  
  body {
    font-family: Arial, sans-serif;
    background-color: #ffffff;
    color: #000000;
    line-height: 1.5;
    width: 100%;
    overflow-x: hidden;
  }

  
  h1, h2, h3, h4, h5, h6, p, ul, ol, li, button, input {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font-family: inherit;
  }
`;
