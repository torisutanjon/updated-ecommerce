//dependencies
import React from "react";

//components
import { Topnav } from "../Components/Topnav";

//assets
import "../Assets/Styles/rtwstyles.css";
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
  const openRTWItemPage = () => {
    window.location.href = "/ready-to-wear/category-search";
  };

  return (
    <div className="page-body">
      <Topnav />
      <div className="rtw-content">
        <div className="rtw-navlink-container">
          <div className="rtw-link-container">
            <a href="/computer-parts">COMPUTER PARTS</a>
            <a href="/ready-to-wear">READY TO WEAR</a>
            <a href="/hand-tools">HAND TOOLS</a>
            <a href="/gadgets">GADGETS</a>
            <a href="/appliances">APPLIANCES</a>
          </div>
        </div>
        <div className="rtw-categorylink-container">
          <div className="rtw-link-container">
            <a href="/">MEN</a>
            <a href="/">WOMEN</a>
            <a href="/">KIDS</a>
            <a href="/">TRENDS</a>
            <a href="/">CLASSICS</a>
          </div>
        </div>
        <div className="upper-content">
          <div className="left">
            <div className="shirt-container category-container">
              <div className="category-div" onClick={() => openRTWItemPage()}>
                <div className="category-profile">
                  <img src={shirt_image} alt="" />
                </div>
                <div className="category-name">
                  <p>SHIRTS</p>
                </div>
                <div className="category-link">
                  <a href="/">SHOP NOW {"->"}</a>
                </div>
              </div>
            </div>
            <div className="short-pant-container category-container">
              <div className="short-container">
                <div className="category-div" onClick={() => openRTWItemPage()}>
                  <div className="category-profile">
                    <img src={short_image} alt="" />
                  </div>
                  <div className="category-name">
                    <p>SHORTS</p>
                  </div>
                  <div className="category-link">
                    <a href="/">SHOP NOW {"->"}</a>
                  </div>
                </div>
              </div>
              <div className="pant-container">
                <div className="category-div" onClick={() => openRTWItemPage()}>
                  <div className="category-profile">
                    <img src={pant_image} alt="" />
                  </div>
                  <div className="category-name">
                    <p>PANTS</p>
                  </div>
                  <div className="category-link">
                    <a href="/">SHOP NOW {"->"}</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="right">
            <div className="headwear-container category-container">
              <div className="category-div" onClick={() => openRTWItemPage()}>
                <div className="category-profile">
                  <img src={headwear_image} alt="" />
                </div>
                <div className="category-name">
                  <p>HEADWEAR</p>
                </div>
                <div className="category-link">
                  <a href="/">SHOP NOW {"->"}</a>
                </div>
              </div>
            </div>
            <div className="sleeveless-container category-container">
              <div className="category-div" onClick={() => openRTWItemPage()}>
                <div className="category-profile">
                  <img src={sleeveless_image} alt="" />
                </div>
                <div className="category-name">
                  <p>SLEEVELESS</p>
                </div>
                <div className="category-link">
                  <a href="/">SHOP NOW {"->"}</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="lower-content">
          <div className="category-div" onClick={() => openRTWItemPage()}>
            <div className="category-profile">
              <img src={underwear_image} alt="" />
            </div>
            <div className="category-name">
              <p>UNDERWEARS</p>
            </div>
            <div className="category-link">
              <a href="/">SHOP NOW {"->"}</a>
            </div>
          </div>
          <div className="category-div" onClick={() => openRTWItemPage()}>
            <div className="category-profile">
              <img src={swimsuits_image} alt="" />
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
