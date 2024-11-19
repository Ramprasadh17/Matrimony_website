import React from "react";
import Icon from "../Images/Icon.png";
import Create from "../Images/Register.png";
import Login from "../Images/Login.png";
import "./logo.css";
function Logo() {
  return (
    <>
      <div className="logo_container">
        <div className="icondiv">
          <img src={Icon} alt="Image not found" className="icon" />
        </div>
        <div className="buttons">
          <span>
            <button className="register_button">
              <img className="register_icon" src={Create} alt="" />
              Find Your Forever
            </button>
          </span>
          <span>
            <button className="login_button">
              {" "}
              <img className="login_icon" src={Login} alt="" />
              LogIn
            </button>
          </span>
        </div>
      </div>
    </>
  );
}

export default Logo;
