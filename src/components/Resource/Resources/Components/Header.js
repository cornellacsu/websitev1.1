import React, { Component } from "react";

class Header extends Component {
    render() {
        let heading = null;
        const current = this.props.current;
        switch (current) {
            case 0:
                heading = "Foreword";
                break;
            case 1:
                heading = "FAQ";
                break;
            case 2:
                heading = "Courses";
                break;
            case 3:
                heading = "Clubs";
                break;
            case 4:
                heading = "Research";
                break;
            case 5:
                heading = "Graduate";
                break;
            case 6:
                heading = "Anecdotes";
                break;
            default:
                break;
        }
        return (
            <div class="Header">
                <h1>{heading}</h1>
            </div>
        );
    }
}

export default Header;
