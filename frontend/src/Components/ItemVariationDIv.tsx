//dependencies
import React, { useState } from "react";

//assets
import delete_image from "../Assets/Images/delete-icon.png";

interface Props {
  deleteElementHandler: (params: string) => any;
  data: number;
}
export const ItemVariationDiv = ({ data, deleteElementHandler }: Props) => {
  const [value, setValue] = useState("");
  const setValueHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <>
      <input
        className="variation-inputs-element"
        type="text"
        placeholder="e.g. Type: Value"
        onChange={setValueHandler}
        value={value}
      />
      <img
        src={delete_image}
        alt=""
        onClick={() => deleteElementHandler(data.toString())}
      />
    </>
  );
};
