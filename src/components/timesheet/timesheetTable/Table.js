import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';
import { rowDataArray } from '../../../data';

function createData(
  Name: string,
  Department: string,
  Company: string,
  WeekEnding: string,
  TotalHours: string,
  SubmittedAt: string,
  Status: string
) {
  return { Name, Department, Company, WeekEnding, TotalHours, SubmittedAt, Status };
}

const rows = rowDataArray.map(rowData => createData(
  rowData.Name,
  rowData.Department,
  rowData.Company,
  rowData.WeekEnding,
  rowData.TotalHours,
  rowData.SubmittedAt,
  rowData.Status
));


export default function BasicTable() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Department</TableCell>
              <TableCell align="right">Company</TableCell>
              <TableCell align="right">Week Ending</TableCell>
              <TableCell align="right">Total Hours</TableCell>
              <TableCell align="right">SubmittedAt</TableCell>
              <TableCell align="right">Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(rowsPerPage > 0
              ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              : rows
            ).map((row) => (
              <TableRow key={row.Name}>
                <TableCell component="th" scope="row">
                  {row.Name}
                </TableCell>
                <TableCell align="right">{row.Department}</TableCell>
                <TableCell align="right">{row.Company}</TableCell>
                <TableCell align="right">{row.WeekEnding}</TableCell>
                <TableCell align="right">{row.TotalHours}</TableCell>
                <TableCell align="right">{row.SubmittedAt}</TableCell>
                <TableCell align="right">
                  <span
                    style={{
                      backgroundColor: row.Status === 'pending' ? 'yellow' : row.Status === 'rejected' ? 'red' : 'inherit',
                      padding: '5px 7px',
                      borderRadius: '10px'
                    }}
                  >
                    {row.Status}
                  </span>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <hr/>
    </div>
  );
}
