import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getListBookingAPI } from "../../APIs/bookingAPIs";
import { Box, Container, Grid, Typography } from "@mui/material";
import ChairList from "./ChairList";
import PayBill from "./PayBill";
import Lottie from "lottie-react";
import loadingAnimation from "../../constant/loadingAnimation.json";
const BookingPagse = () => {
  const { movieBookingID } = useParams();
  const { data = {}, isLoading } = useQuery({
    queryKey: ["bookings", movieBookingID],
    queryFn: () => getListBookingAPI(movieBookingID),
    enabled: !!movieBookingID,
  });
  const movieInfo = data?.thongTinPhim;
  const listChairInfo = data.danhSachGhe;

  return (
    <Container>
      {isLoading ? (
        <Lottie loop={true} animationData={loadingAnimation} style={{display:"flex", justifyContent:"center", alignItems:"center", width:"100%", height:"669px"}}/>
      ) : (
        <Box sx={{ width: 1 }}>
          <Box display={"grid"} gridTemplateColumns={"repeat(12, 1fr)"} gap={3}>
            <Box gridColumn="span 8">
              <Typography
                variant="h6"
                sx={{
                  border: "3px solid",
                  padding: "10px 20px",
                  width: 540,
                  margin: "auto",
                  textAlign: "center",
                  marginBottom: 3,
                }}
              >
                Màn Hình
              </Typography>
              <Box sx={{ margin: "auto" }}>
                <ChairList listChairInfo={listChairInfo} />
              </Box>
            </Box>
            <Box gridColumn="span 4">
              <PayBill movieInfo={movieInfo} />
            </Box>
          </Box>
        </Box>
      )}
    </Container>
  );
};

export default BookingPagse;
