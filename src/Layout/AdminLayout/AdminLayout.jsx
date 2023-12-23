import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../Components/Admin/AdminHeader/AdminHeader";
import AdminMenu from "../../Components/Admin/AdminMenu/AdminMenu";
import DashBoard from "../../Components/Admin/DashBoard/DashBoard";
import AdminFooter from "../../Components/Admin/AdminFooter/AdminFooter";
import { Stack } from "@mui/material";

const AdminLayout = () => {
  return (
    <Box>
      <Stack spacing={1}>
        <AdminHeader />
        <Stack spacing={2} direction={"row"}>
          <DashBoard />
          <AdminMenu />
        </Stack>
        <AdminFooter />
      </Stack>
      <Outlet />
    </Box>
  );
};

export default AdminLayout;
