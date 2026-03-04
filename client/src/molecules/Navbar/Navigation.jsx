import React, { useEffect, useState } from "react";
import "./Navigation.css";
import { Link, withRouter } from "react-router-dom";
import logo from "./icons/logo.png";
import { Fade } from "react-awesome-reveal";

const NAV_ITEMS = [
  { label: "Team", to: "/board" },
  { label: "Sponsors", to: "/sponsors" },
  { label: "Resources", to: "/resources" },
  { label: "Calendar", to: "/calendar" },
];

const openInNewTab = (url) => {
  const newWindow = window.open(url, "_blank", "noopener,noreferrer");
  if (newWindow) newWindow.opener = null;
};

function Navigation(props) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      <div className="nav-links desktop-nav-links">
        {NAV_ITEMS.map((item) => (
          <div key={item.to}>
            <Link className="nav-link" to={item.to} onClick={closeMobileMenu}>
              {item.label}
            </Link>
          </div>
        ))}
      </div>
      <div className="navbar-cta">
        <button
          type="button"
          className="join-us-button"
          onClick={handleJoinUsClick}
        >
          Join Us
        </button>
      </div>
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
        className={`nav-links mobile-nav-links ${isMobileMenuOpen ? "is-open" : ""}`}
      >
        {NAV_ITEMS.map((item) => (
          <div key={item.to}>
            <Link className="nav-link" to={item.to} onClick={closeMobileMenu}>
              {item.label}
            </Link>
          </div>
        ))}
        <div>
          <button
            type="button"
            className="join-us-button mobile-join-us-button"
            onClick={handleJoinUsClick}
          >
            Join Us
          </button>
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Navigation);
