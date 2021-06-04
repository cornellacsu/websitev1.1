import React from "react";
import copyright from "./copyright.svg";
import facebook from "./facebook.svg";
import insta from "./insta.svg";
import youtube from "./youtube.svg";
import "./Footer.css";
import { Flex, Box } from "reflexbox";

function Footer() {
    return (
        <footer className="footer-section">
            <div className="sm-handles">
                <Flex flexWrap="wrap">
                    <Box width={[1 / 3]} p={2}>
                        <div className="icon">
                            <img src={facebook} alt={"fb"}></img>
                        </div>
                    </Box>
                    <Box width={[1 / 3]} p={2}>
                        <div className="icon">
                            <img src={insta} alt={"fb"}></img>
                        </div>
                    </Box>
                    <Box width={[1 / 3]} p={2}>
                        <div className="icon">
                            <img src={youtube} alt={"fb"}></img>
                        </div>
                    </Box>
                </Flex>
            </div>
            <div className="copyright">
                <img src={copyright} alt={"copyright"}></img>
            </div>
        </footer>
    );
}

export default Footer;
