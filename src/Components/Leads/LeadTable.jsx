import 'react-bootstrap-table2-paginator/dist/react-bootstrap-table2-paginator.min.css';
import paginationFactory from 'react-bootstrap-table2-paginator';
import BootstrapTable from 'react-bootstrap-table-next';
import Table from 'react-bootstrap/Table';
import data from './LeadTableData.json';
const headers = ["Lead Name","Contact Name","Email","Phone","Value" , "Date Added", "Contacted"];


export const LeadsTable = () => {
  return (
    <div className='Tile'>
    <Table responsive>
      <thead>
        <tr>
          <th>#</th>
          {headers.map((header, index) => (
            <th key={index}>{header}</th>
          ))}
        </tr>
      </thead>
      <tbody>

      {data.map((el, index) => {
        return (
        <tr>
          <td>{index}</td>
          <td>{el.project}</td>
          <td>{el.contact_name}</td>
          <td>{el.email}</td>
          <td>{el.phone}</td>
          <td>{el.value}</td>
          <td>{el.date_added}</td>
          <td>{el.contacted}</td>
        </tr>)
      }) }
        {/* <tr>
          <td>1</td>
          {Array.from({ length: 8}).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>2</td>
          {Array.from({ length: 8 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr>
        <tr>
          <td>3</td>
          {Array.from({ length: 8 }).map((_, index) => (
            <td key={index}>Table cell {index}</td>
          ))}
        </tr> */}
      </tbody>
    </Table>
    </div>
  );
}
