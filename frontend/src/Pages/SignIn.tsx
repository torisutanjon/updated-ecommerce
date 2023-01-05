//dependencies
import React, { useEffect } from "react";

//assets
import "../Assets/Styles/SignInStyle.css";
import google_icon from "../Assets/Images/google-icon.png";
import fb_icon from "../Assets/Images/fb-icon-50-radius.png";

export const SignIn = () => {
  const buttonBackgroundHandler = (url: string) => {
    return {
      background: `url("${url}")`,
      backgroundSize: `cover`,
      backgroundPosition: `center`,
      backgroundRepeat: `no-repeat`,
    };
  };

  const showPasswordHandler = () => {
    const checkboxElement = document.getElementById(
      "checkbox-input"
    ) as HTMLInputElement;
    const passwordElement = document.getElementById(
      "password-input"
    ) as HTMLInputElement;
    if (checkboxElement?.checked) {
      passwordElement.type = "text";
    } else {
      passwordElement.type = "password";
    }
  };

  useEffect(() => {
    document.title = "Sign In";
  });
  return (
    <div className="sign-in-content">
      <div className="welcome-div">
        <p>Welcome to</p>
      </div>
      <div className="ecommerce-div">
        <p>E-Commerce</p>
      </div>
      <div className="form-div">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" id="password-input" />
        <div className="show-password-div">
          <p>Show Password</p>
          &nbsp; &nbsp; &nbsp;
          <input
            type="checkbox"
            id="checkbox-input"
            onClick={() => showPasswordHandler()}
          />
        </div>
        <button>login</button>
        <p>or</p>
        <p>Login using:</p>
        <div className="login-using-div">
          <button style={buttonBackgroundHandler(google_icon)}></button>
          <button style={buttonBackgroundHandler(fb_icon)}></button>
        </div>
        <a href="/sign-up">Sign Up</a>
      </div>
    </div>
  );
};
