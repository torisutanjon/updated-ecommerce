//dependencies
import React, { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const SignIn = lazy(() =>
  import("./Pages/SignIn").then((module) => {
    return {
      default: module.SignIn,
    };
  })
);

const SignUp = lazy(() =>
  import("./Pages/SignUp").then((module) => {
    return {
      default: module.SignUp,
    };
  })
);

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

const HandTools = lazy(() =>
  import("./Pages/HandTools").then((module) => {
    return { default: module.HandTools };
  })
);

const GadgetPage = lazy(() =>
  import("./Pages/Gadgets").then((module) => {
    return {
      default: module.Gadgets,
    };
  })
);

const Appliances = lazy(() =>
  import("./Pages/Appliances").then((module) => {
    return {
      default: module.Appliances,
    };
  })
);

const AccountPageSettings = lazy(() =>
  import("./Pages/AccountProfile").then((module) => {
    return {
      default: module.AccountProfile,
    };
  })
);

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="sign-up" element={<SignUp />} />
          <Route path="/itemviewpage" element={<ItemViewPage />} />
          <Route path="/computer-parts" element={<ComputerParts />} />
          <Route path="/ready-to-wear" element={<ReadyToWear />} />
          <Route
            path="/ready-to-wear/category-search"
            element={<RTWItemPage />}
          />
          <Route path="/hand-tools" element={<HandTools />} />
          <Route path="/gadgets" element={<GadgetPage />} />
          <Route path="/appliances" element={<Appliances />} />
          <Route path="/profile/:userID" element={<AccountPageSettings />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
