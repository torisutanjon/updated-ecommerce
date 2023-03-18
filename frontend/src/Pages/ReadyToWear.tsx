//dependencies
import React, { useEffect } from "react";

//components
import { Topnav } from "../Components/Topnav";

//assets
// import "../Assets/Styles/rtwstyles.css";
import shirt_image from "../Assets/Images/shirts-image.png";
import short_image from "../Assets/Images/shorts-image.png";
import pant_image from "../Assets/Images/pant-image.png";
import headwear_image from "../Assets/Images/headwear-image.png";
import sleeveless_image from "../Assets/Images/sleeveless-image.png";
import underwear_image from "../Assets/Images/underwear-image.png";
import swimsuits_image from "../Assets/Images/swimsuits-image.png";
import shoes_image from "../Assets/Images/shoes-image.png";
import footwear_image from "../Assets/Images/footwear-image.png";
import sportswear_image from "../Assets/Images/sportswear-image.png";
import others_image from "../Assets/Images/others-image.png";

export const ReadyToWear = () => {
  useEffect(() => {
    document.title = "Ready To Wear";
  });

  const openRTWItemPage = () => {
    window.location.href = "/ready-to-wear/category-search";
  };

  return (
    <div className="absolute top-0 left-0 h-full w-full">
      <Topnav />
      <div className="relative h-[250vh] w-full bg-white flex flex-col items-center justify-center">
        <div className="relative h-[5vh] w-full bg-[#c7c7c7] flex items-center justify-center z-[1] rtw-navlink-container-box-shadow">
          <div className="relative h-full w-[60%] flex items-center justify-evenly">
            <a
              className="decoration-none text-black/50 transition-duration-[0.3s] font-[500] hover:font-bold"
              href="/computer-parts"
            >
              COMPUTER PARTS
            </a>
            <a
              className="decoration-none text-black/50 transition-duration-[0.3s] font-[500] hover:font-bold"
              href="/ready-to-wear"
            >
              READY TO WEAR
            </a>
            <a
              className="decoration-none text-black/50 transition-duration-[0.3s] font-[500] hover:font-bold"
              href="/hand-tools"
            >
              HAND TOOLS
            </a>
            <a
              className="decoration-none text-black/50 transition-duration-[0.3s] font-[500] hover:font-bold"
              href="/gadgets"
            >
              GADGETS
            </a>
            <a
              className="decoration-none text-black/50 transition-duration-[0.3s] font-[500] hover:font-bold"
              href="/appliances"
            >
              APPLIANCES
            </a>
          </div>
        </div>
        <div className="relative h-[5vh] w-full bg-[#c7c7c7] flex items-center justify-center">
          <div className="relative h-full w-[60%] flex items-center justify-evenly">
            <a
              className="decoration-none text-black/50 transition-duration-[0.3s] font-[500] hover:font-bold"
              href="/"
            >
              MEN
            </a>
            <a
              className="decoration-none text-black/50 transition-duration-[0.3s] font-[500] hover:font-bold"
              href="/"
            >
              WOMEN
            </a>
            <a
              className="decoration-none text-black/50 transition-duration-[0.3s] font-[500] hover:font-bold"
              href="/"
            >
              KIDS
            </a>
            <a
              className="decoration-none text-black/50 transition-duration-[0.3s] font-[500] hover:font-bold"
              href="/"
            >
              TRENDS
            </a>
            <a
              className="decoration-none text-black/50 transition-duration-[0.3s] font-[500] hover:font-bold"
              href="/"
            >
              CLASSICS
            </a>
          </div>
        </div>
        <div className="relative h-[165vh] w-full flex flex-row">
          <div className="relative h-full w-1/2 flex flex-col items-center justify-center">
            <div className="relative h-[70%] w-full flex items-center justify-center">
              <div
                className="relative h-[99%] w-[99%] bg-[#c7c7c7] self-center justify-self-center cursor-pointer"
                onClick={() => openRTWItemPage()}
              >
                <div className="relative h-[85%] w-full">
                  <img
                    className="relative h-full w-full"
                    src={shirt_image}
                    alt=""
                  />
                </div>
                <div className="relative h-[5%] w-full flex items-center justify-center">
                  <p className="text-[22px] font-[500]">SHIRTS</p>
                </div>
                <div className="relative h-[10%] w-full flex items-center justify-center">
                  <a
                    className="text-[16px] decoration-none text-black/50"
                    href="/"
                  >
                    SHOP NOW {"->"}
                  </a>
                </div>
              </div>
            </div>
            <div className="relative w-[99.5%] flex flex-row items-center justify-center">
              <div className="relative h-full w-1/2 flex items-center justify-center">
                <div
                  className="relative h-[99%] w-[99%] bg-[#c7c7c7] self-center justify-self-center cursor-pointer"
                  onClick={() => openRTWItemPage()}
                >
                  <div className="relative h-[85%] w-full">
                    <img
                      className="relative h-full w-full"
                      src={short_image}
                      alt=""
                    />
                  </div>
                  <div className="relative h-[5%] w-full flex items-center justify-center">
                    <p className="text-[#22px] font-[500]">SHORTS</p>
                  </div>
                  <div className="relative h-[10%] w-full flex items-center justify-center">
                    <a
                      className="text-[17px] decoration-none text-black/50"
                      href="/"
                    >
                      SHOP NOW {"->"}
                    </a>
                  </div>
                </div>
              </div>
              <div className="relative h-full w-1/2 flex items-center justify-center">
                <div
                  className="relative h-[99%] w-[99%] bg-[#c7c7c7] self-center justify-self-center cursor-pointer"
                  onClick={() => openRTWItemPage()}
                >
                  <div className="relative h-[85%] w-full">
                    <img
                      className="relative h-full w-full"
                      src={pant_image}
                      alt=""
                    />
                  </div>
                  <div className="relative h-[5%] w-full flex items-center justify-center">
                    <p className="text-[22px] font-[500]">PANTS</p>
                  </div>
                  <div className="relative h-[10%] w-full flex items-center justify-center">
                    <a
                      className="text-[12px] decoration-none text-black/50"
                      href="/"
                    >
                      SHOP NOW {"->"}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="relative h-full w-1/2 flex flex-col items-center justify-center">
            <div className="relative h-[30%] w-full flex items-center justify-center">
              <div
                className="relative h-[99%] w-[99%] bg-[#c7c7c7] self-center justify-self-center cursor-pointer"
                onClick={() => openRTWItemPage()}
              >
                <div className="relative h-[85%] w-full">
                  <img
                    className="relative h-full w-full"
                    src={headwear_image}
                    alt=""
                  />
                </div>
                <div className="relative h-[5%] w-full flex items-center justify-center">
                  <p className="text-[#22px] font-[500]">HEADWEAR</p>
                </div>
                <div className="relative h-[10%] w-full flex items-center justify-center">
                  <a
                    className="text-[#17px] decoration-none text-black/50"
                    href="/"
                  >
                    SHOP NOW {"->"}
                  </a>
                </div>
              </div>
            </div>
            <div className="relative h-[70%] w-full flex items-center justify-center">
              <div
                className="relative h-[99%] w-[99%] bg-[#c7c7c7] self-center justify-self-center cursor-pointer"
                onClick={() => openRTWItemPage()}
              >
                <div className="relative h-[85%] w-full">
                  <img
                    className="relative h-full w-full"
                    src={sleeveless_image}
                    alt=""
                  />
                </div>
                <div className="relative h-[5%] w-full flex items-center justify-center">
                  <p className="text-[#22px] font-[500]">SLEEVELESS</p>
                </div>
                <div className="relative h-[10%] w-full flex items-center justify-center">
                  <a
                    className="text-[17px] decoration-none text-black/50"
                    href="/"
                  >
                    SHOP NOW {"->"}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative h-[70vh] w-full grid grid-cols-3 grid-rows-2">
          <div
            className="relative h-[99%] w-[99%] bg-[#c7c7c7] self-center justify-self-center cursor-pointer"
            onClick={() => openRTWItemPage()}
          >
            <div className="relative h-[85%] w-full">
              <img
                className="relative h-full w-full"
                src={underwear_image}
                alt=""
              />
            </div>
            <div className="relative h-[5%] w-full flex items-center justify-center">
              <p className="text-[22px] font-[500]">UNDERWEARS</p>
            </div>
            <div className="relative h-[10%] w-full flex items-center justify-center">
              <a className="text-[17px] decoration-none text-black/50" href="/">
                SHOP NOW {"->"}
              </a>
            </div>
          </div>
          <div
            className="relative h-[99%] w-[99%] bg-[#c7c7c7] self-center justify-self-center cursor-pointer"
            onClick={() => openRTWItemPage()}
          >
            <div className="relative h-[85%] w-full">
              <img
                className="relative h-full w-full"
                src={swimsuits_image}
                alt=""
              />
            </div>
            <div className="category-name">
              <p>SWIMSUITS</p>
            </div>
            <div className="category-link">
              <a href="/">SHOP NOW {"->"}</a>
            </div>
          </div>
          <div className="category-div" onClick={() => openRTWItemPage()}>
            <div className="category-profile">
              <img src={shoes_image} alt="" />
            </div>
            <div className="category-name">
              <p>SHOES</p>
            </div>
            <div className="category-link">
              <a href="/">SHOP NOW {"->"}</a>
            </div>
          </div>
          <div className="category-div" onClick={() => openRTWItemPage()}>
            <div className="category-profile">
              <img src={footwear_image} alt="" />
            </div>
            <div className="category-name">
              <p>FOOTWEARS</p>
            </div>
            <div className="category-link">
              <a href="/">SHOP NOW {"->"}</a>
            </div>
          </div>
          <div className="category-div" onClick={() => openRTWItemPage()}>
            <div className="category-profile">
              <img src={sportswear_image} alt="" />
            </div>
            <div className="category-name">
              <p>SPORTS WEAR</p>
            </div>
            <div className="category-link">
              <a href="/">SHOP NOW {"->"}</a>
            </div>
          </div>
          <div className="category-div" onClick={() => openRTWItemPage()}>
            <div className="category-profile">
              <img src={others_image} alt="" />
            </div>
            <div className="category-name">
              <p>OTHERS</p>
            </div>
            <div className="category-link">
              <a href="/">SHOP NOW {"->"}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
