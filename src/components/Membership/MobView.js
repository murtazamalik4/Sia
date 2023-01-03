import React, { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MembershipHistory from "./MembershipHistory";
import Payment from "./Payment";
import "./MemberProfilePage.css";

function TabPanel(props) {
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

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

const Page = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="tabs">
      <Box sx={{ width: "100%" }} className="mobview">
        <Box sx={{ borderBottom: 1, borderTop: 1, borderColor: "divider" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
            centered
            
          >
            <Tab label="Membership History" {...a11yProps(0)} sx={{fontSize : "10px"}}/>
            <Tab label="Payments" {...a11yProps(1)} sx={{fontSize : "10px"}}/>
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <MembershipHistory />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Payment />
        </TabPanel>
      </Box>
    </div>
  );
};

export default Page;
