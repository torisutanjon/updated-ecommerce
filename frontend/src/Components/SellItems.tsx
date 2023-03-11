//dependencies
import React, { useState } from "react";

//assets
import add_image from "../Assets/Images/add-icon.png";
import delete_image from "../Assets/Images/delete-icon.png";

export const SellItems = () => {
  const [elements, setElements] = useState<any[]>();
  const [elementID, setElementID] = useState<any[]>();

  const setElementIDHandler = () => {
    let id = 0;
    let idHolder = [];
    if (elementID === undefined) {
      idHolder.push(id);
      setElementID(idHolder);
    } else {
      idHolder = [...elementID];
      for (let i = 0; i < elementID.length; i++) {
        while (id <= elementID[i]) {
          id++;
        }
      }
      idHolder.push(id);
      setElementID(idHolder);
    }
    return id;
  };

  const createElementHandler = (id: number | undefined) => {
    return (
      <div className="sell-item-variation-div" key={id} id={id!.toString()}>
        <input
          className="variation-inputs-element"
          type="text"
          placeholder="e.g. Type: Value"
        />
        <img
          src={delete_image}
          alt=""
          onClick={() => deleteElementHandler(id)}
        />
      </div>
    );
  };

  const setElementHandler = () => {
    const id = setElementIDHandler();
    const element = createElementHandler(id);

    let elementsHolder = [];

    if (elements === undefined) {
      elementsHolder.push(element);
      setElements(elementsHolder);
    } else {
      elementsHolder = [...elements];
      elementsHolder.push(element);
      setElements(elementsHolder);
    }
  };

  const deleteElementHandler = (id: number | undefined) => {
    let elementHolder = [...elements!];
    console.log(elementHolder);
  };

  return (
    <div className="sell-items-body">
      <div className="sell-items-info-container">
        <div>
          <p>Product Name:</p>
        </div>
        <div>
          <input type="text" />
        </div>
        <div>
          <p>Product Variation/s:</p>
        </div>
        <div id="sell-item-variation">
          <>
            {elements === undefined ? (
              <></>
            ) : (
              <>
                {elements.map((data) => {
                  return data;
                })}
              </>
            )}
          </>
          <img
            src={add_image}
            alt=""
            style={{ marginTop: "10px" }}
            onClick={() => {
              setElementHandler();
            }}
          />
        </div>
        <div>
          <p>Quantity:</p>
        </div>
        <div>
          <input type="number" />
        </div>
        <div>
          <p>Selling Price:</p>
        </div>
        <div>
          <input type="number" />
        </div>
      </div>
      <div className="sell-items-image-container"></div>
    </div>
  );
};
