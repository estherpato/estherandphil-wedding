import { ThemeProvider } from '@emotion/react'
import Header from './components/Header/Header'
import Main from './components/Main/Main'
import { useActiveTheme } from './hooks/useActiveTheme'
import { getTheme } from './theme/theme'
import Footer from './components/Footer/Footer'
import LanguageProvider from './context/LanguageContext'
import '../i18n.js';
import { useEffect } from 'react'

export type ThemeProps = {
  activeTheme: 'light' | 'dark';
}

function App() {
  const { mode, switchChecked, setSwitchChecked } = useActiveTheme();

  useEffect(() => {
    const rootEl = document.querySelector('#root');
    if (rootEl instanceof HTMLElement) {
      rootEl.style.background = getTheme(mode).palette.background.default;
    }
  }, [mode]);

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <LanguageProvider>
        <Header activeTheme={mode} switchChecked={switchChecked} setSwitchChecked={setSwitchChecked} />
        <Main activeTheme={mode} />
        <Footer activeTheme={mode} />
      </LanguageProvider>
    </ThemeProvider>
  )
}

export default App
