import Countdown from "../Countdown/Countdown";
import SaveTheDate from "../SaveTheDate/SaveTheDate";
import { FC } from "react";
import { ThemeProps } from "../../App";
import { StyledBoxPrimary, StyledBoxSecondary } from "./StyledBox";
import OurStory from "../OurStory/OurStory";
import Schedule from "../Schedule/Schedule";

const Main: FC<ThemeProps> = ({activeTheme}) => {
  const deadline = "June, 6, 2026";

  return (
    <main>
      <StyledBoxSecondary>
        <Countdown deadline={deadline}/>
        <SaveTheDate activeTheme={activeTheme} />
      </StyledBoxSecondary>
      <StyledBoxPrimary>
        <OurStory />
      </StyledBoxPrimary>
      <StyledBoxSecondary>
        <Schedule />
      </StyledBoxSecondary>
    </main>
  );
}

export default Main;
