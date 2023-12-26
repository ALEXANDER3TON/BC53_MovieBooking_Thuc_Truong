import React from "react";
import "../../../../Style/base.scss";
import style from "../header.module.scss";
import cn from "classnames";
import { Box } from "@mui/material";
import { Link } from "react-router-dom";

const MenuPagse = () => {
  return (
    <Box className={cn(style.navMenu)} width={"63%"}>
      <nav className={style.menu}>
        <li>
          <a href="#lichChieu">Lịch Chiếu</a>
        </li>
        <li>
          <a href="#cinema">Cụm Rạp</a>
        </li>
        <li>
          <a href="#app">Ứng Dụng</a>
        </li>
      </nav>
    </Box>
  );
};

export default MenuPagse;
