import React, { useState, useEffect } from "react";
import "./Board.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import officerJson from "../../data/officers2324.json";

// TODO: Add in officer pictures that are missing
function Board() {
  const [pageName, setPageName] = useState("Eboard");
  const [officers, setOfficers] = useState([]);

  const setName = (name) => {
    setPageName(name);
  };

  const sidebarElts = [
    {
      name: "Eboard",
    },
    {
      name: "Academic",
    },
    {
      name: "Corporate",
    },
    {
      name: "Graphic Design",
    },
    {
      name: "Social",
    },
    {
      name: "Web Dev",
    },
    {
      name: "Publicity",
    },
    {
      name: "Faculty",
    },
  ];

  const loadOfficerData = (json, teamName) => {
    const officers = json.officers.filter((person) => {
      return person
        ? person.team === teamName || (teamName === "Eboard" && person.eboard)
        : null;
    });
    return officers;
  };

  const renderOfficers = (officers) => {
    const officerElts = [];
    officers.forEach((elt) => {
      officerElts.push(
        <Card sx={{ width: 250 }} key={elt.name}>
          <CardActionArea href={elt.link}>
            <CardMedia
              component="img"
              height="200"
              image={
                require("../../img/team/2023-2024/".concat(elt.img)).default
              }
              alt={elt.img}
              className="Board-card-img"
            />
          </CardActionArea>
          <CardContent className="Board-text-center">
            <Typography gutterBottom variant="h5" component="div">
              {elt.name}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {elt.position}
            </Typography>
          </CardContent>
          <CardActions>
            <a
              href={"mailto:" + elt.email + "@cornell.edu"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="Board-card-icon"
                src={require("../../img/email.png").default}
                alt="mailto"
              />
            </a>
          </CardActions>
        </Card>
      );
    });
    return officerElts;
  };

  const genGridItems = (officers) => {
    const gridElts = [];
    let elemCounter = 1;
    officers.forEach((elt) => {
      let uniqueKey = `${elt.name}-${elt.position}`; // establish unique key
      gridElts.push(
        <Grid item key={uniqueKey}>
          <Fade triggerOnce delay={elemCounter * 100}>
            {elt}
          </Fade>
        </Grid>
      );
      elemCounter += 1;
    });
    return gridElts;
  };

  useEffect(() => {
    const officerData = loadOfficerData(officerJson, pageName);
    setOfficers(renderOfficers(officerData));
  }, [pageName]);

  return (
    <div>
      <h1 className="Board-text-center">{pageName}</h1>
      <div className="Board">
        <List
          sx={{ maxWidth: 140 }}
          className="Box-sidebar"
          anchor="left"
          variant="permanent"
        >
          {sidebarElts.map((elt) => (
            <ListItem button key={elt.name} onClick={() => setName(elt.name)}>
              <ListItemText className="Board-text-center" primary={elt.name} />
            </ListItem>
          ))}
        </List>
        <Box sx={{ flexGrow: 1 }} className="Board-box">
          <Grid
            container
            spacing={2}
            m="auto"
            width={{
              xs: 400,
              sm: 700,
              md: 800,
              lg: 1100,
              xl: 1300,
            }}
          >
            {genGridItems(officers)}
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Board;
