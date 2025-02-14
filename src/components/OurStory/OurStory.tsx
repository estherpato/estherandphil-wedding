import { Divider, styled} from "@mui/material";
import { FC } from "react";

const StyledOurStory = styled('section')`
  padding: 0 2rem;

  & h2 {
    font-family: 'Cookie';
    text-align: center;
    font-size: 4rem;
  }

  & .description {
    font-family: 'Libre Baskerville';
    line-height: 1.5;
    text-align: center;
    margin-top: 0.85rem;
  }
`

const OurStory: FC = () => {
  return (
    <StyledOurStory>
      <h2>Our story</h2>
      <Divider />
      <p className="description">
        Although we officially met in 2016, it wasn't until 2020 that our paths
        crossed again.
      </p>
      <p className="description">
        The first steps were not easy and we spent them travelling between Madrid, El Tiemblo
        and Berlin. Until 2023 when we decided to move to Spain for good.
      </p>
      <p className="description">
        In October 2024 we left for Japan with empty suitcases and our hearts full of wishes.
        We returned with full suitcases, two happy hearts and a ring on Esther's finger.
      </p>
      <p className="description">
        Those who know us will know that our love for watching anime, reading manga and playing
        video games brought us together; but it is our love for each other that keeps us going.
      </p>
      <p className="description">
        On the 6th of June, we will take another step forward and officially unite our hearts,
        and we are very happy that you will be a part of it.
      </p>
    </StyledOurStory>
  );
};

export default OurStory;