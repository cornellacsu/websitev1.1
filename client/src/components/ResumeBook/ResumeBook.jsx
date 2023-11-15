import React from "react";
import { Fade } from "react-awesome-reveal";
import "./ResumeBook.css"
import GetStarted from "./GetStarted";

function ResumeBook() {
    return (
        <Fade delay={500}>
            <div>
                <section>
                    <h1 className="font-weight-light">Resume Book</h1>
                    <div className="Summary">
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                            sed do eiusmod tempor incididunt ut labore et dolore magna 
                            aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                            ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                            Duis aute irure dolor in reprehenderit in voluptate velit 
                            esse cillum dolore eu fugiat nulla pariatur. Excepteur sint 
                            occaecat cupidatat non proident, sunt in culpa qui officia 
                            deserunt mollit anim id est laborum.
                        </p>
                        <div className="gs-button">
                            <GetStarted />
                        </div>
                    </div>
                </section>
            </div>
        </Fade>
    );
}

export default ResumeBook