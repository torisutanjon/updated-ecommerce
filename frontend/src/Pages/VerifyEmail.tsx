//dependencies
import React, { useState } from "react";
import { useParams } from "react-router-dom";

//api
import { confirmVerifyEmail } from "../API/Account";

//assets
import "../Assets/Styles/verifyemailstyle.css";
import loading_gif from "../Assets/Images/loading-gif.gif";

export const VerifyEmail = () => {
  const [component, setComponent] = useState(<></>);
  const { userIDToken, userToken } = useParams();

  const loading = () => {
    setComponent(
      <div className="loading">
        <img src={loading_gif} alt="" />
        <p>Verifying Email</p>
      </div>
    );
  };

  const verifyEmailHandler = async () => {
    const element = document.getElementById("verify-btn") as HTMLButtonElement;
    loading();
    element.disabled = true;

    await confirmVerifyEmail(userIDToken, userToken)
      .then((res: any) => {
        if (res?.status === 200) alert(res.data.message);
        window.location.href = "/";
      })
      .catch((err: any) => {
        console.log(err);
      });
  };

  return (
    <div className="verify-body">
      {component}
      <div className="container">
        <p className="title">CLICK TO VERIFY</p>
        <p className="email">giraotristan@gmail.com</p>
        <button id="verify-btn" onClick={() => verifyEmailHandler()}>
          VERIFY EMAIL
        </button>
      </div>
    </div>
  );
};
