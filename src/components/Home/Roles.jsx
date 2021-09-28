import React from "react";
import "./Roles.css";

import Company from "./images/company.svg";
import Education from "./images/education.svg";
import Faculty from "./images/faculty.svg";
import Mentorship from "./images/mentorship.png";
import Resume from "./images/resume.svg";
import Social from "./images/social.svg";

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
    return (
        <div>
            <Flex flexWrap="wrap">
                <Box width={w} p={2}>
                    <Item header="Social Events" img={Social} />
                </Box>
                <Box width={w} p={2}>
                    <Item header="Faculty Events" img={Faculty} />
                </Box>
                <Box width={w} p={2}>
                    <Item header="Educational Events" img={Education} />
                </Box>
                <Box width={w} p={2}>
                    <Item header="Company Events" img={Company} />
                </Box>
                <Box width={w} p={2}>
                    <Item header="Resume Books" img={Resume} />
                </Box>
                <Box width={w} p={2}>
                    <Item header="Mentorship" img={Mentorship} />
                </Box>
            </Flex>
        </div>
    );
}
