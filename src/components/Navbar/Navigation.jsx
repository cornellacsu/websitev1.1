import React from "react";
import "./Navigation.css";
import { Link, withRouter } from "react-router-dom";
import styled from "@emotion/styled";
import logo from "./icons/logo.png";
import { Fade } from "react-awesome-reveal";
import JoinUs from "./JoinUs";

const MyNavLink = styled(Link)`
    font-size: 20px;
    font-weight: bolder;
    color: black;
    margin-left: 15px;
    text-decoration: none;
    display: inline-block;
    position: relative;
    ::after {
        content: "";
        position: absolute;
        width: 100%;
        transform: scaleX(0);
        height: 2px;
        bottom: 0;
        left: 0;
        background-color: #b01c33;
        transform-origin: bottom right;
        transition: transform 0.4s cubic-bezier(0.86, 0, 0.07, 1);
    }
    :hover::after {
        transform: scaleX(1);
        transform-origin: bottom left;
    }
`;

function Navigation(props) {
    const interval = 100;
    return (
        <nav className="navbar">
            <Link className="acsu-logo-wrapper" to="/">
                <Fade triggerOnce>
                    <img
                        src={logo}
                        alt="ACSU logo"
                        className="acsu-logo-img"></img>
                </Fade>
            </Link>
            <div className="container">
                <Fade direction="up" triggerOnce delay={interval}>
                    <MyNavLink className="nav-button" to="/board">
                        Board
                    </MyNavLink>
                </Fade>
                <Fade direction="up" triggerOnce delay={2 * interval}>
                    <MyNavLink className="nav-button" to="/sponsors">
                        Sponsors
                    </MyNavLink>
                </Fade>
                <Fade direction="up" triggerOnce delay={3 * interval}>
                    <MyNavLink className="nav-button" to="/resources">
                        Resources
                    </MyNavLink>
                </Fade>
                <Fade direction="up" triggerOnce delay={4 * interval}>
                    <div className="nav-button">
                        <JoinUs />
                    </div>
                </Fade>
            </div>
        </nav>
    );
}

export default withRouter(Navigation);
