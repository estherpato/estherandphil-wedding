import { styled } from '@mui/material';

const StyledHeader = styled('header')`
  background: linear-gradient(rgba(255, 179, 200, 0.5), rgba(0, 0, 0, 0.5)),
              url('/background.jpg');
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

const StyledDate = styled('div')`
  color: ${({ theme }) => (theme.palette.text.secondary)};
  position: relative;
  font-size: 1.5rem;
  margin-top: 6rem;

  &::before, &::after {
    content: '';
    display: block;
    position: absolute;
    border-top: ${({ theme }) => (`1px solid ${theme.palette.text.secondary}`)};
    width: 50px;
    top: 50%;
    transform: translateY(-50%)
  }

  &::before {
    left: -60px;
  }

  &::after {
    right: -60px;
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

const Header = () => {
  return (
    <StyledHeader>
      <StyledDate>
        <span>06 · 06 · 2026</span>
      </StyledDate>
      <h1>Esther <br/>& <br/>Phil</h1>
      <StyledHero>
        <p><q>Ich hätte mich auch mit geschlossenen Augen in dich verliebt</q></p>
      </StyledHero>
    </StyledHeader>
  )
};

export default Header;
