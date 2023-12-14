import React, { useEffect, useState } from "react";
import "../../Style/base.scss";
import { useNavigate } from "react-router-dom";
import { PATH } from "../../Routes/path";
import { CURRENT_USER } from "../../constant";
import { Button, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { UserAction } from "../../Store/LogInPagesSlice/slice";

const Header = () => {
  const { user } = useSelector((state) => state.User);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(UserAction.setLogout("logout"));
    navigate("/");
  };
  return (
    <div>
      <nav className=" d-flex justify-content-between">
        <div className="logo fs-1">
          <a href="">
            <span className="fa-brands fa-joomla " />
          </a>
        </div>
        <div className="pages d-flex justify-content-center align-items-center">
          <ul className="d-flex">
            <li>
              <a href="">Lich Chieu</a>
            </li>
            <li>
              <a href="">Cum Rap</a>
            </li>
            <li>
              <a href="">Tin Tuc</a>
            </li>
            <li>
              <a href="">Ung dung</a>
            </li>
          </ul>
        </div>
        {user ? (
          <Stack direction={"row"} justifyContent={"center"} alignItems={"center"}>
            <Typography>Hello! {user.hoTen} </Typography>
            <Button onClick={handleLogout}>LOGOUT</Button>
          </Stack>
        ) : (
          <Stack direction={"row"}>
            <Button onClick={() => navigate(PATH.REGISTER)}>Register</Button>
            <Button onClick={() => navigate(PATH.LOG_IN)}>Log in</Button>
          </Stack>
        )}
      </nav>
    </div>
  );
};

export default Header;
