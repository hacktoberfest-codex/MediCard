import { useState } from 'react';

// ** mui componenets
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import ListCard from './ListCard'

// ** fetch apis medical facility location
import {
  getMedicalDetailsNearMe,
  getHospitalsNearMe,
  getPharmacyNearMe,
  getDentistNearMe,
  getAllergologyNearMe,
  getCardiologyNearMe,
  getDermatologyNearMe,
  getEndocrinologyNearMe,
  getGastroenterologyNearMe,
  getGeneralNearMe,
  getGynaecologyNearMe,
  getOphthalmologyNearMe,
  getOrthopaedicsNearMe,
  getOtolaryngologyNearMe,
  getPaediatricsNearMe,
  getPsychiatryNearMe,
  getPulmonologyNearMe,
  getRadiologyNearMe,
  getRheumatologyNearMe,
  getTraumaNearMe,
  getUrologyNearMe,
  getVascularSurgeryNearMe
} from '../../../apis/doctorNearMe'

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const HospitalListing = () => {
 
  let ans;

  // ** states
  const [ , setMedicalDetailsNearMe] = useState([
    {
      address: '',
      postcode: '',
      city: ''
    }
  ]);

  const [value, setValue] = useState(0);
  const [ansArray, setAnsArray] = useState([]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleGetMedicalDetailsNearMe = async () => {
    try {
      const response = await getMedicalDetailsNearMe();

      setMedicalDetailsNearMe(response);
      console.log(response.length);

      // Initialize an array to store ans values
      const ansValues = [];

      for (let i = 0; i < response.length; i++) {
        const newresponse = response[i].properties;

        // Push each ans object to ansValues
        ansValues.push({
          address: newresponse.address_line2,
          postcode: newresponse.postcode,
          city: newresponse.city
        });
      }

      // Update the state with ansValues
      setAnsArray(ansValues);

    } catch (error) {
      console.error('Error while fetching getMedicalDetailsNearMe', error);
    }
  };
  const handleGetMedicalDoctorNearMe = async () => {
    try {
      const response = await getPharmacyNearMe();

      setMedicalDetailsNearMe(response);
      console.log(response.length);

      // Initialize an array to store ans values
      const ansValues = [];

      for (let i = 0; i < response.length; i++) {
        const newresponse = response[i].properties;

        // Push each ans object to ansValues
        ansValues.push({
          address: newresponse.address_line2,
          postcode: newresponse.postcode,
          city: newresponse.city
        });
      }

      // Update the state with ansValues
      setAnsArray(ansValues);

    } catch (error) {
      console.error('Error while fetching getMedicalDetailsNearMe', error);
    }
  };

  const tabHead = [
    {
      clickToGo: handleGetMedicalDetailsNearMe,
      textLabel: 'Medical Details Near Me',
    },
    {
      clickToGo: handleGetMedicalDoctorNearMe,
      textLabel: ' Doctor Near Me',
    },
  ];
  return (
    <Box sx={{ width: '100%' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          {tabHead.map((tab, index) => (
            <Tab key={index} onClick={tab.clickToGo} label={tab.textLabel} />
          ))}
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        
        {ansArray.map((ansItem, index) => (
          <div style={{border: '2px solid black', padding:"5px", margin:'5px' }} key={index}>
            <p>Address: {ansItem.address}</p>
            <p>Postcode: {ansItem.postcode}</p>
            <p>City: {ansItem.city}</p>
          </div>
        ))}
      </CustomTabPanel>
    </Box>
  )
}

export default HospitalListing;
