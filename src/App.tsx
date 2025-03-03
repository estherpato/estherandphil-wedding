import { useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import Burger from './components/BurgerMenu/Burger'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { useActiveTheme } from './hooks/useActiveTheme'
import { getTheme } from './theme/theme'


export type ThemeProps = {
  activeTheme: 'light' | 'dark';
}

function App() {

  const [open, setOpen] = useState<boolean>(false);
  const {mode, switchChecked, setSwitchChecked} = useActiveTheme();

  useEffect(() => {
    const body = document.querySelector('body');
    if (body) body.style.overflowY = open ? 'hidden' : 'scroll';
  }, [open])

  return (
  <ThemeProvider theme={getTheme(mode)}>
    <Header activeTheme={mode} />
    <section>
      <Burger open={open} setOpen={setOpen} />
      <BurgerMenu open={open} switchChecked={switchChecked} setSwitchChecked={setSwitchChecked} />
    </section>
    <Main activeTheme={mode} />
  </ThemeProvider>
  )
}

export default App
