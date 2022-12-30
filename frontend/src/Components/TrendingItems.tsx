//dependencies
import React from "react";

//components
import { ItemModal } from "./ItemModal";

//api
import { getTrending } from "../API/Api";

export const TrendingItems = () => {
  const trendingData = getTrending();
  return (
    <div className="items-container">
      {trendingData.map(({ id }, key) => {
        console.log(id);
        return <ItemModal key={key} />;
      })}
    </div>
  );
};
