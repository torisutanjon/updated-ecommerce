//dependencies
import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const LandingPage = lazy(() =>
  import("./Pages/LandingPage").then((module) => {
    return { default: module.LandingPage };
  })
);
const ItemViewPage = lazy(() =>
  import("./Pages/ItemViewPage").then((module) => {
    return { default: module.ItemViewPage };
  })
);
const ComputerParts = lazy(() =>
  import("./Pages/ComputerParts").then((module) => {
    return { default: module.ComputerParts };
  })
);

const ReadyToWear = lazy(() =>
  import("./Pages/ReadyToWear").then((module) => {
    return { default: module.ReadyToWear };
  })
);

const RTWItemPage = lazy(() =>
  import("./Pages/RTWItemPage").then((module) => {
    return {
      default: module.RTWItemPage,
    };
  })
);

const GadgetPage = lazy(() =>
  import("./Pages/Gadgets").then((module) => {
    return {
      default: module.Gadgets,
    };
  })
);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/itemviewpage" element={<ItemViewPage />} />
          <Route path="/computer-parts" element={<ComputerParts />} />
          <Route path="/ready-to-wear" element={<ReadyToWear />} />
          <Route path="/gadgets" element={<GadgetPage />} />
          <Route
            path="/ready-to-wear/category-search"
            element={<RTWItemPage />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
