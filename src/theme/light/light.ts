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
      secondary: '#F2F4F5',
      disabled: '#6C6C6C'
    }
  },
  typography: {
    h1: {
      fontFamily: 'Cookie',
    },
  },
})