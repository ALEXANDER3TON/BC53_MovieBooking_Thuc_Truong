import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import ChonPhim from "./ChonPhim";
import ChonRap from "./ChonRap";
import ChonSuat from "./ChonSuat";
import { useQuery } from "@tanstack/react-query";
import { getListMovieAPI } from "../../../APIs/movieAPI";
import { getMovieShowTimesAPIs } from "../../../APIs/cinemaAPIs";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router-dom";
import style from "./quickBooking.module.scss";
import "../../../Style/base.scss";
import { useSelector } from "react-redux";
const QuickBooking = () => {
  const [pickedIDPhim, setPickedIDPhim] = useState("");
  const [rap, setRap] = useState("");
  const [suat, setSuat] = useState("");

  const navigate = useNavigate();
  const { user } = useSelector((state) => state.User);
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
    <Container className={style.quickBooking}>
      <Stack
        direction={"row"}
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
        className={style.movieSelect}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ChonPhim ListMovie={ListMovie} setPickedPhim={setPickedIDPhim} />
        <ChonRap cumRap={cumRap} setRap={setRap} />
        <ChonSuat rap={rap} setSuat={setSuat} />
        <div
          onClick={() => {
            if (!user) {
              Swal.fire({
                title: "Chưa có tài khoản",
                text: "Vui lòng đăng nhập tài khoản để đặt vé",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Đăng nhập",
              }).then((result) => {
                if (result.isConfirmed) {
                  navigate(PATH.LOG_IN);
                }
              });
            } else {
              suat
                ? navigate(`booking/${suat.maLichChieu}`)
                : alert("Vui lòng chọn suất");
            }
          }}
          className="btnStyle"
          id={style.bookingBtn}
        >
          Đặt vé
        </div>
      </Stack>
    </Container>
  );
};

export default QuickBooking;
