import { Divider, styled, Typography } from "@mui/material";
import AttendanceForm from "./AttendanceForm";

const StyledRsvp = styled('section')`
  padding: 0 2rem 2rem;

  & h2 {
    font-family: 'Cookie';
    text-align: center;
    font-size: 4rem;
  }

  & form {
    margin-top: 1rem;
  }
`

const Rsvp = () => {


  return (
    <StyledRsvp>
      <Typography
          sx={{lineHeight: 1.5, textAlign: 'center', mt: 1}}
          component="h2"
        >
          RSVP
        </Typography>
      <Divider />
      <div>
        <Typography
          sx={{lineHeight: 1.5, textAlign: 'center', mt: 1}}
          component="p"
          variant="body1"
        >
          We would love to see you there!
        </Typography>
        <Typography
          sx={{lineHeight: 1.5, textAlign: 'center', mt: 1}}
          component="p"
          variant="body1"
        >
          Please register using the form below by simply adding your name and confirmation.
        </Typography>
      </div>
      <AttendanceForm />
    </StyledRsvp>
  )
};

export default Rsvp;