import React from "react";

function TeamCard({ name, mail, img, pos, major, year, team }) {
  return (
    <div className="color-container-team">
      <div className="container-team">
        <h2>{team} {pos}</h2>
        <img
            src={`/icons/${img}`}
            alt={name}
            className="d-inline-block align-text-top"
          />
          <h2>{name}</h2>
          <h3>{major} {year}</h3>
          <a href={"mailto:"+mail} target="_blank">E-Mail</a>
          
          {/* <a href={link} target="_blank" style="width: 50px; height: 50px; background-color: blue; color: white;"> </a>*/}
        {/* </a> */}
      </div>
    </div>
  );
}

export default TeamCard;