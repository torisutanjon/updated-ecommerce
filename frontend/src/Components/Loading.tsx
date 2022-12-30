//dependencies
import React from "react";

//assets
import "../Assets/Styles/mainstyle.css";
import loading_gif from "../Assets/Images/loading-gif.gif";

export const LoadingComponent = () => {
  return (
    <div className="loading-component-body">
      <div>
        <p>Loading Data</p>
      </div>
      <br />
      <div>
        <img src={loading_gif} alt="" />
      </div>
    </div>
  );
};
