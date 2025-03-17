import Countdown from "../Countdown/Countdown";
import SaveTheDate from "../SaveTheDate/SaveTheDate";
import { FC } from "react";
import { ThemeProps } from "../../App";
import { StyledBoxPrimary, StyledBoxSecondary } from "./StyledBox";
import OurStory from "../OurStory/OurStory";
import Schedule from "../Schedule/Schedule";
import Rsvp from "../RSVP/Rsvp";
import { StyledBackgroundPrimary } from "./StyledBackground";
import SectionDivider from "./SectionDivider";

const Main: FC<ThemeProps> = ({ activeTheme }) => {
  const deadline = "June, 6, 2026";

  return (
    <main>
      <StyledBackgroundPrimary>
        <Countdown deadline={deadline} />
        <SaveTheDate activeTheme={activeTheme} />
        <SectionDivider activeTheme={activeTheme} />
      </StyledBackgroundPrimary>

      <StyledBoxPrimary>
        <OurStory activeTheme={activeTheme} />
      </StyledBoxPrimary>
      <StyledBoxSecondary>
        <Schedule />
      </StyledBoxSecondary>
      <Rsvp />
    </main>
  );
}

export default Main;
