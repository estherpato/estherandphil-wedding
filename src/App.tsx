import { ThemeProvider } from '@emotion/react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { useActiveTheme } from './hooks/useActiveTheme';
import { getTheme } from './theme/theme';
import Footer from './components/Footer/Footer';
import LanguageProvider from './context/LanguageContext';
import '../i18n.js';
import { useEffect, useRef, useState, useCallback } from 'react';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle, Typography } from '@mui/material';
import { useTranslation } from 'react-i18next';

export type ThemeProps = {
  activeTheme: 'light' | 'dark';
}

function App() {
  const [dialogOpen, setDialogOpen] = useState<boolean>(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const { mode, switchChecked, setSwitchChecked } = useActiveTheme();
  const { t } = useTranslation();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  let timeoutId: number;

  const handleOnClick = () => {
    setHasInteracted(true);
  }

  const playAudio = useCallback(() => {
    setDialogOpen(false);

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current.loop = false;
    }

    audioRef.current = new Audio(mode === "light" ? "Geschlossene_Augen.mp3" : "kiss.mp3");
    audioRef.current.loop = true;
    audioRef.current.play().catch((error) => console.error("Playback error:", error));

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
        audioRef.current.loop = false;
      }
    }
  }, [mode]);

  const handleScroll = () => {
    globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });

    timeoutId = setTimeout(() => {
      setSwitchChecked((prevState) => {
        return !prevState;
      })
    }, 1000);
  }

  useEffect(() => {
    return () => clearInterval(timeoutId);
  });

  useEffect(() => {
    const rootEl = document.querySelector('#root');
    if (rootEl instanceof HTMLElement) {
      rootEl.style.background = getTheme(mode).palette.background.default;
    }
  }, [mode]);

  useEffect(() => {
    if (hasInteracted) {
      playAudio();
    }
  }, [mode, hasInteracted]);

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <LanguageProvider>
        <Header activeTheme={mode} switchChecked={switchChecked} setSwitchChecked={setSwitchChecked} />
        <Main activeTheme={mode} />
        <Footer activeTheme={mode} handleScroll={handleScroll} />
        <Dialog open={dialogOpen} disableEscapeKeyDown>
          <DialogTitle>{t('MODAL_INIT.TITLE')}</DialogTitle>
          <DialogContent>
            <Typography>{t('MODAL_INIT.MESSAGE')}</Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={handleOnClick}
              autoFocus
              variant="contained"
            >
              {t('MODAL_INIT.BUTTON')}
            </Button>
          </DialogActions>
        </Dialog>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
