import { Autocomplete, TextField } from "@mui/material";
import React from "react";

const ChonSuat = ({ rap, setSuat }) => {
  const suat = rap.lichChieuPhim
  const defSuat = {
    options: suat,
    getOptionLabel: (option) => option.ngayChieuGioChieu,
  }
  return (
    <div>
      <Autocomplete
        {...defSuat}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Chọn Suất Chiếu" variant="standard"/>}
        onChange={(event, value) => setSuat(value)}
      />
    </div>
  );
};

export default ChonSuat;
