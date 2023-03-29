//dependencies
import React, { useEffect, useState } from "react";
// import { simulatedReturnedDataCount } from "../JSON/data";
import { useParams } from "react-router-dom";

//api
import { getSellingItems, getProductsInfo } from "../API/Products";

//assets
import triangle_left from "../Assets/Images/triangle-left.png";
import triangle_right from "../Assets/Images/triangle-right.png";

//components
import { LoadingComponent } from "./Loading";
import { SellerOptionHiddenDiv } from "./SellerOptionHiddenDiv";
import { SellerProductModal } from "./SellerProductModal";

export const MyProducts = () => {
  const [productIDs, setProductIDs] = useState<Array<string>>();
  const [currentPage, setCurrentPage] = useState(1);
  const [productsInfo, setProductsInfo] = useState<Array<object>>();
  const [maxPage, setMaxPage] = useState(0);
  const { userID } = useParams();

  const pagenationhandler = async () => {
    await getSellingItems(userID)
      .then((res: any) => {
        getMaxPageHandler(res.length);
        setProductIDs(res);
        return res;
      })
      .then((res: any) => {
        let endItem = 5;

        let startIndex = (currentPage - 1) * 5;

        if (res.length - startIndex >= 5) {
          endItem = 5;
        }

        if (res.length - startIndex < 5) {
          endItem = res.length - startIndex;
        }

        let endIndex = startIndex + endItem;

        loopHandler(startIndex, endIndex, res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  const pageChangerHandler = (command: string) => {
    if (command === "add") {
      if (currentPage >= maxPage) {
        return;
      }
      setCurrentPage(currentPage + 1);
    }

    if (command === "sub") {
      if (currentPage <= 1) {
        return;
      }
      setCurrentPage(currentPage - 1);
    }
  };

  const loopHandler = (startIndex: number, endIndex: number, res: any) => {
    getProductsInfoHandler(res.slice(startIndex, endIndex));
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

  const getProductsInfoHandler = async (ids: Array<string>) => {
    await getProductsInfo(userID, ids)
      .then((res: any) => {
        setProductsInfo(res);
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  useEffect(() => {
    pagenationhandler();
  }, [currentPage]);

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
          {productsInfo === undefined ? (
            <>
              <LoadingComponent />
            </>
          ) : (
            productsInfo.map((product: any, key) => {
              return (
                <SellerProductModal
                  key={key}
                  productName={product.productname}
                  productVariations={product.productvariations}
                  productQuantity={product.productquantity}
                  productprice={product.productprice}
                  productImage={product.productimages}
                />
              );
            })
          )}
        </div>
        <div className="seller-content-pager">
          {productIDs?.length === 0 ? (
            <>
              <p>Loading...</p>
            </>
          ) : (
            <>
              <img
                src={triangle_left}
                alt=""
                onClick={() => pageChangerHandler("sub")}
              />
              <p>
                {currentPage} of {maxPage}
              </p>
              <img
                src={triangle_right}
                alt=""
                onClick={() => pageChangerHandler("add")}
              />
            </>
          )}
        </div>
      </div>
    </>
  );
};
