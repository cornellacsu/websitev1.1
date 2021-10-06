import React from "react";
import "./Home.css";
import Roles from "./Roles.jsx";
import Events from "./Events.jsx";
import gates from "./images/gates.svg";

function Home() {
    return (
        <div className="main">
            <div className="cover-logo-div">
                <img className="cover-logo" src={gates} alt="Gates Hall" />
            </div>
            {/* <hr></hr> */}
            <div className="section">
                <h1>About Us</h1>
                <div className="subsection">
                    <h2 className="subheader">Our Purpose</h2>
                    <p>
                        The Association of Computer Science Undergraduates
                        (ACSU) promotes educational, professional, and social
                        interaction among every undergraduate student interested
                        in computer science. We facilitate student communication
                        with faculty, alumni, and corporate representatives to
                        enhance the undergraduate experience in computer
                        science.
                    </p>
                    <br></br>
                    <p>
                        ACSU is Cornell's chapter of the Association for
                        Computing Machinery (ACM). We receive support from the
                        Department of Computer Science and several corporate
                        sponsors.
                    </p>
                </div>
                <div className="subsection">
                    <h2 className="subheader">What We Do</h2>
                    <Roles />
                </div>
            </div>
            {/* <hr></hr> */}
            <div className="section">
                <h1>Featured Articles</h1>
                <Events />
            </div>
        </div>
    );
}

export default Home;
