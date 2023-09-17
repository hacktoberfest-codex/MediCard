import React, { useState } from 'react';

// ** apis
import { getCurrentAddressDetails } from '../../../apis/geolocation'
import { stateCityData } from '../../../apis/stateCityData.js'

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Box from '@mui/material/Box'
// import FormControl from '@mui/material/FormControl'
// import InputLabel from '@mui/material/InputLabel'
// import MenuItem from '@mui/material/MenuItem'
// import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'

//  ** icons
import { GrLocation } from 'react-icons/gr'

const GetLocation = ({ setLocationFetched }) => {

  // ** State
  // const [appointmentCurrentAddressData, setAppointmentCurrentAddressData] = useState({
  //   ip_address: '',
  //   city: '',
  //   stateName: '',
  //   latitude: '',
  //   longitude: '',
  //   current_time: '',
  // })

  // const [selectedState, setSelectedState] = useState('');
  // const [selectedCity, setSelectedCity] = useState('');


  // const StateList = Object.keys(stateCityData);
  // // Update the city options based on the selected state
  // const cityOptions = stateCityData[selectedState] || [];

  // const handleStateChange = (event) => {
  //   setSelectedState(event.target.value);
  //   // Reset the selected city when the state changes
  //   setSelectedCity('');
  // };

  // const handleCityChange = (event) => {
  //   setSelectedCity(event.target.value);
  // };

  // handler function for fetchcurrent address dts
  const handleGetCurrentAddressDetails = async () => {
    try {
      const response = await getCurrentAddressDetails()

      // setAppointmentCurrentAddressData({
      //   ip_address: response.ip_address,
      //   city: response.city,
      //   stateName: response.region,
      //   latitude: response.latitude,
      //   longitude: response.longitude,
      //   current_time: response.timezone.current_time,
      // })

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
      <Grid container py={2} >
        {/* <Grid item xs={12} md={12} lg={6} mx={2} p={3} style={{ height: '100%', borderRadius: '0.5rem' }}>
          <Grid item lg={12} >
            <Typography variant='h6' style={{ color: '#9155FD' }}  >
              Update Manually
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} my={5} >
            <FormControl fullWidth>
              <InputLabel>State</InputLabel>
              <Select
                label='State'
                value={selectedState}
                onChange={(e) => setSelectedState(e.target.value)}
              >
                {StateList.map((state, index) => (
                  <MenuItem key={index} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
          <Grid item xs={12} sm={12} lg={12} my={5} >
            <FormControl fullWidth>
              <InputLabel>City</InputLabel>
              <Select
                label='City'
                value={selectedCity}
                onChange={handleCityChange}
              >
                {cityOptions.map((city, index) => (
                  <MenuItem key={index} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Grid>
        </Grid>
        <Grid item
          xs={0} sm={0} lg={1}
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            padding: '10rem 0'
          }}>
          <Typography variant="h5">
            OR
          </Typography>
        </Grid> */}
        <Button
          variant="contained"
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
      </Grid>
    </Box >
  )
}

export default GetLocation;
