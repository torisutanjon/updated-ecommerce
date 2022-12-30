//dependencies
import React from "react";

//assets
import "../Assets/Styles/mainstyle.css";

import fb_icon from "../Assets/Images/fb-icon.png";
import twitter_icon from "../Assets/Images/twitter-icon.png";
import instagram_icon from "../Assets/Images/Instagram-Icon.png";

export const Footer = () => {
  return (
    <div className="footer-body">
      <div className="blue"></div>
      <div className="footer-content">
        <div className="home-div">
          <a href="/">E-COMMERCE</a>
        </div>
        <div className="links-div">
          <div className="footer-title">
            <p>Links</p>
          </div>
          <div className="links-container">
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/">Computer Parts</a>
              </li>
              <li>
                <a href="/">Ready To Wear</a>
              </li>
              <li>
                <a href="/">Hand Tools</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Gadgets</a>
              </li>
              <li>
                <a href="/">Appliances</a>
              </li>
              <li>
                <a href="/">View Cart</a>
              </li>
              <li>
                <a href="/">Sign In</a>
              </li>
            </ul>
            <ul>
              <li>
                <a href="/">Sign Up</a>
              </li>
            </ul>
          </div>
          <div className="all-rights-reserved">
            <p>ALL RIGHTS RESERVED @2022</p>
          </div>
        </div>
        <div className="media-div">
          <div className="footer-title">
            <p style={{ paddingLeft: "0" }}>Visit Us</p>
          </div>
          <div className="media-holder">
            <a href="/">
              <img src={fb_icon} alt="" />
            </a>
            <a href="/" style={{ marginLeft: "10%" }}>
              <img src={twitter_icon} alt="" />
            </a>
            <a href="/" style={{ marginLeft: "10%" }}>
              <img src={instagram_icon} alt="" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
