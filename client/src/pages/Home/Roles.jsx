import React from "react";
import "./Roles.css";

import Company from "./images/company.svg";
import Education from "./images/education.svg";
import Faculty from "./images/faculty.svg";
import Mentorship from "./images/mentorship.png";
import Resume from "./images/resume.svg";
import Social from "./images/social.svg";
import { Fade } from "react-awesome-reveal";

import { Flex, Box } from "reflexbox";

export default function NestedGrid() {
    function Item(props) {
        return (
            <div className="card">
                <div className="card-media-container">
                    <img
                        className="card-media"
                        src={props.img}
                        alt={props.header}></img>
                </div>
                <div className="card-divider"></div>
                <p className="card-description">{props.header}</p>
            </div>
        );
    }
    const w = [1, 1 / 3];
    const FadeBox = (props) => {
        return (
            <Box width={w} p={2}>
                <Fade triggerOnce={true} delay={props.delay} direction="up">
                    {props.children}
                </Fade>
            </Box>
        );
    };
    return (
        <div>
            <Flex flexWrap="wrap">
                <FadeBox delay={0}>
                    <Item header="Social Events" img={Social} />
                </FadeBox>
                <FadeBox delay={100}>
                    <Item header="Faculty Events" img={Faculty} />
                </FadeBox>
                <FadeBox delay={200}>
                    <Item header="Educational Events" img={Education} />
                </FadeBox>
                <FadeBox delay={300}>
                    <Item header="Company Events" img={Company} />
                </FadeBox>
                <FadeBox delay={400}>
                    <Item header="Resume Books" img={Resume} />
                </FadeBox>
                <FadeBox delay={500}>
                    <Item header="Mentorship" img={Mentorship} />
                </FadeBox>
            </Flex>
        </div>
    );
}
