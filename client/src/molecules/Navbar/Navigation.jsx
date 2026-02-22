import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { Link, withRouter } from "react-router-dom";
import logo from "./icons/logo.png";
import { Fade } from "react-awesome-reveal";

const NAV_ITEMS = [
  { label: "Board", to: "/board" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Resources", to: "/resources" },
  { label: "Calendar", to: "/calendar" },
  { label: "Events", to: "/events" },
];

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function Navigation(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const interval = 100;

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [props.location.pathname]);

  const handleJoinUsClick = () => {
    openInNewTab("https://forms.gle/AyRTriREGNp2xj927");
    setIsMobileMenuOpen(false);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <Link className="acsu-logo-wrapper" to="/" onClick={closeMobileMenu}>
        <Fade triggerOnce>
          <img src={logo} alt="ACSU logo" className="acsu-logo-img"></img>
        </Fade>
      </Link>
      <button
        type="button"
        className={`hamburger-button ${isMobileMenuOpen ? "is-open" : ""}`}
        aria-label="Toggle navigation menu"
        aria-expanded={isMobileMenuOpen}
        aria-controls="navbar-links"
        onClick={() => setIsMobileMenuOpen((prev) => !prev)}
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
      <div
        id="navbar-links"
        className={`nav-links ${isMobileMenuOpen ? "is-open" : ""}`}
      >
        {NAV_ITEMS.map((item, index) => (
          <Fade
            key={item.to}
            direction="up"
            triggerOnce
            delay={(index + 1) * interval}
          >
            <Link className="nav-link" to={item.to} onClick={closeMobileMenu}>
              {item.label}
            </Link>
          </Fade>
        ))}
        <Fade
          direction="up"
          triggerOnce
          delay={(NAV_ITEMS.length + 1) * interval}
        >
          <button
            type="button"
            className="nav-link nav-link-button"
            onClick={handleJoinUsClick}
          >
            Join Us!
          </button>
        </Fade>
      </div>
    </nav>
  );
}

export default withRouter(Navigation);
