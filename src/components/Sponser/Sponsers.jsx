import React from "react";
import {Palette} from 'react-palette';
import "./Sponsors.css";
import deshaw from "./icons/deshaw.jpeg";
import greenhills from "./icons/greenhills.jpeg";
import capitalone from "./icons/capitalone.png";
import amazonrobotics from "./icons/amazonrobotics.png";
import bloomberg from "./icons/bloomberg.jpg";
import stripe from "./icons/stripe.png";
import facebook from "./icons/facebook.png";
import blackstone from "./icons/blackstone.png";
import { DriveEtaSharp } from "@material-ui/icons";

function Sponsors() {
    return (
        <div className="sponsors">
            <div class="row align-items-center">
                <div>
                    <h1 class="font-weight-light">Sponsors</h1>
                    <h5>Thank you to all our 2021 sponsors!</h5>

                    <div class="sponsors-tier tier">
                        <h2 class="gold">Gold</h2>
                            <div class="tier-container tier-gold">
                            <Palette src={bloomberg}>
                                {({ data, loading, error }) => (
                                    <div class="color-container-sponsors" style={{ 'background-color': data.vibrant }}>
                                        <div class="white-container-sponsors">
                                        <a href="https://www.bloomberg.com/">
                                            <img
                                                src={bloomberg}
                                                alt="Bloomberg logo"
                                                className="d-inline-block align-text-top">
                                            </img>
                                        </a>
                                        </div>
                                    </div>
                                )}
                            </Palette>
                            <Palette src={greenhills}>
                                {({ data, loading, error }) => (
                                    <div class="color-container-sponsors" style={{ 'background-color': data.vibrant }}>
                                        <div class="white-container-sponsors">
                                        <a href="https://www.ghs.com/">
                                            <img
                                                src={greenhills}
                                                alt="Greenhills logo"
                                                className="d-inline-block align-text-top">
                                            </img>
                                        </a>
                                        </div>
                                    </div>
                                )}
                            </Palette>
                            </div>
                    </div>

                    <div class="tier">
                        <h3 class="silver">Silver</h3>
                        <div class="tier-container tier-silver">
                        <Palette src={deshaw}>
                            {({ data, loading, error }) => (
                                <div class="color-container-sponsors" style={{ 'background-color': data.vibrant }}>
                                    <div class="white-container-sponsors">
                                    <a href="https://www.deshaw.com/">
                                        <img
                                            src={deshaw}
                                            alt="De Shaw logo"
                                            className="d-inline-block align-text-top">
                                        </img>
                                    </a>
                                    </div>
                                </div>
                            )}
                        </Palette>
                        <Palette src={facebook}>
                            {({ data, loading, error }) => (
                                <div class="color-container-sponsors" style={{ 'background-color': data.vibrant }}>
                                    <div class="white-container-sponsors">
                                    <a href="https://facebook.com/">
                                        <img
                                            src={facebook}
                                            alt="Facebook logo"
                                            className="d-inline-block align-text-top">
                                        </img>
                                    </a>
                                    </div>
                                </div>
                            )}
                        </Palette>
                        <Palette src={stripe}>
                            {({ data, loading, error }) => (
                                <div class="color-container-sponsors" style={{ 'background-color': data.vibrant }}>
                                    <div class="white-container-sponsors">
                                    <a href="https://stripe.com/">
                                        <img
                                            src={stripe}
                                            alt="Stripe logo"
                                            className="d-inline-block align-text-top">
                                        </img>
                                    </a>
                                    </div>
                                </div>
                            )}
                        </Palette>
                        </div>
                    </div>

                    <div class="tier">
                        <h4 class="bronze">Bronze</h4>
                        <div class="tier-container tier-bronze">
                        <Palette src={amazonrobotics}>
                            {({ data, loading, error }) => (
                                <div class="color-container-sponsors" style={{ 'background-color': data.vibrant }}>
                                    <div class="white-container-sponsors">
                                    <a href="https://www.amazon.com/">
                                        <img
                                            src={amazonrobotics}
                                            alt="Amazon Robotics logo"
                                            className="d-inline-block align-text-top">
                                        </img>
                                    </a>
                                    </div>
                                </div>
                            )}
                        </Palette>
                        <Palette src={capitalone}>
                            {({ data, loading, error }) => (
                                <div class="color-container-sponsors" style={{ 'background-color': data.vibrant }}>
                                    <div class="white-container-sponsors">
                                    <a href="https://www.capitalone.com/">
                                        <img
                                            src={capitalone}
                                            alt="Capital One logo"
                                            className="d-inline-block align-text-top">
                                        </img>
                                    </a>
                                    </div>
                                </div>
                            )}
                        </Palette>
                        <Palette src={blackstone}>
                            {({ data, loading, error }) => (
                                <div class="color-container-sponsors" style={{ 'background-color': data.vibrant }}>
                                    <div id="blackstone" class="white-container-sponsors">
                                    <a href="https://www.blackstone.com/">
                                        <img
                                            src={blackstone}
                                            alt="Blackstone logo"
                                            className="d-inline-block align-text-top">
                                        </img>
                                    </a>
                                    </div>
                                </div>
                            )}
                        </Palette>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Sponsors;
