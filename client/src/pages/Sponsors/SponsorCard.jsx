import React from "react";
import "./Sponsors.css";

function SponsorCard({ link, img, imgName }) {
  return (
    <div className="color-container-sponsors">
      <div className="white-container-sponsors">
        <a href={link}>
          <img
            src={require("./icons/".concat(img))}
            alt={imgName}
            className="d-inline-block align-text-top"
          ></img>
        </a>
      </div>
    </div>
  );
}

export default SponsorCard;
