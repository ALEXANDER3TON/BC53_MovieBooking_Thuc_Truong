import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import React from "react";
import { getListMovieAPI } from "../../../APIs/movieAPI";
import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
const Showing = () => {
  const navigate = useNavigate();
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ["list-movie"], queryFn: getListMovieAPI });
  // console.log(data)

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {data.map((item) => {
          return (
            <Grid item xs={3} key={item.maPhim}>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  component="img"
                  alt=""
                  style={{ height: 270, objectFit: "fill" }}
                  image={item.hinhAnh}
                />
                <CardContent>
                  <Typography
                    gutterBottom
                    variant="h5"
                    component="div"
                    className="truncate--2"
                    sx={{ height: 69 }}
                  >
                    {item.tenPhim}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    className="truncate"
                  >
                    {item.moTa}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    size="large"
                    variant="contained"
                    fullWidth
                    onClick={() => {
                      navigate(`movie/${item.maPhim}`);
                    }}
                  >
                    Chi tiet
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Showing;
