import React from "react";
import "./Sponsors.css";
import deshaw from "./icons/deshaw.jpeg";
import greenhills from "./icons/greenhills.jpeg";
import capitalone from "./icons/capitalone.png";
import amazonrobotics from "./icons/amazonrobotics.png";
import bloomberg from "./icons/bloomberg.jpg";
import stripe from "./icons/stripe.png";
import facebook from "./icons/facebook.png";
import blackstone from "./icons/blackstone.png";
import SponsorCard from "./SponsorCard";
import { useState} from "react";
import { DriveEtaSharp } from "@material-ui/icons";


function Sponsors() {

    //manually add to just this list, the code does everything else for you.
    const sponsors = [
        {
            class: "gold",
            link: "https://www.bloomberg.com/",
            img: bloomberg,
            imgName: "Bloomberg logo",
            width: "30%",
        },
        {
            class: "gold",
            link: "https://www.ghs.com/",
            img: greenhills,
            imgName: "Greenhills logo",
            width: "28%",
        },
        {
            class: "silver",
            link: "https://www.deshaw.com/",
            img: deshaw,
            imgName: "De Shaw logo",
            width: "22%",
        },
        {
            class: "silver",
            link: "https://stripe.com/",
            img: stripe,
            imgName: "Stripe logo",
            width:"22%",
        },
        {
            class: "silver",
            link: "https://facebook.com/",
            img: facebook,
            imgName: "Facebook logo",
            width: "24%",
        },
        {
            class: "bronze",
            link: "https://www.amazon.com/",
            img: amazonrobotics,
            imgName: "Amazon Robotics logo",
            width: "14%",
        },
        {
            class: "bronze",
            link: "https://www.capitalone.com/",
            img: capitalone,
            imgName: "Capital One logo",
            width: "14%",
        },
        {
            class: "bronze",
            link: "https://www.blackstone.com/",
            img: blackstone,
            imgName: "Blackstone logo",
            width: "14%",
        }
    ]

    const getGold = sponsors.filter((sponsor)=> (sponsor.class == "gold"));
    const getSilver = sponsors.filter((sponsor)=> (sponsor.class == "silver"));
    const getBronze = sponsors.filter((sponsor)=> (sponsor.class == "bronze"));

    const [gold, setGold] = useState(getGold);
    const [silver, setSilver] = useState(getSilver);
    const [bronze, setBronze] = useState(getBronze);

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
                                    link = {sponsor.link}
                                    img = {sponsor.img}
                                    imgName = {sponsor.imgName}
                                    width = {sponsor.width}
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
                                    link = {sponsor.link}
                                    img = {sponsor.img}
                                    imgName = {sponsor.imgName}
                                    width = {sponsor.width}
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
                                    link = {sponsor.link}
                                    img = {sponsor.img}
                                    imgName = {sponsor.imgName}
                                    width = {sponsor.width}
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
