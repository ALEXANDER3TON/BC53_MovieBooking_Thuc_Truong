import {
  Box,
  Button,
  List,
  ListItem,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import React, { useState } from "react";

import style from "../header.module.scss";
import cn from "classnames";

const MenuPagse = () => {
  return (
    <div className={cn(style.navMenu)}>
      <ul className={style.menu}>
        <li>
          <a href="">Lịch Chiếu</a>
        </li>
        <li>
          <a href="">Cụm Rạp</a>
        </li>
        <li>
          <a href="">Tin Tức</a>
        </li>
        <li>
          <a href="">Ứng Dụng</a>
        </li>
      </ul>
    </div>
  );
};

export default MenuPagse;
