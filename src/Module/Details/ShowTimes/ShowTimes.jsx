import { useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getMovieShowTimesAPIs } from "../../../APIs/cinemaAPIs";
import { Box, Tab, Tabs, Typography, Container, Stack } from "@mui/material";

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
  const [value, setValue] = useState("");

  const handleChange = (newValue) => {
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
  // console.log(cinemaSystem);
  useEffect(() => {
    if (cinemaSystem.length > 0) {
      setValue(cinemaSystem[0].maHeThongRap);
    }
  }, [cinemaSystem]);
  return (
    <Container>
      <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex" }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          sx={{ borderRight: 1, borderColor: "divider" }}
          value={value}
        >
          {cinemaSystem.map((rap) => {
            return (
              <Tab
                onClick={() => handleChange(rap.maHeThongRap)}
                label={<img src={rap.logo} alt="..." style={{ width: 80 }} />}
                key={rap.maHeThongRap}
                value={value}
                {...a11yProps(rap.maHeThongRap)}
              ></Tab>
            );
          })}
          ;
        </Tabs>
        {cinemaSystem.map((rap) => {
          // console.log(rap)
          return (
            <TabPanel
              value={value}
              index={rap.maHeThongRap}
              key={rap.maHeThongRap}
            >
              {rap.tenHeThongRap}
            </TabPanel>
          );
        })}
      </Box>
    </Container>
  );
};

export default ShowTimes;
