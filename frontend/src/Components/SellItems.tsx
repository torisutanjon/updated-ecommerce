//dependencies
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
//hooks
import {
  checkInputValue,
  checkInputArrayValue,
  checkStringArrayState,
} from "../Hooks/Field";

//api
import { sellItemsAPI } from "../API/SellItems";

//assets
import add_image from "../Assets/Images/add-icon.png";
import delete_image from "../Assets/Images/delete-icon.png";

export const SellItems = () => {
  const [variations, setVariations] = useState<Array<JSX.Element>>();
  const [variationsID, setVariationsID] = useState<Array<number>>();
  const [itemImage, setItemImage] = useState<Array<string>>();

  const { userID } = useParams();

  //set variation id
  const setVariationIDHandler = () => {
    let id = 0;
    let idHolder = [];
    if (variationsID === undefined) {
      idHolder.push(id);
      setVariationsID(idHolder);
    } else {
      idHolder = [...variationsID];
      for (let i = 0; i < variationsID.length; i++) {
        while (id <= variationsID[i]) {
          id++;
        }
      }
      idHolder.push(id);
      setVariationsID(idHolder);
    }
    return id;
  };

  //create vairation element
  const createVariationHandler = (id: number | undefined) => {
    return (
      <div className="sell-item-variation-div" key={id} id={id!.toString()}>
        <input
          className="variation-inputs-element"
          type="text"
          placeholder="e.g. Type: Value"
        />
        <img
          className="delete-image-button"
          src={delete_image}
          alt=""
          id={id!.toString()}
        />
      </div>
    );
  };

  //set variation element
  const setVariationHandler = () => {
    const id = setVariationIDHandler();
    const element = createVariationHandler(id);

    let elementsHolder = [];

    if (variations === undefined) {
      elementsHolder.push(element!);
      setVariations(elementsHolder);
    } else {
      elementsHolder = [...variations];
      elementsHolder.push(element!);
      setVariations(elementsHolder);
    }
  };

  //delete variation element
  const deleteVariationHandler = (event: Event) => {
    const id = parseInt((event.target as HTMLImageElement).id);
    const index = variationsID?.indexOf(id);
    let elementsHolder = [...variations!];
    let elementIDHolder = [...variationsID!];
    elementIDHolder.splice(index!, 1);
    elementsHolder.splice(index!, 1);
    setVariationsID(elementIDHolder);
    setVariations(elementsHolder);
  };

  //activate input type="file" onclick event
  const getItemImageHandler = () => {
    const element = document.getElementById("get-file-input");
    element!.click();
  };

  //get input type="file" value on onChange event
  const setItemImageHandler = (image: Blob) => {
    let itemImageHolder = [];
    console.log(itemImage?.length);
    if (itemImage === undefined) {
      itemImageHolder.push(URL.createObjectURL(image));
      setItemImage(itemImageHolder);
    } else {
      if (itemImage.length < 4) {
        itemImageHolder = [...itemImage];
        itemImageHolder.push(URL.createObjectURL(image));
        setItemImage(itemImageHolder);
      } else {
        alert("Only 4 product images are needed");
      }
    }
    (document.getElementById("get-file-input") as HTMLInputElement).value = "";
  };

  //delete item image
  const deleteItemImageHandler = (image: string) => {
    const index = itemImage?.indexOf(image);
    let itemImageHolder = [...itemImage!];
    itemImageHolder.splice(index!, 1);
    setItemImage(itemImageHolder);
  };

  //check values before sending to backend
  const checkValuesHandler = async () => {
    let status = true;
    const itemNameRes = await checkInputValue("sell-item-name-input");
    const itemQuantityRes = await checkInputValue("sell-item-quantity-input");
    const itemPriceRes = await checkInputValue("sell-item-price-input");
    const variationsInputRes = await checkInputArrayValue(
      "variation-inputs-element"
    );
    const itemImageRes = await checkStringArrayState(itemImage);

    if (itemNameRes === false) {
      return alert("Product name is required!");
    }

    if (itemQuantityRes === false) {
      return alert("Product quantity is required!");
    }

    if (itemPriceRes === false) {
      return alert("Product price is required!");
    }

    if (variationsInputRes.message !== "") {
      return alert(variationsInputRes.message);
    }

    if (itemImageRes.message !== "") {
      return alert(itemImageRes.message);
    }

    return status;
  };

  //call api to send data to backend
  const createItemHandler = async () => {
    await checkValuesHandler().then(async (res: any) => {
      if (res === undefined) {
        return;
      } else {
        const itemName = document.getElementById(
          "sell-item-name-input"
        ) as HTMLInputElement;
        const itemQuantity = document.getElementById(
          "sell-item-quantity-input"
        ) as HTMLInputElement;
        const ItemPrice = document.getElementById(
          "sell-item-price-input"
        ) as HTMLInputElement;

        let variationsValueHolder: string[] = [];

        Array.from(
          document.getElementsByClassName(
            "variation-inputs-element"
          ) as HTMLCollectionOf<HTMLInputElement>
        ).forEach((element) => {
          variationsValueHolder.push(element.value);
        });

        await sellItemsAPI(
          userID,
          itemName!.value,
          itemQuantity!.value,
          ItemPrice!.value,
          variationsValueHolder,
          itemImage
        )
          .then((res: any) => {
            alert(res?.data?.message);
            window.location.reload();
          })
          .catch((err: any) => {
            console.log(err?.response?.statusText);
          });
      }
    });
  };

  useEffect(() => {
    let imageElements = Array.from(
      document.getElementsByClassName(
        "delete-image-button"
      ) as HTMLCollectionOf<HTMLImageElement>
    );
    imageElements.forEach((element) => {
      element.addEventListener("click", deleteVariationHandler, false);
    });
  }, [variations]);

  return (
    <div className="sell-items-body">
      <div className="sell-items-info-container">
        <div>
          <p>Product Name:</p>
        </div>
        <div>
          <input type="text" id="sell-item-name-input" />
        </div>
        <div>
          <p>Product Variation/s:</p>
        </div>
        <div id="sell-item-variation">
          <>
            {variations === undefined ? (
              <></>
            ) : (
              <>
                {variations.map((data) => {
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
              setVariationHandler();
            }}
          />
        </div>
        <div>
          <p>Quantity:</p>
        </div>
        <div>
          <input type="number" id="sell-item-quantity-input" />
        </div>
        <div>
          <p>Selling Price:</p>
        </div>
        <div>
          <input type="number" id="sell-item-price-input" />
        </div>
      </div>
      <div className="sell-items-image-container">
        <div className="sell-items-image-div">
          <div className="sell-items-image-grid">
            {itemImage === undefined ? (
              <></>
            ) : (
              <>
                {itemImage.map((data, key) => {
                  return (
                    <div className="sell-item-container" key={key}>
                      <img src={data} alt="" />
                      <button
                        onClick={() => deleteItemImageHandler(data)}
                      ></button>
                    </div>
                  );
                })}
              </>
            )}
          </div>
          <p>maximum of four images</p>
          <input
            type="file"
            id="get-file-input"
            style={{ display: "none" }}
            accept="image/*"
            onChange={(e) => {
              setItemImageHandler(e.target.files![0]);
            }}
          />
          <button type="button" onClick={() => getItemImageHandler()}>
            Add Image
          </button>
        </div>
        <div className="sell-items-image-options-div">
          <button type="button" style={{ background: "#d8000080" }}>
            Clear
          </button>
          <button
            type="button"
            style={{ background: "#1D930080" }}
            onClick={() => createItemHandler()}
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};
