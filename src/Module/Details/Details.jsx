import React from "react";
import MovieProfiles from "./MovieProfiles";
import ShowTimes from "./ShowTimes";
import { Box, Container } from "@mui/material";
import { useParams } from "react-router-dom";

const Details = () => {
  const { movieID } = useParams();
  return (
    <Box>
      <MovieProfiles movieID={movieID}/>
      <ShowTimes movieID={movieID}/>
    </Box>
  );
};

export default Details;
