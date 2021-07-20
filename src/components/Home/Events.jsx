import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { CardMedia, CardActions } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import "./Events.css";

// const useStyles = makeStyles({
//     root: {
//         minWidth: 275,
//     },
//     media: {
//         minHeight: 400,
//     },
// });

const EventCard = (imgName, link) => (
    <Card className="event-card" variant="outlined">
        <CardMedia
            className="media"
            image={`/static/articles/${imgName}.png`}
            title="Contemplative Reptile"
        />
        <CardActions>
            <Button size="small" onClick={() => window.open(link, "_blank")}>
                Learn More
            </Button>
        </CardActions>
    </Card>
);

// Add new articles here -- add image named after the published date
const articles = [
    {
        date: "04-16-21",
        link: "https://cis.cornell.edu/cloud-optimization-startup-secures-5-million-seed-funding",
    },
    {
        date: "05-03-21",
        link: "https://cis.cornell.edu/info-sci-phd-launches-accelerator-elevate-black-startup-founders",
    },
    {
        date: "05-26-21",
        link: "https://cis.cornell.edu/grant-accelerate-ai-materials-discovery-and-design",
    },
    {
        date: "06-17-21",
        link: "https://cis.cornell.edu/zhang-receives-cornell-china-center-grant-support-joint-research-china",
    },
    {
        date: "06-17-21-2",
        link: "https://cis.cornell.edu/info-sci-research-team-receives-cornell-atkinson-grant-expand-repertoire-community-led-climate",
    },
    {
        date: "06-18-21",
        link: "https://cis.cornell.edu/mental-health-helplines-need-human-centered-solutions",
    },
    {
        date: "06-21-21",
        link: "https://cis.cornell.edu/kilian-weinberger-finalist-blavatnik-foundation-and-new-york-academy-sciences-national-award-young",
    },
    {
        date: "06-21-21-2",
        link: "https://cis.cornell.edu/kizilcec-testing-ai-fairness-predicting-college-dropout-rate",
    },
    {
        date: "06-22-21",
        link: "https://cis.cornell.edu/gomes-receives-cornell-atkinson-grant-study-amazonian-aquaculture",
    },
    {
        date: "07-06-21",
        link: "https://cis.cornell.edu/machine-learning-tool-sorts-nuances-quantum-data",
    },
    {
        date: "07-09-21",
        link: "https://cis.cornell.edu/nsf-funds-work-flagging-bad-online-behavior",
    },
    {
        date: "07-19-21",
        link: "https://cis.cornell.edu/info-scis-aspen-russell-publishes-piece-tech-remote-work-and-equity",
    },
];

export default function EventsScroll() {
    return (
        <div className="scrolling-wrapper-flexbox">
            {articles
                .reverse()
                .map((article) => EventCard(article.date, article.link))}
        </div>
    );
}
