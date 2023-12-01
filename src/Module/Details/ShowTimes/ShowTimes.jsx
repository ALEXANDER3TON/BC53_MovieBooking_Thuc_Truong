import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getMovieShowTimesAPIs } from "../../../APIs/cinemaAPIs";
import { Box, Tab, Tabs, Typography } from "@mui/material";

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
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}

const ShowTimes = ({ movieID }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const {
    data: movieShowTimes = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["showtimes", movieID],
    queryFn: () => getMovieShowTimesAPIs(movieID),
    enabled: !!movieID,
  });

  const cinemaSystem = movieShowTimes.heThongRapChieu || [];

  return (
    <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex" }}>
      <Tabs
        orientation="vertical"
        variant="scrollable"
        value={value}
        onChange={handleChange}
        aria-label="Vertical tabs example"
        sx={{ borderRight: 1, borderColor: "divider" }}
      >
        {cinemaSystem.map((rap) => {
          return (
            <Tab
              label={<img src={rap.logo} alt="..." style={{ width: 80 }} />}
              {...a11yProps(0)} key={rap.maHeThongRap}
            ></Tab>
          );
        })}
      </Tabs>
    </Box>
  );
};

export default ShowTimes;
