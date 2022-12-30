//dependencies
import React, { useState } from "react";

//assets
import "../Assets/Styles/mainstyle.css";

//class

class CheckLogin {
  firstMessage = (isLoggedIn: Boolean) => {
    if (isLoggedIn === true) {
      return "Hello,";
    } else {
      return "Not Signed In?";
    }
  };

  secondMessage = (isLoggedIn: Boolean) => {
    if (isLoggedIn === true) {
      return "USER ACCOUNT";
    } else {
      return "Sign In Here";
    }
  };
}

export const Topnav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [link, setLink] = useState("/");

  const checkloginobj = new CheckLogin();

  return (
    <div className="topnav-body">
      <div className="home-div" style={{ width: "30%", height: "100%" }}>
        <a href="/" style={{ fontSize: "22px" }}>
          E-COMMERCE
        </a>
      </div>
      <div className="search-div">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search . . . "
        />
        <button title="Search Item"></button>
      </div>
      <div className="user-div">
        <div className="account-div">
          <p id="message-one">{checkloginobj.firstMessage(isLoggedIn)}</p>
          <a href={link} id="message-two">
            {checkloginobj.secondMessage(isLoggedIn)}
          </a>
        </div>
        <div className="cart-div">
          <a href="/">
            <button></button>
          </a>
        </div>
      </div>
    </div>
  );
};
