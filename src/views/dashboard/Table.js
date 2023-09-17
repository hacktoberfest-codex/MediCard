// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Chip from '@mui/material/Chip'
import Table from '@mui/material/Table'
import TableRow from '@mui/material/TableRow'
import TableHead from '@mui/material/TableHead'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import Typography from '@mui/material/Typography'
import TableContainer from '@mui/material/TableContainer'

const rows = [
  {
    age: 27,
    status: 'current',
    date: '09/27/2023',
    name: 'Rajesh',
    salary: 'Dr. Anika Patel',
    email: 'cardiology',
   
  },
  {
    age: 61,
    date: '09/23/2023',
    salary: 'Dr. Anand Kumar',
    status: 'professional',
    name: 'Rohit',
    email: 'dermatology ',
    
  },
  {
    age: 59,
    date: '7/15/2023',
    name: 'Minnie Roy',
    status: 'rejected',
    salary: 'Dr. Rajesh Sharma',
    email: 'endocrinology',
    
  },
  {
    age: 30,
    date: '06/12/2023',
    status: 'resigned',
    salary: 'Dr. Priya Singh',
    name: 'Deepak',
    email: 'gastroenterology',
   
  },
  {
    age: 66,
    status: 'applied',
    date: '03/24/2023',
    salary: 'Dr. Deepika Reddy',
    name: 'Anand tharad',
    
    email: 'gynaecology'
  },
  {
    age: 33,
    date: '08/25/2023',
    salary: 'Dr. Vikram Khanna',
    name: 'Dibya Day',
    status: 'professional',
    email: 'orthopaedics',
   
  },
  {
    age: 61,
    status: 'current',
    date: '06/01/2023',
    salary: 'Dr. Ayesha Desai',
    name: 'Sumit',
    email: 'otolaryngology'
  },
  {
    age: 22,
    date: '12/03/2023',
    salary: 'Dr. Nisha Verma',
    name: 'Sunil',
    status: 'professional',
    email: 'paediatrics'
  },
  {
    age: 22,
    date: '12/03/2023',
    salary: 'Dr. Nisha Verma',
    name: 'Sunil',
    status: 'professional',
    email: 'paediatrics'
  },
  {
    age: 22,
    date: '12/03/2023',
    salary: 'Dr. Nisha Verma',
    name: 'Sunil',
    status: 'professional',
    email: 'paediatrics'
  }

]

const statusObj = {
  applied: { color: 'info' },
  rejected: { color: 'error' },
  current: { color: 'primary' },
  resigned: { color: 'warning' },
  professional: { color: 'success' }
}

const DashboardTable = () => {
  return (
    <Card>
      <TableContainer>
        <Table sx={{ minWidth: 800 }} aria-label='table in dashboard'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell>Problem</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Doctor Name</TableCell>
              <TableCell>Age</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <TableRow hover key={row.name} sx={{ '&:last-of-type td, &:last-of-type th': { border: 0 } }}>
                <TableCell sx={{ py: theme => `${theme.spacing(0.5)} !important` }}>
                  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 500, fontSize: '0.875rem !important' }}>{row.name}</Typography>
                    <Typography variant='caption'>{row.designation}</Typography>
                  </Box>
                </TableCell>
                <TableCell>{row.email}</TableCell>
                <TableCell>{row.date}</TableCell>
                <TableCell>{row.salary}</TableCell>
                <TableCell>{row.age}</TableCell>
                <TableCell>
                  <Chip
                    label={row.status}
                    color={statusObj[row.status].color}
                    sx={{
                      height: 24,
                      fontSize: '0.75rem',
                      textTransform: 'capitalize',
                      '& .MuiChip-label': { fontWeight: 500 }
                    }}
                  />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  )
}

export default DashboardTable
