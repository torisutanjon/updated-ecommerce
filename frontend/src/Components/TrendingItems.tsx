//dependencies
import React from "react";

//components
import { ItemModal } from "./ItemModal";

//api
import { getTrending } from "../API/Api";

export const TrendingItems = () => {
  const trendingData = getTrending();
  return (
    <div className="relative h-full w-full grid grid-cols-4">
      {trendingData.map(({ id }, key) => {
        return <ItemModal key={key} />;
      })}
    </div>
  );
};
