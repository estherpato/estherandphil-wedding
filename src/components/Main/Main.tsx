import Countdown from "../Countdown/Countdown";
import SaveTheDate from "../SaveTheDate/SaveTheDate";
import { FC } from "react";
import { ThemeProps } from "../../App";
import { StyledBoxPrimary, StyledBoxSecondary } from "./StyledBox";
import OurStory from "../OurStory/OurStory";

const Main: FC<ThemeProps> = ({activeTheme}) => {
  const deadline = "June, 6, 2026";

  return (
    <main>
      <StyledBoxSecondary className="box">
        <Countdown deadline={deadline}/>
        <SaveTheDate activeTheme={activeTheme} />
      </StyledBoxSecondary>
      <StyledBoxPrimary>
        <OurStory />
      </StyledBoxPrimary>
    </main>
  );
}

export default Main;
