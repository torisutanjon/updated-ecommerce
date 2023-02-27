//dependencies
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

//api
import {
  getUserInfo,
  updateUser,
  checkPassword,
  verifyEmail,
} from "../API/Account";

//hooks
import { checkUpdateField } from "../Hooks/ValidateFields";

//assets
import "../Assets/Styles/accountprofile.css";

export const AccountProfile = () => {
  const { userID } = useParams();
  const [user, setUser] = useState({
    firstname: "",
    lastname: "",
    username: "",
    email: "",
    contactnumber: "",
    emailverified: null,
  });
  const [onEditStatus, setOnEditStatus] = useState(true);

  const getInputsHandler = () => {
    const inputs = Array.from(
      document.getElementsByClassName(
        "info-input"
      ) as HTMLCollectionOf<HTMLInputElement>
    );
    return inputs;
  };

  const setInputsHandler = (
    firstname: string,
    lastname: string,
    username: string,
    email: string,
    contactnumber: string
  ) => {
    getInputsHandler()[0].value = firstname;
    getInputsHandler()[1].value = "";
    getInputsHandler()[2].value = lastname;
    getInputsHandler()[3].value = "";
    getInputsHandler()[4].value = username;
    getInputsHandler()[5].value = "";
    getInputsHandler()[6].value = email;
    getInputsHandler()[7].value = contactnumber;
  };

  const getUserHandler = async () => {
    await getUserInfo(userID)
      .then(async (getUserRes: any) => {
        console.log(getUserRes);
        setInputsHandler(
          getUserRes.data.user.name.firstname,
          getUserRes.data.user.name.lastname,
          getUserRes.data.user.username,
          getUserRes.data.user.email,
          getUserRes.data.user.contactnumber
        );
        setUser({
          firstname: getUserRes.data.user.name.firstname,
          lastname: getUserRes.data.user.name.lastname,
          username: getUserRes.data.user.username,
          email: getUserRes.data.user.email,
          contactnumber: getUserRes.data.user.contactnumber,
          emailverified: getUserRes.data.user.emailverified,
        });
      })
      .catch((err: any) => console.log(err));
  };

  const updateUserHandler = async () => {
    await updateUser(
      userID,
      getInputsHandler()[0].value,
      getInputsHandler()[2].value,
      getInputsHandler()[4].value,
      getInputsHandler()[6].value,
      getInputsHandler()[7].value,
      getInputsHandler()[5].value
    )
      .then((updateUserRes: any) => {
        if (updateUserRes?.status === 204) {
          alert("Account Updated Successfully");
          window.location.reload();
        }
      })
      .catch((err) => console.log(err));
  };

  const updateHandler = async (command: string) => {
    if (command === "update") {
      if (
        getInputsHandler()[1].value === "" &&
        getInputsHandler()[3].value === "" &&
        getInputsHandler()[5].value === ""
      ) {
        updateUserHandler();
      } else {
        await checkPassword(userID, getInputsHandler()[1].value).then(
          async (checkPasswordRes: any) => {
            if (checkPasswordRes?.response?.status === 401)
              return alert(checkPasswordRes?.response?.data?.message);
            if (checkPasswordRes?.status === 200) {
              await checkUpdateField(
                getInputsHandler()[3].value,
                getInputsHandler()[5].value
              ).then(async (checkUpdateFieldRes: any) => {
                updateUserHandler();
              });
            }
          }
        );
      }
    } else {
      setOnEditStatus(true);
      setInputsHandler(
        user.firstname,
        user.lastname,
        user.username,
        user.email,
        user?.contactnumber
      );
    }
  };

  const verifyEmailHandler = async () => {
    await verifyEmail(userID)
      .then((res: any) => {
        if (res?.status === 200) {
          alert(res?.data?.message);
        }
      })
      .catch((err: any) => console.log(err));
  };

  useEffect(() => {
    getUserHandler();
    document.title = "Account Settings";
  }, []);

  return (
    <div className="profile-body">
      <header>
        <p className="tahoma">E-COMMERCE</p>
      </header>
      <main>
        <div className="side-bar">
          <div className="side-bar-header tahoma">Settings</div>
          <div className="side-bar-option arvo">Account Settings</div>
        </div>
        <div className="main">
          {user === undefined ? (
            <>
              <div
                style={{
                  height: `100%`,
                  width: `100%`,
                  display: `flex`,
                  alignItems: `center`,
                  justifyContent: `center`,
                }}
              >
                Loading Data...
              </div>
            </>
          ) : (
            <div className="info-container">
              <div className="title-div tahoma">Basic Settings</div>
              <div className="info-div tahoma">
                <div className="profile-infos">
                  <div>
                    <p>FIRST NAME</p>
                    <input
                      type="text"
                      id="firstname-input"
                      className="info-input"
                      readOnly={onEditStatus}
                    />
                  </div>
                  <div>
                    <p>CURRENT PASSWORD</p>
                    <input
                      type="text"
                      id="currentpassword-input"
                      className="info-input"
                      readOnly={onEditStatus}
                    />
                  </div>
                  <div>
                    <p>LAST NAME</p>
                    <input
                      type="text"
                      id="lastname-input"
                      className="info-input"
                      readOnly={onEditStatus}
                    />
                  </div>
                  <div>
                    <p>NEW PASSWORD</p>
                    <input
                      type="text"
                      id="newpassword-input"
                      className="info-input"
                      readOnly={onEditStatus}
                    />
                  </div>
                  <div>
                    <p>USER NAME</p>
                    <input
                      type="text"
                      id="username-input"
                      className="info-input"
                      readOnly={onEditStatus}
                    />
                  </div>
                  <div>
                    <p>CONFIRM NEW PASSWORD</p>
                    <input
                      type="text"
                      id="confirmnewpassword-input"
                      className="info-input"
                      readOnly={onEditStatus}
                    />
                  </div>
                  <div>
                    <p>EMAIL</p>
                    <div className="dynamic_p_div">
                      <input
                        type="text"
                        id="email-input"
                        className="info-input"
                        readOnly={onEditStatus}
                      />
                      {user.emailverified === false ? (
                        <>
                          <p
                            className="dynamic_p"
                            onClick={() => verifyEmailHandler()}
                          >
                            Verify
                          </p>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                  <div>
                    <p>Contact Number</p>
                    <input
                      type="number"
                      id="contactnumber-input"
                      className="info-input"
                      readOnly={onEditStatus}
                    />
                  </div>
                  <div
                    style={{
                      height: "100%",
                      alignItems: "end",
                      flexDirection: "row",
                    }}
                  >
                    {onEditStatus === true ? (
                      <button onClick={() => setOnEditStatus(false)}>
                        Change
                      </button>
                    ) : (
                      <>
                        <button onClick={() => updateHandler("update")}>
                          Update
                        </button>
                        <button onClick={() => updateHandler("cancel")}>
                          Cancel
                        </button>
                      </>
                    )}
                  </div>
                </div>
                <div className="image-div">
                  <div></div>
                  <button>Upload</button>
                </div>
              </div>
            </div>
          )}
          <button
            onClick={() => (window.location.href = "/")}
            style={{ marginBottom: "2.5%" }}
          >
            Go Back
          </button>
        </div>
      </main>
    </div>
  );
};
