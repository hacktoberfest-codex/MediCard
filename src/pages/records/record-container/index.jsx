import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

import AddNew from './AddNew'

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

export default function BasicTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

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
          <Tab label="ADD NEW RECORD" />
          <Tab label="PREVIOUS RECORDS" />
          <Tab label="ONGOING TREATMENT" />
          <Tab label="ONGOING MEDICINES" />
          <Tab label="PREVIOUS MEDICINES" />
        </Tabs>
      </Box>
      <CustomTabPanel value={value} index={0}>
        <AddNew />
      </CustomTabPanel>
      <CustomTabPanel value={value} index={1}>
        PREVIOUS RECORDS
      </CustomTabPanel>
      <CustomTabPanel value={value} index={2}>
        ONGOING TREATMENT
      </CustomTabPanel>
      <CustomTabPanel value={value} index={3}>
        ONGOING MEDICINES
      </CustomTabPanel>
      <CustomTabPanel value={value} index={4}>
        PREVIOUS MEDICINES
      </CustomTabPanel>
    </Box>
  );
}
