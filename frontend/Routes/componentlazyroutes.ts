import {lazy} from "react"

export const MyProducts = lazy(() =>
  {
    return import("../src/Components/MyProducts")
  }
);

export const SellItems = lazy(() =>
  {
    return import("../src/Components/SellItems")
  }
);