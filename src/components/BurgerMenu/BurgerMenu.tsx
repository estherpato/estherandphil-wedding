import * as React from 'react';
import { styled } from '@mui/material';

const StyledMenu = styled('nav')<{ open: boolean }>`
display: flex;
  flex-direction: column;
  justify-content: center;
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

  a {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

type BurgerMenuProps = {
  open: boolean;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({open}) => {
  return (
    <StyledMenu open={open}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Save the date</a></li>
        <li><a href="#">Our story</a></li>
        <li><a href="#">Schedule</a></li>
        <li><a href="#">RSVP</a></li>
      </ul>
    </StyledMenu>
  );
}

export default BurgerMenu;
