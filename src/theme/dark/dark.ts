import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#C4040C',
    },
    secondary: {
      main: '#F9D22C',
    },
    text: {
      secondary: '#000C2B',
      primary: '#000C2B',
      disabled: '#6C6C6C'
    },
    info: {
      main: '#6C6C6C',
      light: '#f6f7f8',
    }
  },
  typography: {
    h1: {
      fontFamily: 'Pirata One',
    },
    h2: {
      fontFamily: 'Pirata One',
    },
    body1: {
      fontFamily: 'Roboto Condensed'
    },
    body2: {
      fontFamily: 'Caveat'
    }
  },
})