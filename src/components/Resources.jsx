import React, { Component } from "react";
import "./Resources/CSS/Resources.css";
import Section from "./Resources/Components/Section";
import SideBar from "./Resources/Components/SideBar";

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
    if (this.state.current != index) {
      window.scrollTo(0, 0);
      this.setState({ current: index });
    } else if (this.state.current == index) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
  }

  checkSection(index) {
    if (this.state.current == index) {
      return "#B01C33";
    }
  }

  render() {
    return (
      <div>
        <Section current={this.state.current} />
        <SideBar
          current={this.state.current}
          changeSection={this.changeSection}
          checkSection={this.checkSection}
        />
      </div>
    );
  }
}

export default Resources;
