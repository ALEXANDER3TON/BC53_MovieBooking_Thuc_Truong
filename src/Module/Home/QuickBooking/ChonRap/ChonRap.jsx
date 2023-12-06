import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { Autocomplete, TextField } from "@mui/material";

const ChonRap = ({ cumRap, setRap }) => {
  const danhSachRap = [];
  const DanhSanhCumRap = cumRap?.map((item) =>
    item.map((item) => danhSachRap.push(item))
  );

  const defRap = {
    options: danhSachRap,
    getOptionLabel: (option) => option.tenCumRap || "",
  };
  return (
    <div>
      <Autocomplete
        {...defRap}
        sx={{ width: 300 }}
        renderInput={(params) => <TextField {...params} label="Chọn Rap Chiếu" variant="standard"/>}
        onChange={(event, value) => setRap(value)}
      />
    </div>
  );
};

export default ChonRap;
