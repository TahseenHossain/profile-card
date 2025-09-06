import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    font-family: Arial, sans-serif;
    background-color: ${(props) => props.theme.secondary};
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }
`;
