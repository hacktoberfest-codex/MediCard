import { useState } from 'react'

// ** MUI Imports
import Container from '@mui/material/Container'
import Typography from '@mui/material/Typography'

// ** componenets
import GetLocation from './GetLocation'
import HospitalListing from './HospitalListing'

const CardBasic = () => {

  const [locationFetched, setLocationFetched] = useState(false);

  return (
    <Container>
      <Typography variant='h4' style={{ color: '#9155FD' }} >
        Find All Medical Facilities Near You
      </Typography>
      {!locationFetched && <GetLocation setLocationFetched={setLocationFetched} />}
      {locationFetched && <HospitalListing />}
    </Container>
  )
}

export default CardBasic
