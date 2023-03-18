//dependencies
import React, { useState, lazy, Suspense, useEffect } from "react";

//components
import { Topnav } from "../Components/Topnav";
import { LoadingComponent } from "../Components/Loading";

//assets
// import "../Assets/Styles/computerpartsstyle.css";

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
    <div className="absolute top-0 left-0 h-full w-full">
      <Topnav />
      <div className="relative h-[50px] w-full flex items-center justify-center cp-navlink-box-shadow">
        <div className="relative h-full w-1/2 flex flex-row items-center justify-between">
          <a
            className="decoration-none text-black/50 text-[16px]"
            href="/computer-parts"
          >
            Computer Parts
          </a>
          <a
            className="decoration-none text-black/50 text-[16px]"
            href="/ready-to-wear"
          >
            Ready To Wear
          </a>
          <a
            className="decoration-none text-black/50 text-[16px]"
            href="/hand-tools"
          >
            Hand Tools
          </a>
          <a
            className="decoration-none text-black/50 text-[16px]"
            href="/gadgets"
          >
            Gadgets
          </a>
          <a
            className="decoration-none text-black/50 text-[16px]"
            href="/appliances"
          >
            Appliances
          </a>
        </div>
      </div>
      <div className="relative h-screen w-full flex flex-row items-start justify-center">
        <div className="relative mt-[25px] h-[80%] w-[15%] flex flex-col items-start justify-start">
          <p className="mt-[15px] text-black/50 text-[14px] cursor-pointer transition-duration-[0.3s] hover:font-bold">
            Accessory
          </p>
          <p className="mt-[15px] text-black/50 text-[14px] cursor-pointer transition-duration-[0.3s] hover:font-bold">
            Processor
          </p>
          <p className="mt-[15px] text-black/50 text-[14px] cursor-pointer transition-duration-[0.3s] hover:font-bold">
            Graphics Card
          </p>
          <p className="mt-[15px] text-black/50 text-[14px] cursor-pointer transition-duration-[0.3s] hover:font-bold">
            Motherboard
          </p>
          <p className="mt-[15px] text-black/50 text-[14px] cursor-pointer transition-duration-[0.3s] hover:font-bold">
            Monitor
          </p>
          <p className="mt-[15px] text-black/50 text-[14px] cursor-pointer transition-duration-[0.3s] hover:font-bold">
            Chasis
          </p>
          <p className="mt-[15px] text-black/50 text-[14px] cursor-pointer transition-duration-[0.3s] hover:font-bold">
            Storage
          </p>
          <p className="mt-[15px] text-black/50 text-[14px] cursor-pointer transition-duration-[0.3s] hover:font-bold">
            Memory
          </p>
          <p className="mt-[15px] text-black/50 text-[14px] cursor-pointer transition-duration-[0.3s] hover:font-bold">
            Peripherals
          </p>
          <p className="mt-[15px] text-black/50 text-[14px] cursor-pointer transition-duration-[0.3s] hover:font-bold">
            Cooling System
          </p>
          <p className="mt-[15px] text-black/50 text-[14px] cursor-pointer transition-duration-[0.3s] hover:font-bold">
            Power Source
          </p>
          <p className="mt-[15px] text-black/50 text-[14px] cursor-pointer transition-duration-[0.3s] hover:font-bold">
            Furnture
          </p>
          <p className="mt-[15px] text-black/50 text-[14px] cursor-pointer transition-duration-[0.3s] hover:font-bold">
            Networking
          </p>
          <p className="mt-[15px] text-black/50 text-[14px] cursor-pointer transition-duration-[0.3s] hover:font-bold">
            Printer
          </p>
        </div>
        <div className="relative h-full w-[80%] flex flex-col items-center justify-start">
          <div className="relative h-[40px] w-full flex flex-row items-center justify-center z-[1]">
            <p className="text-[16px] font-[500] text-[#ff7a00]">Price</p>
            <div className="ml-[10px]">
              <button onClick={() => priceDisplayHook()}>{priceText}</button>
              <div>
                <div className="absolute max-h-[500px] min-w-[75px] max-w-[400px] overflow-y-scroll bg-white flex flex-col items-start justify-start">
                  <div
                    className="relative min-w-[75px] max-w-[400px] border border-[#80808080] cursor-pointer"
                    onClick={() => priceTextHook("Lowest")}
                    style={{ display: priceDisplay }}
                  >
                    <p className="text-center text-black/50">Lowest</p>
                  </div>
                  <div
                    className="relative min-w-[75px] max-w-[400px] border border-[#80808080] cursor-pointer"
                    onClick={() => priceTextHook("Highest")}
                    style={{ display: priceDisplay }}
                  >
                    <p className="text-center text-black/50">Highest</p>
                  </div>
                </div>
              </div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p className="text-[#ff7a00] text-[16px] font-[500px]">Brands</p>
            <div className="ml-[10px]">
              <button
                className="h-[25px] w-[75px] text-[14px] border-0 outline-none cursor-pointer bg-white text-black/50 dropdown-div-box-shadow"
                onClick={() => brandDisplayHook()}
              >
                {brandText}
              </button>
              <div>
                <div className="absolute max-h-[500px] min-width-[75px] max-width-[400px] overflow-y-scroll bg-white flex flex-col items-start justify-start">
                  {brands.map((data, key) => {
                    return (
                      <div
                        key={key}
                        onClick={() => brandTextHook(data)}
                        className="relative min-width-[75px] max-width-[400px] border border-[#80808080] cursor-pointer"
                        style={{ display: brandDisplay }}
                      >
                        <p className="text-center text-black/50">{data}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <p className="text-[#ff7a00] text-[16px] font-[500px]">
              Price Range
            </p>
            <input
              className="ml-[10px] border border-black/25 w-[75px] outline-none"
              type="text"
              name="lower-price"
            />
            &nbsp;
            <p>-</p>
            &nbsp;
            <input
              className="border border-black/25 w-[75px] outline-none"
              type="text"
              name="higher-price"
            />
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            <button className="h-[25px] w-[75px] text-[14px] border-0 outline-none cursor-pointer bg-white text-black/50 dropdown-div-box-shadow">
              Search
            </button>
          </div>
          <div className="relative top-[40px] mb-[5px] h-[85%] w-full flex items-center justify-center">
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
