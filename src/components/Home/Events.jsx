import React from "react";
import { useState, useContext } from "react";
import { CardMedia, CardActions } from "@material-ui/core";
import { Card as MaterialCard } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import "./Events.css";

const Arrow = ({ children, disabled, onClick }) => {
    return (
        <button
            className="arrow-button"
            disabled={disabled}
            onClick={onClick}
            style={{
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                right: "1%",
                opacity: disabled ? "0" : "1",
                userSelect: "none",

                // Styling
                backgroundColor: "white",
                border: "none",
            }}>
            {children}
        </button>
    );
};

const LeftArrow = () => {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext);

    return (
        <Arrow disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            <ArrowBackIosIcon />
        </Arrow>
    );
};

const RightArrow = () => {
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext);

    return (
        <Arrow disabled={isLastItemVisible} onClick={() => scrollNext()}>
            <ArrowForwardIosIcon />
        </Arrow>
    );
};

function Card({ itemId, link, imgName }) {
    // const visibility = useContext(VisibilityContext);
    return (
        <MaterialCard
            className="event-card"
            variant="outlined"
            onClick={() => window.open(link, "_blank")}>
            <CardMedia
                className="media"
                image={`/static/articles/${imgName}.png`}
                title="Contemplative Reptile"
            />
            <CardActions>
                <Button
                    size="small"
                    onClick={() => window.open(link, "_blank")}>
                    Learn More
                </Button>
            </CardActions>
        </MaterialCard>
    );
}

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

const getItems = () => articles;

export default function EventsScroll() {
    const [items, setItems] = useState(getItems);
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {items.map((article) => {
                console.log(article);
                const id = article.date;
                return (
                    <Card
                        itemId={id} // NOTE: itemId is required for track items
                        key={id}
                        imgName={article.date}
                        link={article.link}
                    />
                );
            })}
        </ScrollMenu>
    );
}
