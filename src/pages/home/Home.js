import React from "react";
import HomeMenu from "./HomeMenu/HomeMenu";
import { useSelector, useDispatch } from "react-redux";
import Film from "../../components/Film/Film";
import MultipleRowSlick from "../../components/RSlick/MultipleRowSlick";
import { useEffect } from "react";
import { layDanhSachPhimAction } from "../../redux/action/QuanLyPhimAction";
import { layDanhSachHeThongRapAction } from "../../redux/action/QuanLyRapAction";
export default function Home(props) {
  const { arrFilm } = useSelector((state) => state.QuanLyPhimReducer);
  const { heThongRapChieu } = useSelector((state) => state.QuanLyRapReducer);
  const dispatch = useDispatch();
  // const renderFilm = () => {
  //   return arrFilm.map((phim, index) => {
  //     return <Film key={index} />;
  //   });
  // };
  useEffect(() => {
    const action = layDanhSachPhimAction();
    dispatch(action); //dispatch function tu thunk

    dispatch(layDanhSachHeThongRapAction());
  }, []);
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto px-20 py-24">
          <MultipleRowSlick arrFilm={arrFilm} />
          {/* <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4">{renderFilm()}</div>
        </div> */}
        </div>
      </section>

      <div className="mx-36">
        <HomeMenu heThongRapChieu={heThongRapChieu} />
      </div>
    </div>
  );
}
