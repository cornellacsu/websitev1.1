// import Navbar from "react-bootstrap/Navbar";
import React from "react";
import "./Navigation.css";
import { useState, useEffect, useRef } from "react";
import { Link, withRouter } from "react-router-dom";
import { CSSTransition } from "react-transition-group";

import { ReactComponent as BellIcon } from "./icons/bell.svg";
import { ReactComponent as MessengerIcon } from "./icons/messenger.svg";
import { ReactComponent as CaretIcon } from "./icons/caret.svg";
import { ReactComponent as PlusIcon } from "./icons/plus.svg";
import { ReactComponent as CogIcon } from "./icons/cog.svg";
import { ReactComponent as ChevronIcon } from "./icons/chevron.svg";
import { ReactComponent as ArrowIcon } from "./icons/arrow.svg";
import { ReactComponent as BoltIcon } from "./icons/bolt.svg";

import logo from "./logo.png";
import home from "./home-white.svg";
import homeActive from "./home-active.png";
import board from "./board.png";
import sponsers from "./sponsers.png";
import resources from "./resources.png";

function Navigation(props) {
    return (
        <nav className="navbar navbar-expand ">
            <div className="container">
                <Link className="navbar-brand" to="/">
                    <img
                        src={logo}
                        alt="ACSU logo"
                        width="30"
                        height="24"
                        className="d-inline-block align-text-top"></img>
                </Link>
                <div>
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
                            activeImgSrc={homeActive}
                        />
                        <NavItem
                            currentPath={props.location.pathname}
                            target="/sponsers"
                            name="Sponsers"
                            imgSrc={sponsers}
                            activeImgSrc={homeActive}
                        />
                        <NavItem
                            currentPath={props.location.pathname}
                            target="/resources"
                            name="Resources"
                            imgSrc={resources}
                            activeImgSrc={homeActive}
                        />
                        <NavItem>
                            <DropdownMenu />
                        </NavItem>
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

function DropdownMenu() {
    const [activeMenu, setActiveMenu] = useState("main");
    const [menuHeight, setMenuHeight] = useState(null);
    const dropdownRef = useRef(null);

    // Temporary solution to padding issue
    const scale = 1.1;

    // To get height of the first menu item, so that we can start animations
    useEffect(() => {
        setMenuHeight(scale * dropdownRef.current?.firstChild.offsetHeight);
    }, []);

    function calcHeight(el) {
        const height = el.offsetHeight;
        setMenuHeight(scale * height);
    }

    function DropdownItem(props) {
        return (
            <Link
                className="menu-item"
                onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}>
                <span className="icon-button">{props.leftIcon}</span>
                {props.children}
                <span
                    className={props.rightIcon ? "icon-button icon-right" : ""}>
                    {props.rightIcon}
                </span>
            </Link>
        );
    }
    return (
        <div
            className="dropdown"
            style={{ height: menuHeight }}
            ref={dropdownRef}>
            <CSSTransition
                in={activeMenu === "main"}
                timeout={500}
                classNames="menu-primary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem>My Profile</DropdownItem>
                    <DropdownItem
                        leftIcon={<CogIcon />}
                        rightIcon={<ChevronIcon />}
                        goToMenu="settings">
                        Settings
                    </DropdownItem>
                    <DropdownItem
                        leftIcon="🦧"
                        rightIcon={<ChevronIcon />}
                        goToMenu="animals">
                        Animals
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === "settings"}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        My Tutorial
                    </DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>HTML</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>CSS</DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>
                        JavaScript
                    </DropdownItem>
                    <DropdownItem leftIcon={<BoltIcon />}>
                        Awesome!
                    </DropdownItem>
                </div>
            </CSSTransition>

            <CSSTransition
                in={activeMenu === "animals"}
                timeout={500}
                classNames="menu-secondary"
                unmountOnExit
                onEnter={calcHeight}>
                <div className="menu">
                    <DropdownItem goToMenu="main" leftIcon={<ArrowIcon />}>
                        Animals
                    </DropdownItem>
                    <DropdownItem leftIcon="🦘">Kangaroo</DropdownItem>
                    <DropdownItem leftIcon="🐸">Frog</DropdownItem>
                    <DropdownItem leftIcon="🦋">Horse?</DropdownItem>
                    <DropdownItem leftIcon="🦔">Hedgehog</DropdownItem>
                </div>
            </CSSTransition>
        </div>
    );
}

export default withRouter(Navigation);
