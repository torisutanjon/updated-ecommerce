//dependencies
import React from "react";

//assets
import "../Assets/Styles/SignUpStyle.css";
import google_icon from "../Assets/Images/google-icon.png";
import fb_icon from "../Assets/Images/fb-icon-50-radius.png";

export const SignUp = () => {
  const backgroundHandler = (url: string) => {
    return {
      background: `url("${url}")`,
      backgroundSize: `cover`,
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
    };
  };

  return (
    <div className="sign-up-content">
      <div className="join-us-div">
        <p>Join us in</p>
      </div>
      <div className="ecommerce-div">
        <p>E-Commerce</p>
      </div>
      <div className="main-form">
        <div className="info-form">
          <input type="email" placeholder="Email" />
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button>Create Account</button>
        </div>
        <p>or</p>
        <div className="options-form">
          <p>Create Account Using:</p>
          <br />
          <div className="option-div">
            <button style={backgroundHandler(google_icon)}></button>
            <button style={backgroundHandler(fb_icon)}></button>
          </div>
          <div className="already-have-account-div">
            <p>Already Have Account?</p>
            &nbsp;
            <a href="/sign-in">Sign In</a>
          </div>
        </div>
      </div>
    </div>
  );
};
