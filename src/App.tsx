import { useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import Burger from './components/BurgerMenu/Burger'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { useActiveTheme } from './hooks/useActiveTheme'

export type ThemeProps = {
  activeTheme: string;
}

function App() {

  const [open, setOpen] = useState<boolean>(false);
  const {theme, activeTheme, switchChecked, setSwitchChecked} = useActiveTheme();

  return (
  <ThemeProvider theme={theme}>
    <Header activeTheme={activeTheme} />
    <section>
      <Burger open={open} setOpen={setOpen} />
      <BurgerMenu open={open} switchChecked={switchChecked} setSwitchChecked={setSwitchChecked} />
    </section>
    <Main activeTheme={activeTheme} />
  </ThemeProvider>
  )
}

export default App
