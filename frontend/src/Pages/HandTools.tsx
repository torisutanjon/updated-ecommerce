//dependencies
import React, { useEffect, useState, useTransition } from "react";

//components
import { Topnav } from "../Components/Topnav";
import { ItemModal } from "../Components/ItemModal";

//apis
import { bestPowerTools } from "../API/Api";
import { bestHandTools } from "../API/Api";
import { bestPowerToolsAccessories } from "../API/Api";
import { bestHandToolsAccessories } from "../API/Api";
import { bestKitchenwares } from "../API/Api";

//assets
import "../Assets/Styles/handtoolStyle.css";
import power_tools_icon from "../Assets/Images/power-tools-btn.png";
import hand_tools_icon from "../Assets/Images/hand-tools-btn.png";
import power_tools_ac_icon from "../Assets/Images/power-tools-accesories-btn.png";
import hand_tools_ac_icon from "../Assets/Images/hand-tools-accessories-btn.png";
import kitchenwares_icons from "../Assets/Images/kitchen-ware-btn.png";
import handtools_bg1 from "../Assets/Images/handtools-bg1.png";
import handtools_bg2 from "../Assets/Images/handtools-bg2.png";
import handtools_bg3 from "../Assets/Images/handtools-bg3.png";

//hooks
import { handToolsImageGalleryHook } from "../Hooks/Hook";

export const HandTools = () => {
  const [isPending, startTransition] = useTransition();
  const [powerTools, setPowerTools] = useState<string[]>();
  const [handTools, setHandTools] = useState<string[]>();
  const [powerToolsAccessories, setPowerToolsAccessories] =
    useState<string[]>();
  const [handToolsAccessories, setHandToolsAccessories] = useState<string[]>();
  const [kitchenwares, setKitchenwares] = useState<string[]>();

  useEffect(() => {
    document.title = "Hand Tools";

    startTransition(() => {
      setPowerTools(bestPowerTools());
      setHandTools(bestHandTools());
      setPowerToolsAccessories(bestPowerToolsAccessories());
      setHandToolsAccessories(bestHandToolsAccessories());
      setKitchenwares(bestKitchenwares());
    });
  });

  return (
    <div className="page-body">
      <Topnav />
      <div className="hand-tools-content">
        <div className="hand-tools-navlink">
          <div className="navlink-div">
            <a href="/computer-parts">Computer Parts</a>
          </div>
          <div className="line-div"></div>
          <div className="navlink-div">
            <a href="/ready-to-wear">Ready To Wear</a>
          </div>
          <div className="line-div"></div>
          <div className="navlink-div">
            <a href="/hand-tools">Hand Tools</a>
          </div>
          <div className="line-div"></div>
          <div className="navlink-div">
            <a href="/gadgets">Gadgets</a>
          </div>
          <div className="line-div"></div>
          <div className="navlink-div">
            <a href="/appliances">Appliances</a>
          </div>
        </div>
        <div className="hand-tools-category-container">
          <a href="/hand-tools/category/power-tools">
            <div className="hand-tools-category-div">
              <div className="hand-tools-category-img-div">
                <img src={power_tools_icon} alt="" />
              </div>
              <div className="hand-tools-category-p-div">
                <p>power tools</p>
              </div>
            </div>
          </a>
          <a href="/hand-tools/category/hand-tools">
            <div className="hand-tools-category-div">
              <div className="hand-tools-category-img-div">
                <img src={hand_tools_icon} alt="" />
              </div>
              <div className="hand-tools-category-p-div">
                <p>hand tools</p>
              </div>
            </div>
          </a>
          <a href="/hand-tools/category/power-tools-accessories">
            <div className="hand-tools-category-div">
              <div className="hand-tools-category-img-div">
                <img src={power_tools_ac_icon} alt="" />
              </div>
              <div className="hand-tools-category-p-div">
                <p>power tools accessories</p>
              </div>
            </div>
          </a>
          <a href="/hand-tools/category/hand-tools-accessories">
            <div className="hand-tools-category-div">
              <div className="hand-tools-category-img-div">
                <img src={hand_tools_ac_icon} alt="" />
              </div>
              <div className="hand-tools-category-p-div">
                <p>hand tools accessories</p>
              </div>
            </div>
          </a>
          <a href="/hand-tools/category/kitchenwares-tools">
            <div className="hand-tools-category-div">
              <div className="hand-tools-category-img-div">
                <img src={kitchenwares_icons} alt="" />
              </div>
              <div className="hand-tools-category-p-div">
                <p>kitchenwares / tools</p>
              </div>
            </div>
          </a>
        </div>
        <div className="hand-tools-gallery">
          <div className="image-container">
            <div className="image-div" style={{ left: "0" }}>
              <img src={handtools_bg1} alt="" />
            </div>
            <div className="image-div" style={{ left: "100%" }}>
              <img src={handtools_bg2} alt="" />
            </div>
            <div className="image-div" style={{ left: "200%" }}>
              <img src={handtools_bg3} alt="" />
            </div>
          </div>
          <div className="gallery-nav-container">
            <div
              className="gallery-nav-div"
              id="nav1"
              style={{ background: "white" }}
              onClick={() => handToolsImageGalleryHook("nav1")}
            ></div>
            <div
              className="gallery-nav-div"
              id="nav2"
              onClick={() => handToolsImageGalleryHook("nav2")}
            ></div>
            <div
              className="gallery-nav-div"
              id="nav3"
              onClick={() => handToolsImageGalleryHook("nav3")}
            ></div>
          </div>
        </div>
        <div className="hand-tools-products-container">
          <div className="hand-tools-products-div">
            <div className="top">
              <p>Best Selling Power Tools</p>
              <a href="/hand-tools/category/power-tools">[View All]</a>
            </div>
            <div className="product-content">
              {powerTools?.map((data, key) => {
                return <ItemModal key={key} />;
              })}
            </div>
          </div>
          <div className="hand-tools-products-div">
            <div className="top">
              <p>Best Selling Hand Tools</p>
              <a href="/hand-tools/category/hand-tools">[View All]</a>
            </div>
            <div className="product-content">
              {handTools?.map((data, key) => {
                return <ItemModal key={key} />;
              })}
            </div>
          </div>
          <div className="hand-tools-products-div">
            <div className="top">
              <p>Best Selling Power Tools Accessories</p>
              <a href="/hand-tools/category/power-tools-accessories">
                [View All]
              </a>
            </div>
            <div className="product-content">
              {powerToolsAccessories?.map((data, key) => {
                return <ItemModal key={key} />;
              })}
            </div>
          </div>
          <div className="hand-tools-products-div">
            <div className="top">
              <p>Best Selling Hand Tools Accessories</p>
              <a href="/hand-tools/category/hand-tools-accessories">
                [View All]
              </a>
            </div>
            <div className="product-content">
              {handToolsAccessories?.map((data, key) => {
                return <ItemModal key={key} />;
              })}
            </div>
          </div>
          <div className="hand-tools-products-div">
            <div className="top">
              <p>Best Selling Kitchenwares / Tools</p>
              <a href="/hand-tools/category/kitchenwares-tools">[View All]</a>
            </div>
            <div className="product-content">
              {kitchenwares?.map((data, key) => {
                return <ItemModal key={key} />;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
