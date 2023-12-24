import {
  Box,
  Button,
  Grid,
  Select,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { GROUP_CODE } from "../../../../constant";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const AddUser = () => {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      taiKhoan: "",
      matKhau: "",
      email: "",
      soDt: "",
      maNhom: GROUP_CODE,
      maLoaiNguoiDung: "",
      hoTen: "",
    },
    mode: "all",
  });

  const onSubmit = (formValues) => {
    const formData = new FormData();
    formData.append("taiKhoan", formValues.taiKhoan);
    formData.append("matKhau", formValues.matKhau);
    formData.append("email", formValues.email);
    formData.append("soDT", formValues.soDT);
    formData.append("maNhom", formValues.maNhom);
    formData.append("maLoaiNguoiDung", formValues.maLoaiNguoiDung);
    formData.append("hoTen", formValues.hoTen);
  };

  return (
    <Box>
      <Typography
        sx={{
          textAlign: "center",
          fontSize: "23px",
          fontWeight: 700,
          marginLeft: 36,
        }}
      >
        THÊM NGƯỜI DÙNG MỚI
      </Typography>
      <Grid
        container
        justifyContent={"center"}
        alignItems={"center"}
        sx={{ marginTop: 3 }}
      >
        <Grid item md={6}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Stack spacing={2} direction={"column"}>
              <TextField
                label="Tài khoản"
                sx={{ width: 600 }}
                {...register("taiKhoan")}
                // error={Boolean(errors.taiKhoan)}
                // helperText={Boolean(errors.taiKhoan) && errors.taiKhoan.message}
              />

              <TextField
                label="Mật khẩu"
                sx={{ width: 600 }}
                {...register("matKhau")}
                // error={Boolean(errors.matKhau)}
                // helperText={Boolean(errors.matKhau) && errors.matKhau.message}
              />
              <TextField
                label="Email"
                sx={{ width: 600 }}
                {...register("email")}
                // error={Boolean(errors.email)}
                // helperText={Boolean(errors.email) && errors.email.message}
              />

              <TextField
                label="Số điện thoại"
                sx={{ width: 600 }}
                {...register("soDt")}
                // error={Boolean(errors.soDt)}
                // helperText={Boolean(errors.soDt) && errors.soDt.message}
              />
              <TextField
                label="Họ tên"
                sx={{ width: 600 }}
                {...register("hoTen")}
                // error={Boolean(errors.hoTen)}
                // helperText={Boolean(errors.hoTen) && errors.hoTen.message}
              />
              {/* Select */}
              <Select>
                <option value="Khach Hang">Khách hàng</option>
                <option value="Quan Tri">Quản trị</option>
              </Select>

              <Button variant="contained" size="large" type="submit">
                Thêm người dùng
              </Button>
            </Stack>
          </form>
        </Grid>
      </Grid>
    </Box>
  );
};
export default AddUser;
