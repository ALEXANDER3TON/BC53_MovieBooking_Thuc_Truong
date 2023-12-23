import { Box, Grid, makeStyles } from "@material-ui/core";
import React from "react";
import { Outlet } from "react-router-dom";
import AdminHeader from "../../Components/Admin/AdminHeader/AdminHeader";

import DashBoard from "../../Components/Admin/DashBoard/DashBoard";
import AdminFooter from "../../Components/Admin/AdminFooter/AdminFooter";
import { Stack } from "@mui/material";
import AdminMovieTable from "../../Components/Admin/AdminMenu/AdminMovieTable";

const AdminLayout = () => {
  return (
    <Box>
      <Stack spacing={1}>
        <AdminHeader />
        <Stack spacing={2} direction={"row"}>
          <DashBoard />
          <AdminMovieTable />
        </Stack>
        <AdminFooter />
      </Stack>
      <Outlet />
    </Box>
  );
};

export default AdminLayout;
