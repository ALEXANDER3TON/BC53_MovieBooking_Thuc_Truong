import { Autocomplete, TextField } from "@mui/material";
import React from "react";
import dayjs from "dayjs";

const ChonSuat = ({ rap, setSuat }) => {
  
  const suat = rap.lichChieuPhim || [];
  const defSuat = {
    options: suat,
    getOptionLabel: (option) => {
      const times = dayjs(option.ngayChieuGioChieu).format(
        "DD/MM/YYYY ~ hh:mm"
      );
      return times;
    },
  };
  return (
    <div>
      <Autocomplete
        {...defSuat}
        sx={{ width: 210 }}
        renderInput={(params) => (
          <TextField {...params} label="Chọn Suất Chiếu" variant="standard"  />
        )}
        onChange={(event, value) => setSuat(value)}
      />
    </div>
  );
};

export default ChonSuat;
