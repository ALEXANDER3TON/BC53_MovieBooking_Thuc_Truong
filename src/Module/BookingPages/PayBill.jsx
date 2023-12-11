import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import cn from "classnames";
import style from "./bookingStyle.module.scss";
import CurrencyFormat from "react-currency-format";
import { useMutation } from "@tanstack/react-query";
import { bookingAPI } from "../../APIs/bookingAPIs";

const PayBill = ({ movieInfo = {} }) => {
  console.log("movieInfo", movieInfo);
  const movieID = movieInfo.maLichChieu;
  const { chairBooking } = useSelector((state) => state.BookingPage);
  const gheThuong = [...chairBooking].filter(
    (item) => item.loaiGhe === "Thuong"
  );
  const gheVip = [...chairBooking].filter((item) => item.loaiGhe === "Vip");

  const dispatch = useDispatch();

  const { mutate: handleBooking } = useMutation({
    mutationFn: (payload) => bookingAPI(payload),
  });
  const handleBookingList = (id, list) => {
    const newList = list.map((item) => ({
      maGhe: item.maGhe,
      giaVe: item.giaVe,
    }));
    const bookingList = { maLichChieu: id, danhSachVe: newList };
    const result = handleBooking(bookingList);
  };
  return (
    <Box>
      <Card sx={{ padding: 1 }}>
        <Box sx={{ display: "flex" }}>
          <CardMedia
            component="img"
            image={movieInfo.hinhAnh}
            sx={{ width: "30%" }}
            alt="..."
          />
          <CardHeader title={movieInfo.tenPhim} />
        </Box>
        <CardContent sx={{ padding: 0, marginTop: 1 }}>
          <Typography variant="h6">
            {movieInfo.tenCumRap} ~ {movieInfo.tenRap}
            <Typography>
              Suất: {movieInfo.ngayChieu} - {movieInfo.gioChieu}
            </Typography>
          </Typography>
          <Divider sx={{ height: "1px", background: "red", marginY: 1 }} />
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography sx={{ marginBottom: 1 }}>
                Ghế Thường:{"  "}
                {gheThuong.length > 0 ? `x${gheThuong.length}` : ""}
              </Typography>
              <CurrencyFormat
                value={
                  gheThuong.length > 0
                    ? `${gheThuong.reduce((total, value) => {
                        return total + value.giaVe;
                      }, 0)}`
                    : ""
                }
                displayType={"text"}
                thousandSeparator={true}
                suffix={"VND"}
              />
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {gheThuong.map((item) => {
                return (
                  <div className={cn(`${style.chair}`)}>{item.tenGhe}</div>
                );
              })}
            </Box>
          </Box>
          <Divider sx={{ height: "1px", background: "red", marginY: 1 }} />
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>
                Ghế Vip: {"  "} {gheVip.length > 0 ? `x${gheVip.length}` : ""}{" "}
              </Typography>
              <CurrencyFormat
                value={
                  gheVip.length > 0
                    ? `${gheVip.reduce((total, value) => {
                        return total + value.giaVe;
                      }, 0)}`
                    : ""
                }
                displayType={"text"}
                thousandSeparator={true}
                suffix={"VND"}
              />
            </Box>
            <Box sx={{ display: "flex", flexWrap: "wrap" }}>
              {gheVip.map((item) => {
                return (
                  <div className={cn(`${style.chair}`)}>{item.tenGhe}</div>
                );
              })}
            </Box>
          </Box>
          <Divider sx={{ height: "1px", background: "red", marginY: 1 }} />
          <Box>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
              <Typography>Tổng tiền:</Typography>
              <CurrencyFormat
                value={
                  chairBooking.length > 0
                    ? `${chairBooking.reduce((total, value) => {
                        return total + value.giaVe;
                      }, 0)}`
                    : ""
                }
                displayType={"text"}
                thousandSeparator={true}
                suffix={"VND"}
              />
            </Box>
            <Button
              fullWidth
              sx={{ color: "red", fontWeight: 500 }}
              onClick={() => handleBookingList(movieID, chairBooking)}
            >
              Thanh Toán
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default PayBill;
