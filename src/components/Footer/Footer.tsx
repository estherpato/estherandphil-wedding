import { IconButton, styled, Typography, useTheme } from "@mui/material";
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

    & span {
      font-size: 14px;
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
  animation: myAnim 2s ease 0s infinite normal forwards;

  @keyframes myAnim {
	0% {
		animation-timing-function: ease-out;
		transform: scale(1);
		transform-origin: center center;
	}

	10% {
		animation-timing-function: ease-in;
		transform: scale(0.91);
	}

	17% {
		animation-timing-function: ease-out;
		transform: scale(0.98);
	}

	33% {
		animation-timing-function: ease-in;
		transform: scale(0.87);
	}

	45% {
		animation-timing-function: ease-out;
		transform: scale(1);
	}
}
`

type FooterProps = {
  activeTheme: 'dark' | 'light';
  handleScroll: () => void;
}

const Footer: FC<FooterProps> = ({ activeTheme, handleScroll }) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <footer>
      <SectionDivider activeTheme={activeTheme} type="primary" />
      <StyledFooter activeTheme={activeTheme}>
        <StyledContact>
          <Typography component="h3" variant="body2">{t('FOOTER.CONTACT')}</Typography>

          <div className="info">
            <WhatsAppIcon sx={{ fontSize: '1.5rem' }} />
            <Typography component="span">Esther: +34 687 086 711</Typography>
          </div>
          <div className="info">
            <img src="signal.png" className="signal-icon" />
            <div className="signal-tel">
              <Typography component="span">Esther: +34 687 086 711</Typography>
              <Typography component="span">Philipp: +49 176 4423 5500</Typography>
            </div>
          </div>
        </StyledContact>
        <StyledIconButton onClick={handleScroll} aria-label="Scroll up!">
          <ArrowUpward aria-hidden="true" style={{ fill: theme.palette.text.dark }} />
        </StyledIconButton>
      </StyledFooter>
    </footer>
  )
};

export default Footer;