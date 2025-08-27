// src/index.js
import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import App from "./App";

// Crie um tema personalizado (opcional)
const theme = createTheme({
  palette: {
    primary: {
      main: '#fdfdfdff',
    },
    secondary: {
      main: '#000000ff',
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline /> 
      <App />
    </ThemeProvider>
  </React.StrictMode>
);