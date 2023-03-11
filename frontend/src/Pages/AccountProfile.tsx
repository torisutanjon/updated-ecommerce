//dependencies
import React, { useState, useEffect, lazy, useTransition } from "react";
import { useParams } from "react-router-dom";

//assets
import "../Assets/Styles/accountprofile.css";

//components
const AccountSettings = lazy(() =>
  import("../Components/AccountSettings").then((module) => {
    return {
      default: module.AccountSettings,
    };
  })
);

const BeASeller = lazy(() =>
  import("../Components/BeASeller").then((module) => {
    return {
      default: module.BeASeller,
    };
  })
);

export const AccountProfile = () => {
  const { userID } = useParams();
  const [isPending, startTransition] = useTransition();
  const [component, setComponent] = useState(
    <AccountSettings userID={userID} />
  );

  useEffect(() => {
    document.title = "Account Settings";
  }, []);

  return (
    <div className="profile-body">
      <header>
        <a href="/" className="tahoma">
          E-COMMERCE
        </a>
      </header>
      <main>
        <div className="side-bar">
          <div className="side-bar-header tahoma">Settings</div>
          <div
            className="side-bar-option arvo"
            onClick={() =>
              startTransition(() =>
                setComponent(<AccountSettings userID={userID} />)
              )
            }
          >
            Account Settings
          </div>
          <div
            className="side-bar-option arvo"
            onClick={() =>
              startTransition(() => setComponent(<BeASeller userID={userID} />))
            }
          >
            Become a Seller
          </div>
        </div>
        <div className="main">{component}</div>
      </main>
    </div>
  );
};
