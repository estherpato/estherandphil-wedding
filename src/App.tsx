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
  const { mode, switchChecked, setSwitchChecked } = useActiveTheme();
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [dialogOpen, setDialogOpen] = useState<boolean>(true);
  const [hasInteracted, setHasInteracted] = useState(false);
  const { t } = useTranslation();

  // Function to play the correct audio
  const playAudio = useCallback(() => {
    setDialogOpen(false);

    // Stop and reset previous audio
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
    }

    // Create and play new audio
    audioRef.current = new Audio(mode === "light" ? "Geschlossene_Augen.mp3" : "kiss.mp3");
    audioRef.current.play().catch((error) => console.error("Playback error:", error));

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.currentTime = 0;
      }
    }
  }, [mode]);

  // Change background color when mode switches
  useEffect(() => {
    const rootEl = document.querySelector('#root');
    if (rootEl instanceof HTMLElement) {
      rootEl.style.background = getTheme(mode).palette.background.default;
    }
  }, [mode]);

  // Auto-play when mode changes (only after user interaction)
  useEffect(() => {
    if (hasInteracted) {
      playAudio();
    }
  }, [mode, hasInteracted]);

  // Listen for first user interaction to enable autoplay
  useEffect(() => {
    const enableAudio = () => {
      setHasInteracted(true);
      document.removeEventListener("click", enableAudio);
    };

    document.addEventListener("click", enableAudio);
    return () => document.removeEventListener("click", enableAudio);
  }, []);

  return (
    <ThemeProvider theme={getTheme(mode)}>
      <LanguageProvider>
        <Header activeTheme={mode} switchChecked={switchChecked} setSwitchChecked={setSwitchChecked} />
        <Main activeTheme={mode} />
        <Footer activeTheme={mode} />
        <Dialog open={dialogOpen} disableEscapeKeyDown>
          <DialogTitle>{t('MODAL_INIT.TITLE')}</DialogTitle>
          <DialogContent>
            <Typography>{t('MODAL_INIT.MESSAGE')}</Typography>
          </DialogContent>
          <DialogActions>
            <Button
              onClick={playAudio}
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
