import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getListCinemaAPI } from "../../../APIs/cinemaAPIs";
import { Box, Button, Stack, Tab, Tabs, Typography } from "@mui/material";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Box
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
    </Box>
  );
}
function a11yProps(index) {
  return {
    id: `vertical-tab-${index}`,
    "aria-controls": `vertical-tabpanel-${index}`,
  };
}
const CinemaList = () => {
  const [cum, setCum] = useState("");
  const [rap, setRap] = useState("");

  const { data = [] } = useQuery({
    queryKey: ["LIST_CINEMA"],
    queryFn: getListCinemaAPI,
  });
  console.log("data", data);
  return (
    <Box>
      <Box sx={{ flexGrow: 1, bgcolor: "background.paper", display: "flex" }}>
        <Tabs
          orientation="vertical"
          variant="scrollable"
          sx={{ borderRight: 1, borderColor: "divider" }}
          value={cum}
          onChange={(event, newValue) => {
            setCum(newValue);
          }}
        >
          {data.map((rap) => {
            console.log("rap", rap);
            return (
              <Tab
                label={<img src={rap.logo} alt="..." style={{ width: 80 }} />}
                key={rap.maHeThongRap}
                value={rap.maHeThongRap}
                {...a11yProps(rap.maHeThongRap)}
              ></Tab>
            );
          })}
          ;
        </Tabs>
        {data.map((cumRap) => {
          return (
            <TabPanel
              value={cum}
              index={cumRap.maHeThongRap}
              key={cumRap.maHeThongRap}
            >
              {cumRap.lstCumRap.map((cum) => {
                return (
                  <Tabs
                    orientation="vertical"
                    variant="scrollable"
                    sx={{ borderRight: 1, borderColor: "divider" }}
                    value={rap}
                    onChange={(event, newValue) => {
                      setRap(newValue);
                    }}
                  >
                    <Tab
                      label={
                        <Box>
                          <Typography>{cum.tenCumRap}</Typography>
                          <Typography>{cum.diaChi}</Typography>
                        </Box>
                      }
                    ></Tab>
                  </Tabs>
                );
              })}
            </TabPanel>
          );
        })}
      </Box>
    </Box>
  );
};

export default CinemaList;
