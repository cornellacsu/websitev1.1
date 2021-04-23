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
                            class="d-inline-block align-text-top"
                        ></img>
                    </Link>
                    <div>
                        <ul class="navbar-nav ml-auto">
                            <li
                                class={`nav-item  ${
                                    props.location.pathname === "/"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                <Link class="nav-link" to="/">
                                    Home
                                    <span class="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${
                                    props.location.pathname === "/board"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                <Link class="nav-link" to="/board">
                                    Board
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${
                                    props.location.pathname === "/sponsers"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                <Link class="nav-link" to="/sponsers">
                                    Sponsers
                                </Link>
                            </li>
                            <li
                                class={`nav-item  ${
                                    props.location.pathname === "/resources"
                                        ? "active"
                                        : ""
                                }`}
                            >
                                <Link class="nav-link" to="/resources">
                                    Resources
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default withRouter(Navigation);
