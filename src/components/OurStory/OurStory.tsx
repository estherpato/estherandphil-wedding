import { styled, Typography } from "@mui/material";
import { FC } from "react";
import { SectionTitle } from "../common/SectionTitle";
import { useTranslation } from "react-i18next";

const StyledOurStory = styled('section')`
  padding: 0 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  & .description {
    line-height: 1.5;
    text-align: center;
    font-family: 1rem;
  }
`

const OurStory: FC = () => {
  const { t } = useTranslation();

  return (
    <StyledOurStory>
      <SectionTitle component="h2" variant="h2" sx={{mb: 1}}>{t('TITLES.OUR_STORY')}</SectionTitle>

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