//dependencies
import React, { lazy, Suspense, useEffect } from "react";

//components
import { Topnav } from "../Components/Topnav";
import { Footer } from "../Components/Footer";
import { LoadingComponent } from "../Components/Loading";
//hooks
import { slider } from "../Hooks/Hook";

//assets
// import "../Assets/Styles/landingpagestyle.css";

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
    <div className="relative h-full w-full flex flex-col items-center justify-center">
      <Topnav />
      <div
        className="relative h-[84px] w-full flex items-center justify-center z-[1]"
        style={{ background: "white" }}
      >
        <div className="relative h-full w-1/2 flex items-center justify-between">
          <a
            className="decoration-none font-normal transition-duration-[0.2s] hover:font-bold text-black"
            href="/computer-parts"
          >
            Computer Parts
          </a>
          <a
            className="decoration-none font-normal transition-duration-[0.2s] hover:font-bold text-black"
            href="/ready-to-wear"
          >
            Ready To Wear
          </a>
          <a
            className="decoration-none font-normal transition-duration-[0.2s] hover:font-bold text-black"
            href="/hand-tools"
          >
            Hand Tools
          </a>
          <a
            className="decoration-none font-normal transition-duration-[0.2s] hover:font-bold text-black"
            href="/gadgets"
          >
            Gadgets
          </a>
          <a
            className="decoration-none font-normal transition-duration-[0.2s] hover:font-bold text-black"
            href="/appliances"
          >
            Appliances
          </a>
        </div>
      </div>
      <section className="relative h-[500px] w-full flex flex-col items-center justify-center">
        <div className="relative h-[80%] w-full flex flex-row items-start justify-start">
          <img
            className="relative h-full transition-duration-[0.5s] imgsrc"
            src={home_slider}
            alt=""
            style={{ width: "100%" }}
          />
          <img
            className="relative h-full transition-duration-[0.5s] imgsrc"
            src={cp_slider}
            alt=""
            style={{ width: "0" }}
          />
          <img
            className="relative h-full transition-duration-[0.5s] imgsrc"
            src={rtw_slider}
            alt=""
            style={{ width: "0" }}
          />
          <img
            className="relative h-full transition-duration-[0.5s] imgsrc"
            src={ht_slider}
            alt=""
            style={{ width: "0" }}
          />
          <img
            className="relative h-full transition-duration-[0.5s] imgsrc"
            src={gadget_slider}
            alt=""
            style={{ width: "0" }}
          />
          <img
            className="relative h-full transition-duration-[0.5s] imgsrc"
            src={appliances_slider}
            alt=""
            style={{ width: "0" }}
          />
        </div>

        <div className="relative h-[20%] w-1/2 flex flex-row items-center justify-evenly m-0">
          <button
            className="relative h-[75px] w-[100px] cursor-pointer outline-none border-0 opacity-[0.75] transition-duration-[0.3s] rounded-[10px] bg-cover bg-center bg-no-repeat"
            style={{ background: `url(${home_button})` }}
            onClick={() => slider(0)}
          ></button>
          <button
            className="relative h-[75px] w-[100px] cursor-pointer outline-none border-0 opacity-[0.75] transition-duration-[0.3s] rounded-[10px] bg-cover bg-center bg-no-repeat"
            style={{ background: `url(${cp_button})` }}
            onClick={() => slider(1)}
          ></button>
          <button
            className="relative h-[75px] w-[100px] cursor-pointer outline-none border-0 opacity-[0.75] transition-duration-[0.3s] rounded-[10px] bg-cover bg-center bg-no-repeat"
            style={{ background: `url(${rtw_button})` }}
            onClick={() => slider(2)}
          ></button>
          <button
            className="relative h-[75px] w-[100px] cursor-pointer outline-none border-0 opacity-[0.75] transition-duration-[0.3s] rounded-[10px] bg-cover bg-center bg-no-repeat"
            style={{ background: `url(${ht_button})` }}
            onClick={() => slider(3)}
          ></button>
          <button
            className="relative h-[75px] w-[100px] cursor-pointer outline-none border-0 opacity-[0.75] transition-duration-[0.3s] rounded-[10px] bg-cover bg-center bg-no-repeat"
            style={{ background: `url(${gadget_button})` }}
            onClick={() => slider(4)}
          ></button>
          <button
            className="relative h-[75px] w-[100px] cursor-pointer outline-none border-0 opacity-[0.75] transition-duration-[0.3s] rounded-[10px] bg-cover bg-center bg-no-repeat"
            style={{
              background: `url(${appliances_button})`,
            }}
            onClick={() => slider(5)}
          ></button>
        </div>
      </section>
      <section className="relative h-[980px] w-full flex flex-col items-center">
        <p className="relative top-[10%] p-0 m-0 font-normal text-[42px]">
          TRENDING
        </p>
        <p
          className="relative top-[10%] p-0 m-0 font-normal text-[20px] text-black/50"
          style={{ fontSize: "20px", color: "rgb(0, 0, 0, 0.5)" }}
        >
          Monthly Trending Products
        </p>

        {/* lazy suspense this content-container */}
        <div className="relative h-[80%] w-[80%] mt-[10%] flex flex-col items-center justify-center overflow-x-auto content-container">
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
