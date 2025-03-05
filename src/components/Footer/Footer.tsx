import { styled, Typography } from "@mui/material";
import { ThemeProps } from "../../App";
import { FC } from "react";

const StyledFooter = styled('footer')<{activeTheme: string}>`
  padding: 2rem 0;
  background-image: url('wave_vector_400.png');
  background-color: ${({theme}) => theme.palette.secondary.main};


  & .container-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;
  }

  & .logo {
    background-image: ${({activeTheme}) => activeTheme === 'light' ?
                      "url('cherry-blossom.png')" : "url('rock.png')"} ;
    background-position: center;
    background-size: contain;
    width: 20px;
    height: 20px;
  }
`;

const Footer: FC<ThemeProps> = ({activeTheme}) => {
  return (
    <StyledFooter activeTheme={activeTheme}>
      <div className="container-logo">
        <Typography>Made with </Typography>
        <div className="logo"/>
        <Typography>by the lovely bride</Typography>
      </div>
    </StyledFooter>
  )
};

export default Footer;