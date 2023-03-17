//dependencies
import React, { useEffect } from "react";
import Cookies from "universal-cookie";

//hooks
import { checkLoginField } from "../Hooks/ValidateFields";

//api
import { loginAccount } from "../API/Account";
import { useFetch } from "../Hooks/UseFetch";

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
    <div className="absolute top-0 left-0 h-screen w-full flex flex-col items-center justify-start p-0 m-0">
      <div className="relative top-[10vh] h-[10vh] w-[70%] flex items-center justify-start">
        <p className="text-[48px] text-black font-normal p-0 m-0">Welcome to</p>
      </div>
      <div className="relative top-[10vh] h-[20vh] w-[70%] items-center flex justify-end">
        <p className="text-[128px] text-[#ff7a00] font-[500]">E-Commerce</p>
      </div>
      <div className="relative top-[10vh] h-[55vh] w-[20%] flex flex-col items-center justify-evenly">
        <input
          className="relative h-[30px] w-full border-0 outline-0 border-b border-b-[#808080] text-[16px] text-black/50 transition-duration-[0.3s] hover:border-b-[2px] border-b-black/50"
          type="email"
          placeholder="Email"
          id="email-input"
        />
        <input
          className="relative h-[30px] w-full border-0 outline-0 border-b border-b-[#808080] text-[16px] text-black/50 transition-duration-[0.3s] hover:border-b-[2px] border-b-black/50"
          type="password"
          placeholder="Password"
          id="password-input"
        />
        <div className="relative h-[10%] w-[60%] flex flex-row items-center justify-start">
          <p className="text-[16px] text-black/50">Show Password</p>
          &nbsp; &nbsp; &nbsp;
          <input
            className="relative h-[20px] w-[20px] outline-none"
            type="checkbox"
            id="checkbox-input"
            onClick={() => showPasswordHandler()}
          />
        </div>
        <button
          className="relative h-[40px] w-[120px] rounded-[25px] border border-[#808080] outline-none bg-none text-[16px] text-[#808080] cursor-pointer active:bg-[#808080] active:text-white"
          onClick={() => signInHandler()}
        >
          login
        </button>
        <p className="text-[16px] text-[#808080] p-0 m-0">or</p>
        <p className="text-[16px] text-[#808080] p-0 m-0">Login using:</p>
        <div className="relative h-[75px] w-[60%] flex flex-col items-center justify-between">
          {error && <p style={{ color: "red" }}>{error}</p>}
          {loading ? <div>Loading....</div> : <div id="signInDiv"></div>}
        </div>
        <a
          className="relative self-end decoration-none text-[#4870ff]"
          href="/sign-up"
        >
          Sign Up
        </a>
      </div>
    </div>
  );
};
