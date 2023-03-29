import React from "react";

interface ProductInfo {
  productName: String;
  productVariations: Array<string>;
  productQuantity: string;
  productprice: string;
  productImage: Array<string>;
}

export const SellerProductModal = ({
  productName,
  productVariations,
  productQuantity,
  productprice,
  productImage,
}: ProductInfo) => {
  return (
    <div className="seller-product-modal">
      <div className="item-image-container">
        <img src={productImage[0]} alt="" />
      </div>
      <div className="item-info-container">
        <p>{productName}</p>
        <p style={{ color: "#00000080" }}>
          Variation:
          {productVariations.map((variation) => {
            return `${variation} `;
          })}
        </p>
        <p>x{productQuantity}</p>
      </div>
      <div className="item-price-holder">
        <p style={{ paddingLeft: "5%" }}>Selling Price</p>
        <p style={{ fontSize: "24px", color: "#FF6767" }}>
          &#8369; {productprice}
        </p>
      </div>
      <div className="item-options-container">
        <button style={{ background: "#85E99B" }}>EDIT</button>
        <button style={{ background: "#EF7F7F" }}>REMOVE</button>
      </div>
    </div>
  );
};
