import { styled } from "@mui/material";
import Countdown from "../Countdown/Countdown";
import SaveTheDate from "../SaveTheDate/SaveTheDate";

const StyledMain = styled('main')`
  & .box {
    --mask:
    radial-gradient(111.8px at 50% calc(100% - 150px),#000 99%,#0000 101%) calc(50% - 100px) 0/200px 100%,
    radial-gradient(111.8px at 50% calc(100% + 100px),#0000 99%,#000 101%) 50% calc(100% - 50px)/200px 100% repeat-x;
    -webkit-mask: var(--mask);
            mask: var(--mask);
    background: rgb(255,255,255);
    background: ${({theme}) => (`linear-gradient(0deg, rgba(255,255,255,1) 0%, ${theme.palette.secondary.main} 100%);`)};
    padding: 2rem 0 4rem;
  }
`

const Main = () => {
  const deadline = "June, 6, 2026";

  return (
    <StyledMain>
      <div className="box">
        <Countdown deadline={deadline}/>
        <SaveTheDate />
      </div>
    </StyledMain>
  );
}

export default Main;
