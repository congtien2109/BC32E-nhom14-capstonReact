import React, { useEffect } from "react";
import { Carousel } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getCarouselAction } from "../../../../redux/action/CarouselAction";
import "./HomeCarousel.css";

export default function HomeCarousel(props) {
  const { arrImg } = useSelector((state) => state.CarouselReducer);
  const dispatch = useDispatch();

  //tu active khi component load ra
  useEffect(() => {
    dispatch(getCarouselAction());
  }, []);

  const contentStyle = {
    height: "550px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100%",
  };

  const renderImg = () => {
    return arrImg.map((item, index) => {
      return (
        <div key={index}>
          <div
            style={{ ...contentStyle, backgroundImage: `url(${item.hinhAnh})` }}
          >
            <img
              src={item.hinhAnh}
              className="w-full opacity-0"
              alt={item.hinhAnh}
            />
          </div>
        </div>
      );
    });
  };

  return (
    <Carousel autoplay style={{ width: "100%", padding: 0, margin: 0 }}>
      {renderImg()}
    </Carousel>
  );
}
