//dependencies
import React from "react";
//api
import { getRTWCategoryItem } from "../API/Api";
//components
import { ItemModal } from "./ItemModal";

export const RTWCategoryItem = () => {
  const rtwcategorydate = getRTWCategoryItem();
  return (
    <div className="rtw-category-searched-content">
      {rtwcategorydate.map(({ id }, key) => {
        return <ItemModal key={key} />;
      })}
    </div>
  );
};
