import { CURRENT_USER, GROUP_CODE } from "../constant";
import fetcher from "./fetcher";

// Thêm phim
export const addMovieAPI = async (payload) => {
  try {
    const response = await fetcher.post(
      "/QuanLyPhim/ThemPhimUploadHinh",
      payload
    );
    return response.data.content;
  } catch (error) {
    throw "Error!!";
  }
};

// Xoá Phim
export const deleteMovieAPI = async (movieID) => {
  try {
    const response = await fetcher.delete("/QuanLyPhim/XoaPhim", {
      params: {
        maPhim: movieID,
      },
    });
    return response.data.content;
  } catch (error) {
    throw "Error!!";
  }
};

// Lấy danh sách phim (GET) (Lấy API từ movieAPI)

// Cập nhật phim
// export const updateMovieAPI = async;
