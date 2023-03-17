//dependencies
import React from "react";

//assets
import loading_gif from "../Assets/Images/loading-gif.gif";

export const LoadingComponent = () => {
  return (
    <div className="relative h-full w-full flex flex-col items-center justify-center">
      <div>
        <p className="text-[32px] text-black/50 cursor-default top-0">
          Loading Data
        </p>
      </div>
      <br />
      <div>
        <img className="relative h-[50px] w-[50px]" src={loading_gif} alt="" />
      </div>
    </div>
  );
};
