//dependencies
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//pages
import { LandingPage } from "./Pages/LandingPage";
import {
  SignIn,
  SignUp,
  ItemViewPage,
  ComputerParts,
  ReadyToWear,
  RTWItemPage,
  HandTools,
  GadgetPage,
  Appliances,
  AccountPageSettings,
  VerifyEmail,
} from "./Routes/pagelazyroutes";

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
          <Route
            path="/verify-email/:userIDToken/:userToken"
            element={<VerifyEmail />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
