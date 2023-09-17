// // ** MUI Imports
// import Grid from '@mui/material/Grid'
// import Card from '@mui/material/Card'
// import Typography from '@mui/material/Typography'
// import CardHeader from '@mui/material/CardHeader'

// // ** Demo Components Imports
// import TableBasic from 'src/views/tables/TableBasic'
// import TableCollapsible from 'src/views/tables/TableCollapsible'

// const MUITable = () => {
//   return (
// <Grid container spacing={6}>
//   <Grid item xs={12}>
//     <Typography variant='h4' style={{ color: '#9155FD ' }} >
//       See Your Appointments
//     </Typography>
//     <Typography variant='body2'>See when and where is your next appointments are...</Typography>
//   </Grid>
//   <Grid item xs={12}>
//     <Card>
//       <CardHeader title='Upcomming Appointments' titleTypographyProps={{ variant: 'h6' }} />
//       <TableBasic />
//     </Card>
//   </Grid>
//   <Grid item xs={12}>
//     <Card>
//       <CardHeader title='Previous Appointments' titleTypographyProps={{ variant: 'h6' }} />
//       <TableCollapsible />
//     </Card>
//   </Grid>
// </Grid>
//   )
// }

// export default MUITable

// ** React Imports
import { useState } from 'react'

// ** MUI Imports
import Box from '@mui/material/Box'
import TabList from '@mui/lab/TabList'
import TabPanel from '@mui/lab/TabPanel'
import TabContext from '@mui/lab/TabContext'
import { styled } from '@mui/material/styles'
import MuiTab from '@mui/material/Tab'
import Grid from '@mui/material/Grid'
import Card from '@mui/material/Card'
import Typography from '@mui/material/Typography'
import CardHeader from '@mui/material/CardHeader'

// ** Icons Imports
import AccountOutline from 'mdi-material-ui/AccountOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'
import InformationOutline from 'mdi-material-ui/InformationOutline'

// ** Demo Tabs Imports
import TabInfo from 'src/views/account-settings/TabInfo'
import TabAccount from 'src/views/account-settings/TabAccount'
import TabSecurity from 'src/views/account-settings/TabSecurity'
import TableBasic from 'src/views/tables/TableBasic'
import TableCollapsible from 'src/views/tables/TableCollapsible'

// ** Third Party Styles Imports
import 'react-datepicker/dist/react-datepicker.css'

const Tab = styled(MuiTab)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    minWidth: 100
  },
  [theme.breakpoints.down('sm')]: {
    minWidth: 67
  }
}))

const TabName = styled('span')(({ theme }) => ({
  lineHeight: 1.71,
  fontSize: '0.875rem',
  marginLeft: theme.spacing(2.4),
  [theme.breakpoints.down('md')]: {
    display: 'none'
  }
}))

const AccountSettings = () => {
  // ** State
  const [value, setValue] = useState('account')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }

  return (
    <Card>
      <TabContext value={value}>
        <TabList
          onChange={handleChange}
          aria-label='account-settings tabs'
          sx={{ borderBottom: theme => `1px solid ${theme.palette.divider}` }}
        >
          <Tab
            value='account'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <AccountOutline />
                <TabName>See Your Appointments</TabName>
              </Box>
            }
          />
          <Tab
            value='security'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <LockOpenOutline />
                <TabName>Book An Appointments</TabName>
              </Box>
            }
          />
          {/* <Tab
            value='info'
            label={
              <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <InformationOutline />
                <TabName>Info</TabName>
              </Box>
            }
          /> */}
        </TabList>

        <TabPanel sx={{ p: 0 }} value='account'>
          <Grid container spacing={6}>
            <Grid item xs={12}>
              {/* <Typography variant='h4' style={{ color: '#9155FD ' }} >
                See Your Appointments
              </Typography> */}
              {/* <Typography variant='body2'>See when and where is your next appointments are...</Typography> */}

            </Grid>
            <Grid item xs={12}>
              <Card>
                {/* <CardHeader title='Upcomming Appointments' style={{ color: '#9155FD ' }} titleTypographyProps={{ variant: 'h6' }} /> */}
                <Typography variant='h6' style={{ color: '#9155FD ', textAlign: 'center' }} >Upcomming Appointments</Typography>
                <TableBasic />
              </Card>
            </Grid>
            <Grid item xs={12}>
              <Card>
                {/* <CardHeader title='Previous Appointments' style={{ color: '#9155FD ' }} titleTypographyProps={{ variant: 'h6' }} /> */}
                <Typography variant='h6' style={{ color: '#9155FD ', textAlign: 'center' }} >Previous Appointments</Typography>
                <TableCollapsible />
              </Card>
            </Grid>
          </Grid>
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='security'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere corporis natus qui accusantium adipisci obcaecati facilis libero aliquid? Labore ipsam laudantium ad aspernatur iure rem, repellat non omnis impedit accusantium?
        </TabPanel>
        <TabPanel sx={{ p: 0 }} value='info'>
          <TabInfo />
        </TabPanel>
      </TabContext>
    </Card>
  )
}

export default AccountSettings
