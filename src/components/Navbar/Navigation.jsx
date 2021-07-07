// import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./Navigation.css";
import { useState, useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";

import logo from "./icons/logo.png";
import home from "./icons/house-white.png";
import homeActive from "./icons/house-red.png";
import board from "./icons/officers-white.svg";
import boardActive from "./icons/officers-red.svg";
import sponsers from "./icons/donation-white.svg";
import sponsersActive from "./icons/donation-red.svg";
import resources from "./icons/resources-white.png";
import resourcesActive from "./icons/resources-red.png";

function Navigation(props) {
    return (
        <nav className="navbar">
            <div className="container">
                <Link className="" to="/">
                    <img
                        src={logo}
                        alt="ACSU logo"
                        width="40"
                        height="32"
                        className="d-inline-block align-text-top"></img>
                </Link>
                <div className="button-div">
                    <ul className="navbar-nav">
                        <NavItem
                            currentPath={props.location.pathname}
                            target="/"
                            name="Home"
                            imgSrc={home}
                            activeImgSrc={homeActive}
                        />
                        <NavItem
                            currentPath={props.location.pathname}
                            target="/board"
                            name="Board"
                            imgSrc={board}
                            activeImgSrc={boardActive}
                        />
                        <NavItem
                            currentPath={props.location.pathname}
                            target="/sponsers"
                            name="Sponsers"
                            imgSrc={sponsers}
                            activeImgSrc={sponsersActive}
                        />
                        <NavItem
                            currentPath={props.location.pathname}
                            target="/resources"
                            name="Resources"
                            imgSrc={resources}
                            activeImgSrc={resourcesActive}
                        />
                    </ul>
                </div>
            </div>
        </nav>
    );
}

function NavItem(props) {
    const [open, setOpen] = useState(false);
    const NavItemRef = useRef();

    // Click away to collapse the menu
    useEffect(() => {
        document.addEventListener("click", handleClickOutside, true);
        return () => {
            document.removeEventListener("click", handleClickOutside, true);
        };
    }, []);

    const handleClickOutside = (event) => {
        const domNode = NavItemRef.current;

        if (!domNode || !domNode.contains(event.target)) {
            setOpen(false);
        }
    };

    return (
        <li className={"nav-item"} ref={NavItemRef}>
            <Link
                className="icon-button"
                to={props.target}
                onClick={() => setOpen(!open)}>
                <img
                    src={
                        props.currentPath === props.target
                            ? props.activeImgSrc
                            : props.imgSrc
                    }
                    alt={props.name}
                />
            </Link>
            {open && props.children}
        </li>
    );
}

export default withRouter(Navigation);
