import React from "react";
import { Link } from "react-router-dom";
import logo from "../Navbar/icons/logo.png";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer-section">
      <div className="footer-inner-stroke">
        <div className="footer-bottom-left">
          <img src={logo} alt="ACSU logo" className="footer-logo" />
          <p className="footer-copyright">@ 2026 ACSU at Cornell</p>
        </div>

        <div className="footer-links">
          <div className="footer-links-row footer-links-row-top">
            <Link to="/board">Team</Link>
            <span>&middot;</span>
            <Link to="/resources">Resources</Link>
            <span>&middot;</span>
            <Link to="/sponsors">Sponsorship</Link>
            <span>&middot;</span>
            <Link to="/calendar">Events</Link>
          </div>
          <div className="footer-links-row footer-links-row-bottom">
            <Link to="/resources">Campus Groups</Link>
            <a
              href="https://edstem.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Ed Discussion
            </a>
            <a
              href="https://www.instagram.com/cornellacsu/"
              target="_blank"
              rel="noopener noreferrer"
            >
              IG: @cornellacsu
            </a>
          </div>
        </div>
      </div>
      <div className="footer-legal-bar">
        <a
          href="https://hr.cornell.edu/about/workplace-rights/equal-education-and-employment"
          target="_blank"
          rel="noopener noreferrer"
        >
          Equal Education and Employment
        </a>{" "}
        | This organization is a registered student organization of Cornell
        University
      </div>
    </footer>
  );
}

export default Footer;
