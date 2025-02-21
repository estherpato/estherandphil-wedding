import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#92bd81',
    },
    secondary: {
      main: '#ffb3c8',
    },
    text: {
      primary: '#000C2B',
      secondary: '#000C2B',
      disabled: '#6C6C6C'
    },
    info: {
      main: '#6C6C6C',
      light: '#f6f7f8',
    }
  },
  typography: {
    h1: {
      fontFamily: 'Cookie',
    },
    h2: {
      fontFamily: 'Cookie',
    },
    body1: {
      fontFamily: 'Libre Baskerville'
    },
    body2: {
      fontFamily: 'Bad Script'
    }
  },
})