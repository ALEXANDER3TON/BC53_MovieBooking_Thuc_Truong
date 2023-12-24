import { Box } from "@mui/material";
import React from "react";

const FilmLichChieu = ({ lichChieuTheoRap, rap, TabPanel }) => {
    
  return (
    <Box>
      {lichChieuTheoRap.map((item) => {
        return item.lstCumRap.map((item) => {
          return (
            <TabPanel value={rap} index={item.maCumRap}>
              {item.danhSachPhim.map((item) => {
                return (
                  <Box paddingBottom={3}>
                    <img src={item.hinhAnh} alt="" width={90} height={90} />
                  </Box>
                );
              })}
            </TabPanel>
          );
        });
      })}
    </Box>
  );
};

export default FilmLichChieu;
