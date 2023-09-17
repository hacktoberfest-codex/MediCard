import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import RecordContainer from './record-container'

const Records = () => {
  return (
    <div style={{ padding: "1rem 0" }} >
      <Grid item xs={12}>
        <Typography variant='h4' style={{ color: '#9155FD ' }} >
          All Medical Records
        </Typography>
        <Typography variant='body2'>See All Your Previous Medical Records Hear</Typography>
      </Grid>
      <Grid item xs={12} md={12} lg={12}>
        <RecordContainer />
      </Grid>
    </div>
  )
}

export default Records;
