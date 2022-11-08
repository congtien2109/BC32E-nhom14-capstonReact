import React from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import Film from "../../components/Film/Film";
import MultipleRowSlick from "../../components/RSlick/MultipleRowSlick";
import { useEffect } from "react";
import { layDanhSachPhimAction } from "../../redux/action/QuanLyPhimAction";
import { layDanhSachHeThongRapAction } from "../../redux/action/QuanLyRapAction";
import HomeCarousel from "../../templates/HomeTemplate/Layout/HomeCarousel/HomeCarousel";
export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();
  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action); //dispatch function tu thunk

    dispatch(layDanhSachHeThongRapAction());
  }, []);
  return (
    <div>
      <HomeCarousel />

      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-20 py-24">
          <MultipleRowSlick arrFilm={arrFilm} />
        </div>
      </section>

      <div className="mx-36">
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>
    </div>
  );
}
