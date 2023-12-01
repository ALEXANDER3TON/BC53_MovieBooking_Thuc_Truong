import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getBannersAPI } from "../../../APIs/movieAPI";
import Slider, { banner } from "react-slick";
import { Box } from "@mui/material";
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
    <div>
      <Slider {...settings}>
        {data.map((item) => {
          return (
            <Box sx={{height:540}} key={item.maBanner}>
              <img
                src={item.hinhAnh}
                alt=""
                height="100%"
                width="100%"
                style={{ objectFit: "fill" }}
                key={item.maBanner}
              />
            </Box>
          );
        })}
      </Slider>
    </div>
  );
};

export default Banner;
