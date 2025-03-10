import { Button, Stack, styled, Typography } from "@mui/material";
import { FC } from "react";
import { ThemeProps } from "../../App";
import { SectionTitle } from "../common/SectionTitle";
import { Trans, useTranslation } from "react-i18next";

const calendarURL = 'https://www.google.com/calendar/render?action=TEMPLATE&text=Esther%26Phil+Wedding%21+%F0%9F%92%8D&dates=20260606T160000Z%2Fundefined';
const locationURL = "https://www.google.com/maps/place//data=!4m2!3m1!1s0xd405191559f99fb:0xfd2f25e4b81c3e8d?sa=X&ved=1t:8290&ictx=111";

const StyledSaveTheDate = styled('section') <{ activeTheme: string }>`
  font-family: 'Libre Baskerville';
  padding: 0 2rem;
  line-height: 1.5;
  margin-top: 2rem;

  & .subtitle {
    text-align: center;
    font-size: ${({activeTheme}) => activeTheme === 'light' ? '1.85rem' : '2rem'};
    margin-top: 1.5rem;
  }

  & .description {
    text-align: center;
    margin-top: 0.85rem;
  }

  & .small-description {
    font-size: 0.85rem;
    color: ${({ theme }) => (theme.palette.text.disabled)};
    text-align: center;

    &.top {
      margin-top: 0.65rem;
    }
  }

  & a {
    margin: 0 auto;
  }

  & .divider {
    background-image: ${({ activeTheme }) => activeTheme === 'light' ?
    "url('cherry-blossom.png')" : "url('rock.png')"} ;
    background-position: center;
    background-size: contain;
    width: 40px;
    height: 40px;
    margin: 1rem auto;
  }
`

const SaveTheDate: FC<ThemeProps> = ({ activeTheme }) => {
  const { t } = useTranslation();

  return (
    <StyledSaveTheDate activeTheme={activeTheme}>
      <SectionTitle component="h2" variant="h2">{t('TITLES.SAVE_THE_DATE')}</SectionTitle>

      <Typography className="subtitle" variant="body2">
        <Trans i18nKey="SAVE_THE_DATE.SUBTITLE">
          Join us as we seal our love with an <strong>"I do"</strong> that will last a lifetime
        </Trans>
      </Typography>

      <Typography className="subtitle question" variant="body2">
        <strong>{t('SAVE_THE_DATE.WHEN')}</strong>
      </Typography>
      <Typography className="description">{t('SAVE_THE_DATE.DATE')}</Typography>
      <Stack sx={{ marginTop: '1rem' }}>
        <Button variant="outlined" href={calendarURL}>{t('SAVE_THE_DATE.CALENDAR_BUTTON')}</Button>
      </Stack>

      <div className="divider" />

      <Typography className="subtitle question" variant="body2">
        <strong>{t('SAVE_THE_DATE.WHERE')}</strong>
      </Typography>
      <Typography className="description"><strong>Hotel Toros de Guisando</strong></Typography>
      <Typography className="small-description top">Travesía del Paseo de Recoletos, 53</Typography>
      <Typography className="small-description">05270 · El Tiemblo</Typography>
      <Stack sx={{ marginTop: '1rem' }}>
        <Button variant="outlined" href={locationURL}>{t('SAVE_THE_DATE.LOCATION_BUTTON')}</Button>
      </Stack>

    </StyledSaveTheDate>
  );
};

export default SaveTheDate;