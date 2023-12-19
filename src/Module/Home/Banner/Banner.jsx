import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { getBannersAPI } from "../../../APIs/movieAPI";
import Slider, { banner } from "react-slick";
import { Box, Button } from "@mui/material";
import style from "./banner.module.scss";
import PlayCircleFilledSharpIcon from "@mui/icons-material/PlayCircleFilledSharp";

import Popup from "./popup";

const Banner = () => {
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["Banner"],
    queryFn: getBannersAPI,
  });

  const [openPopup, setOpenPopup] = useState(false);
  const closeModal = () => setOpen(false);

  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 999,
    cssEase: "linear",
  };
  return (
    <div className={style.banner}>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <Box sx={{ height: 690 }} key={item.maBanner}>
              <img
                src={item.hinhAnh}
                alt=""
                height="100%"
                width="100%"
                style={{ objectFit: "fill" }}
                key={item.maBanner}
              />
              <Button onClick={setOpenPopup.bind(this,true)}>
                <PlayCircleFilledSharpIcon/>
              </Button>
              {openPopup && <Popup maPhim={item.maPhim}/>}
            </Box>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
