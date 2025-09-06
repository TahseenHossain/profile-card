import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global-styles";
import Card from "./Components/card";
import { theme } from "./styles/theme";

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Card />
    </ThemeProvider>
  );
}
