import React from "react";
import Image from "../Images/Marriage.jpg";
import "./photo.css";

function Photo() {
  return (
    <div className="image_container">
      <img src={Image} className="welcome" alt="" />
      <div className="text_overlay">Welcome to Kettimelam Matrimony</div>
    </div>
  );
}

export default Photo;
