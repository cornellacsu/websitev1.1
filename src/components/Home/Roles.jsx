import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import "./Roles.css";
import Typography from "@material-ui/core/Typography";

import Company from "./images/company.svg";
import Education from "./images/education.svg";
import Faculty from "./images/faculty.svg";
import Mentorship from "./images/mentorship.svg";
import Resume from "./images/resume.svg";
import Social from "./images/social.svg";

export default function NestedGrid() {
    function Item(props) {
        return (
            <Card className="Card">
                <CardActionArea className="Card">
                    <div className="Card-media-container">
                        <img
                            className="Card-media"
                            src={props.img}
                            alt={props.header}></img>
                    </div>
                    <div className="Card-divider"></div>
                    <CardContent className="Card-content">
                        <Typography component="h2">{props.header}</Typography>
                    </CardContent>
                </CardActionArea>
            </Card>
        );
    }

    function FormRow1() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Item header="Social Events" img={Social} />
                </Grid>
                <Grid item xs={4}>
                    <Item header="Faculty Events" img={Faculty} />
                </Grid>
                <Grid item xs={4}>
                    <Item header="Educational Events" img={Education} />
                </Grid>
            </React.Fragment>
        );
    }
    function FormRow2() {
        return (
            <React.Fragment>
                <Grid item xs={4}>
                    <Item header="Company Events" img={Company} />
                </Grid>
                <Grid item xs={4}>
                    <Item header="Resume Books" img={Resume} />
                </Grid>
                <Grid item xs={4}>
                    <Item header="Mentorship" img={Mentorship} />
                </Grid>
            </React.Fragment>
        );
    }

    return (
        <div>
            <Grid container spacing={5} justify="center" alignItems="stretch">
                <Grid container item xs={12} spacing={5}>
                    <FormRow1 />
                </Grid>
                <Grid container item xs={12} spacing={5}>
                    <FormRow2 />
                </Grid>
            </Grid>
        </div>
    );
}
