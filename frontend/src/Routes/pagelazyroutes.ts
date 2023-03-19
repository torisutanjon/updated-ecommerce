import {lazy} from 'react'

export const SignIn = lazy(() =>
  import("../Pages/SignIn").then((module) => {
    return {
      default: module.SignIn,
    };
  })
);

export const SignUp = lazy(() =>
  import("../Pages/SignUp").then((module) => {
    return {
      default: module.SignUp,
    };
  })
);

export const LandingPage = lazy(() =>
  import("../Pages/LandingPage").then((module) => {
    return { default: module.LandingPage };
  })
);
export const ItemViewPage = lazy(() =>
  import("../Pages/ItemViewPage").then((module) => {
    return { default: module.ItemViewPage };
  })
);
export const ComputerParts = lazy(() =>
  import("../Pages/ComputerParts").then((module) => {
    return { default: module.ComputerParts };
  })
);

export const ReadyToWear = lazy(() =>
  import("../Pages/ReadyToWear").then((module) => {
    return { default: module.ReadyToWear };
  })
);

export const RTWItemPage = lazy(() =>
  import("../Pages/RTWItemPage").then((module) => {
    return {
      default: module.RTWItemPage,
    };
  })
);

export const HandTools = lazy(() =>
  import("../Pages/HandTools").then((module) => {
    return { default: module.HandTools };
  })
);

export const GadgetPage = lazy(() =>
  import("../Pages/Gadgets").then((module) => {
    return {
      default: module.Gadgets,
    };
  })
);

export const Appliances = lazy(() =>
  import("../Pages/Appliances").then((module) => {
    return {
      default: module.Appliances,
    };
  })
);

export const AccountPageSettings = lazy(() =>
  import("../Pages/AccountProfile").then((module) => {
    return {
      default: module.AccountProfile,
    };
  })
);

export const VerifyEmail = lazy(() =>
  import("../Pages/VerifyEmail").then((module) => {
    return {
      default: module.VerifyEmail,
    };
  })
);