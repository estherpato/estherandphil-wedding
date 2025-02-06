import { styled } from '@mui/material';

const StyledHeader = styled('header')`
  background: linear-gradient(rgba(255, 179, 200, 0.5), rgba(0, 0, 0, 0.5)),
              url('/background.jpg');
  background-size: cover;
  background-position: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  color: ${({ theme }) => (theme.palette.text.secondary)};
  padding: 2rem;

  & h1 {
    color: ${({ theme }) => (theme.palette.secondary.main)};
    margin: 3rem 0;
    text-align: center;

    & span {
      display: block;
    }
  }
`;

const StyledDate = styled('div')`
  color: ${({ theme }) => (theme.palette.text.secondary)};
  position: relative;
  font-size: 1.5rem;

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
`

const Header = () => {
  return (
    <StyledHeader>
      <StyledDate>
        <span>06 · 06 · 2026</span>
      </StyledDate>
      <h1><span>Esther</span> <span>&</span> <span>Phil</span></h1>
      <StyledHero>
        <p><q>&quot;Ich hätte mich auch mit geschlossenen Augen in dich verliebt&quot;</q></p>
      </StyledHero>
    </StyledHeader>
  )
};

export default Header;
