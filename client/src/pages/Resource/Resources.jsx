import React, { Component } from "react";
import "./Resources/CSS/Resources.css";
import Header from "./Resources/Components/Header";
import Section from "./Resources/Components/Section";
import SideBar from "./Resources/Components/SideBar";

// TODO: completely update sidebar to have better/safer routing

class Resources extends Component {
    constructor(props) {
        super(props);
        this.state = {
            current: 0,
        };
        this.changeSection = this.changeSection.bind(this);
        this.checkSection = this.checkSection.bind(this);
    }

    changeSection(index) {
        if (this.state.current !== index) {
            window.scrollTo(0, 0);
            this.setState({ current: index });
        } else if (this.state.current === index) {
            window.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    }

    checkSection(index) {
        if (this.state.current === index) {
            return "#B01C33";
        }
    }

    render() {
        return (
            <div className="Resources-Page">
                <div className="Resources-Page-Header">
                    <h1 className="font-weight-bold">Resources</h1>
                    <h5>Information and guides for CS majors at Cornell</h5>
                </div>
                <div className="Body">
                    <div className="Header">
                        <Header current={this.state.current} />
                    </div>
                    <div className="SideBarC Column">
                        <SideBar
                            current={this.state.current}
                            changeSection={this.changeSection}
                            checkSection={this.checkSection}
                        />
                    </div>
                    <div className="SectionC Column">
                        <Section current={this.state.current} />
                    </div>
                </div>
            </div>
        );
    }
}

export default Resources;
