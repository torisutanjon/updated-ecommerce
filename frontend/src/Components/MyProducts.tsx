//dependencies
import React, { useEffect, useState } from "react";
import { simulatedReturnedDataCount } from "../JSON/data";
import { useParams } from "react-router-dom";

//api
import { getSellingItems } from "../API/Products";

//assets
import triangle_left from "../Assets/Images/triangle-left.png";
import triangle_right from "../Assets/Images/triangle-right.png";
//components
import { SellerOptionHiddenDiv } from "./SellerOptionHiddenDiv";
import { SellerProductModal } from "./SellerProductModal";

export const MyProducts = () => {
  const [page, setPage] = useState(1);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [products, setProducts] = useState<Array<string>>();
  const [maxPage, setMaxPage] = useState(0);
  const { userID } = useParams();

  const pagenationhandler = (command: string) => {
    if (command === "sub") {
      if (page > 1) {
        let pageHolder = page;
        setPage((pageHolder -= 1));
      }
    } else {
      if (page < getMaxPageHandler(products?.length)) {
        let pageHolder = page;
        setPage((pageHolder += 1));
      }
    }
  };

  const getMaxPageHandler = (productsLength: number | undefined) => {
    if (productsLength! % 5 === 0) {
      setMaxPage(productsLength! / 5);
      return productsLength! / 5;
    }
    if (productsLength! % 5 !== 0)
      setMaxPage(Math.trunc(productsLength! / 5) + 1);
    return Math.trunc(productsLength! / 5) + 1;
  };

  const getMyProductsHandler = async () => {
    await getSellingItems(userID)
      .then((res: any) => {
        setProducts(res);
        getMaxPageHandler(res.length);
      })
      .catch((err: any) => {
        console.log(err);
      });
    //set max page after getting the products
  };

  useEffect(() => {
    getMyProductsHandler();
  }, []);

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
          {products?.length === 0 ? (
            <>
              <p>Loading...</p>
            </>
          ) : (
            <>
              <img
                src={triangle_left}
                alt=""
                onClick={() => pagenationhandler("sub")}
              />
              <p>
                {page} of {maxPage}
              </p>
              <img
                src={triangle_right}
                alt=""
                onClick={() => pagenationhandler("add")}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};
