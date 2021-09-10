import React from "react";
import "./Navigation.css";
import { Link, withRouter } from "react-router-dom";
import styled from "@emotion/styled";
import logo from "./icons/logo.png";

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

const HomeLink = styled(MyNavLink)`
    margin-left: 0;
`;

function Navigation(props) {
    return (
        <nav className="navbar">
            <Link className="acsu-logo-wrapper" to="/">
                <img src={logo} alt="ACSU logo" className="acsu-logo-img"></img>
            </Link>
            <div className="container">
                <HomeLink to="/">🏠 Home</HomeLink>
                <MyNavLink to="/board">😄 Board</MyNavLink>
                <MyNavLink to="/sponsers">💪 Sponsors</MyNavLink>
                <MyNavLink to="/resources">⚙️ Resources</MyNavLink>
            </div>
        </nav>
    );
}

export default withRouter(Navigation);
