// ** React Imports
import React, { useState, useRef } from 'react';

// ** QR code generator
import QRCode from 'qrcode.react';

// ** doenload QR in png form
import html2canvas from 'html2canvas';

// ** MUI Imports
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import Avatar from '@mui/material/Avatar'
import Button from '@mui/material/Button'
import Divider from '@mui/material/Divider'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'

// ** Icons Imports
import KeyOutline from 'mdi-material-ui/KeyOutline'
import LockOpenOutline from 'mdi-material-ui/LockOpenOutline'

const TabSecurity = () => {
  // ** States
  const [values, setValues] = useState({
    newPassword: '',
    currentPassword: '',
    showNewPassword: false,
    confirmNewPassword: '',
    showCurrentPassword: false,
    showConfirmNewPassword: false
  })

  // Create a ref for the QR code element
  const qrCodeRef = useRef(null);

  // Function to handle QR code download
  const handleDownloadQRCode = () => {
    // Get the QR code element using the ref
    const qrCodeElement = qrCodeRef.current;

    // Use html2canvas to capture the QR code as an image
    html2canvas(qrCodeElement)
      .then((canvas) => {
        // Convert the canvas to a data URL
        const dataUrl = canvas.toDataURL('image/png');

        // Create a temporary anchor element to trigger the download
        const downloadLink = document.createElement('a');
        downloadLink.href = dataUrl;
        downloadLink.download = 'qr-code.png';

        // Trigger a click event to start the download
        downloadLink.click();
      });
  };

  // Handle Current Password
  const handleCurrentPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowCurrentPassword = () => {
    setValues({ ...values, showCurrentPassword: !values.showCurrentPassword })
  }

  const handleMouseDownCurrentPassword = event => {
    event.preventDefault()
  }

  // Handle New Password
  const handleNewPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowNewPassword = () => {
    setValues({ ...values, showNewPassword: !values.showNewPassword })
  }

  const handleMouseDownNewPassword = event => {
    event.preventDefault()
  }

  // Handle Confirm New Password
  const handleConfirmNewPasswordChange = prop => event => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowConfirmNewPassword = () => {
    setValues({ ...values, showConfirmNewPassword: !values.showConfirmNewPassword })
  }

  const handleMouseDownConfirmNewPassword = event => {
    event.preventDefault()
  }

  // State to store the HTML content as a string
  const [htmlContent, setHtmlContent] = useState('');

  const data = ['Name : Anand Tharad', 'Diseases : Alzimer', 'Medication : paracetamol']

  return (
    <form>
      <CardContent sx={{ paddingBottom: 0 }}>
        <Grid container spacing={5}>
          <div
            style={{
              textAlign: 'center',
              margin: "2rem auto",
              height: '15rem',
              width: '15rem'
            }}
            ref={qrCodeRef}>
            <QRCode
              value={data} // Use the HTML content as the QR code value
            />
          </div>
        </Grid>
        <Button
          variant="outlined"
          onClick={handleDownloadQRCode}
        >
          Download QR Code
        </Button>
      </CardContent>

      <Divider sx={{ margin: 0 }} />

      <CardContent>
        <Box sx={{ mt: 1.75, display: 'flex', alignItems: 'center' }}>
          <KeyOutline sx={{ marginRight: 3 }} />
          <Typography variant='h6'>Two-factor authentication</Typography>
        </Box>

        <Box sx={{ mt: 5.75, display: 'flex', justifyContent: 'center' }}>
          <Box
            sx={{
              maxWidth: 368,
              display: 'flex',
              textAlign: 'center',
              alignItems: 'center',
              flexDirection: 'column'
            }}
          >
            <Avatar
              variant='rounded'
              sx={{ width: 48, height: 48, color: 'common.white', backgroundColor: 'primary.main' }}
            >
              <LockOpenOutline sx={{ fontSize: '1.75rem' }} />
            </Avatar>
            <Typography sx={{ fontWeight: 600, marginTop: 3.5, marginBottom: 3.5 }}>
              Two factor authentication is not enabled yet.
            </Typography>
            <Typography variant='body2'>
              Two-factor authentication adds an additional layer of security to your account by requiring more than just
              a password to log in. Learn more.
            </Typography>
          </Box>
        </Box>

        {/* <Box sx={{ mt: 11 }}>
          <Button variant='contained' sx={{ marginRight: 3.5 }}>
            Save Changes
          </Button>
          <Button
            type='reset'
            variant='outlined'
            color='secondary'
            onClick={() => setValues({ ...values, currentPassword: '', newPassword: '', confirmNewPassword: '' })}
          >
            Reset
          </Button>
        </Box> */}
      </CardContent>
    </form>
  )
}

export default TabSecurity
