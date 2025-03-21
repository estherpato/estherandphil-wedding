import { IconButton, styled, Typography } from "@mui/material";
import { ThemeProps } from "../../App";
import { FC } from "react";
import { ArrowUpward } from "@mui/icons-material";
import { useTranslation } from "react-i18next";
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import SectionDivider from "../common/SectionDivider";

const StyledFooter = styled('div') <{ activeTheme: string }>`
  margin-top: -7px;
  padding: 1rem 2rem 1.5rem;
  background-color: ${({ theme }) => theme.palette.primary.main};
  display: flex;
  align-items: flex-end;
  justify-content: space-between;
`;

const StyledContact = styled('div')`
  & h3 {
    font-size: 1.5rem;
    font-weight: 600;
    margin-bottom: 1rem;
  }

  & .signal-icon {
    width: 20px;
    aspect-ratio: 1 / 1;
    margin-right: 4px;
  }

  & .info {
    display: flex;
    align-items: center;
    gap: 1rem;

    &:first-of-type {
      margin-bottom: 1rem;
    }
  }

  & .signal-tel {
    display: flex;
    flex-direction: column;
  }
`

const StyledIconButton = styled(IconButton)`
  background-color: ${({ theme }) => theme.palette.secondary.main};
  padding: 1rem;
`

const Footer: FC<ThemeProps> = ({ activeTheme }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <footer>
      <SectionDivider activeTheme={activeTheme} type="primary" />
      <StyledFooter activeTheme={activeTheme}>
        <StyledContact>
          <Typography component="h3" variant="body2">Contact us</Typography>

          <div className="info">
            <WhatsAppIcon />
            <Typography component="span">+34 687 086 711</Typography>
          </div>
          <div className="info">
            <img src="signal.png" className="signal-icon" />
            <div className="signal-tel">
              <Typography component="span">+34 687 086 711</Typography>
              <Typography component="span">+49 176 4423 5500</Typography>
            </div>
          </div>
        </StyledContact>
        <StyledIconButton onClick={handleClick} aria-label="Scroll up!">
          <ArrowUpward aria-hidden="true" />
        </StyledIconButton>
      </StyledFooter>
    </footer>
  )
};

export default Footer;