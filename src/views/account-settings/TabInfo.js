// ** React Imports
import React, { useState, useEffect, forwardRef } from 'react';

// ** MUI Imports
import Grid from '@mui/material/Grid'
import Radio from '@mui/material/Radio'
import Select from '@mui/material/Select'
import Button from '@mui/material/Button'
import MenuItem from '@mui/material/MenuItem'
import TextField from '@mui/material/TextField'
import FormLabel from '@mui/material/FormLabel'
import InputLabel from '@mui/material/InputLabel'
import RadioGroup from '@mui/material/RadioGroup'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'

// ** Third Party Imports
import DatePicker from 'react-datepicker'

// ** Styled Components
import DatePickerWrapper from 'src/@core/styles/libs/react-datepicker'

// ** apis
import { AutocompleteAddress } from '../../apis/geolocation'

const CustomInput = forwardRef((props, ref) => {
  return <TextField inputRef={ref} label='Birth Date' fullWidth {...props} />
})

const TabInfo = () => {
  // ** State
  const [date, setDate] = useState(null)
  const [addressData, setAddressData] = useState({
    streetAddress1: '',
    streetAddress2: '',
    district: '',
    state: '',
  })
  const [selectedState, setSelectedState] = useState('');

  // Function to fetch location data based on geolocation
  const fetchLocationData = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          // Simulate address data based on geolocation (this is a simple example)
          const { coords } = position;
          setAddressData({
            streetAddress1: `Street ${Math.floor(Math.random() * 100)}`,
            streetAddress2: '',
            district: `District ${Math.floor(Math.random() * 10)}`,
            state: StateList[Math.floor(Math.random() * StateList.length)],
          });
        },
        (error) => {
          if (error.code === 1) {
            // User denied location access
            alert("Location access denied. Please enable location services in your browser settings.");
          } else {
            // Handle other location errors
            console.error('Error fetching geolocation:', error);
          }
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
    }
  };


  const handleAutofillClick = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        () => {
          // User granted location access, you can proceed with autofill logic here
          fetchLocationData();
        },
        (error) => {
          if (error.code === 1) {
            // User denied location access
            alert("Location access denied. Please enable location services in your browser settings.");
          } else {
            // Handle other location errors
            console.error('Error fetching geolocation:', error);
          }
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
    }
  };

  // ** autocomplete address
  useEffect(() => {
    async function fetchData() {
      try {
        const result = await AutocompleteAddress('YOUR_TEXT'); // Replace 'YOUR_TEXT' with your desired text
        console.log(result);
      } catch (error) {
        console.error(error.message);
      }
    }

    fetchData();
  }, []);

  const StateList = ["Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"]

  return (
    <CardContent>
      <form>
        <Grid container spacing={7}>
          <Grid item xs={12} sm={6}>
            <DatePickerWrapper>
              <DatePicker
                selected={date}
                showYearDropdown
                showMonthDropdown
                id='account-settings-date'
                placeholderText='MM-DD-YYYY'
                customInput={<CustomInput />}
                onChange={date => setDate(date)}
              />
            </DatePickerWrapper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type='number' label='Phone' placeholder='(123) 456-7890' defaultValue='(123) 456-7890' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth type='number' label='AadharNo' placeholder='Aadhar Number' defaultValue='222 222 2222' />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl>
              <FormLabel sx={{ fontSize: '0.875rem' }}>Gender</FormLabel>
              <RadioGroup row aria-label='gender' name='account-settings-info-radio'>
                <FormControlLabel value='male' label='Male' control={<Radio />} />
                <FormControlLabel value='female' label='Female' control={<Radio />} />
                <FormControlLabel value='other' label='Other' control={<Radio />} />
              </RadioGroup>
            </FormControl>
          </Grid>

          <Grid item xs={12} sm={12} lg={12}>
            <hr style={{ border: '0.5px solid #9155FD' }} />
          </Grid>
          <Grid item xs={12} sm={12} lg={12}>
            <div style={{ display: 'flex', marginBottom: '0' }} >
              <h4 style={{ margin: 'auto 1rem' }} >Address</h4>
              <Button
                variant="outlined"
                onClick={handleAutofillClick}
              >
                Autofill
              </Button>
            </div>
          </Grid>

          <Grid item xs={12} sm={6}>
            <TextField fullWidth
              label='Street Address 1'
              placeholder='Street Address 1'
              value={addressData.streetAddress1}
              onChange={(e) =>
                setAddressData({ ...addressData, streetAddress1: e.target.value }
                )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth
              label='Street Address 2'
              placeholder='Street Address 2'
              value={addressData.streetAddress2}
              onChange={(e) => setAddressData({ ...addressData, streetAddress2: e.target.value })} />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField fullWidth
              label='District'
              placeholder='District'
              value={addressData.district} onChange={(e) => setAddressData({ ...addressData, district: e.target.value })} />
          </Grid>
          <Grid item xs={12} sm={6}>
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


          {/* <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <InputLabel id='form-layouts-separator-multiple-select-label'>Languages</InputLabel>
              <Select
                multiple
                defaultValue={['English']}
                id='account-settings-multiple-select'
                labelId='account-settings-multiple-select-label'
                input={<OutlinedInput label='Languages' id='select-multiple-language' />}
              >
                <MenuItem value='English'>English</MenuItem>
                <MenuItem value='French'>French</MenuItem>
                <MenuItem value='Spanish'>Spanish</MenuItem>
                <MenuItem value='Portuguese'>Portuguese</MenuItem>
                <MenuItem value='Italian'>Italian</MenuItem>
                <MenuItem value='German'>German</MenuItem>
                <MenuItem value='Arabic'>Arabic</MenuItem>
              </Select>
            </FormControl>
          </Grid> */}
          <Grid item xs={12}>
            <Button variant='contained' sx={{ marginRight: 3.5 }}>
              Save Changes
            </Button>
            {/* <Button type='reset' variant='outlined' color='secondary' onClick={() => setDate(null)}>
              Reset
            </Button> */}
          </Grid>
        </Grid>
      </form>
    </CardContent>
  )
}

export default TabInfo
