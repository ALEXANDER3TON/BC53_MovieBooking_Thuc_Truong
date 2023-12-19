import { useQuery } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { getListMovieAPI } from "../../../APIs/movieAPI";
import { ArrowLeft, ArrowRight } from "@mui/icons-material";
import style from './showing.module.scss'
import cn from 'classnames'
import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  Typography,
} from "@mui/material";
import ReactPaginate from "react-paginate";

const Showing = () => {
  const navigate = useNavigate();
  const {
    data = [],
    isLoading,
    isError,
    error,
  } = useQuery({ queryKey: ["list-movie"], queryFn: getListMovieAPI });
  // console.log(data)

  const [currentPage, setCurrentPage] = useState(0);
  const moviePerPage = 5;
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
  };
  const pageCount = Math.ceil(data.length / moviePerPage);
  const offset = currentPage * moviePerPage;
  const currentPageMovie = data.slice(offset, offset + moviePerPage);
  return (
    <Container maxWidth="lg">
      <Box>
        <Grid container spacing={3} height={999}>
          {currentPageMovie.map((item) => {
            return (
              <Grid item>
                <Card sx={{ maxWidth: "345px" }}>
                  <CardMedia
                    component="img"
                    alt=""
                    style={{
                      height: 270,
                      objectFit: "fill",
                    }}
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

        <Box
            sx={{
              display: "flex",
              justifyContent: "end",
              alignItems: "center",
              height:100
            }}
          >
            <>
              <ReactPaginate
                previousLabel={<ArrowLeft sx={{fontSize:32}}/>}
                nextLabel={<ArrowRight sx={{fontSize:32}}/>}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageChange}
                containerClassName={"pagination"}
                activeClassName={"active"}
                className={cn(style.pagination,)}
                activeLinkClassName="active"
              />
            </>
          </Box>
      </Box>
    </Container>
  );
};

export default Showing;
