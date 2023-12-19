import React, { useEffect, useState } from "react";
import "../../Style/base.scss";

import Logo from "./Logo";
import MenuPages from "./MenuPages";

import style from "./header.module.scss";
import cn from "classnames";
import "../../Style/base.scss";
import UserButton from "./UserButton";
import MobileMenu from "./MobileMenu";
const Header = () => {
  return (
    <div className={cn(style.header)}>
      <nav className="navbar">
        <Logo />
        <MenuPages />
        <UserButton/>
        <MobileMenu/>
      </nav>
    </div>
  );
};

export default Header;
