import { Box, Button, Stack, Typography } from "@mui/material";
import React from "react";
import { PATH } from "../../../Routes/path";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { UserAction } from "../../../Store/LogInPagesSlice/slice";
import style from "../header.module.scss"
const UserButton = () => {
  const { user } = useSelector((state) => state.User);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(UserAction.setLogout("logout"));
    navigate("/");
  };
  return (
    <>
      <div className={style.userAction}>
        {user ? (
          <Stack
            direction={"row"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Typography>Hello! {user.hoTen} </Typography>
            <Button onClick={handleLogout} >
              LOGOUT
            </Button>
          </Stack>
        ) : (
          <Stack direction={"row"}>
            <Button onClick={() => navigate(PATH.REGISTER)}>Register</Button>
            <Button onClick={() => navigate(PATH.LOG_IN)}>Log in</Button>
          </Stack>
        )}
      </div>
      
      
    </>
  );
};

export default UserButton;
