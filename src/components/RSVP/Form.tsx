import { useState } from "react";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, Input, InputLabel, Radio, RadioGroup, styled, Typography } from "@mui/material";

const StyledForm = styled('form')`
  display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const StyledAttendanceFormControl = styled(FormControl)`
  align-items: center;
  padding: 1rem 0;
  border: ${({theme}) => `2px solid ${theme.palette.primary.main}`};
`

type Form = {
  name: string;
  attendance: string;
  partner: string;
  partnerName: string;
  hotelRoom: string;
  fromDate: string;
  toDate: string;
  food: string;
  foodRestriction: string;
}

const AttendanceForm = () => {
  const postUrl = "https://script.google.com/macros/s/AKfycbyl37Xag-xWxx4r3cnp5RkXh6hUg_gEwz16w2rvBFMw-PNVZvVmDgSDSGd37Nucgw3x/exec";
  const initialFormState: Form = {
    name: "",
    attendance: "yes",
    partner: "no",
    partnerName: "",
    hotelRoom: "no",
    fromDate: "",
    toDate: "",
    food: "no",
    foodRestriction: ""
  };
  const [formData, setFormData] = useState<Form>(initialFormState);
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState({ title: '', open: false, message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    /* if (!validateForm()) return; */
    setLoading(true);
    try {
      const response = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });
      setLoading(false);
      setFormData(initialFormState);
      setDialog({ title: "Thank you!", open: true, message: response.ok ? "Form submitted successfully!" : "Error submitting form. Please try again." });
    } catch (error) {
      setLoading(false);
      setDialog({ title: "Oops!", open: true, message: "An unexpected error occurred. Try again later" });
    }
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
      <FormControl fullWidth required>
        <InputLabel htmlFor="name">Name + Surname(s)</InputLabel>
        <Input id="name" name="name" value={formData.name} onChange={handleChange} />
      </FormControl>

      <StyledAttendanceFormControl fullWidth required>
        <FormLabel id="attendance">Are you coming?</FormLabel>
        <RadioGroup name="attendance" value={formData.attendance} onChange={handleChange} row>
          <FormControlLabel value="yes" control={<Radio />} label="Yes" />
          <FormControlLabel value="no" control={<Radio />} label="No" />
        </RadioGroup>
      </StyledAttendanceFormControl>

      {formData.attendance === "yes" && (
        <>
          <Typography sx={{textAlign: 'center', mt: 1, mb: 1}}>We are almost ready! Just a few more questions to make sure everything will be perfect.</Typography>
          <FormControl fullWidth required>
            <FormLabel id="partner">Are you bringing a +1 along?</FormLabel>
            <RadioGroup name="partner" value={formData.partner} onChange={handleChange} row>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
              <FormControlLabel value="maybe" control={<Radio />} label="I'm not sure" />
            </RadioGroup>
          </FormControl>
          {formData.partner === "yes" && (
            <FormControl fullWidth required>
              <InputLabel htmlFor="partnerName">Full name of your partner</InputLabel>
              <Input id="partnerName" name="partnerName" value={formData.partnerName} onChange={handleChange} />
            </FormControl>
          )}
          {formData.partner === "maybe" &&
            <Typography variant="body2" fontSize={20}>Remember to let us know well in advance if you will be bringing a partner to the wedding.</Typography>}

          <FormControl fullWidth required>
            <FormLabel id="hotelRoom">Do you need a hotel room?</FormLabel>
            <RadioGroup name="hotelRoom" value={formData.hotelRoom} onChange={handleChange} row>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
              <FormControlLabel value="maybe" control={<Radio />} label="I'm not sure" />
            </RadioGroup>
          </FormControl>
          {formData.hotelRoom === "yes" && (
            <>
              <FormControl fullWidth required>
                <FormLabel htmlFor="fromDate">From when?</FormLabel>
                <Input id="fromDate" name="fromDate" type="date" value={formData.fromDate} onChange={handleChange} />
              </FormControl>
              <FormControl fullWidth required>
                <FormLabel htmlFor="toDate">Until when?</FormLabel>
                <Input id="toDate" name="toDate" type="date" value={formData.toDate} onChange={handleChange} />
              </FormControl>
            </>
          )}
          {
            formData.hotelRoom === "maybe" &&
            <Typography variant="body2" fontSize={20}>
              Please remember to let us know in advance if you need to book a room at the hotel. We cannot guarantee availability if we are notified too late.
            </Typography>
          }

          <FormControl fullWidth required>
            <FormLabel id="food">Do you have any allergies, intolerances or special diets?</FormLabel>
            <RadioGroup name="food" value={formData.food} onChange={handleChange} row>
              <FormControlLabel value="yes" control={<Radio />} label="Yes" />
              <FormControlLabel value="no" control={<Radio />} label="No" />
            </RadioGroup>
          </FormControl>
          {formData.food === "yes" && (
            <FormControl fullWidth>
              <InputLabel htmlFor="foodRestriction">Let us know</InputLabel>
              <Input id="foodRestriction" name="foodRestriction" value={formData.foodRestriction} onChange={handleChange} />
            </FormControl>
          )}
        </>
      )}

      <Button variant="contained" fullWidth sx={{ mt: 2 }} type="submit" disabled={loading}>
        {loading ? <CircularProgress size={24} /> : "Send"}
      </Button>
      <Dialog open={dialog.open} onClose={() => setDialog({ title: "", open: false, message: "" })}>
        <DialogTitle>{dialog.title}</DialogTitle>
        <DialogContent>
          <Typography>{dialog.message}</Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setDialog({ title: "", open: false, message: "" })} autoFocus>OK</Button>
        </DialogActions>
      </Dialog>
    </StyledForm>
  );
};

export default AttendanceForm;
