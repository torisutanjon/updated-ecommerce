//dependencies
import React, { useState } from "react";

//components
import { Topnav } from "../Components/Topnav";

//assets
import "../Assets/Styles/itempagestyle.css";
import item_image from "../Assets/Images/item-image.png";
import item_preview_1 from "../Assets/Images/item-preview-1.png";
import item_preview_2 from "../Assets/Images/item-preview-2.png";
import item_preview_3 from "../Assets/Images/item-preview-3.png";
import item_preview_4 from "../Assets/Images/item-preview-4.png";
import star_image from "../Assets/Images/star-image.png";

export const ItemViewPage = () => {
  //preview images of the item
  const [currentImage, setCurrentImage] = useState(item_image);
  const [previewImage, setPreviewImage] = useState<string[]>([]);
  const [quantity, setQuantity] = useState(1);

  const setImages = () => {
    setPreviewImage([
      item_image,
      item_preview_1,
      item_preview_2,
      item_preview_3,
      item_preview_4,
    ]);
  };
  const adjustQuantity = (command: string) => {
    if (quantity >= 1) {
      if (command === "add") {
        setQuantity(quantity + 1);
      } else {
        if (quantity - 1 !== 0) {
          setQuantity(quantity - 1);
        }
      }
    }
  };
  return (
    <div
      className="page-body"
      style={{ background: "#F4F4F4" }}
      onLoad={() => {
        setImages();
      }}
    >
      <Topnav />
      <div className="item-view-content">
        <div className="item-view-gallery">
          <div className="item-view-image">
            <img src={currentImage} alt="" />
          </div>
          <div className="item-view-slider">
            {previewImage.map((imagePreview, key) => {
              return (
                <img
                  key={key}
                  src={imagePreview}
                  alt=""
                  onClick={() => setCurrentImage(imagePreview)}
                />
              );
            })}
          </div>
        </div>
        <div className="item-view-info-container">
          <div className="item-view-name-div">
            <p>Apple iPhone 14 Pro Max</p>
          </div>
          <div className="item-view-info-div">
            <div className="left">
              <img src={star_image} alt="" />
              <img src={star_image} alt="" />
              <img src={star_image} alt="" />
              <img src={star_image} alt="" />
              <img src={star_image} alt="" />
              <p>|</p>
              <p># Ratings</p>
              <p>|</p>
              <p>### Sold</p>
              <p>|</p>
              <p>### Stock Left</p>
            </div>
            <div className="right">
              <a href="/">Report Product</a>
            </div>
          </div>
          <div className="item-view-fields-container"></div>
          <div className="item-view-order-container">
            <div className="item-view-quantity-div">
              <p>Quantity</p>
              <div>
                <button onClick={() => adjustQuantity("subtract")}>-</button>
                <input
                  type="text"
                  id="quantity"
                  name="quantity"
                  value={quantity}
                  readOnly
                />
                <button onClick={() => adjustQuantity("add")}>+</button>
              </div>
            </div>
            <div className="item-view-order-div">
              <button id="cart">Add to Cart</button>
              <button id="buy">Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
