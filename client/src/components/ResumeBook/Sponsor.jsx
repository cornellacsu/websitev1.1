import React from "react";
import { Fade } from "react-awesome-reveal";
import "./ResumeBook.css"
import GetStarted from "./GetStarted";

function Sponsor() {
  return (
    <Fade delay={500}>
      <div>
        <section>
          <h1 className="font-weight-light">Resume Book</h1>
          <div className="Summary">
            <p>
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

export default Sponsor