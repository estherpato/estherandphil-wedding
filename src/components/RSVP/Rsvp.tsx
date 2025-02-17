import { Button, Divider, FormControl, FormControlLabel, FormLabel, Input, InputLabel, Radio, RadioGroup, styled } from "@mui/material";

const StyledRsvp = styled('section')`
  padding: 0 2rem 2rem;

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
    color: ${({theme}) => (theme.palette.text.primary)};
  }

  & form {
    margin-top: 1rem;
  }
`

const StyledInputLabel = styled(InputLabel)`
  color: ${({theme}) => (theme.palette.text.primary)};
  font-family: 'Libre Baskerville';
`

const StyledInput = styled(Input)`
  color: ${({theme}) => (theme.palette.text.primary)};
  font-family: 'Libre Baskerville';
`;

const StyledFormLabel = styled(FormLabel)`
  color: ${({theme}) => (theme.palette.text.primary)};
  font-family: 'Libre Baskerville';
`

const StyledFormControlLabel = styled(FormControlLabel)`
  color: ${({theme}) => (theme.palette.text.primary)};
  font-family: 'Libre Baskerville';

  & span {
    color: ${({theme}) => (theme.palette.text.primary)};
    font-family: 'Libre Baskerville';
  }
`

const StyledRadio = styled(Radio)`
  color: ${({theme}) => (theme.palette.text.primary)};
`

const StyledFormControl = styled(FormControl)`
  margin-top: 1rem;
  display: flex;
  align-items: center;
  border: ${({theme}) => (`2px solid ${theme.palette.primary.main}`)};
  padding: 1rem 0 0.5rem;
`

const Rsvp = () => {
  return (
    <StyledRsvp>
      <h2>RSVP</h2>
      <Divider />
      <div>
        <p className="description">We would love to see you there!</p>
        <p className="description">Please register using the form below by simply adding your name and confirmation.</p>
      </div>
      <form autoComplete="off">
        <FormControl fullWidth={true} >
          <StyledInputLabel htmlFor="name">Name + Surname(s)</StyledInputLabel>
          <StyledInput id="name" placeholder="Pepito Pérez" />
        </FormControl>
        <StyledFormControl fullWidth={true}>
          <StyledFormLabel id="assistance">Are you coming?</StyledFormLabel>
          <RadioGroup
            aria-labelledby="assistance"
            defaultValue="yes"
            name="assistance"
            sx={{flexDirection: 'row'}}
          >
            <StyledFormControlLabel value="yes" control={<StyledRadio />} label="Yes" />
            <StyledFormControlLabel value="no" control={<StyledRadio />} label="No" />
          </RadioGroup>
        </StyledFormControl>
        <Button variant="contained" fullWidth={true} sx={{mt: 2}}>Send</Button>
      </form>
    </StyledRsvp>
  )
};

export default Rsvp;