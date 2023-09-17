import { useState } from 'react'

// ** MUI components
import Container from '@mui/material/Container'

//  ** apis
import { getMedicalDetailsNearMe } from '../../apis/doctorNearMe'

const ScheduleAppointments = () => {

  const [medicalDetailsNearMe, setMedicalDetailsNearMe] = useState([]);

  const handleGetMedicalDetailsNearMe = async () => {
    try {
      const response = await getMedicalDetailsNearMe();

      const data = Object.keys(response)
      setMedicalDetailsNearMe(response);
    } catch (error) {
      console.error('Error while fetching getMedicalDetailsNearMe', error);
    }
  };

  return (
    <Container>
      Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis error laudantium voluptatem impedit et aliquid repellendus non qui itaque adipisci voluptas debitis quia, mollitia sunt aperiam laborum quas, repudiandae unde.
    </Container>
  )
}

export default ScheduleAppointments
