//dependencies
import React, { useState, lazy, Suspense, useEffect } from "react";

//components
import { Topnav } from "../Components/Topnav";
import { LoadingComponent } from "../Components/Loading";

//assets
import "../Assets/Styles/computerpartsstyle.css";

//data
import { brands } from "../JSON/data";

export const ComputerParts = () => {
  useEffect(() => {
    document.title = "Computer Parts";
  });

  const ComputerPartsItems = lazy(() =>
    wait(5000).then(() =>
      import("../Components/ComputerPartsItems").then((module) => {
        return { default: module.ComputerPartsItems };
      })
    )
  );

  const [priceDisplay, setPriceDisplay] = useState("none");
  const [brandDisplay, setBrandDisplay] = useState("none");
  const [priceText, setPriceText] = useState("Lowest");
  const [brandText, setBrandText] = useState("");

  const priceDisplayHook = () => {
    if (priceDisplay === "none") {
      setPriceDisplay("block");
    } else {
      setPriceDisplay("none");
    }
  };
  const priceTextHook = (text: string) => {
    priceDisplayHook();
    setPriceText(text);
  };
  const brandDisplayHook = () => {
    if (brandDisplay === "none") {
      setBrandDisplay("block");
    } else {
      setBrandDisplay("none");
    }
  };
  const brandTextHook = (text: string) => {
    brandDisplayHook();
    setBrandText(text);
  };
  return (
    <div className="page-body">
      <Topnav />
      <div className="cp-navlink">
        <div className="cp-navlink-container">
          <a href="/computer-parts">Computer Parts</a>
          <a href="/ready-to-wear">Ready To Wear</a>
          <a href="/hand-tools">Hand Tools</a>
          <a href="/gadgets">Gadgets</a>
          <a href="/appliances">Appliances</a>
        </div>
      </div>
      <div className="cp-content">
        <div className="cp-categories-container">
          <p>Accessory</p>
          <p>Processor</p>
          <p>Graphics Card</p>
          <p>Motherboard</p>
          <p>Monitor</p>
          <p>Chasis</p>
          <p>Storage</p>
          <p>Memory</p>
          <p>Peripherals</p>
          <p>Cooling System</p>
          <p>Power Source</p>
          <p>Furnture</p>
          <p>Networking</p>
          <p>Printer</p>
        </div>
        <div className="cp-items-container">
          <div className="cp-filter">
            <p>Price</p>
            <div className="dropdown-div">
              <button onClick={() => priceDisplayHook()}>{priceText}</button>
              <div>
                <div className="hidden-div">
                  <div
                    className="option-div"
                    onClick={() => priceTextHook("Lowest")}
                    style={{ display: priceDisplay }}
                  >
                    <p>Lowest</p>
                  </div>
                  <div
                    className="option-div"
                    onClick={() => priceTextHook("Highest")}
                    style={{ display: priceDisplay }}
                  >
                    <p>Highest</p>
                  </div>
                </div>
              </div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p>Brands</p>
            <div className="dropdown-div">
              <button onClick={() => brandDisplayHook()}>{brandText}</button>
              <div>
                <div className="hidden-div">
                  {brands.map((data, key) => {
                    return (
                      <div
                        key={key}
                        onClick={() => brandTextHook(data)}
                        className="option-div"
                        style={{ display: brandDisplay }}
                      >
                        <p>{data}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p>Price Range</p>
            <input type="text" name="lower-price" />
            <p>-</p>
            <input type="text" name="higher-price" />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="cp-search-btn">Search</button>
          </div>
          <div className="cp-item-container">
            <Suspense fallback={<LoadingComponent />}>
              <ComputerPartsItems />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
};
const wait = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
