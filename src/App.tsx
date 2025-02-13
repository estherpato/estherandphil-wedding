import { useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { themes } from './theme/theme'
import Burger from './components/BurgerMenu/Burger'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import Header from './components/Header/Header'
import Main from './components/Main/Main'

function App() {
  const [theme, setTheme] = useState(themes.light);
  const [open, setOpen] = useState<boolean>(false);
  const [switchChecked, setSwitchChecked] = useState(false);



  useEffect(() => {
    const newTheme = switchChecked ? themes.dark : themes.light;
    setTheme(newTheme);
  }, [switchChecked])

  return (
  <ThemeProvider theme={theme}>
    <Header activeTheme={theme} />
    <section>
      <Burger open={open} setOpen={setOpen} />
      <BurgerMenu open={open} switchChecked={switchChecked} setSwitchChecked={setSwitchChecked} />
    </section>
    <Main />
  </ThemeProvider>
  )
}

export default App
