import { styled } from "@mui/material";
import { FC, useState, useEffect } from "react";

const CounterContainer = styled('section')`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  font-family: 'Libre Baskerville';
  font-size: 14px;
  background: ${({ theme }) => theme.palette.secondary.main};
  --mask:
    radial-gradient(111.8px at 50% 150px,#000 99%,#0000 101%) calc(50% - 100px) 0/200px 51% repeat-x,
    radial-gradient(111.8px at 50% -100px,#0000 99%,#000 101%) 50% 50px/200px calc(51% - 50px) repeat-x,
    radial-gradient(111.8px at 50% calc(100% - 150px),#000 99%,#0000 101%) calc(50% - 100px) 100%/200px 51% repeat-x,
    radial-gradient(111.8px at 50% calc(100% + 100px),#0000 99%,#000 101%) 50% calc(100% - 50px)/200px calc(51% - 50px) repeat-x;
  -webkit-mask: var(--mask);
          mask: var(--mask);
  padding: 80px;
  position: absolute;
  width: 100%;
  top: -62px;
  left: 0;
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

const Countdown: FC<CounterProps> = ({deadline}) => {
  const [days, setDays] = useState(0);
  const [hours, setHours] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [seconds, setSeconds] = useState(0);

  const leading0 = (num: number) => {
    const result = num < 10 ? "0" + num : num;
    return result.toString();
  };

  const getTimeUntil = (deadline: string) => {
    const time = Date.parse(deadline) - Date.parse(new Date());
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
          <span>{leading0(days)}</span>
        </div>
        <span className="label">{parseInt(leading0(days)) > 1 ? 'days' : 'day'}</span>
      </StyledCountNumber>
      <StyledCountNumber>
        <div>
          <span>{leading0(hours)}</span>
        </div>
        <span className="label">{parseInt(leading0(hours)) > 1 ? 'hours' : 'hour'}</span>
      </StyledCountNumber>
      <StyledCountNumber>
        <div>
          <span>{leading0(minutes)}</span>
        </div>
        <span className="label">{parseInt(leading0(minutes)) > 1 ? 'minutes' : 'minute'}</span>
      </StyledCountNumber>
      <StyledCountNumber>
        <div>
          <span>{leading0(seconds)}</span>
        </div>
        <span className="label">{parseInt(leading0(seconds)) > 1 ? 'seconds' : 'second'}</span>
      </StyledCountNumber>
    </CounterContainer>
  );
};

export default Countdown;