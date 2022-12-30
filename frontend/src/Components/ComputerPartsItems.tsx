//dependencies
import React from "react";

//components
import { ItemModal } from "./ItemModal";

//hooks
import { getComputerParts } from "../API/Api";

export const ComputerPartsItems = () => {
  const returnedData = getComputerParts();
  return (
    <div className="computer-parts-items-container">
      {returnedData.map(({ id }, key) => {
        console.log(id);
        return <ItemModal key={key} />;
      })}
    </div>
  );
};
