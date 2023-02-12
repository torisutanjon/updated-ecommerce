import { professionalUse } from "../JSON/data";
import { entertainment } from "../JSON/data";
import { gaming } from "../JSON/data";
import { others } from "../JSON/data";
import { airConditioners } from "../JSON/data";
import { kitchenAppliances } from "../JSON/data";
import { homeAppliances } from "../JSON/data";
import { entertainmentAppliances } from "../JSON/data";
import { cleaningAppliances } from "../JSON/data";

// for dynamic setting of width in the gallery slider using onclick
export const slider = (index: number) => {
  var elements = Array.from(
    document.getElementsByClassName("imgsrc") as HTMLCollectionOf<HTMLElement>
  );
  for (let i = 0; i < elements.length; i++) {
    if (index === i) {
      elements[i].style.width = "100%";
    } else {
      elements[i].style.width = "0";
    }
  }
};

export const handToolsImageGalleryHook = (id: string) => {
  const imageDivElement = Array.from(
    document.getElementsByClassName(
      "image-div"
    ) as HTMLCollectionOf<HTMLElement>
  );
  const galleryNavElement = Array.from(
    document.getElementsByClassName(
      "gallery-nav-div"
    ) as HTMLCollectionOf<HTMLElement>
  );
  if (id === "nav1") {
    imageDivElement[0].style.left = "0";
    imageDivElement[1].style.left = "100%";
    imageDivElement[2].style.left = "200%";
  }
  if (id === "nav2") {
    imageDivElement[0].style.left = "-100%";
    imageDivElement[1].style.left = "0";
    imageDivElement[2].style.left = "100%";
  }
  if (id === "nav3") {
    imageDivElement[0].style.left = "-200%";
    imageDivElement[1].style.left = "-100%";
    imageDivElement[2].style.left = "0";
  }

  for (let i = 0; i < galleryNavElement.length; i++) {
    if (galleryNavElement[i].id === id) {
      galleryNavElement[i].style.background = "white";
    } else {
      galleryNavElement[i].style.background = "none";
    }
  }
};

export const gadgetsHiddenDivHook = (id: string) => {
  if (id === "professionalUse") {
    return professionalUse;
  } else if (id === "entertainment") {
    return entertainment;
  } else if (id === "gaming") {
    return gaming;
  } else if (id === "others") {
    return others;
  } else {
    console.log("Error Occured: ID Not Found");
  }
};

export const appliancesHideenDivHook = (id: string) => {
  if (id === "airConditioner") {
    return airConditioners;
  } else if (id === "kitchenAppliances") {
    return kitchenAppliances;
  } else if (id === "homeAppliances") {
    return homeAppliances;
  } else if (id === "entertainmentAppliances") {
    return entertainmentAppliances;
  } else if (id === "cleaningAppliances") {
    return cleaningAppliances;
  } else {
    console.log("Error Occured: ID Not Found");
  }
};
