//dependencies
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";

//assets
import "../Assets/Styles/mainstyle.css";

//api
import { checkLoginStatus } from "../API/Account";
import { AxiosResponse } from "axios";

//class

// class CheckLogin {
//   firstMessage = (isLoggedIn: Boolean) => {
//     if (isLoggedIn === true) {
//       return "Hello,";
//     } else {
//       return "Not Signed In?";
//     }
//   };

//   secondMessage = (isLoggedIn: Boolean) => {
//     if (isLoggedIn === true) {
//       return "USER ACCOUNT";
//     } else {
//       return "Sign In Here";
//     }
//   };
// }

export const Topnav = () => {
  const [firstMessage, setFirstMessage] = useState("Not Signed In?");
  const [secondMessage, setSecondMessage] = useState("Sign In Here");
  const [response, setResponse] = useState<AxiosResponse | null>(null);
  const [hiddenDivDisplay, setHiddenDivDisplay] = useState("none");
  const [link, setLink] = useState("/sign-in");

  const auth = async () => {
    await checkLoginStatus()
      .then((res) => {
        //if no response probably on the jwt.verify error
        if (!res)
          return (
            setFirstMessage("Not Signed In?"),
            setSecondMessage("Sign In Here"),
            setLink("/sign-in"),
            (window.location.href = "/")
          );

        if (res?.data.status === true) {
          setResponse(res);
          const cookies = new Cookies();
          cookies.set("user", res.data.token, { path: "/" });
          setFirstMessage("Hello");
          setSecondMessage(res?.data?.username);
          setLink(`/profile/${res?.data?.id}`);
        }
      })
      .catch((err) => console.log(err));
  };

  const hiddenDivHandler = () => {
    if (hiddenDivDisplay === "none") {
      setHiddenDivDisplay("block");
    } else {
      setHiddenDivDisplay("none");
    }
  };

  const logOutHandler = () => {
    const cookies = new Cookies();
    cookies.remove("user");
    window.location.reload();
  };

  useEffect(() => {
    auth();
  }, []);

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
          <p id="message-one">{firstMessage}</p>
          <p
            id="message-two"
            onClick={() =>
              response === null
                ? (window.location.href = link)
                : hiddenDivHandler()
            }
          >
            {secondMessage}
          </p>
        </div>
        {response === null ? (
          <></>
        ) : (
          <div
            className="topnav-hidden-div"
            style={{ display: hiddenDivDisplay }}
          >
            <button onClick={() => (window.location.href = link)}>
              View Account
            </button>
            <button onClick={() => logOutHandler()}>Log Out</button>
          </div>
        )}
        <div className="cart-div">
          <a href="/">
            <button></button>
          </a>
        </div>
      </div>
    </div>
  );
};
