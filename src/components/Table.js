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

function createData(Process, Arrival, BurstTime, Priority) {
  return { Process, Arrival, BurstTime, Priority };
}

const rows = [
  createData("P1", 0, 2, 2),
  createData("P2", 1, 3, 1),
  createData("P3", 0, 1, 2),
  createData("P4", 5, 1, 0),
  createData("P5", 2, 4, 0),
  createData("P6", 5, 2, 6),
  createData("P7", 19, 5, 6),
];

export default function CustomizedTables() {
  return (
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
  );
}
