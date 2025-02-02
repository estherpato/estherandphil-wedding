import { useState } from 'react'
import './App.css'
import { ThemeProvider } from '@emotion/react'
import { themes } from './theme/theme'
import { Button, Theme } from '@mui/material'

function App() {
  const [theme, setTheme] = useState(themes.light);

  const handleTheme = (theme: Theme) => {
    setTheme(theme);
  }

  return (
  <ThemeProvider theme={theme}>
      <Button variant="contained" onClick={() => handleTheme(themes.light)}>Light</Button>
      <Button variant="contained" onClick={() => handleTheme(themes.dark)}>Dark</Button>
  </ThemeProvider>
  )
}

export default App
