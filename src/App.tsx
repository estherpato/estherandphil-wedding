import { useEffect, useState } from 'react'
import { ThemeProvider } from '@emotion/react'
import { themes } from './theme/theme'
import BurgerMenu from './components/BurgerMenu/BurgerMenu'
import Burger from './components/BurgerMenu/Burger'
import Header from './components/Header/Header'
import Countdown from './components/Countdown/Countdown'
import { styled } from '@mui/material'

const StyledMain = styled('main')`
  position: relative;
`;

function App() {
  const [theme, setTheme] = useState(themes.light);
  const [open, setOpen] = useState<boolean>(false);
  const [switchChecked, setSwitchChecked] = useState(false);

  const deadline = "June, 6, 2026";

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
    <StyledMain>
      <Countdown deadline={deadline}/>
    </StyledMain>
  </ThemeProvider>
  )
}

export default App
