import { useState } from 'react'
import './App.css'
import { ThemeProvider } from '@emotion/react'
import { themes } from './theme/theme'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import Burger from './components/BurgerMenu/Burger'

function App() {
  const [theme, /* setTheme */] = useState(themes.light);
  const [open, setOpen] = useState<boolean>(false);

  /* const handleTheme = (theme: Theme) => {
    setTheme(theme);
  } */

  return (
  <ThemeProvider theme={theme}>
      {/* <Button variant="contained" onClick={() => handleTheme(themes.light)}>Light</Button>
      <Button variant="contained" onClick={() => handleTheme(themes.dark)}>Dark</Button> */}
    <section>
      <Burger open={open} setOpen={setOpen} />
      <BurgerMenu open={open}/>
    </section>
  </ThemeProvider>
  )
}

export default App
