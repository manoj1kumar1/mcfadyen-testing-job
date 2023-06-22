import * as React from 'react';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab'; 
import Box from '@mui/material/Box';
import Details from './Details';

const TabPanel = (props) => {
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
        <Box sx={{ p: 3 }}>{children}</Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

const LeftSideBar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%'}}>
      <Box sx={{}}>
        <Tabs value={value} onChange={handleChange} >
          <Tab label="Details" {...a11yProps(0)} />
          <Tab label="Delivery" {...a11yProps(1)} />
          <Tab label="Fit" {...a11yProps(2)} />
          <Tab label="Share" {...a11yProps(3)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Details />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Details />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Details />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Details />
      </TabPanel>
    </Box>
  );
}

export default LeftSideBar;