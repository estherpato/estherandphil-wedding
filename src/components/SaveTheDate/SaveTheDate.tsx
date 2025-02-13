import { Divider, styled } from "@mui/material";

const StyledSaveTheDate = styled('section')`
  font-family: 'Libre Baskerville';
  padding: 2rem;
  line-height: 1.5;

  & h2 {
    font-family: 'Cookie';
    text-align: center;
    font-size: 4rem;
  }

  & .subtitle {
    text-align: center;
    font-family: 'Bad Script';
    font-size: 1.25rem;
    margin-top: 1.5rem;

    &.question {
      font-size: 1.5rem;
    }
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

  & .divider {
    background-image: url('cherry-blossom.png');
    background-position: center;
    background-size: contain;
    width: 40px;
    height: 40px;
    margin: 1rem auto;
  }
`

const SaveTheDate = () => {
  return (
    <StyledSaveTheDate>
      <h2>Save the date!</h2>
      <Divider />

      <p className="subtitle">Join us as we seal our love with a "yes" that will last a lifetime</p>

      <p className="subtitle question"><strong>When?</strong></p>
      <p className="description">6th of June, 2026 · 18:00</p>

      <div className="divider"/>

      <p className="subtitle question"><strong>Where?</strong></p>
      <p className="description"><strong>Hotel Toros de Guisando</strong></p>
      <p className="small-description top">Travesía del Paseo de Recoletos, 53</p>
      <p className="small-description">05270 · El Tiemblo</p>

    </StyledSaveTheDate>
  );
};

export default SaveTheDate;