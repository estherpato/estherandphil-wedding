import { FC, Fragment, useEffect, useRef, useState } from "react";
import { Button, CircularProgress, Dialog, DialogActions, DialogContent, DialogTitle, FormControl, FormControlLabel, FormLabel, Input, InputLabel, MenuItem, Radio, RadioGroup, Select, SelectChangeEvent, styled, TextField, Typography, useTheme } from "@mui/material";
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

const StyledMenuItem = styled(MenuItem) <{ activeTheme: string }>`
  color: ${({ activeTheme }) => activeTheme === 'light' ? '#000C2B' : '#FFFFFF'};
`;

type RadioAnswers = "yes" | "no" | "maybe";

type Form = {
  fullName: string;
  attendance: "" | "yes" | "no";
  partner: RadioAnswers;
  partnerName: string;
  bringChildren: RadioAnswers;
  howManyChildren: string;
  hotelRoom: RadioAnswers;
  fromDate: string;
  toDate: string;
  food: RadioAnswers;
  foodRestriction: string;
  comments: string;
} & Record<`child${number}`, string>;

type AttendanceFormProps = {
  activeTheme: 'dark' | 'light';
}

const AttendanceForm: FC<AttendanceFormProps> = ({ activeTheme }) => {
  const { t } = useTranslation();
  const inputNameRef = useRef<HTMLInputElement | null>(null);

  const postUrl = "https://script.google.com/macros/s/AKfycbxO6eov3HE12omnlPovuIaAJv71O699zwYo9wMALBu-1BkYsDanIfREfF-ab8AyaUdU/exec";
  const initialFormState: Form = {
    fullName: "",
    attendance: "",
    partner: "no",
    partnerName: "",
    bringChildren: "no",
    howManyChildren: "",
    hotelRoom: "no",
    fromDate: "2026-06-05",
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

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent
  ) => {
    const { name, value } = event.target as { name: string; value: string };

    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
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

    const payload: Form = {
      ...formData,
      fromDate: formData.hotelRoom === 'no' ? '' : formData.fromDate,
    };

    setLoading(true);

    try {
      const response = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(payload).toString()
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
    setFormData(prev => ({
      ...prev,
      attendance: 'yes',
    }));
    setAttendanceDialogDialog({ title: '', open: false, message: '' });
  }

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
        value={formData.fullName}
        inputRef={inputNameRef}
      />

      <StyledAttendanceFormControl fullWidth required>
        <FormLabel id="attendance-label" htmlFor="attendance">{t('FORM.CONFIRMATION')}</FormLabel>
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
            <FormLabel id="partner-label" htmlFor="partner">{t('FORM.PLUS_ONE')}</FormLabel>
            <RadioGroup name="partner" value={formData.partner} onChange={handleChange} row>
              <FormControlLabel value="yes" control={<Radio />} label={t('FORM.POSITIVE')} />
              <FormControlLabel value="no" control={<Radio />} label={t('FORM.NEGATIVE')} />
              <FormControlLabel value="maybe" control={<Radio />} label={t('FORM.UNSURE')} />
            </RadioGroup>
          </FormControl>
          {
            formData.partner === "yes" && (
              <TextField
                required
                id="partnerName"
                name="partnerName"
                label={t('FORM.PARTNER_NAME_LABEL')}
                variant="outlined"
                onChange={handleChange}
              />
            )}
          {
            formData.partner === "maybe" &&
            <Typography variant="body2" fontSize={20} sx={{ marginTop: '-1rem' }}>
              {t('FORM.PARTNER_NOTE')}
            </Typography>
          }

          <FormControl fullWidth required>
            <FormLabel id="bringChildren-label" htmlFor="bringChildren">{t('FORM.CHILDREN_QUESTION')}</FormLabel>
            <RadioGroup id="bringChildren" name="bringChildren" value={formData.bringChildren} onChange={handleChange} row>
              <FormControlLabel value="yes" control={<Radio />} label={t('FORM.POSITIVE')} />
              <FormControlLabel value="no" control={<Radio />} label={t('FORM.NEGATIVE')} />
              <FormControlLabel value="maybe" control={<Radio />} label={t('FORM.UNSURE')} />
            </RadioGroup>
          </FormControl>
          {
            formData.bringChildren === "yes" &&
            <Fragment>
              <FormControl fullWidth>
                <InputLabel id="howManyChildren-label" htmlFor="howManyChildren">{t('FORM.HOW_MANY_CHILDREN')}</InputLabel>
                <Select
                  labelId="howManyChildren-label"
                  id="howManyChildren"
                  name="howManyChildren"
                  value={formData.howManyChildren}
                  label="How many?"
                  onChange={handleChange}
                >
                  <StyledMenuItem activeTheme={activeTheme} value={1}>1</StyledMenuItem>
                  <StyledMenuItem activeTheme={activeTheme} value={2}>2</StyledMenuItem>
                  <StyledMenuItem activeTheme={activeTheme} value={3}>3</StyledMenuItem>
                </Select>
              </FormControl>
              {Number(formData.howManyChildren) > 0 &&
                Array.from({ length: Number(formData.howManyChildren) }, (_, index) => {
                  const valueName: `child${number}` = `child${index + 1}`;

                  return (
                    <TextField
                      key={valueName}
                      fullWidth
                      sx={{ padding: 0 }}
                      label={t('FORM.CHILD_NAME_AGE', { index: index + 1 })}
                      name={valueName}
                      value={formData[valueName] ?? ""}
                      onChange={handleChange}
                    />
                  );
                })}

            </Fragment>
          }
          {
            formData.bringChildren === "maybe" &&
            <Typography variant="body2" fontSize={20} sx={{ marginTop: '-1rem' }}>
              {t('FORM.CHILD_NOTE')}
            </Typography>
          }

          <FormControl fullWidth required>
            <FormLabel id="hotelRoom-label" htmlFor="hotelRoom">{t('FORM.HOTEL')}</FormLabel>
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
                  value={formData.fromDate}
                  onChange={handleChange}
                  inputProps={{
                    min: "2026-06-05"
                  }}
                />
              </FormControl>
              <FormControl fullWidth required>
                <FormLabel htmlFor="toDate">{t('FORM.DATE_TO')}</FormLabel>
                <Input id="toDate" name="toDate" type="date" value={formData.toDate} onChange={handleChange} inputProps={{
                  min: "2026-06-07"
                }} />
              </FormControl>
            </>
          )}
          {
            formData.hotelRoom === "maybe" &&
            <Typography variant="body2" fontSize={20} sx={{ marginTop: '-1rem' }}>
              {t('FORM.HOTEL_NOTE')}
            </Typography>
          }

          <FormControl fullWidth required>
            <FormLabel id="food-label" htmlFor="food">{t('FORM.FOOD')}</FormLabel>
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
