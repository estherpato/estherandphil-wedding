import { styled, Typography} from "@mui/material";
import { FC } from "react";
import { SectionTitle } from "../common/SectionTitle";

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
  return (
    <StyledOurStory>
      <SectionTitle component="h2" variant="h2">Our story</SectionTitle>

      <Typography className="description">
        Although we officially met in 2016, it wasn't until 2020 that our paths
        crossed again.
      </Typography>
      <Typography className="description">
        The first steps were not easy and we spent them travelling between Madrid, El Tiemblo
        and Berlin. Until 2023 when we decided to move to Spain for good.
      </Typography>
      <Typography className="description">
        In October 2024, we left for Japan with empty suitcases and our hearts brimming with wishes.
        We returned with full suitcases, two happy hearts and a ring on Esther's finger.
      </Typography>
      <Typography className="description">
        Those who know us will know that our love for watching anime, reading manga and playing
        video games brought us together; but it is our love for each other that keeps us going.
      </Typography>
      <Typography className="description">
        On the 6th of June, we will take another step forward and officially unite our hearts,
        and we are very happy that you will be a part of it.
      </Typography>
    </StyledOurStory>
  );
};

export default OurStory;