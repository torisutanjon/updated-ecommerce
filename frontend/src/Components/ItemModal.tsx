//dependencies
import React from "react";

//assets
import "../Assets/Styles/itemmodalstyle.css";
import item_image from "../Assets/Images/item-image.png";

export const ItemModal = () => {
  const simulatedPassedData = {
    itemImage: item_image,
    itemName: "Apple Iphone 14 Pro Max",
    itemCurrency: "$",
    itemPrice: "799",
    itemRating: "No Rating Yet",
    itemSold: "### Sold",
    itemLink: "/itemviewpage",
  };

  return (
    <div
      className="item-modal-body"
      onClick={() => (window.location.href = `${simulatedPassedData.itemLink}`)}
      title="View Item"
    >
      <div className="item-image-container">
        <img src={simulatedPassedData.itemImage} alt="" />
      </div>
      <div className="info-container">
        <div className="item-name-div">
          <p>{simulatedPassedData.itemName}</p>
        </div>
        <div className="price-div">
          <p style={{ fontSize: "12px" }}>{simulatedPassedData.itemCurrency}</p>
          <p style={{ fontSize: "24px" }}>{simulatedPassedData.itemPrice}</p>
        </div>
        <div className="ratings">
          <p>{simulatedPassedData.itemRating}</p>
          <p>{simulatedPassedData.itemSold}</p>
        </div>
      </div>
    </div>
  );
};
