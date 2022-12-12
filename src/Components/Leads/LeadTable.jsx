import data from './LeadTableData.json';
import * as React from 'react';
import PropTypes from 'prop-types';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import IconButton from '@mui/material/IconButton';
import FirstPageIcon from '@mui/icons-material/FirstPage';
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight';
import LastPageIcon from '@mui/icons-material/LastPage';
import TableHead from '@mui/material/TableHead';

const headers = [{name: 'Lead Name', align: 'left'} , {name: 'Contact', align: 'left'}, {name: 'Email', align: 'left'},{name:'Phone', align: 'left'}, {name:'Value', align: 'right'}, {name:'Date Added', align: 'right'}, {name:'Contacted', align: 'right'}]


export function TablePaginationActions(props) {
  const theme = useTheme();
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  );
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
};





export const LeadsTable = (props) => {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - data.length) : 0;

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <TableContainer component={Paper} style={{"max-height": "65vh", "position": "relative"}}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table" >
      <TableHead style={{"position" : "sticky", "top": "0", "backgroundColor": "white"}}>
            <TableRow>
              {headers.map((header, index) => (
                <TableCell
                  key={index}
                  align={header.align}
                >
                  {header.name}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : data
          ).map((row) => (
            <TableRow key={row.key}>
              <TableCell style={{ width: 160 }} align="left">
                {row.project}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.contact_name}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.email}
              </TableCell>
              <TableCell style={{ width: 160 }} align="left">
                {row.phone}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {`£${row.value}`}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.date_added}
              </TableCell>
              <TableCell style={{ width: 160 }} align="right">
                {row.contacted}
              </TableCell>
            </TableRow>
          ))}

          {/* {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )} */}
        </TableBody>
        <TableFooter  style={{"position" : "sticky", "bottom": "-5px", "backgroundColor": "white"}}>
          <TableRow>
            <TablePagination 
              rowsPerPageOptions={[10, 15, 25, { label: 'All', value: -1 }]}
              colSpan={7}
              count={data.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}




// export const LeadsTable = () => {
//   return (
//     <div className='Tile'>
//     <Table responsive>
//       <thead>
//         <tr>
//           <th>#</th>
//           {headers.map((header, index) => (
//             <th key={index}>{header}</th>
//           ))}
//         </tr>
//       </thead>
//       <tbody>

//       {data.map((el, index) => {
//         return (
//         <tr>
//           <TableCell>{index}</TableCell>
//           <TableCell>{el.project}</TableCell>
//           <TableCell>{el.contact_name}</TableCell>
//           <TableCell>{el.email}</TableCell>
//           <TableCell>{el.phone}</TableCell>
//           <TableCell>{el.value}</TableCell> 
//           <TableCell>{el.date_added}</TableCell>
//           <TableCell>{el.contacted}</TableCell>
//         </tr>)
//       }) }
       
//       </tbody>
//     </Table>
//     </div>
//   );
// }
