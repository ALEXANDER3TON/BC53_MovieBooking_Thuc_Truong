import fetcher from "./fetcher";

// Add Movie
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

// Delete Movie
export const deleteMovieAPI = async (payload) => {
  try {
    const response = await fetcher.post(payload);
    //return response.data.content;
  } catch (error) {
    throw "Error!!";
  }
};
