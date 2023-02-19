//dependencies
import React, { useEffect } from "react";
import Cookies from "universal-cookie";

//hooks
import { checkLoginField } from "../Hooks/ValidateFields";

//api
import { loginAccount } from "../API/Account";
import { useFetch } from "../Hooks/UseFetch";

//assets
import "../Assets/Styles/SignInStyle.css";

export const SignIn = () => {
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

  const signInHandler = async () => {
    let email_input = document.getElementById(
      "email-input"
    ) as HTMLInputElement;
    let password_input = document.getElementById(
      "password-input"
    ) as HTMLInputElement;

    await checkLoginField(email_input.value, password_input.value)
      .then(async (res) => {
        if (res === true) {
          await loginAccount(email_input.value, password_input.value)
            .then((loginRes: any) => {
              if (loginRes?.status === 200) {
                const cookie = new Cookies();
                cookie.set("user", loginRes.data.token, { path: "/" });
                alert(loginRes?.data?.message);
                window.location.href = "/";
              }
            })
            .catch((err: any) => {
              if (err.response?.status === 401)
                return alert(err.response?.data?.message);
              return console.log(err);
            });
        }
      })
      .catch((err) => console.log(err));
  };

  const { handleGoogle, loading, error } = useFetch("/oauth/sign-in");

  useEffect(() => {
    document.title = "Sign In";
    /* global google */
    if (window.google) {
      google.accounts.id.initialize({
        client_id: process.env.REACT_APP_CLIENT_ID,
        callback: handleGoogle,
      });

      google.accounts.id.renderButton(document.getElementById("signInDiv"), {
        type: "standard",
        theme: "white",
        size: "medium",
        text: "signin_with",
        shape: "rectangle",
      });
    }
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
        <input type="email" placeholder="Email" id="email-input" />
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
        <button onClick={() => signInHandler()}>login</button>
        <p>or</p>
        <p>Login using:</p>
        <div className="login-using-div">
          {error && <p style={{ color: "red" }}>{error}</p>}
          {loading ? <div>Loading....</div> : <div id="signInDiv"></div>}
        </div>
        <a href="/sign-up">Sign Up</a>
      </div>
    </div>
  );
};
