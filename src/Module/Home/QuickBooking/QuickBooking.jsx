import { Box, Button, Container, FormControl, Stack } from "@mui/material";
import React, { useState } from "react";
import ChonPhim from "./ChonPhim";
import ChonRap from "./ChonRap";
import ChonSuat from "./ChonSuat";
import { useQuery } from "@tanstack/react-query";
import { getListMovieAPI } from "../../../APIs/movieAPI";
import { getMovieShowTimesAPIs } from "../../../APIs/cinemaAPIs";

const QuickBooking = () => {
  const [pickedIDPhim, setPickedIDPhim] = useState("");
  const [rap, setRap] = useState("");
  const [suat, setSuat] = useState("");

  const { data: ListMovie = {} } = useQuery({
    queryKey: ["QUICK_BOOKING_LIST"],
    queryFn: getListMovieAPI,
  });

  const { data: dataRap = {} } = useQuery({
    queryKey: ["CHON_RAP", pickedIDPhim],
    queryFn: () => getMovieShowTimesAPIs(pickedIDPhim),
    enabled: !!pickedIDPhim,
  });

  const heThongRap = dataRap?.heThongRapChieu;
  const cumRap = heThongRap?.map((item) => item.cumRapChieu);

  return (
    <Container>
      <Box>
        <Stack direction={"row"} justifyContent={"center"}>
          <ChonPhim ListMovie={ListMovie} setPickedPhim={setPickedIDPhim} />
          <ChonRap cumRap={cumRap} setRap={setRap} />
          <ChonSuat rap={rap} setSuat={setSuat} />
          <Button>
            Đặt vé
          </Button>
        </Stack>
      </Box>
    </Container>
  );
};

export default QuickBooking;
