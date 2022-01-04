import React, { Component } from "react";
import Foreword from "../Pages/Foreword";
import FAQ from "../Pages/FAQ";
import Courses from "../Pages/Courses";
import Clubs from "../Pages/Clubs";
import Research from "../Pages/Research";
import Graduate from "../Pages/Graduate";
import Anecdotes from "../Pages/Anecdotes";

class Section extends Component {
    render() {
        let section = null;
        const current = this.props.current;
        switch (current) {
            case 0:
                section = <Foreword />;
                break;
            case 1:
                section = <FAQ />;
                break;
            case 2:
                section = <Courses />;
                break;
            case 3:
                section = <Clubs />;
                break;
            case 4:
                section = <Research />;
                break;
            case 5:
                section = <Graduate />;
                break;
            case 6:
                section = <Anecdotes />;
                break;
            default:
                break;
        }
        return (
            <div class="Section">
                <div>{section}</div>
            </div>
        );
    }
}

export default Section;
