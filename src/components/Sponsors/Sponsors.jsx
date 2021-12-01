import "./Sponsors.css";
import SponsorCard from "./SponsorCard";
import React, {useState } from "react";
import json from '../../data/sponsors2021.json';

function Sponsors() {

    const getGold = json.sponsors.filter((sponsor) => sponsor.class === "gold");
    const getSilver = json.sponsors.filter((sponsor) => sponsor.class === "silver");
    const getBronze = json.sponsors.filter((sponsor) => sponsor.class === "bronze");

    const [gold, setGold] = useState(getGold);
    const [silver, setSilver] = useState(getSilver);
    const [bronze, setBronze] = useState(getBronze);

    // So for some reason none of the images are actually properly showing up and I think it has something to do with how I am accessing the images from the json
    return (
        <div className="sponsors">
            <div class="row align-items-center">
                <div>
                    <h1 class="font-weight-light">Sponsors</h1>
                    <h5>Thank you to all our 2021 sponsors!</h5>
                    {/* I wish there is a way to combine all three of these into one and use some sort of filtering to vertically 
                    place them on the page/in a container? */}
                    <div class="sponsors-tier tier">
                        <h2 class="gold">Gold</h2>
                        <div class="tier-container tier-gold">
                            {gold.map((sponsor) => {
                                return (
                                    <SponsorCard
                                        itemId={sponsor.imgName} // NOTE: itemId is required for track items
                                        link={sponsor.link}
                                        image={ sponsor.img}
                                        imgName={sponsor.imgName}
                                        width={sponsor.width}
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
                                        image={sponsor.img}
                                        imgName={sponsor.imgName}
                                        width={sponsor.width}
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
                                        image={sponsor.img}
                                        imgName={sponsor.imgName}
                                        width={sponsor.width}
                                    />
                                );
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;
