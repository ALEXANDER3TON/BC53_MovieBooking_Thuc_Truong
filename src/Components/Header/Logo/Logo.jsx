import React from "react";
import { Link } from "react-router-dom";
import style from "../header.module.scss"
const Logo = () => {
  return (
    <div className={style.logo}>
      <Link to="/">
        CyberFilm
      </Link>
    </div>
  );
};

export default Logo;
