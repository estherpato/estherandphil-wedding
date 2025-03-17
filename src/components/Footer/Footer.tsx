import { IconButton, styled, Typography } from "@mui/material";
import { ThemeProps } from "../../App";
import { FC } from "react";
import { ArrowUpward } from "@mui/icons-material";
import { useTranslation } from "react-i18next";

const StyledFooter = styled('footer') <{ activeTheme: string }>`
  padding: 1rem 2rem;
  background-color: ${({ theme }) => theme.palette.secondary.dark};
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledIconButton = styled(IconButton)`
  background-color: ${({ theme }) => theme.palette.primary.main};
  padding: 1rem;
`

const Footer: FC<ThemeProps> = ({ activeTheme }) => {
  const { t } = useTranslation();

  const handleClick = () => {
    globalThis.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }

  return (
    <StyledFooter activeTheme={activeTheme}>
      <Typography fontSize={14}><i>{t('FOOTER.MESSAGE')}</i> &#10084;</Typography>
      <StyledIconButton onClick={handleClick} aria-label="Scroll up!">
        <ArrowUpward aria-hidden="true" />
      </StyledIconButton>
    </StyledFooter>
  )
};

export default Footer;