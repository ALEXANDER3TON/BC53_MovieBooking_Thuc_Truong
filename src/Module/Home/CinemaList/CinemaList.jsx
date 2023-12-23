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
      
    </Box>
  );
};

export default CinemaList;
