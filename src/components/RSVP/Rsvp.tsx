import { styled, Typography } from "@mui/material";
import AttendanceForm from "./AttendanceForm";
import { SectionTitle } from "../common/SectionTitle";
import { useTranslation } from "react-i18next";

const StyledRsvp = styled('section')`
  padding: 0 2rem 2rem;

  & form {
    margin-top: 1rem;
  }
`

const Rsvp = () => {
  const { t } = useTranslation();

  return (
    <StyledRsvp>
      <SectionTitle component="h2" variant="h2">{t('TITLES.RSVP')}</SectionTitle>

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