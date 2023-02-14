import React from "react";
import "./Home.css";
import Roles from "./Roles.jsx";
import Events from "./Events.jsx";
import gates from "./images/gates.svg";
import { Fade } from "react-awesome-reveal";

const Landing = (props) => {
    return <div className="gates-logo">{props.children}</div>;
};
const Section = (props) => {
    return <div className="section">{props.children}</div>;
};

function Home() {
    return (
        <div className="main">
            <Landing>
                <Fade triggerOnce delay={1000} style={{ display: "flex" }}>
                    <img className="cover-logo" src={gates} alt="Gates Hall" />
                </Fade>
            </Landing>
            <Section>
                <Fade triggerOnce>
                    <h1>About Us</h1>
                </Fade>
                <div className="subsection">
                    <Fade triggerOnce>
                        <h2>Our Purpose</h2>
                    </Fade>
                    <Fade triggerOnce>
                        <p>
                            The Association of Computer Science Undergraduates
                            (ACSU) promotes educational, professional, and
                            social interaction among every undergraduate student
                            interested in computer science. We facilitate
                            student communication with faculty, alumni, and
                            corporate representatives to enhance the
                            undergraduate experience in computer science.
                        </p>
                    </Fade>
                    <br></br>
                    <Fade triggerOnce>
                        <p>
                            ACSU is Cornell's chapter of the Association for
                            Computing Machinery (ACM). We receive support from
                            the Department of Computer Science and several
                            corporate sponsors.
                        </p>
                    </Fade>
                </div>

                <div className="subsection">
                    <Fade triggerOnce>
                        <h2>What We Do</h2>
                    </Fade>
                    <Roles />
                </div>
            </Section>
            {/* TODO: Update Articles */}
            <Fade triggerOnce>
                <h1>Featured Articles</h1>
                <Events />
            </Fade>
        </div>
    );
}

export default Home;
