// ** apis
import { getCurrentAddressDetails } from '../../../apis/geolocation'

// ** MUI Imports
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

//  ** icons
import { GrLocation } from 'react-icons/gr'

const GetLocation = ({ setLocationFetched }) => {

  const handleGetCurrentAddressDetails = async () => {
    try {
      const response = await getCurrentAddressDetails()

      if (!response || !response.ok) {
        setLocationFetched(false)
      }

      setLocationFetched(true)

    } catch (error) {
      console.error('Error in handler function while getting current address details', error)
    }
  }
  return (
    <Box>
      <small>See doctors near you and book an apointment</small>
      <Button
        variant="outlined"
        onClick={handleGetCurrentAddressDetails}
        style={{
          height: '100%',
          width: '100%',
          borderRadius: '5px',
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column'
        }} >
        <Typography variant='h6' style={{ color: 'black' }} >Choose Your Live Location</Typography>
        <GrLocation fontSize='8rem' style={{}} />
      </Button>
    </Box >
  )
}

export default GetLocation;
