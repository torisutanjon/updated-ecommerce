//dependencies
import React, { useEffect } from "react";

//hooks
import { checkRegisterField } from "../Hooks/ValidateFields";
import { useFetch } from "../Hooks/UseFetch";

//api
import { registerAccount } from "../API/Account";

//assets
import "../Assets/Styles/SignUpStyle.css";

export const SignUp = () => {
  const registerHandler = async () => {
    const firstname = document.getElementById(
      "firstname-input"
    ) as HTMLInputElement;
    const lastname = document.getElementById(
      "lastname-input"
    ) as HTMLInputElement;
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
      firstname.value,
      lastname.value,
      email.value,
      username.value,
      password.value,
      confirmpassword.value
    )
      .then(async (checkRes) => {
        if (checkRes === true) {
          await registerAccount(
            firstname.value,
            lastname.value,
            email.value,
            username.value,
            password.value
          )
            .then((registerRes: any) => {
              if (registerRes.response?.status === 409)
                return alert(registerRes.response.data.message);

              if (registerRes?.status === 201)
                return (
                  alert(registerRes.data.message),
                  (window.location.href = "/sign-in")
                );
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

  const { handleGoogle, loading, error } = useFetch("/oauth/sign-up");

  useEffect(() => {
    document.title = "CREATE ACCOUNT";
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_CLIENT_ID,
        callback: handleGoogle,
      });

      google.accounts.id.renderButton(document.getElementById("signUpDiv"), {
        type: "standard",
        theme: "white",
        size: "medium",
        text: "signup_with",
        shape: "rectangle",
      });
    }
  }, [handleGoogle]);

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
          <input type="text" placeholder="First Name" id="firstname-input" />
          <input type="text" placeholder="Last Name" id="lastname-input" />
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
            {error && <p style={{ color: "red" }}>{error}</p>}
            {loading ? (
              <div>Loading....</div>
            ) : (
              <div id="signUpDiv" data-text="signup_with"></div>
            )}
            {/* <button style={backgroundHandler(fb_icon)}></button> */}
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
