//dependencies
import React, { useState, lazy, Suspense } from "react";

//components
import { Topnav } from "../Components/Topnav";
import { LoadingComponent } from "../Components/Loading";

//assets
import "../Assets/Styles/rtwstyles.css";
import left_arrow_image from "../Assets/Images/arrow-left-icon.png";
export const RTWItemPage = () => {
  const [categoryOne, setCategoryOne] = useState("All");
  const [categoryTwo, setCategoryTwo] = useState("All");

  const RTWCategoryItem = lazy(() =>
    wait(5000).then(() =>
      import("../Components/RTWCategoryItem").then((module) => {
        return {
          default: module.RTWCategoryItem,
        };
      })
    )
  );

  return (
    <div className="absolute top-0 left-0 h-full w-full">
      <Topnav />
      <div className="rtw-category-searched-body">
        <div className="rtw-category-searched-title">
          <a href="/ready-to-wear">
            <div>
              <img src={left_arrow_image} alt="" />
            </div>
          </a>
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <p style={{ color: "rgb(0, 0, 0, 0.5)" }}>Categories:</p>
          &nbsp; &nbsp; &nbsp;
          <p>
            {categoryOne}/{categoryTwo}
          </p>
        </div>
        <Suspense fallback={<LoadingComponent />}>
          <RTWCategoryItem />
        </Suspense>
      </div>
    </div>
  );
};
//simulate delay
const wait = (time: number) => {
  return new Promise((resolve) => {
    setTimeout(resolve, time);
  });
};
