//dependencies
import React, { useEffect } from "react";

//hooks
import { checkRegisterField } from "../Hooks/ValidateFields";
import { useFetch } from "../Hooks/UseFetch";

//api
import { registerAccount } from "../API/Account";

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
    <div className="absolute top-0 left-0 h-screen w-full flex flex-col items-center justify-start">
      <div className="relative top-[10vh] h-[10vh] w-[70%] flex items-center justify-start">
        <p className="text-[48px] font-normal p-0 m-0 text-black">Join us in</p>
      </div>
      <div className="relative top-[10vh] h-[20vh] w-[70%] flex items-center justify-end">
        <p className="text-[128px] text-[#ff7a00] font-[500]">E-Commerce</p>
      </div>
      <div className="relative top-[10vh] h-[50vh] w-1/2 flex flex-row items-center justify-between">
        <div className="relative h-full w-[45%] flex flex-col items-center justify-evenly">
          <input
            className="relative h-[30px] w-full outline-none border-b border-b-[#808080] bg-none transition-duration-[0.3s] text-[16px] text-[#808080] hover:border-b-[2px] hover:border-b-black/50 focus:border-b-[#1f25d2]"
            type="text"
            placeholder="First Name"
            id="firstname-input"
          />
          <input
            className="relative h-[30px] w-full outline-none border-b border-b-[#808080] bg-none transition-duration-[0.3s] text-[16px] text-[#808080] hover:border-b-[2px] hover:border-b-black/50 focus:border-b-[#1f25d2]"
            type="text"
            placeholder="Last Name"
            id="lastname-input"
          />
          <input
            className="relative h-[30px] w-full outline-none border-b border-b-[#808080] bg-none transition-duration-[0.3s] text-[16px] text-[#808080] hover:border-b-[2px] hover:border-b-black/50 focus:border-b-[#1f25d2]"
            type="email"
            placeholder="Email"
            id="email-input"
          />
          <input
            className="relative h-[30px] w-full outline-none border-b border-b-[#808080] bg-none transition-duration-[0.3s] text-[16px] text-[#808080] hover:border-b-[2px] hover:border-b-black/50 focus:border-b-[#1f25d2]"
            type="text"
            placeholder="Username"
            id="username-input"
          />
          <input
            className="relative h-[30px] w-full outline-none border-b border-b-[#808080] bg-none transition-duration-[0.3s] text-[16px] text-[#808080] hover:border-b-[2px] hover:border-b-black/50 focus:border-b-[#1f25d2]"
            type="password"
            placeholder="Password"
            id="password-input"
          />
          <input
            className="relative h-[30px] w-full outline-none border-b border-b-[#808080] bg-none transition-duration-[0.3s] text-[16px] text-[#808080] hover:border-b-[2px] hover:border-b-black/50 focus:border-b-[#1f25d2]"
            type="password"
            placeholder="Confirm Password"
            id="confirm-password-input"
          />
          <button
            className="relative h-[30px] w-1/2 rounded-[25px] text-[16px] text-[#808080] border border-[#808080] bg-none outline-none cursor-pointer active:bg-[#808080] active:text-white"
            onClick={() => registerHandler()}
          >
            Create Account
          </button>
        </div>
        <p className="text-[16px] text-[#808080] m-0 p-0">or</p>
        <div className="relative h-full w-[45%] flex flex-col items-center justify-evenly">
          <p className="text-[22px] text-[#808080] font-[500] m-0 p-0">
            Create Account Using:
          </p>
          <br />
          <div className="option-div">
            {error && (
              <p className="text-[16px] text-red-500 m-0 p-0">{error}</p>
            )}
            {loading ? (
              <div>Loading....</div>
            ) : (
              <div id="signUpDiv" data-text="signup_with"></div>
            )}
          </div>
          <div className="absolute w-full bottom-[5%] flex flex-row items-center justify-center right-[5%]">
            <p className="text-[18px]">Already Have Account?</p>
            &nbsp;
            <a
              className="text-[18px] decoration-none font-bold text-[#4870ff]"
              href="/sign-in"
            >
              Sign In
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
