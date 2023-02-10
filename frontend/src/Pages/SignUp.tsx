//dependencies
import React from "react";

//hooks
import { checkRegisterField } from "../Hooks/ValidateFields";

//api
import { registerAccount } from "../API/Accout";

//assets
import "../Assets/Styles/SignUpStyle.css";
import google_icon from "../Assets/Images/google-icon.png";
import fb_icon from "../Assets/Images/fb-icon-50-radius.png";

export const SignUp = () => {
  const registerHandler = async () => {
    const email = document.getElementById("email-input") as HTMLInputElement;
    const username = document.getElementById(
      "username-input"
    ) as HTMLInputElement;
    const password = document.getElementById(
      "password-input"
    ) as HTMLInputElement;
    const confirmpassword = document.getElementById(
      "confirm-password-input"
    ) as HTMLInputElement;

    await checkRegisterField(
      email.value,
      username.value,
      password.value,
      confirmpassword.value
    )
      .then(async (checkRes) => {
        if (checkRes === true) {
          await registerAccount(email.value, username.value, password.value)
            .then((registerRes: any) => {
              if (registerRes.response?.status === 409)
                return alert(registerRes.response.data.message);

              if (registerRes?.status === 201)
                return alert(registerRes.data.message);
            })
            .catch((registerErr: any) => {
              console.log(registerErr);
            });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

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
          <input type="email" placeholder="Email" id="email-input" />
          <input type="text" placeholder="Username" id="username-input" />
          <input type="password" placeholder="Password" id="password-input" />
          <input
            type="password"
            placeholder="Confirm Password"
            id="confirm-password-input"
          />
          <button onClick={() => registerHandler()}>Create Account</button>
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
