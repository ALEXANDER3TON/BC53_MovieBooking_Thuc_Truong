import React from "react";
import { Link } from "react-router-dom";
import style from "../header.module.scss";
<<<<<<< HEAD
const Logo = () => {
  return (
    <div className={style.logo}>
      <Link to="/">TTC Cinema</Link>
    </div>
=======
import logo from "../../../constant/logo.png"
import { Box, CardMedia, Typography } from "@mui/material";
const Logo = () => {
  return (
    <Box className={style.logo}>
      <Link to="/">
        <img src={logo} alt="" style={{
          width:"90px",
          height: "60px"
        }}/>
      </Link>
    </Box>
>>>>>>> ce208aa0c7c2a19733c07424bc3991523693d810
  );
};

export default Logo;
