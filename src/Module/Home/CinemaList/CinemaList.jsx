import { useMutation, useQuery } from "@tanstack/react-query";
import React, { useEffect, useState } from "react";
import { getListCinemaAPI } from "../../../APIs/cinemaAPIs";
import "../../../Style/base.scss";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import HeThong from "./HeThong";
import FilmLichChieu from "./FilmLichChieu";
import CumRap from "./CumRap";

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

const CinemaList = () => {
  const [cum, setCum] = useState("");
  const [rap, setRap] = useState("");

  const { data: lichChieuTheoRap = [] } = useQuery({
    queryKey: ["LIST_CINEMA"],
    queryFn: getListCinemaAPI,
  });
  let newListCumRap = []
  useEffect(() => {
    if (lichChieuTheoRap.length > 0) {
      setCum(lichChieuTheoRap[0].maHeThongRap);
        lichChieuTheoRap.map((item) => {
          item.lstCumRap.map((item) => {
            newListCumRap.push(item);
          })
        });
        if (newListCumRap.length > 0) {
          setRap(newListCumRap[0].maCumRap);
        }
    }
  }, [lichChieuTheoRap]);

  return (
    <Container>
      <Grid container columns={12}>
        <Grid item sx={2}>
          <HeThong
            lichChieuTheoRap={lichChieuTheoRap}
            cum={cum}
            setCum={setCum}
          />
        </Grid>
        <Grid item sx={3}>
          <CumRap
            TabPanel={TabPanel}
            lichChieuTheoRap={lichChieuTheoRap}
            cum={cum}
            rap={rap}
            setRap={setRap}
            newListCumRap={newListCumRap}
          />
        </Grid>
        <Grid item sx={7}>
          <FilmLichChieu
            lichChieuTheoRap={lichChieuTheoRap}
            rap={rap}
            TabPanel={TabPanel}
          />
        </Grid>
      </Grid>
    </Container>
  );
};

export default CinemaList;
