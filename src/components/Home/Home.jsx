import React from "react";
import "./Home.css";
import Roles from "./Roles.jsx";
import Events from "./Events.jsx";

function Home() {
    return (
        <div className="main">
            <div className="cover"></div>
            <div className="about-us">
                <h1>About Us</h1>
                <h2>Our Purpose</h2>
                <p>
                    The Association of Computer Science Undergraduates (ACSU)
                    promotes educational, professional, and social interaction
                    among every undergraduate student interested in computer
                    science. We facilitate student communication with faculty,
                    alumni, and corporate representatives to enhance the
                    undergraduate experience in computer science.
                </p>
                <p>
                    ACSU is Cornell's chapter of the Association for Computing
                    Machinery (ACM). We receive support from the Department of
                    Computer Science and several corporate sponsors.
                </p>
                <h2>What We Do</h2>
                <Roles />
            </div>
            <div className="events">
                <h1>Upcoming Events</h1>
                <Events />
            </div>
            <div classname="feat-articles">
                <h1>Featured Articles</h1>
                <Events />
            </div>
        </div>
    );
}

export default Home;
