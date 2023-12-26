import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import { getListBookingAPI } from "../../APIs/bookingAPIs";
import { Box, Container, Grid } from "@mui/material";
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
        <Lottie
          loop={true}
          animationData={loadingAnimation}
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "100%",
          }}
        />
      ) : (
        <Box
          sx={{
            paddingTop: 12,
          }}
        >
          <Grid container spacing={3}>
            <Grid item xs={11} md={8}>
              <ChairList listChairInfo={listChairInfo} />
            </Grid>
            <Grid item xs={11} md={4}>
              <PayBill movieInfo={movieInfo} />
            </Grid>
          </Grid>
        </Box>
      )}
    </Container>
  );
};

export default BookingPagse;
