import React from "react";
import "./Home.css";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Card from "./Card.jsx";
import Roles from "./Roles.jsx";

function GridItem(props) {
    return (
        // From 0 to 600px wide (smart-phones), I take up 11/12 columns
        // From 600-690px wide (tablets), I take up 9 out of 12 columns
        // From 960px wide and above, I take up 8/12 of the device
        <Grid container item xs={11} sm={9} md={8}>
            <ol className="section-list">
                {React.Children.map(props.children, (dom) => (
                    <li>{dom}</li>
                ))}
            </ol>
        </Grid>
    );
}

function GridDivider() {
    // TODO: Fix this
    return <Divider />;
}

function Home() {
    return (
        <div>
            <Grid
                container
                spacing={1}
                direction="column"
                justify="center"
                alignItems="center">
                {/* Typing stuff here */}
                <GridDivider />
                <GridItem className="section">
                    <h1>About Us</h1>
                    <h2>Our Purpose</h2>
                    <p>
                        The Association of Computer Science Undergraduates
                        (ACSU) promotes educational, professional, and social
                        interaction among every undergraduate student interested
                        in computer science. We facilitate student communication
                        with faculty, alumni, and corporate representatives to
                        enhance the undergraduate experience in computer
                        science.
                    </p>
                    <p>
                        ACSU is Cornell's chapter of the Association for
                        Computing Machinery (ACM). We receive support from the
                        Department of Computer Science and several corporate
                        sponsors.
                    </p>
                    <h2>What We Do</h2>
                    <Roles />
                </GridItem>
                <GridDivider />
                <GridItem className="section">
                    <h1>Upcoming Events</h1>
                    <Card></Card>
                    <Card></Card>
                    <Card></Card>
                </GridItem>
            </Grid>
        </div>
    );
}

export default Home;
