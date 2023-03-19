//dependencies
import React, { useEffect, useState } from "react";
import Cookies from "universal-cookie";
import { AxiosResponse } from "axios";

//api
import { checkLoginStatus } from "../API/Account";

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
            setLink("/sign-in")
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
    <div className="relative h-[100px] w-full z-[2] bg-white flex flex-row">
      <div className="relative h-full w-[30%] flex flex-col items-center justify-center">
        <a
          className="decoration-none text-[22px] font-normal text-[#ff8210]"
          href="/"
          style={{ fontSize: "22px" }}
        >
          E-COMMERCE
        </a>
      </div>
      <div className="relative h-full w-[40%] flex flex-row items-center justify-center">
        <input
          className="relative h-[30%] w-[70%] mt-[5%] outline-none border-0 border-b border-b-black transition-duration-[0.3s] pl-[15px] text-black/50 hover:border-b-[2px] hover:border-b-black"
          type="text"
          name="search"
          id="search"
          placeholder="Search . . . "
        />
        <button
          className="relative mt-[5%] h-[35px] w-[35px] border-0 outline-none cursor-pointer topnav-search"
          title="Search Item"
        ></button>
      </div>
      <div className="relative h-full w-[30%] flex flex-row">
        <div className="relative h-full w-[40%] flex flex-col items-start justify-center">
          <p className="m-0 p-0 text-black text-[12px]" id="message-one">
            {firstMessage}
          </p>
          <p
            className="m-0 p-0 text-black text-[15px] font-bold decoration-none cursor-pointer"
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
            className="absolute top-[75px] h-[65px] w-[150px] bg-white topnav-hidden-div-box-show"
            style={{ display: hiddenDivDisplay }}
          >
            <button
              className="relative h-1/2 w-full border-0 outline-none cursor-pointer bg-none text-[11px] text-black/50 hover:bg-[#008cff0d]"
              onClick={() => (window.location.href = link)}
            >
              View Account
            </button>
            <button
              className="relative h-1/2 w-full border-0 outline-none cursor-pointer bg-none text-[11px] text-black/50 hover:bg-[#008cff0d]"
              onClick={() => logOutHandler()}
            >
              Log Out
            </button>
          </div>
        )}
        <div className="relative h-full w-[40%] flex flex-col items-start justify-center">
          <a href="/">
            <button className="relative h-[45px] w-[45px] border-0 outline-none cursor-pointer cart-btn"></button>
          </a>
        </div>
      </div>
    </div>
  );
};
