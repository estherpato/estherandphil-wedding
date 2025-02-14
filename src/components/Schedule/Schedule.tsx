import { Divider, styled, Table, TableBody, TableCell, TableRow} from "@mui/material";
import { create } from "@mui/material/styles/createTransitions";
import { FC } from "react";

const StyledSchedule = styled('section')`
  padding: 0 2rem;

  & h2 {
    font-family: 'Cookie';
    text-align: center;
    font-size: 4rem;
  }

  & h3 {
    font-family: 'Bad Script';
    text-align: center;
    font-size: 2rem;
  }

  & .description {
    font-family: 'Libre Baskerville';
    line-height: 1.5;
    text-align: center;
    margin-top: 0.85rem;
  }
`

const createData = (id: number, time: string, description: string) => {
  return {id, time, description};
}

const Schedule: FC = () => {
  const rows = [
    createData(1, '18:00', 'Civil ceremony in the hotel garden'),
    createData(1, '19:00', 'Cocktail reception in the hotel garden'),
    createData(1, '20:30', 'Dinner in the "El Patio" lounge'),
    createData(1, '22:00', 'Party and dancing until the body can take it'),
  ]

  return (
    <StyledSchedule>
      <h2>The Event</h2>
      <h3>Ceremony & Reception</h3>
      <Divider />
      <Table sx={{ minWidth: 300, marginTop: '1rem' }} aria-label="event schedule">
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.id}
              sx={{'&:last-child': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                <strong>{row.time}</strong>
              </TableCell>
              <TableCell align="left">{row.description}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

    </StyledSchedule>
  );
};

export default Schedule;