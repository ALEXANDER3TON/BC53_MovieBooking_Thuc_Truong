import React from "react";
import Chair from "./Chair";
import { Box, Grid } from "@mui/material";

const ChairList = ({ listChairInfo }) => {
  const gheThuong = listChairInfo?.filter((item) => item.loaiGhe === "Thuong");
  console.log("listChairInfo", listChairInfo);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={10} spacing={2} justifyContent={"center"}>
        {listChairInfo?.map((chair) => {
          return (
            <Grid item sx={2} key={chair.maGhe}>
              <Chair chair={chair} />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

export default ChairList;
