import { Autocomplete, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";

const ChonPhim = ({ ListMovie, setPickedPhim }) => {
  const [phim, setPhim] = useState("");
  const idPhim = phim?.maPhim;
  setPickedPhim(idPhim);
  const defMovie = {
    options: ListMovie,
    getOptionLabel: (option) => option.tenPhim,
  };

  return (
    <div>
      <Autocomplete
        {...defMovie}
        sx={{ width: 210 }}
        renderInput={(params) => <TextField {...params} label="Chọn Phim" variant="standard"/>}
        onChange={(event, value) => setPhim(value)}
      />
    </div>
  );
};

export default ChonPhim;
