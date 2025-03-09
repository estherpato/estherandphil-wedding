import { styled, Typography } from "@mui/material";
import { FC, useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const CounterContainer = styled('section')`
  margin-top: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-family: 'Libre Baskerville';
  font-size: 14px;
`;

const StyledCountNumber = styled('div')`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

  & div {
    width: 50px;
    height: 50px;
    border: ${({ theme }) => (`3px solid ${theme.palette.primary.main}`)};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  & .label {
    margin-top: 0.5rem;
  }
`;

type CounterProps = {
  deadline: string;
}

const Countdown: FC<CounterProps> = ({ deadline }) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const { t } = useTranslation();
  const leading0 = (num: number) => {
    const result = num < 10 ? "0" + num : num;
    return result.toString();
  };

  const getTimeUntil = (deadline: string) => {
    const time = Date.parse(deadline) - new Date().getTime();
    if (time < 0) {
      setDays(0);
      setHours(0);
      setMinutes(0);
      setSeconds(0);
    } else {
      setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
      setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
      setMinutes(Math.floor((time / 1000 / 60) % 60));
      setSeconds(Math.floor((time / 1000) % 60));
    }
  };

  useEffect(() => {
    setInterval(() => getTimeUntil(deadline), 1000);

    return () => getTimeUntil(deadline);
  }, [deadline]);

  return (
    <CounterContainer>
      <StyledCountNumber>
        <div>
          <Typography>{leading0(days)}</Typography>
        </div>
        <Typography className="label">
          {parseInt(leading0(days)) > 1 ? `${t('COUNTDOWN.DAYS')}` : `${t('COUNTDOWN.DAY')}`}
        </Typography>
      </StyledCountNumber>
      <StyledCountNumber>
        <div>
          <Typography>{leading0(hours)}</Typography>
        </div>
        <Typography className="label">
          {parseInt(leading0(hours)) > 1 ? `${t('COUNTDOWN.HOURS')}` : `${t('COUNTDOWN.HOUR')}`}
        </Typography>
      </StyledCountNumber>
      <StyledCountNumber>
        <div>
          <Typography>{leading0(minutes)}</Typography>
        </div>
        <Typography className="label">
          {parseInt(leading0(minutes)) > 1 ? `${t('COUNTDOWN.MINS')}` : `${t('COUNTDOWN.MIN')}`}
        </Typography>
      </StyledCountNumber>
      <StyledCountNumber>
        <div>
          <Typography>{leading0(seconds)}</Typography>
        </div>
        <Typography className="label">
          {parseInt(leading0(seconds)) > 1 ? `${t('COUNTDOWN.SECS')}` : `${t('COUNTDOWN.SEC')}`}
        </Typography>
      </StyledCountNumber>
    </CounterContainer>
  );
};

export default Countdown;