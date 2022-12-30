//dependencies
import React, { useState } from "react";

//components
import { Topnav } from "../Components/Topnav";
import { ItemModal } from "../Components/ItemModal";

//hooks
import { gadgetsHiddenDivHook } from "../Hooks/Hook";

//assets
import "../Assets/Styles/gadgetsStyles.css";

//apis
import { getNewArrivals } from "../API/Api";
import { getBestSellers } from "../API/Api";

interface CategoryData {
  title: string;
  categories: string[];
  links: string[];
}

export const Gadgets = () => {
  //states
  const [categoryData, setCategoruID] = useState<CategoryData | undefined>();

  let arrivalIndex = 5;

  //internal hooks
  const mouseIn = (id: string) => {
    const returnedData = gadgetsHiddenDivHook(id);
    setCategoruID(returnedData);

    const element = document.getElementById("gadgets-category-hidden-div");
    const elementTitle = document.getElementById("gadgets-category-title");
    const elementCategory = document.getElementById("gadgets-categories-div");

    if (element !== null && elementTitle !== null && elementCategory !== null) {
      elementTitle.style.height = "30%";
      elementCategory.style.height = "70%";
      element.style.height = "300px";
      element.style.visibility = "visible";
    }
  };

  const mouseOut = () => {
    const element = document.getElementById("gadgets-category-hidden-div");
    const elementTitle = document.getElementById("gadgets-category-title");
    const elementCategory = document.getElementById("gadgets-categories-div");

    if (element !== null && elementTitle !== null && elementCategory !== null) {
      elementTitle.style.height = "0";
      elementCategory.style.height = "0";
      element.style.height = "0";
      element.style.visibility = "hidden";
    }
  };

  const newArrivals = (condition: string) => {
    //get arrival data
    if (condition === "prev") {
      if (arrivalIndex > 5) {
        arrivalIndex -= 5;
        console.log(getNewArrivals(arrivalIndex));
      }
    } else {
      arrivalIndex += 5;
      console.log(getNewArrivals(arrivalIndex));
    }
    console.log(`arrivalIndex: ${arrivalIndex}`);
  };

  return (
    <div className="page-body">
      <Topnav />
      <div className="gadgets-content">
        <div className="gadgets-navlink" onMouseOver={() => mouseOut()}>
          <div className="gadgets-nav-container">
            <a href="/computer-parts">Computer Parts</a>
            <a href="/ready-to-wear">Ready To Wear</a>
            <a href="/handtools">Hand Tools</a>
            <a href="/gadgets">Gadgets</a>
            <a href="/appliances">Appliances</a>
          </div>
        </div>

        <div className="gadgets-category">
          <div
            className="gadgets-nav-container"
            style={{ justifyContent: "space-evenly" }}
          >
            <div
              className="gadgets-category-div"
              onMouseOver={() => mouseIn("professionalUse")}
            >
              <p>Professional Use</p>
            </div>
            <div
              className="gadgets-category-div"
              onMouseOver={() => mouseIn("entertainment")}
            >
              <p>Entertainment</p>
            </div>
            <div
              className="gadgets-category-div"
              onMouseOver={() => mouseIn("gaming")}
            >
              <p>Gaming</p>
            </div>
            <div
              className="gadgets-category-div"
              onMouseOver={() => mouseIn("others")}
            >
              <p>Others</p>
            </div>
          </div>
          <div
            className="gadgets-category-hidden-div"
            id="gadgets-category-hidden-div"
          >
            <div className="gadgets-category-title" id="gadgets-category-title">
              <p>{categoryData?.title}</p>
            </div>
            <div className="gadgets-categories-div" id="gadgets-categories-div">
              {categoryData?.categories.map((category, index) => {
                return (
                  <div key={`${categoryData.title} ${category}`}>
                    <a href={categoryData.links[index]}>{category}</a>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
        <div
          className="gadgets-products-content"
          onMouseOver={() => mouseOut()}
        >
          <div className="gadget-products-container">
            <div className="gadget-products-title">
              <p>New Arrivals</p>
            </div>
            <div className="gadget-products-gallery"></div>
            <div className="gadget-products-navigator">
              <button onClick={() => newArrivals("prev")}>{"<"}</button>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <button onClick={() => newArrivals("next")}>{">"}</button>
            </div>
          </div>
          <div className="gadget-products-container">
            <div className="gadget-products-title">
              <p>Best Sellers</p>
            </div>
            <div className="gadget-products-gallery"></div>
            <div className="gadget-products-navigator">
              <button>{"<"}</button>
              &nbsp; &nbsp; &nbsp; &nbsp;
              <button>{">"}</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
