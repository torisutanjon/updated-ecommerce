//dependencies
import React, { lazy, Suspense, useEffect } from "react";

//components
import { Topnav } from "../Components/Topnav";
import { Footer } from "../Components/Footer";
import { LoadingComponent } from "../Components/Loading";
//hooks
import { slider } from "../Hooks/Hook";

//assets
import "../Assets/Styles/landingpagestyle.css";
import "../Assets/Styles/mainstyle.css";

import home_button from "../Assets/Images/home-image-gallery.png";
import cp_button from "../Assets/Images/cp-image-gallery.png";
import rtw_button from "../Assets/Images/rtw-image-gallery.png";
import ht_button from "../Assets/Images/ht-image-gallery.png";
import gadget_button from "../Assets/Images/gadgets-image-gallery.png";
import appliances_button from "../Assets/Images/appliances-image-gallery.png";

import home_slider from "../Assets/Images/slider-image-1.png";
import cp_slider from "../Assets/Images/slider-image-2.png";
import rtw_slider from "../Assets/Images/slider-image-3.png";
import ht_slider from "../Assets/Images/slider-image-4.png";
import gadget_slider from "../Assets/Images/slider-image-5.png";
import appliances_slider from "../Assets/Images/slider-image-6.png";

export const LandingPage = () => {
  const TrendingItems = lazy(() =>
    wait(5000).then(() =>
      import("../Components/TrendingItems").then((module) => {
        return {
          default: module.TrendingItems,
        };
      })
    )
  );
  useEffect(() => {
    document.title = "E-Commerce";
  });
  return (
    <div className="page-body">
      <Topnav />
      <div className="navlink" style={{ background: "white" }}>
        <div className="a-container">
          <a style={{ color: "black" }} href="/computer-parts">
            Computer Parts
          </a>
          <a style={{ color: "black" }} href="/ready-to-wear">
            Ready To Wear
          </a>
          <a style={{ color: "black" }} href="/hand-tools">
            Hand Tools
          </a>
          <a style={{ color: "black" }} href="/gadgets">
            Gadgets
          </a>
          <a style={{ color: "black" }} href="/appliances">
            Appliances
          </a>
        </div>
      </div>
      <section className="gallery">
        <div className="img_container">
          <img
            className="imgsrc"
            src={home_slider}
            alt=""
            style={{ width: "100%" }}
          />
          <img
            className="imgsrc"
            src={cp_slider}
            alt=""
            style={{ width: "0" }}
          />
          <img
            className="imgsrc"
            src={rtw_slider}
            alt=""
            style={{ width: "0" }}
          />
          <img
            className="imgsrc"
            src={ht_slider}
            alt=""
            style={{ width: "0" }}
          />
          <img
            className="imgsrc"
            src={gadget_slider}
            alt=""
            style={{ width: "0" }}
          />
          <img
            className="imgsrc"
            src={appliances_slider}
            alt=""
            style={{ width: "0" }}
          />
        </div>

        <div className="slider">
          <button
            style={{ background: `url(${home_button})` }}
            onClick={() => slider(0)}
          ></button>
          <button
            style={{ background: `url(${cp_button})` }}
            onClick={() => slider(1)}
          ></button>
          <button
            style={{ background: `url(${rtw_button})` }}
            onClick={() => slider(2)}
          ></button>
          <button
            style={{ background: `url(${ht_button})` }}
            onClick={() => slider(3)}
          ></button>
          <button
            style={{ background: `url(${gadget_button})` }}
            onClick={() => slider(4)}
          ></button>
          <button
            style={{
              background: `url(${appliances_button})`,
            }}
            onClick={() => slider(5)}
          ></button>
        </div>
      </section>
      <section className="content">
        <p style={{ fontSize: "42px" }}>TRENDING</p>
        <p style={{ fontSize: "20px", color: "rgb(0, 0, 0, 0.5)" }}>
          Monthly Trending Products
        </p>

        {/* lazy suspense this content-container */}
        <div className="content-container">
          <Suspense fallback={<LoadingComponent />}>
            <TrendingItems />
          </Suspense>
        </div>
      </section>
      <Footer />
    </div>
  );
};
//simulate delay
const wait = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
