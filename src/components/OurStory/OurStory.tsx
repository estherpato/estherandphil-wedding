import { styled, Typography } from "@mui/material";
import { FC } from "react";
import { SectionTitle } from "../common/SectionTitle";
import { useTranslation } from "react-i18next";
import { ThemeProps } from "../../App";

const StyledOurStory = styled('section')<{activeTheme: string}>`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & .description {
    line-height: 1.5;
    text-align: center;
    font-size: ${({activeTheme}) => activeTheme === 'light' ? '1rem' : '1.125rem'};
  }
`

const OurStory: FC<ThemeProps> = ({activeTheme}) => {
  const { t } = useTranslation();

  return (
    <StyledOurStory activeTheme={activeTheme}>
      <SectionTitle component="h2" variant="h2" sx={{ mb: 1 }}>{t('TITLES.OUR_STORY')}</SectionTitle>

      <Typography className="description">
        {t('OUR_STORY.P1')}
      </Typography>
      <Typography className="description">
        {t('OUR_STORY.P2')}
      </Typography>
      <Typography className="description">
        {t('OUR_STORY.P3')}
      </Typography>
      <Typography className="description">
        {t('OUR_STORY.P4')}
      </Typography>
      <Typography className="description">
        {t('OUR_STORY.P5')}
      </Typography>
    </StyledOurStory>
  );
};

export default OurStory;