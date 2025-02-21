import { styled, Table, TableBody, TableCell, TableRow, Typography} from "@mui/material";
import { FC } from "react";
import { SectionTitle } from "../common/SectionTitle";

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
    color: ${({theme}) => theme.palette.text.disabled}
  }

`

const createData = (id: number, time: string, description: string) => {
  return {id, time, description};
}

const Schedule: FC = () => {
  const rows = [
    createData(1, '18:00', 'Civil ceremony in the hotel garden'),
    createData(1, '19:00', 'Cocktail reception in the hotel garden'),
    createData(1, '20:30', 'Dinner in "El Patio" lounge'),
    createData(1, '22:00', 'Party and dancing until the body can take it'),
  ]

  return (
    <StyledSchedule>
      <SectionTitle component="h2" variant="h2">The Event</SectionTitle>
      <Typography component="h3" variant="body2">Ceremony & Reception</Typography>

      <Table sx={{ minWidth: 300, marginTop: '1rem' }} aria-label="event schedule">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{'&:last-child': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <Typography><strong>{row.time}</strong></Typography>
              </TableCell>
              <TableCell align="left"><Typography>{row.description}</Typography></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Typography className="foot-note">*Remember that times are approximate.</Typography>
    </StyledSchedule>
  );
};

export default Schedule;