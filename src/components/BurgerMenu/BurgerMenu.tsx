import * as React from 'react';
import { styled, Switch } from '@mui/material';

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

const StyledSwitchWrapper = styled('div')`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  & img {
    width: 32px;
    aspect-ratio: 1 / 1;
  }
`;

type BurgerMenuProps = {
  open: boolean;
  switchChecked: boolean;
  setSwitchChecked: (checked: boolean) => void;
}

const BurgerMenu: React.FC<BurgerMenuProps> = ({open, switchChecked, setSwitchChecked}) => {
  return (
    <StyledMenu open={open}>
      <ul>
        <li><a href="#">Home</a></li>
        <li><a href="#">Save the date</a></li>
        <li><a href="#">Our story</a></li>
        <li><a href="#">Schedule</a></li>
        <li><a href="#">RSVP</a></li>
      </ul>
      <StyledSwitchWrapper>
        <img src="/cherry-blossom.png" alt="Light Mode" />
        <Switch color="secondary" checked={switchChecked} onChange={() => setSwitchChecked(!switchChecked)} />
        <img src="/rock.png" alt="Dark Mode" />
      </StyledSwitchWrapper>
    </StyledMenu>
  );
}

export default BurgerMenu;
