import React from "react";
import "./Sponsors.css";
import deshaw from "./icons/deshaw.jpeg";
import greenhills from "./icons/greenhills.jpeg";
import capitalone from "./icons/capitalone.png";
import amazonrobotics from "./icons/amazonrobotics.png";
import bloomberg from "./icons/bloomberg.png";
import stripe from "./icons/stripe.png";
import facebook from "./icons/facebook.png";
import blackstone from "./icons/blackstone.png";

function Sponsors() {
    return (
        <div className="sponsors">
            <div class="row align-items-center">
                <div>
                    <h1 class="font-weight-light">Sponsors</h1>
                    <h5>Thank you to all our 2021 sponsors!</h5>
                    <div class="sponsors-tier">
                        <h2 class="gold">Gold</h2>
                        <a href="https://www.bloomberg.com/">
                            <img
                                src={bloomberg}
                                alt="Bloomberg logo"
                                width="30%"
                                className="d-inline-block align-text-top"></img>
                        </a>
                        <a href="https://www.ghs.com/">
                            <img
                                src={greenhills}
                                alt="Greenhills logo"
                                width="28%"
                                className="d-inline-block align-text-top"></img>
                        </a>
                    </div>

                    <div class="tier">
                        <h3 class="silver">Silver</h3>
                        <a href="https://www.deshaw.com/">
                            <img
                                src={deshaw}
                                alt="De Shaw logo"
                                width="22%"
                                className="d-inline-block align-text-top"></img>
                        </a>
                        {/* missing seven eight capital */}
                        <a href="https://stripe.com/">
                            <img
                                src={stripe}
                                alt="Stripe logo"
                                width="22%"
                                className="d-inline-block align-text-top"></img>
                        </a>
                        <a href="https://facebook.com/">
                            <img
                                src={facebook}
                                alt="Facebook logo"
                                width="24%"
                                className="d-inline-block align-text-top"></img>
                        </a>
                    </div>

                    <div class="tier">
                        <h4 class="bronze">Bronze</h4>
                        <a href="https://www.amazon.com/">
                            <img
                                src={amazonrobotics}
                                alt="Amazon Robotics logo"
                                width="14%"
                                className="d-inline-block align-text-top"></img>
                        </a>
                        <a href="https://www.capitalone.com/">
                            <img
                                src={capitalone}
                                alt="Capital One logo"
                                width="14%"
                                className="d-inline-block align-text-top"></img>
                        </a>
                        {/*how do I fix the spacing and alignment for this one*/}
                        <a href="https://www.blackstone.com/">
                            <img
                                src={blackstone}
                                alt="Blackstone logo"
                                width="14%"
                                className="d-inline-block align-text-top"></img>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;
