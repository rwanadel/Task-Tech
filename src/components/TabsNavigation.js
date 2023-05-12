import React, { useState } from "react";
import PropTypes from "prop-types";
import SwipeableViews from "react-swipeable-views";
import { useTheme } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

import { FirstTabComponent } from "./PostTaskFirstTab";
import { SecTabComponent } from "./PostTaskSecondTab";
import LoaderComponents from "./LoaderComponents";
import { CustomSnackbar } from "./customSnackbar";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
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

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const TabsNavigation = () => {
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "2rem" }}>
      <LoaderComponents open={isLoading} />
      <CustomSnackbar
        message={errorMessage}
        handleClose={() => {
          setErrorMessage("");
        }}
      />
      <AppBar
        position="static"
        style={{
          boxShadow: "none",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          TabIndicatorProps={{
            style: {
              background: "#165069",
              fontSize: "2rem",
              height: "0.5rem",
              borderRadius: "5px",
            },
          }}
          style={{
            background: "#FFFFFF",
            color: "#165069",
          }}
          textColor="inherit"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab
            style={{ fontSize: "20px", fontWeight: "bold" }}
            label="Post a task"
            {...a11yProps(0)}
          />
          <Tab
            style={{ fontSize: "20px", fontWeight: "bold" }}
            label="Post a service"
            {...a11yProps(1)}
          />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
          <FirstTabComponent
            setIsLoading={setIsLoading}
            setErrorMessage={setErrorMessage}
          />
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          <SecTabComponent
            setIsLoading={setIsLoading}
            setErrorMessage={setErrorMessage}
          />
        </TabPanel>
      </SwipeableViews>
    </Box>
  );
};

export default TabsNavigation;
