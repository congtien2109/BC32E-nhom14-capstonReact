import { Fragment } from "react";
import { Route } from "react-router";
import Header from "./Layout/Header/Header";
import HomeCarousel from "./Layout/HomeCarousel/HomeCarousel";
export const HomeTemplate = (props) => {
  const { Component, ...restProps } = props;
  return (
    <Route
      {...restProps}
      render={(propsRoute) => {
        return (
          <Fragment>
            <Header {...propsRoute} />
            <HomeCarousel {...propsRoute} />
            <Component {...propsRoute} />

            <footer className="bg-black text-white h-10">
              This is footer HomePage
            </footer>
          </Fragment>
        );
      }}
    />
  );
};
