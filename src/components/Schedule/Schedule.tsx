import { styled, Table, TableBody, TableCell, TableRow, Typography } from "@mui/material";
import { FC } from "react";
import { SectionTitle } from "../common/SectionTitle";
import { useTranslation } from "react-i18next";

const StyledSchedule = styled('section')`
  padding: 0 2rem;

  & h3 {
    text-align: center;
    font-size: 2rem;
    margin-top: -1rem;
  }

  & table td {
    font-size: 0.85rem;
  }

  & .foot-note {
    font-size: 0.75rem;
    margin-top: 1rem;
    color: ${({ theme }) => theme.palette.text.disabled}
  }

`

const createData = (id: number, time: string, description: string) => {
  return { id, time, description };
}

const Schedule: FC = () => {
  const { t } = useTranslation();

  const rows = [
    createData(1, '18:00', t('SCHEDULE.ROW1')),
    createData(2, '19:30', t('SCHEDULE.ROW2')),
    createData(3, '22:00', t('SCHEDULE.ROW3')),
    createData(4, '24:00', t('SCHEDULE.ROW4')),
  ]

  return (
    <StyledSchedule>
      <SectionTitle component="h2" variant="h2">{t('TITLES.THE_EVENT')}</SectionTitle>
      <Typography component="h3" variant="body2">{t('TITLES.CEREMONY_AND_RECEPTION')}</Typography>

      <Table sx={{ minWidth: 300, marginTop: '1rem' }} aria-label="event schedule">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ '&:last-child': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography><strong>{row.time}</strong></Typography>
              </TableCell>
              <TableCell align="left"><Typography>{row.description}</Typography></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography className="foot-note">{t('SCHEDULE.NOTE')}</Typography>
    </StyledSchedule>
  );
};

export default Schedule;