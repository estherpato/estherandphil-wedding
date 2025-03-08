import * as React from 'react';
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, styled, Typography } from '@mui/material';
import { useLanguage } from '../../hooks/useLanguage';
import { LanguageType } from '../../enums/LanguageType.enum';
import { useTranslation } from 'react-i18next';

const StyledMenu = styled('nav') <{ open: boolean }>`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => (theme.palette.primary.main)};
  transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};
  height: 100vh;
  text-align: left;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;

  @media (max-width: 576px) {
    width: 100%;
  }

  ul {
    padding-top: 5rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  li {
    padding: 2rem 0;
    list-style: none;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    font-weight: bold;
    text-align: left;
    letter-spacing: 0.5rem;
    color: ${({ theme }) => (theme.palette.text.primary)};
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

type BurgerMenuProps = {
  open: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({ open }) => {
  const [selectedLanguage, setSelectedLanguage] = React.useState<LanguageType>(LanguageType.ENGLISH);
  const { handleLanguageChange } = useLanguage();
  const { t } = useTranslation();

  const handleChange = (event: SelectChangeEvent) => {
    const newLang = event.target.value as LanguageType;
    handleLanguageChange(newLang);
    setSelectedLanguage(newLang);
  }

  return (
    <StyledMenu open={open}>
      <ul>
        <li><a href="#"><Typography component="span" fontSize={28}>{t('TITLES.HOME')}</Typography></a></li>
        <li><a href="#"><Typography component="span" fontSize={28}>{t('TITLES.SAVE_THE_DATE')}</Typography></a></li>
        <li><a href="#"><Typography component="span" fontSize={28}>{t('TITLES.OUR_STORY')}</Typography></a></li>
        <li><a href="#"><Typography component="span" fontSize={28}>{t('TITLES.THE_EVENT')}</Typography></a></li>
        <li><a href="#"><Typography component="span" fontSize={28}>{t('TITLES.RSVP')}</Typography></a></li>
      </ul>
      <FormControl fullWidth>
        <InputLabel id="language-select-label">Language / Idioma / Sprache</InputLabel>
        <Select
          labelId="language-select-label"
          id="language-select"
          value={selectedLanguage}
          label="Language / Idioma / Sprache"
          onChange={handleChange}
        >
          <MenuItem value={LanguageType.ENGLISH}>🇬🇧 English</MenuItem>
          <MenuItem value={LanguageType.SPANISH}>🇪🇸 Español</MenuItem>
          <MenuItem value={LanguageType.GERMAN}>🇩🇪 Deutch</MenuItem>
        </Select>
      </FormControl>
    </StyledMenu>
  );
}

export default BurgerMenu;
