import React from "react";
import { Carousel } from "antd";

const contentStyle = {
  height: "400px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

export default function HomeCarousel() {
  return (
    <Carousel autoplay>
      <div>
        <div style={contentStyle}>
          <img
            src="https://source.unsplash.com/random"
            className="w-full"
            alt=""
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            src="https://source.unsplash.com/random"
            className="w-full"
            alt=""
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            src="https://source.unsplash.com/random"
            className="w-full"
            alt=""
          />
        </div>
      </div>
      <div>
        <div style={contentStyle}>
          <img
            src="https://source.unsplash.com/random"
            className="w-full"
            alt=""
          />
        </div>
      </div>
    </Carousel>
  );
}
