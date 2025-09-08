import { useEffect, useRef, useState } from "react";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, Input, Radio, RadioGroup, styled, TextField, Typography, useTheme } from "@mui/material";
import { useTranslation } from "react-i18next";
import JSConfetti from 'js-confetti';

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
  const inputNameRef = useRef('');

  const postUrl = "https://script.google.com/macros/s/AKfycbxO6eov3HE12omnlPovuIaAJv71O699zwYo9wMALBu-1BkYsDanIfREfF-ab8AyaUdU/exec";
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
  const [confirmationDialog, setConfirmationDialog] = useState({ title: '', open: false, message: "" });
  const [attendanceDialog, setAttendanceDialogDialog] = useState({ title: '', open: false, message: "" });

  const theme = useTheme();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newFormData = {
      ...formData,
      [e.target.name]: e.target.value
    }
    setFormData(newFormData);
  };

  const throwGoodConfetti = () => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      confettiColors: [
        theme.palette.primary.main,
        theme.palette.primary.dark,
        theme.palette.primary.light,
        theme.palette.secondary.main,
        theme.palette.secondary.dark,
        theme.palette.secondary.light,
      ]
    });
  }

  const throwBadConfetti = () => {
    const jsConfetti = new JSConfetti();
    jsConfetti.addConfetti({
      emojis: ['😭'],
      confettiNumber: 100,
    });
  }

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

      if (response?.ok) {
        if (formData.attendance === 'yes') {
          throwGoodConfetti();
        } else {
          throwBadConfetti();
        }
        setLoading(false);
        setFormData(initialFormState);
        setConfirmationDialog({ title: t('MODAL.TITLE_OK'), open: true, message: t('MODAL.SUBMISSION_OK') })
      } else {
        setLoading(false);
        setConfirmationDialog({ title: t('MODAL.TITLE_ERROR'), open: true, message: t('MODAL.SUBMISSION_KO') });
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
      setConfirmationDialog({ title: t('MODAL.TITLE_ERROR'), open: true, message: t('MODAL.ERROR_MESSAGE') });
    }
  };

  const onCloseAttendanceDialog = () => {
    formData.attendance = 'yes';
    setAttendanceDialogDialog({ title: '', open: false, message: '' });
  }

  useEffect(() => {
    if (!formData.fullName && inputNameRef) {
      inputNameRef.current = "";
    }
  }, [formData.fullName]);

  useEffect(() => {
    if (formData.attendance === 'no') {
      setAttendanceDialogDialog({ title: t('MODAL_NEGATIVE.TITLE'), open: true, message: t('MODAL_NEGATIVE.MESSAGE') });
    }
  }, [formData.attendance])

  return (
    <StyledForm id="attendance-form" autoComplete="off" onSubmit={handleSubmit}>
      <TextField
        required
        id="fullName"
        name="fullName"
        label={t('FORM.NAME_LABEL')}
        variant="outlined"
        onChange={handleChange}
        inputRef={inputNameRef}
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
                <Typography fontSize={14}>{t('FORM.HOTEL_NOTE1')}</Typography>
                <Typography fontSize={14} marginBottom={2}>{t('FORM.HOTEL_NOTE2')}</Typography>
                <FormLabel htmlFor="fromDate">{t('FORM.DATE_FROM')}</FormLabel>
                <Input
                  id="fromDate"
                  name="fromDate"
                  type="date"
                  value={formData.fromDate || "2026-06-05"}
                  onChange={handleChange}
                  inputProps={{
                    min: "2026-06-05"
                  }}
                />
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
        {loading ? <CircularProgress size={24} /> : t('FORM.SEND_BUTTON')}
      </Button>
      <Dialog open={attendanceDialog.open} disableEscapeKeyDown>
        <DialogTitle sx={{ color: theme.palette.text.light }}>{attendanceDialog.title}</DialogTitle>
        <DialogContent>
          <Typography sx={{ color: theme.palette.text.light }}>{attendanceDialog.message}</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={onCloseAttendanceDialog}
            autoFocus
            variant="outlined"
          >
            {t('MODAL_NEGATIVE.BUTTON_1')}
          </Button>
          <Button
            onClick={() => setAttendanceDialogDialog({ title: "", open: false, message: "" })}
            autoFocus
            variant="contained"
          >
            {t('MODAL_NEGATIVE.BUTTON_2')}
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog open={confirmationDialog.open} disableEscapeKeyDown>
        <DialogTitle sx={{ color: theme.palette.text.light }}>{confirmationDialog.title}</DialogTitle>
        <DialogContent>
          <Typography sx={{ color: theme.palette.text.light }}>{confirmationDialog.message}</Typography>
        </DialogContent>
        <DialogActions>
          <Button
            onClick={() => setConfirmationDialog({ title: "", open: false, message: "" })}
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
