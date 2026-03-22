import React from "react";

function SponsorCard({ link, img, imgName }) {
  return (
    <div className="color-container-sponsors">
      <div className="white-container-sponsors">
        <a href={link} target="_blank" rel="noopener noreferrer">
          <img
            src={`/icons/${img}`}
            alt={imgName}
            className="d-inline-block align-text-top"
          />
        </a>
      </div>
    </div>
  );
}

export default SponsorCard;
