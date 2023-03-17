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
      }}
    >
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
      onClick={() => window.open(link, "_blank")}
    >
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
    </MaterialCard>
  );
}

// TODO: write a script to update automatically.
// Add new articles here -- add image named after the published date
const articles = [
    {
        date: "03-08-23",
        link: "https://cis.cornell.edu/ai-or-human-written-language-assumptions-mislead",
    },
    {
        date: "03-06-23",
        link: "https://cis.cornell.edu/trummer-and-zhang-receive-nsf-career-awards",
    },
    {
        date: "03-03-23",
        link: "https://cis.cornell.edu/cornell-bowers-cis-expands-summer-research-program-all-majors",
    },
    {
        date: "03-01-23",
        link: "https://cis.cornell.edu/kay-zhang-%E2%80%9822-charting-course-success",
    },
    {
        date: "02-27-23",
        link: "https://cis.cornell.edu/bowers-cis-new-majors-welcome-draws-200-plus-future-innovators",
    },
    {
        date: "02-24-23",
        link: "https://cis.cornell.edu/basu-bhattacharjee-receive-nsf-early-career-awards",
    },
    {
        date: "02-21-23",
        link: "https://cis.cornell.edu/national-society-black-engineers-thrives-cornell",
    },
    {
        date: "02-17-23",
        link: "https://cis.cornell.edu/chattopadhyay-tan-phd-%E2%80%9916-win-sloan-research-fellowships",
    },
    {
        date: "02-16-23",
        link: "https://cis.cornell.edu/sengers-named-chi-academy",
    },
    {
    date: "02-16-23-2",
    link: "https://cis.cornell.edu/chattopadhyay-tan-phd-’16-win-sloan-research-fellowships",
    },
    {
        date: "02-15-23",
        link: "https://cis.cornell.edu/human-computer-interaction-scholar-receives-societal-impact-award",
    },
    {
        date: "02-14-23",
        link: "https://cis.cornell.edu/regret-being-hostile-online-ai-tool-guides-users-away-vitriol",
    },
    {
        date: "02-10-23",
        link: "https://cis.cornell.edu/same-race-reviews-reduce-inequality-airbnb-bookings",
    }

];

const getItems = () => articles;

export default function EventsScroll() {
  const [items] = useState(getItems);
  return (
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {items.map((article) => {
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
