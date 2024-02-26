import "./Sponsors.css";
import SponsorCard from "./SponsorCard";
import React, { useState } from "react";
import { Fade } from "react-awesome-reveal";
import json from "../../data/sponsors2023.json";
import { Button } from "@mui/material";

function Sponsors() {
  const getGold = json.sponsors.filter((sponsor) => sponsor.class === "gold");
  const getSilver = json.sponsors.filter(
    (sponsor) => sponsor.class === "silver"
  );
  const getBronze = json.sponsors.filter(
    (sponsor) => sponsor.class === "bronze"
  );

  const [gold] = useState(getGold);
  const [silver] = useState(getSilver);
  const [bronze] = useState(getBronze);

  const currYear = new Date().getFullYear();

  return (
    <Fade delay={500}>
      <div className="sponsors">
        <div class="row align-items-center">
          <div>
            <h1 class="font-weight-bold">Sponsors</h1>

            <h5>Thank you to all our {currYear} sponsors!</h5>
            <p class="sponsorship-form">
              If you would like to sponsor us, fill out the form{" "}
              <a href="https://forms.gle/iHAGSgSijE4RxFZo8">here!</a>
            </p>
            <div class="sponsors-tier tier">
              <h2 class="gold">Gold</h2>
              <div class="tier-container tier-gold">
                {gold.map((sponsor) => {
                  return (
                    <SponsorCard
                      itemId={sponsor.imgName} // NOTE: itemId is required for track items
                      link={sponsor.link}
                      img={sponsor.img}
                      imgName={sponsor.imgName}
                    />
                  );
                })}
              </div>
            </div>

            <div class="tier">
              <h3 class="silver">Silver</h3>
              <div class="tier-container tier-silver">
                {silver.map((sponsor) => {
                  return (
                    <SponsorCard
                      itemId={sponsor.imgName} // NOTE: itemId is required for track items
                      link={sponsor.link}
                      img={sponsor.img}
                      imgName={sponsor.imgName}
                    />
                  );
                })}
              </div>
              {/* missing seven eight capital*/}
            </div>
            <div class="tier">
              <h4 class="bronze">Bronze</h4>
              <div class="tier-container tier-bronze">
                {bronze.map((sponsor) => {
                  return (
                    <SponsorCard
                      itemId={sponsor.imgName} // NOTE: itemId is required for track items
                      link={sponsor.link}
                      img={sponsor.img}
                      imgName={sponsor.imgName}
                    />
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fade>
  );
}

export default Sponsors;
