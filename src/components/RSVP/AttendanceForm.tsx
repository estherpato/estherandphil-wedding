import { useState } from "react";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, styled, TextField, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";

const StyledForm = styled('form')`
  display: flex;
    flex-direction: column;
    gap: 1rem;
`;

const StyledAttendanceFormControl = styled(FormControl)`
  align-items: center;
  padding: 1rem 0;
  border: ${({ theme }) => `2px solid ${theme.palette.primary.main}`};
`

type Form = {
  fullName: string;
  attendance: string;
  partner: string;
  partnerName: string;
  hotelRoom: string;
  fromDate: string;
  toDate: string;
  food: string;
  foodRestriction: string;
  comments: string;
}

const AttendanceForm = () => {
  const { t } = useTranslation();

  const postUrl = "https://script.google.com/macros/s/AKfycbyl37Xag-xWxx4r3cnp5RkXh6hUg_gEwz16w2rvBFMw-PNVZvVmDgSDSGd37Nucgw3x/exec";
  const initialFormState: Form = {
    fullName: "",
    attendance: "",
    partner: "no",
    partnerName: "",
    hotelRoom: "no",
    fromDate: "",
    toDate: "",
    food: "no",
    foodRestriction: "",
    comments: "",
  };
  const [formData, setFormData] = useState<Form>(initialFormState);
  const [loading, setLoading] = useState(false);
  const [dialog, setDialog] = useState({ title: '', open: false, message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (formData.attendance === '') return;
    setLoading(true);
    try {
      const response = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString()
      });
      setLoading(false);
      setFormData(initialFormState);
      setDialog({ title: t('MODAL.TITLE_OK'), open: true, message: response.ok ? t('MODAL.SUBMISSION_OK') : t('MODAL.SUBMISSION_KO') });
    } catch (error) {
      console.error(error);
      setLoading(false);
      setDialog({ title: t('MODAL.TITLE_ERROR'), open: true, message: t('MODAL.ERROR_MESSAGE') });
    }
  };

  return (
    <StyledForm autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        required
        id="fullName"
        name="fullName"
        label={t('FORM.NAME_LABEL')}
        variant="outlined"
        onChange={handleChange}
      />

      <StyledAttendanceFormControl fullWidth required>
        <FormLabel id="attendance">{t('FORM.CONFIRMATION')}</FormLabel>
        <RadioGroup name="attendance" value={formData.attendance} onChange={handleChange} row>
          <FormControlLabel value="yes" control={<Radio />} label={t('FORM.POSITIVE')} />
          <FormControlLabel value="no" control={<Radio />} label={t('FORM.NEGATIVE')} />
        </RadioGroup>
      </StyledAttendanceFormControl>

      {formData.attendance === "yes" && (
        <>
          <Typography sx={{ textAlign: 'center', mt: 1, mb: 1 }}>
            {t('FORM.EXTRA_QUESTIONS')}
          </Typography>
          <FormControl fullWidth required>
            <FormLabel id="partner">{t('FORM.PLUS_ONE')}</FormLabel>
            <RadioGroup name="partner" value={formData.partner} onChange={handleChange} row>
              <FormControlLabel value="yes" control={<Radio />} label={t('FORM.POSITIVE')} />
              <FormControlLabel value="no" control={<Radio />} label={t('FORM.NEGATIVE')} />
              <FormControlLabel value="maybe" control={<Radio />} label={t('FORM.UNSURE')} />
            </RadioGroup>
          </FormControl>
          {formData.partner === "yes" && (
            <TextField
              required
              id="partnerName"
              name="partnerName"
              label={t('FORM.PARTNER_NAME_LABEL')}
              variant="outlined"
              onChange={handleChange}
            />
          )}
          {formData.partner === "maybe" &&
            <Typography variant="body2" fontSize={20}>
              {t('FORM.PARTNER_NOTE')}
            </Typography>}

          <FormControl fullWidth required>
            <FormLabel id="hotelRoom">{t('FORM.HOTEL')}</FormLabel>
            <RadioGroup name="hotelRoom" value={formData.hotelRoom} onChange={handleChange} row>
              <FormControlLabel value="yes" control={<Radio />} label={t('FORM.POSITIVE')} />
              <FormControlLabel value="no" control={<Radio />} label={t('FORM.NEGATIVE')} />
              <FormControlLabel value="maybe" control={<Radio />} label={t('FORM.UNSURE')} />
            </RadioGroup>
          </FormControl>
          {formData.hotelRoom === "yes" && (
            <>
              <FormControl fullWidth required>
                <FormLabel htmlFor="fromDate">{t('FORM.DATE_FROM')}</FormLabel>
                <Input id="fromDate" name="fromDate" type="date" value={formData.fromDate} onChange={handleChange} />
              </FormControl>
              <FormControl fullWidth required>
                <FormLabel htmlFor="toDate">{t('FORM.DATE_TO')}</FormLabel>
                <Input id="toDate" name="toDate" type="date" value={formData.toDate} onChange={handleChange} />
              </FormControl>
            </>
          )}
          {
            formData.hotelRoom === "maybe" &&
            <Typography variant="body2" fontSize={20}>
              {t('FORM.HOTEL_NOTE')}
            </Typography>
          }

          <FormControl fullWidth required>
            <FormLabel id="food">{t('FORM.FOOD')}</FormLabel>
            <RadioGroup name="food" value={formData.food} onChange={handleChange} row>
              <FormControlLabel value="yes" control={<Radio />} label={t('FORM.POSITIVE')} />
              <FormControlLabel value="no" control={<Radio />} label={t('FORM.NEGATIVE')} />
            </RadioGroup>
          </FormControl>
          {formData.food === "yes" && (
            <TextField
              required
              id="foodRestriction"
              name="foodRestriction"
              label={t('FORM.FOOD_RESTRICTION')}
              variant="outlined"
              onChange={handleChange}
            />
          )}
          <Typography>{t('FORM.COMMENTS')}</Typography>
          <TextField
            id="comments"
            name="comments"
            multiline
            maxRows={4}
            onChange={handleChange}
          />
        </>
      )}

      <Button variant="contained" fullWidth sx={{ mt: 2 }} type="submit" disabled={loading}>
        {loading ? <CircularProgress size={24} /> : "Send"}
      </Button>
      <Dialog open={dialog.open} disableEscapeKeyDown>
        <DialogTitle>{dialog.title}</DialogTitle>
        <DialogContent>
          <Typography>{dialog.message}</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setDialog({ title: "", open: false, message: "" })}
            autoFocus
            variant="contained"
          >
            OK
          </Button>
        </DialogActions>
      </Dialog>
    </StyledForm>
  );
};

export default AttendanceForm;
