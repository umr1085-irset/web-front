/*!

=========================================================
* SciLicium Platform v0.0.1
=========================================================

* Copyright 2021 SciLicium (https://www.scilicium.com)

* Coded by SciLicium
* Author: Thomas Darde

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import GetPlotComponent from './GetPlotComp'


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  tabs: {
    borderRight: `1px solid ${theme.palette.divider}`,
  },
}));

export default function VerticalTabs(props) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const { selector, url, loom, selected_attrs, scale, reduction, type, ...other } = props;
  return (
    <div className={classes.root}>
      <Tabs
        orientation="horizontal"
        variant="scrollable"
        scrollButtons="auto"
        textColor="primary"
        indicatorColor="primary"
        value={value}
        onChange={handleChange}
        className={classes.tabs}
      >
        {selector.ra.Symbol.map((gene,idx) => (
          <Tab label={gene} {...a11yProps(idx)} style={{minWidth:40,width:70}} />
        ))}
      </Tabs>
      {selector.ra.Symbol.map((gene,idx) => (
          <TabPanel value={value} index={idx} style={{width:"100%"}}>
             <GetPlotComponent url={url} id={loom} attrs={selected_attrs} type={type} filters={selector} gene={gene} reduction={reduction} style={{height: 700}}/>
          </TabPanel>
        ))}
    </div>
  );
}
