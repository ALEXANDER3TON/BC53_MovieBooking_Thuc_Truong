import fetcher from "./fetcher"

export const getBannersAPI = async () => {
    try {
        const response = await fetcher.get("/QuanLyPhim/LayDanhSachBanner");
    } catch (error) {
        
    }
};

export const getListMovieAPI = async () => {
    try {
        const response = await fetcher.get("/QuanLyPhim/LayDanhSachPhim", {
            params:{
                maNhom:"GP03"
            },
        })

    } catch (error) {
        
    }
};

export const getMovieDetailsAPI = async (movieID) => {
    try {
        const response = await fetcher.get("/QuanLyPhim/LayThongTinPhim", {
            params: {
                maPhim: movieID,
            },
        })
    } catch (error) {
        
    }
}
