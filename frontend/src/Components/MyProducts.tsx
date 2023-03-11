//dependencies
import React, { useState } from "react";
import { simulatedReturnedDataCount } from "../JSON/data";

//assets
import triangle_left from "../Assets/Images/triangle-left.png";
import triangle_right from "../Assets/Images/triangle-right.png";
//components
import { SellerOptionHiddenDiv } from "./SellerOptionHiddenDiv";
import { SellerProductModal } from "./SellerProductModal";

export const MyProducts = () => {
  const [pageLength] = useState(() => {
    if (simulatedReturnedDataCount.length % 5 === 0) {
      return simulatedReturnedDataCount.length / 5;
    } else {
      return Math.trunc(simulatedReturnedDataCount.length / 5) + 1;
    }
  });
  const [page, setPage] = useState(1);
  const pagenationhandler = (command: string) => {
    if (command === "sub") {
      if (page > 1) {
        let pageHolder = page;
        setPage((pageHolder -= 1));
      }
    } else {
      if (page < pageLength) {
        let pageHolder = page;
        setPage((pageHolder += 1));
      }
    }
  };
  return (
    <>
      <div className="seller-content-filters">
        <p style={{ marginLeft: "5%" }}>SORT BY:</p>
        <div className="seller-option-div" style={{ marginLeft: "2.5%" }}>
          {
            <SellerOptionHiddenDiv
              title={"TIME POSTED"}
              options={["Most Recent", "Oldest"]}
            />
          }
        </div>
        <div className="seller-option-div" style={{ marginLeft: 0 }}>
          {
            <SellerOptionHiddenDiv
              title={"PRICE"}
              options={["Lowest", "Highest"]}
            />
          }
        </div>
        <p>ONLY SHOW:</p>
        <div className="seller-option-div" style={{ marginLeft: "2.5%" }}>
          {
            <SellerOptionHiddenDiv
              title={"CATEGORY"}
              options={["Category 1", "Category 2"]}
            />
          }
        </div>
      </div>
      <div className="seller-content">
        <div className="seller-content-data">
          <SellerProductModal />
          <SellerProductModal />
          <SellerProductModal />
          <SellerProductModal />
          <SellerProductModal />
        </div>
        <div className="seller-content-pager">
          <img
            src={triangle_left}
            alt=""
            onClick={() => pagenationhandler("sub")}
          />
          <p>
            {page} of {pageLength}
          </p>
          <img
            src={triangle_right}
            alt=""
            onClick={() => pagenationhandler("add")}
          />
        </div>
      </div>
    </>
  );
};
