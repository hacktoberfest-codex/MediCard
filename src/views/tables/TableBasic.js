// ** MUI Imports
import Paper from '@mui/material/Paper'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'

const createData = (name, calories, fat, carbs, protein) => {
  return { name, calories, fat, carbs, protein }
}

const rows = [
  {
    org_name: 'Brothel',
    doct_name: 'Sehgal',
    doct_specific: 'Urologists ',
    appoint_day: 'abcd',
    appoint_date: '69/69/6969',
    appoint_time: '69:69',
  },
  {
    org_name: 'Brothel',
    doct_name: 'Sehgal',
    doct_specific: 'Colorectal',
    appoint_day: 'abcd',
    appoint_date: '69/69/6969',
    appoint_time: '69:69',
  },
]

const TableBasic = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell align='center'>Organization</TableCell>
            <TableCell align='center'>Doctor's Name</TableCell>
            <TableCell align='center'>Specialization</TableCell>
            <TableCell align='center'>Apointed Day</TableCell>
            <TableCell align='center'>Apointed Date</TableCell>
            <TableCell align='center'>Apointed Time</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={index}
              sx={{
                '&:last-of-type td, &:last-of-type th': {
                  border: 0
                }
              }}
            >
              <TableCell value='org_name' align='center'>{row.org_name}</TableCell>
              <TableCell value='oct_name' align='center'>Dr. {row.doct_name}</TableCell>
              <TableCell value='doct_specific' align='center'>{row.doct_specific}</TableCell>
              <TableCell value='appoint_day' align='center'>{row.appoint_day}</TableCell>
              <TableCell value='appoint_date' align='center'>{row.appoint_date}</TableCell>
              <TableCell value='appoint_time' align='center'>{row.appoint_time}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

export default TableBasic
