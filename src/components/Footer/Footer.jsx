import React from "react";
import copyright from "./copyright.svg";
import youtube from "./youtube.svg";
import facebook from "./facebook.svg";
import instagram from "./instagram.svg";
import "./Footer.css";
import { Flex, Box } from "reflexbox";

function Footer() {
    return (
        <footer className="footer-section" justifyContent="center">
            <div className="sm-handles">
                <Flex flexWrap="wrap">
                    <Box width={[1 / 3]} p={2}>
                        <div className="icon">
                            <a href="https://www.facebook.com/CornellACSU">
                                <img src={facebook} alt={"fb"}></img>
                            </a>
                        </div>
                    </Box>
                    <Box width={[1 / 3]} p={2}>
                        <div className="icon">
                            <a href="https://www.instagram.com/cornellacsu/">
                                <img src={instagram} alt={"ig"}></img>
                            </a>
                        </div>
                    </Box>
                    <Box width={[1 / 3]} p={2}>
                        <div className="icon">
                            <a href="https://www.youtube.com/channel/UCrL2JCxZi14q_nzuF04TlXQ">
                                <img src={youtube} alt={"yt"}></img>
                            </a>
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
