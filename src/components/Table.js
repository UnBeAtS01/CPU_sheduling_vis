import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#27292d",
    color: "#f9feff",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: "#a8b3cf",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

function createData(row) {
  let Process = row[0];
  let Arrival = row[1];
  let BurstTime = row[2];
  let Priority = row[3];
  return { Process, Arrival, BurstTime, Priority };
}

export default function CustomizedTables({ array, setProcessTable }) {
  const [rows, setRow] = React.useState([]);
  React.useEffect(() => {
    let val = array.map((ele) => createData(ele));
    setRow(val);
  }, [array]);
  return (
    <>
      <TableContainer
        styled={{ backgroundColor: "transparent" }}
        component={Paper}
      >
        <Table
          sx={{ Width: 300, Height: 300, fontSize: 14 }}
          aria-label="customized table"
        >
          <TableHead>
            <TableRow>
              <StyledTableCell>Process</StyledTableCell>
              <StyledTableCell align="right">Arrival Time</StyledTableCell>
              <StyledTableCell align="right">Burst Time</StyledTableCell>
              <StyledTableCell align="right">Priority</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <StyledTableRow key={row.Process}>
                <StyledTableCell align="right">{row.Process}</StyledTableCell>
                <StyledTableCell align="right">{row.Arrival}</StyledTableCell>
                <StyledTableCell align="right">{row.BurstTime}</StyledTableCell>
                <StyledTableCell align="right">{row.Priority}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
