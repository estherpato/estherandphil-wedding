import { styled } from '@mui/material';
import { FC } from 'react';
import { ThemeProps } from '../../App';

const StyledHeader = styled('header') <{ activeTheme: string }>`
  background: ${({ activeTheme }) => (activeTheme === 'light' ?
    `linear-gradient(rgba(255, 179, 200, 0.5), rgba(0, 0, 0, 0.5)), url('background_light.jpg')` :
    `linear-gradient(rgba(196, 4, 12, 0.5), rgba(0, 0, 0, 0.5)), url('background_dark.jpg')`)};
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100vh;
  color: ${({ theme }) => (theme.palette.text.secondary)};
  padding: 2rem;

  & h1 {
    color: ${({ theme }) => (theme.palette.secondary.main)};
    margin-top: 1rem;
    text-align: center;
    font-family: 'Cookie';
    font-size: 5rem;
  }
`;

const StyledDate = styled('div') <{ activeTheme: string }>`
  color: ${({ theme }) => (theme.palette.text.secondary)};
  position: relative;
  font-size: 1.5rem;
  margin-top: 6rem;
  font-family: 'Libre Baskerville';

  &::before, &::after {
    content: ${({ activeTheme }) => (activeTheme === 'light' ? "''" : "'⚡'")};
    display: block;
    position: absolute;
    border-top: ${({ theme, activeTheme }) => (activeTheme === 'light' && `1px solid ${theme.palette.text.secondary}`)};
    width: ${({ activeTheme }) => (activeTheme === 'light' && '50px')};;
    top: 50%;
    transform: translateY(-50%)
  }

  &::before {
    left: ${({ activeTheme }) => (activeTheme === 'light' ? '-60px' : "-40px")};
  }

  &::after {
    right: ${({ activeTheme }) => (activeTheme === 'light' ? '-60px' : "-40px")};;
  }
`

const StyledHero = styled('div')`
  font-family: 'Bad Script';
  font-size: 2rem;
  text-align: center;
  position: absolute;
  left: 0;
  bottom: 3rem;
  padding: 0 2rem;
  width: 100%;
`

const StyledImage = styled('img')`
  position: absolute;
  bottom: 3rem;
  left: 50%;
  transform: translateX(-50%);
`;

const Header: FC<ThemeProps> = ({ activeTheme }) => {
  return (
    <StyledHeader activeTheme={activeTheme}>
      <StyledDate activeTheme={activeTheme}>
        <span>06 · 06 · 2026</span>
      </StyledDate>
      {
        activeTheme === 'light' &&
        <h1>Esther <br />& <br />Phil</h1>
      }
      {
        activeTheme === 'light' &&
        <StyledHero>
          <p><q>Ich hätte mich auch mit geschlossenen Augen in dich verliebt</q></p>
        </StyledHero>
      }
      {
        activeTheme === 'dark' && <StyledImage src="rock-names.png" alt="Esther & Phil" />
      }
    </StyledHeader>
  )
};

export default Header;
