import { simulatedReturnedDataCount } from "../JSON/data";
import { bestSellerData } from "../JSON/data";

let newArrivalIndex = 4;
let bestSellerIndex = 4;

export const getTrending = () => {
  return simulatedReturnedDataCount;
};

export const getComputerParts = () => {
  return simulatedReturnedDataCount;
};

export const getRTWCategoryItem = () => {
  return simulatedReturnedDataCount;
};

export const getNewArrivals = (command: string) => {
  const data = [];
  if (command === "firstrun") {
    console.log(`newArrivalIndex:${newArrivalIndex}`);
    for (let i = newArrivalIndex; i > newArrivalIndex - 5; i--) {
      data.push(simulatedReturnedDataCount[i]);
    }
  } else if (command === "prev") {
    if (newArrivalIndex > 4) {
      newArrivalIndex -= 5;
      console.log(`newArrivalIndex: ${newArrivalIndex}`);
      for (let i = newArrivalIndex; i > newArrivalIndex - 5; i--) {
        data.push(simulatedReturnedDataCount[i]);
      }
    }
  } else if (command === "next") {
    if (newArrivalIndex < simulatedReturnedDataCount.length) {
      newArrivalIndex += 5;
      console.log(`newArrivalIndex: ${newArrivalIndex}`);
      for (let i = newArrivalIndex; i > newArrivalIndex - 5; i--) {
        data.push(simulatedReturnedDataCount[i]);
      }
    }
  } else {
    console.log("invalid command");
  }
  return data;
};

export const getBestSellers = (command: string) => {
  const data = [];
  if (command === "firstrun") {
    console.log(`bestSellerIndex: ${bestSellerIndex}`);
    for (let i = bestSellerIndex; i > bestSellerIndex - 5; i--) {
      data.push(simulatedReturnedDataCount[i]);
    }
  } else if (command === "prev") {
    if (bestSellerIndex > 4) {
      bestSellerIndex -= 5;
      console.log(`bestSellerIndex: ${bestSellerIndex}`);
      for (let i = bestSellerIndex; i > bestSellerIndex - 5; i--) {
        data.push(simulatedReturnedDataCount[i]);
      }
    }
  } else if (command === "next") {
    if (bestSellerIndex < simulatedReturnedDataCount.length) {
      bestSellerIndex += 5;
      console.log(`bestSellerIndex: ${bestSellerIndex}`);
      for (let i = bestSellerIndex; i > bestSellerIndex - 5; i--) {
        data.push(simulatedReturnedDataCount[i]);
      }
    }
  } else {
    console.log("invalid command");
  }
  return data;
};

export const bestPowerTools = () => {
  return bestSellerData;
};
export const bestHandTools = () => {
  return bestSellerData;
};
export const bestPowerToolsAccessories = () => {
  return bestSellerData;
};
export const bestHandToolsAccessories = () => {
  return bestSellerData;
};
export const bestKitchenwares = () => {
  return bestSellerData;
};
