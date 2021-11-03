import React, {Component, Fragment} from "react";
import Foreword from "../Pages/Foreword"
import FAQ from "../Pages/FAQ"
import Courses from "../Pages/Courses"
import Clubs from "../Pages/Clubs"
import Research from "../Pages/Research"
import Graduate from "../Pages/Graduate"
import Anecdotes from "../Pages/Anecdotes"

class Header extends Component{
    constructor(props){
        super(props);
    }
    
    render(){
    let heading = null;
    const current = this.props.current;
    switch(current){
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
    }
    return(
        <div class="Header">
            <h1>{heading}</h1>
        </div>
    )
    }
}

export default Header;