// import Navbar from "react-bootstrap/Navbar";
import React from "react";
import { Link, withRouter } from "react-router-dom";
import logo from "./logo.png";

function Navigation(props) {
    return (
        <div className="navigation">
            <nav class="navbar navbar-expand navbar-dark bg-dark">
                <div class="container">
                    <Link class="navbar-brand" to="/">
                        <img
                            src={logo}
                            alt="ACSU logo"
                            width="30"
                            height="24"
                            class="d-inline-block align-text-top"></img>
                    </Link>
                    <div>
                        <ul class="navbar-nav ml-auto">
                            <NavItem
                                currentPath={props.location.pathname}
                                target="/"
                                name="Home"
                            />
                            <NavItem
                                currentPath={props.location.pathname}
                                target="/board"
                                name="Board"
                            />
                            <NavItem
                                currentPath={props.location.pathname}
                                target="/sponsers"
                                name="Sponsers"
                            />
                            <NavItem
                                currentPath={props.location.pathname}
                                target="/resources"
                                name="Resources"
                            />
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

function NavItem(props) {
    return (
        <li
            class={`nav-item  ${
                props.currentPath === props.target ? "active" : ""
            }`}>
            <Link class="nav-link" to={props.target}>
                {props.name}
            </Link>
        </li>
    );
}

export default withRouter(Navigation);
