import React from "react";
import cn from "classnames";
import { Box, Button } from "@mui/material";
import style from "./bookingStyle.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { BookingPageAction } from "../../Store/BookingPagesSlice/slice";
const Chair = ({ chair }) => {
  const { chairBooking } = useSelector((state) => state.BookingPage);
  const dispatch = useDispatch();
  return (
    <div
      className={cn(
        `${style.chair} ${
          chairBooking.find((e) => e.tenGhe === chair.tenGhe)
            ? style.booking
            : ""
        }`
      )}
      onClick={() => {
        dispatch(BookingPageAction.setChairBooking(chair));
      }}
    >
      {chair.tenGhe}
    </div>
  );
};

export default Chair;
