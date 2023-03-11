//dependencies
import React, { useState } from "react";

//assets
import triangle_down from "../Assets/Images/triangle-down.png";

type PROPS = {
  title: string;
  options: string[];
};

export const SellerOptionHiddenDiv = ({ title, options }: PROPS) => {
  const [titleState, setTitleState] = useState(title);
  const [height, setHeight] = useState("25px");
  const [display, setDisplay] = useState("none");

  const heightHandler = () => {
    console.log("clicked");
    if (height === "25px") {
      setHeight("100px");
      setDisplay("flex");
    } else {
      setDisplay("none");
      setHeight("25px");
    }
  };
  return (
    <>
      <div
        className="seller-option-hidden-div"
        style={{ maxHeight: height }}
        onClick={() => heightHandler()}
      >
        <div className="hidden-div-title">
          <p>{titleState}</p> &nbsp;
          <img src={triangle_down} alt="" />
        </div>
        {options.map((option: string, key) => {
          return (
            <div
              key={key}
              className="hidden-div-option"
              style={{ display: display }}
              onClick={() => setTitleState(option)}
            >
              <p>{option}</p>
            </div>
          );
        })}
      </div>
    </>
  );
};
