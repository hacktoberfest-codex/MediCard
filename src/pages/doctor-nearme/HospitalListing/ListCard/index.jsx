// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'

// ** Icons Imports
import DotsVertical from 'mdi-material-ui/DotsVertical'

const StatisticsCard = ({ newresponse, docName, address, phone, haelthcare, website, suburb }) => {
  return (
    <Card>
      <CardHeader
        title={docName}
        action={
          <IconButton size='small' aria-label='settings' className='card-more-options' sx={{ color: 'text.secondary' }}>
            <DotsVertical />
          </IconButton>
        }
        subheader={
          <ul>
            <li>{newresponse}</li>
            <li>{phone}</li>
            <li>{haelthcare}</li>
            <li>{website}</li>
            <li>{suburb}</li>
          </ul>
        }
        titleTypographyProps={{
          sx: {
            mb: 2.5,
            lineHeight: '2rem !important',
            letterSpacing: '0.15px !important'
          }
        }}
      />
    </Card>
  )
}

export default StatisticsCard
