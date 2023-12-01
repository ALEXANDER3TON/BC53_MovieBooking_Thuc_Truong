import { useQuery } from "@tanstack/react-query";
import React from "react";
import { getMovieDetailsAPI } from "../../../APIs/movieAPI";
import { Box, Container, Typography } from "@mui/material";

const MovieProfiles = ({ movieID }) => {
  const {
    data:movieDetailsData = {},
    isLoading,
    isError,
    error,
  } = useQuery({
    queryKey: ["movies-details", movieID],
    queryFn: () => getMovieDetailsAPI(movieID),
    enabled: !!movieID,
  });
  
  
  return <div>
    hello
  </div>
};

export default MovieProfiles;
