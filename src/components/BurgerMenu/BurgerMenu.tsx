import * as React from 'react';
import { styled, Typography } from '@mui/material';

const StyledMenu = styled('nav')<{ open: boolean }>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const BurgerMenu: React.FC<BurgerMenuProps> = ({open}) => {
  return (
    <StyledMenu open={open}>
      <ul>
        <li><a href="#"><Typography component="span" fontSize={28}>Home</Typography></a></li>
        <li><a href="#"><Typography component="span" fontSize={28}>Save the date</Typography></a></li>
        <li><a href="#"><Typography component="span" fontSize={28}>Our story</Typography></a></li>
        <li><a href="#"><Typography component="span" fontSize={28}>Schedule</Typography></a></li>
        <li><a href="#"><Typography component="span" fontSize={28}>RSVP</Typography></a></li>
      </ul>
    </StyledMenu>
  );
}

export default BurgerMenu;
