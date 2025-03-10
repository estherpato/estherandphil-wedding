import { createTheme } from "@mui/material";

export const getTheme = (mode: 'light' | 'dark') => createTheme({
  palette: {
    mode,
    primary: {
      main: mode === 'light' ? '#92bd81' : '#C4040C',
    },
    secondary: {
      main: mode === 'light' ? '#ffb3c8' : '#F9D22C',
    },
    text: {
      primary: '#000C2B',
      secondary: '#000C2B',
      disabled: '#6C6C6C'
    },
    info: {
      main: '#6C6C6C',
      light: '#f6f7f8',
    },
    background: {
      default: mode === 'light' ? '#FFFFFF' : '#8c8c8c',
    },
  },
  typography: {
    h1: {
      fontFamily: mode === 'light' ? 'Cookie' : 'Pirata One',
    },
    h2: {
      fontFamily: mode === 'light' ? 'Cookie' : 'Pirata One',
    },
    body1: {
      fontFamily: mode === 'light' ? 'Libre Baskerville' : 'Roboto Condensed',
    },
    body2: {
      fontFamily: mode === 'light' ? 'Bad Script' : 'Caveat',
    },
    fontSize: mode === 'light' ? 14 : 16,
  },
});