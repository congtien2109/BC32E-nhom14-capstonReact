import {
  SET_DANH_SACH_PHIM,
  SET_FILM_DANG_CHIEU,
  SET_FILM_SAP_CHIEU,
} from "../types/QuanLyPhimType";
import { SET_CHI_TIET_PHIM } from "../types/QuanLyRapType";

const stateDefault = {
  arrFilm: [
    {
      maPhim: 10063,
      tenPhim: "The Lake",
      biDanh: "the-lake",
      trailer: "https://www.youtube.com/watch?v=orcxSddIA4s&feature=emb_title",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/the-lake_gp09.jpg",
      moTa: "Một con quái vật bí ẩn bỗng xuất hiện từ sông Mekong và tấn công vùng Bueng Kan,",
      maNhom: "GP09",
      ngayKhoiChieu: "2022-05-12T00:00:00",
      danhGia: 0,
      hot: false,
      dangChieu: true,
      sapChieu: false,
    },
    {
      maPhim: 10063,
      tenPhim: "The Lake",
      biDanh: "the-lake",
      trailer: "https://www.youtube.com/watch?v=orcxSddIA4s&feature=emb_title",
      hinhAnh: "https://movienew.cybersoft.edu.vn/hinhanh/the-lake_gp09.jpg",
      moTa: "Một con quái vật bí ẩn bỗng xuất hiện từ sông Mekong và tấn công vùng Bueng Kan,",
      maNhom: "GP09",
      ngayKhoiChieu: "2022-05-12T00:00:00",
      danhGia: 0,
      hot: false,
      dangChieu: true,
      sapChieu: false,
    },
  ],
  dangChieu: true,
  sapChieu: true,
  arrFilmDefault: [],
  filmDetail: {},

  thongTinPhim: {},
};
export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SET_DANH_SACH_PHIM: {
      state.arrFilm = action.arrFilm;
      state.arrFilmDefault = state.arrFilm;
      return { ...state };
    }
    case SET_FILM_DANG_CHIEU: {
      state.dangChieu = !state.dangChieu;

      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.dangChieu === state.dangChieu
      );
      return { ...state };
    }
    case SET_FILM_SAP_CHIEU: {
      state.sapChieu = !state.sapChieu;

      state.arrFilm = state.arrFilmDefault.filter(
        (film) => film.sapChieu === state.sapChieu
      );
      return { ...state };
    }
    case SET_CHI_TIET_PHIM: {
      state.filmDetail = action.filmDetail;
      return { ...state };
    }
    default:
      return { ...state };
  }
};
