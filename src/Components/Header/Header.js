import React from "react";
import "./header.css";

function Header() {
  return (
    <>
      <div className="Header">
        <div className="leftside">
          <div className="home">Home</div>
          <div className="aboutus">About Us</div>
          <div className="contactus">Contact US</div>
          <div className="create">Create an Account</div>
          <div className="login">LogIn</div>
        </div>
      </div>
    </>
  );
}

export default Header;
