//dependencies
import React from "react";

//components
import { ItemModal } from "./ItemModal";

//hooks
import { getComputerParts } from "../API/Api";

export const ComputerPartsItems = () => {
  const returnedData = getComputerParts();
  return (
    <div className="relative h-[90%] w-[90%] grid grid-cols-5 overflow-y-scroll">
      {returnedData.map(({ id }, key) => {
        console.log(id);
        return <ItemModal key={key} />;
      })}
    </div>
  );
};
