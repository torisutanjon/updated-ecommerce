//dependencies
import React, { useState, useEffect } from "react";

//components
import { Topnav } from "../Components/Topnav";

//hooks
import { appliancesHideenDivHook } from "../Hooks/Hook";

//assets
import "../Assets/Styles/appliancesStyle.css";
import air_conditioner from "../Assets/Images/ariconditioner_image.png";
import kitchen_appliances from "../Assets/Images/kitchen_appliances.png";
import home_appliances from "../Assets/Images/home_appliances.png";
import entertainment_appliances from "../Assets/Images/entertainment_appliances.png";
import cleaning_appliances from "../Assets/Images/cleaning_appliances.png";
import vup from "../Assets/Images/vup.png";
import vdown from "../Assets/Images/vdown.png";
import aircon_coverdiv from "../Assets/Images/aircondition_coverdiv.png";
import kitapp_coverdiv from "../Assets/Images/kitchen_appliances_coverdiv.png";
import homeapp_converdiv from "../Assets/Images/home_appliances_coverdiv.png";
import enterapp_coverdiv from "../Assets/Images/entertainment_appliances_coverid.png";
import cleanapp_coverdiv from "../Assets/Images/cleaning_appliances_coverdiv.png";

interface AppliancesCategoryData {
  title: string;
  categories: string[];
  links: string[];
}

export const Appliances = () => {
  useEffect(() => {
    document.title = "Appliances";
  });

  const [categoryDataState, setCategoryDataState] =
    useState<AppliancesCategoryData>();

  const getCategoryData = (id: string) => {
    const categorydata = appliancesHideenDivHook(id);
    setCategoryDataState(categorydata);
  };

  const clickedCategoryHandley = (containerID: string, buttonID: string) => {
    //get category hidden data from appliancesHideenDivHook hook
    getCategoryData(containerID);

    const categoryContainer = document.getElementById(
      "categories-div-container"
    );
    const hiddenDiv = document.getElementById("appliances-hidden-div");
    const categoriesTitle = document.getElementById("category-title");

    const buttonElements = Array.from(
      document.getElementsByClassName(
        "button_image"
      ) as HTMLCollectionOf<HTMLImageElement>
    );

    //if hiddendiv is open just close it when the function is triggered
    if (hiddenDiv?.style.height === "50vh") {
      hiddenDiv.style.visibility = "hidden";
      hiddenDiv.style.height = "0";
      categoriesTitle!.style.visibility = "hidden";
      categoriesTitle!.style.height = "0";
      categoryContainer!.style.visibility = "hidden";
      categoryContainer!.style.height = "0";
    }
    buttonElements.forEach((element) => {
      if (element.id === buttonID) {
        if (element.src.endsWith(vup)) {
          //if the clicked category is already open
          element.src = vdown; //then close it
          if (hiddenDiv !== null) {
            hiddenDiv.style.visibility = "hidden";
            hiddenDiv.style.height = "0";
            categoriesTitle!.style.visibility = "hidden";
            categoriesTitle!.style.height = "0";
            categoryContainer!.style.visibility = "hidden";
            categoryContainer!.style.height = "0";
          }
        } else {
          element.src = vup; // if not then open it
          if (hiddenDiv !== null) {
            hiddenDiv.style.visibility = "visible";
            hiddenDiv.style.height = "50vh";
            categoriesTitle!.style.visibility = "visible";
            categoriesTitle!.style.height = "20%";
            categoryContainer!.style.visibility = "visible";
            categoryContainer!.style.height = "80%";
          }
        }
      } else {
        //set all other categories to have vdown image src
        element.src = vdown;
      }
    });
  };

  return (
    <div className="page-body">
      <Topnav />
      <div className="appliances-content">
        <div className="appliances-navlink">
          <div className="appliances-navlink-container">
            <a href="/computer-parts">Computer Parts</a>
            <a href="/ready-to-wear">Ready To Wear</a>
            <a href="/hand-tools">Hand Tools</a>
            <a href="/gadgets">Gadgets</a>
            <a href="/appliances">Appliances</a>
          </div>
        </div>
        <div className="appliances-categories-nav">
          <div className="appliances-categories-nav-container">
            <div
              className="appliances-categories-container"
              id="kitchenAppliances"
              onClick={() =>
                clickedCategoryHandley("airConditioner", "aircon-btn")
              }
            >
              <img src={air_conditioner} alt="" />
              <p>Air Conditioner</p>
              <img
                src={vdown}
                alt=""
                className="button_image"
                id="aircon-btn"
              />
            </div>
            <div
              className="appliances-categories-container"
              id="kitchenAppliances"
              onClick={() =>
                clickedCategoryHandley("kitchenAppliances", "kitapp-btn")
              }
            >
              <img src={kitchen_appliances} alt="" />
              <p>Kitchen Appliances</p>
              <img
                src={vdown}
                alt=""
                className="button_image"
                id="kitapp-btn"
              />
            </div>
            <div
              className="appliances-categories-container"
              id="homeAppliances"
              onClick={() =>
                clickedCategoryHandley("homeAppliances", "homeapp-btn")
              }
            >
              <img src={home_appliances} alt="" />
              <p>Home Appliances</p>
              <img
                src={vdown}
                alt=""
                className="button_image"
                id="homeapp-btn"
              />
            </div>
            <div
              className="appliances-categories-container"
              id="entertainmentAppliances"
              onClick={() =>
                clickedCategoryHandley(
                  "entertainmentAppliances",
                  "enterapp-btn"
                )
              }
            >
              <img src={entertainment_appliances} alt="" />
              <p>Entertainment Appliances</p>
              <img
                src={vdown}
                alt=""
                className="button_image"
                id="enterapp-btn"
              />
            </div>
            <div
              className="appliances-categories-container"
              id="cleaningAppliances"
              onClick={() =>
                clickedCategoryHandley("cleaningAppliances", "cleanapp-btn")
              }
            >
              <img src={cleaning_appliances} alt="" />
              <p>Cleaning Appliances</p>
              <img
                src={vdown}
                alt=""
                className="button_image"
                id="cleanapp-btn"
              />
            </div>
          </div>
        </div>
        <div id="appliances-hidden-div">
          <div id="category-title">
            <p>| {categoryDataState?.title} |</p>
          </div>
          <div id="categories-div-container">
            {categoryDataState?.categories.map((data, index) => {
              return (
                <div
                  className="categories-div"
                  key={categoryDataState.title + data}
                >
                  <a href={categoryDataState.links[index]}>{data}</a>
                </div>
              );
            })}
          </div>
        </div>
        <div className="appliances-ads-div">
          <div className="ads-container">
            <img src={aircon_coverdiv} alt="" />
            <p>Don't Let Warm Bother You In Any Way</p>
            <div className="ads-cover-div"></div>
          </div>
          <div className="ads-container">
            <img src={kitapp_coverdiv} alt="" />
            <p>A Relation With Food is Good</p>
            <div className="ads-cover-div"></div>
          </div>
          <div className="ads-container">
            <img src={homeapp_converdiv} alt="" />
            <p>Your House You Pride</p>
            <div className="ads-cover-div"></div>
          </div>
          <div className="ads-container">
            <img src={enterapp_coverdiv} alt="" />
            <p>Keep Calm and Entertain Yourself</p>
            <div className="ads-cover-div"></div>
          </div>
          <div className="ads-container">
            <img src={cleanapp_coverdiv} alt="" />
            <p>Everything Can Be Cleaned</p>
            <div className="ads-cover-div"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
