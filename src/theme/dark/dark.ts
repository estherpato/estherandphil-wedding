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
      primary: '#F2F4F5',
      disabled: '#6C6C6C'
    }
  },
})