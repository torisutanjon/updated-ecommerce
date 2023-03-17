//dependencies
import React from "react";

import fb_icon from "../Assets/Images/fb-icon.png";
import twitter_icon from "../Assets/Images/twitter-icon.png";
import instagram_icon from "../Assets/Images/Instagram-Icon.png";

export const Footer = () => {
  return (
    <div className="relative h-[350px] w-full flex flex-col">
      <div className="relative h-[76px] w-full bg-[#4386c3]"></div>
      <div className="relative h-[274px] w-full flex flex-row items-center justify-center">
        <div className="relative h-full w-[40%] flex flex-col items-center justify-center">
          <a
            className="decoration-none text-[26px] font-normal text-[#ff8210]"
            href="/"
          >
            E-COMMERCE
          </a>
        </div>
        <div className="relative h-full w-[30%] flex flex-col items-start justify-start">
          <div className="relative h-[25%] w-full">
            <p className="text-[22px] font-bold pl-[40px] text-black/50">
              Links
            </p>
          </div>
          <div className="relative h-1/2 w-full flex flex-row items-start justify-evenly">
            <ul className="relative m-0 p-0 flex flex-col items-start justify-evenly">
              <li className="mt-[2.5%] text-black/25">
                <a
                  className="decoration-none text-[12px] text-black/50"
                  href="/"
                >
                  Home
                </a>
              </li>
              <li className="mt-[2.5%] text-black/25">
                <a
                  className="decoration-none text-[12px] text-black/50"
                  href="/"
                >
                  Computer Parts
                </a>
              </li>
              <li className="mt-[2.5%] text-black/25">
                <a
                  className="decoration-none text-[12px] text-black/50"
                  href="/"
                >
                  Ready To Wear
                </a>
              </li>
              <li className="mt-[2.5%] text-black/25">
                <a
                  className="decoration-none text-[12px] text-black/50"
                  href="/"
                >
                  Hand Tools
                </a>
              </li>
            </ul>
            <ul className="relative m-0 p-0 flex flex-col items-start justify-evenly">
              <li className="mt-[2.5%] text-black/25">
                <a
                  className="decoration-none text-[12px] text-black/50"
                  href="/"
                >
                  Gadgets
                </a>
              </li>
              <li className="mt-[2.5%] text-black/25">
                <a
                  className="decoration-none text-[12px] text-black/50"
                  href="/"
                >
                  Appliances
                </a>
              </li>
              <li className="mt-[2.5%] text-black/25">
                <a
                  className="decoration-none text-[12px] text-black/50"
                  href="/"
                >
                  View Cart
                </a>
              </li>
            </ul>
            <ul className="relative m-0 p-0 flex flex-col items-start justify-evenly">
              <li className="mt-[2.5%] text-black/25">
                <a
                  className="decoration-none text-[12px] text-black/50"
                  href="/"
                >
                  Sign In
                </a>
              </li>
              <li className="mt-[2.5%] text-black/25">
                <a
                  className="decoration-none text-[12px] text-black/50"
                  href="/"
                >
                  Sign Up
                </a>
              </li>
            </ul>
          </div>
          <div className="relative h-[25%] w-full flex items-center justify-center">
            <p className="text-[12px] p-0 m-0 text-[#446ed8]">
              ALL RIGHTS RESERVED @2022
            </p>
          </div>
        </div>
        <div className="relative h-full w-[30%] flex flex-col items-start justify-start">
          <div className="relative h-[25%] w-full">
            <p className="text-[22px] font-bold text-black/50">Visit Us</p>
          </div>
          <div className="relative h-[25%] w-full mt-[5%] flex flex-row items-center justify-start">
            <a href="/">
              <img
                className="relative h-[50px] w-[50px]"
                src={fb_icon}
                alt=""
              />
            </a>
            <a href="/" style={{ marginLeft: "10%" }}>
              <img
                className="relative h-[50px] w-[50px]"
                src={twitter_icon}
                alt=""
              />
            </a>
            <a href="/" style={{ marginLeft: "10%" }}>
              <img
                className="relative h-[50px] w-[50px]"
                src={instagram_icon}
                alt=""
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
