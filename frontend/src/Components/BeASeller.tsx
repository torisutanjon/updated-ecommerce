//dependencies
import React, { useEffect, useState, lazy, useTransition } from "react";

//component

//assets
import "../Assets/Styles/beaseller.css";

type USERID = {
  userID: string | undefined;
};

const MyProducts = lazy(() =>
  import("../Components/MyProducts").then((module) => {
    return {
      default: module.MyProducts,
    };
  })
);

const SellItems = lazy(() =>
  import("../Components/SellItems").then((module) => {
    return {
      default: module.SellItems,
    };
  })
);

export const BeASeller = (userID: USERID) => {
  const [isPending, startTransition] = useTransition();
  const [component, setComponent] = useState(<></>);

  const optionsHandler = (index: number, component: JSX.Element) => {
    optionsStyleHandler(index);
    startTransition(() => setComponent(component));
  };

  const optionsStyleHandler = (passedIndex: number) => {
    const elements = Array.from(
      document.getElementsByClassName(
        "seller-options-p"
      ) as HTMLCollectionOf<HTMLElement>
    );
    elements.forEach((data: any, index: number) => {
      if (index === passedIndex) {
        return (data.style.fontWeight = "bold");
      } else {
        return (data.style.fontWeight = "normal");
      }
    });
  };

  useEffect(() => {
    optionsHandler(0, <MyProducts />);
  }, []);
  return (
    <>
      <div className="seller-options">
        <p
          className="seller-options-p"
          onClick={() => optionsHandler(0, <MyProducts />)}
        >
          My Products
        </p>
        <p
          className="seller-options-p"
          onClick={() => optionsHandler(1, <SellItems />)}
        >
          Sell Items
        </p>
        <p
          className="seller-options-p"
          onClick={() => optionsHandler(2, <MyProducts />)}
        >
          Sales Records
        </p>
        <p
          className="seller-options-p"
          onClick={() => optionsHandler(3, <MyProducts />)}
        >
          Customize Store
        </p>
      </div>
      <div className="seller-option-content">{component}</div>
    </>
  );
};
