import React, { Component } from "react";

class SideBar extends Component {
    render() {
        return (
            <router>
                <div className="SideBar">
                    <a
                        style={{ color: this.props.checkSection(0) }}
                        onClick={() => this.props.changeSection(0)}>
                        Foreword
                    </a>
                    <a
                        style={{ color: this.props.checkSection(1) }}
                        onClick={() => this.props.changeSection(1)}>
                        FAQ
                    </a>
                    <a
                        style={{ color: this.props.checkSection(2) }}
                        onClick={() => this.props.changeSection(2)}>
                        Courses
                    </a>
                    <a
                        style={{ color: this.props.checkSection(3) }}
                        onClick={() => this.props.changeSection(3)}>
                        Clubs
                    </a>
                    <a
                        style={{ color: this.props.checkSection(4) }}
                        onClick={() => this.props.changeSection(4)}>
                        Research
                    </a>
                    <a
                        style={{ color: this.props.checkSection(5) }}
                        onClick={() => this.props.changeSection(5)}>
                        Graduate
                    </a>
                    <a
                        style={{ color: this.props.checkSection(6) }}
                        onClick={() => this.props.changeSection(6)}>
                        Anecdotes
                    </a>
                </div>
            </router>
        );
    }
}

export default SideBar;
