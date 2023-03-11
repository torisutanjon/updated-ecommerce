import React from "react";

export const SellerProductModal = () => {
  return (
    <div className="seller-product-modal">
      <div className="item-image-container">
        <img src="" alt="" />
      </div>
      <div className="item-info-container">
        <p>Product Name</p>
        <p style={{ color: "#00000080" }}>Variation:</p>
        <p>x2</p>
      </div>
      <div className="item-price-holder">
        <p style={{ paddingLeft: "5%" }}>Selling Price</p>
        <p style={{ fontSize: "24px", color: "#FF6767" }}>
          &#8369; {"1,199.00"}
        </p>
      </div>
      <div className="item-options-container">
        <button style={{ background: "#85E99B" }}>EDIT</button>
        <button style={{ background: "#EF7F7F" }}>REMOVE</button>
      </div>
    </div>
  );
};
