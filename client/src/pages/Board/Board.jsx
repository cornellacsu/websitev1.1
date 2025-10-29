import React, { useState, useEffect } from "react";
import "./Board.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItemText from "@mui/material/ListItemText";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions, ListItemButton } from "@mui/material";
import { Fade } from "react-awesome-reveal";
import officerJson from "../../data/officers2526.json";

// TODO: Add in officer pictures that are missing
function Board() {
  const [pageName, setPageName] = useState("Eboard");
  const [officers, setOfficers] = useState([]);
  const [allImages, setAllImages] = useState({});

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
      name: "Faculty",
    },
  ];

  const loadOfficerData = (json, teamName) => {
    const officers = json.officers.filter((person) => {
      return person ? person.team === teamName : null;
    });
    return officers;
  };

  const getAllImagePaths = (officers) => {
    const images = {};
    officers.forEach((person) => {
      images[person.img] =
        `${process.env.PUBLIC_URL}/img/team/2025-2026/${person.img}`;
    });
    return images;
  };

  const officerCard = (person) => {
    return (
      <Card sx={{ width: 300 }} key={person.name}>
        <CardActionArea href={person.link}>
          <CardMedia
            component="img"
            height="250"
            image={allImages[person.img]}
            alt={person.img}
            className="Board-card-img"
          />
        </CardActionArea>
        <CardContent className="Board-text-center">
          <Typography gutterBottom variant="h5" component="div">
            {person.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {person.position}
          </Typography>
        </CardContent>
        <CardActions>
          <a
            href={"mailto:" + person.email + "@cornell.edu"}
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              className="Board-card-icon"
              src={`${process.env.PUBLIC_URL}/img/email.png`}
              alt="mailto"
            />
          </a>
        </CardActions>
      </Card>
    );
  };

  useEffect(() => {
    const officerData = loadOfficerData(officerJson, pageName);
    setOfficers(officerData);
    const getAllImages = getAllImagePaths(officerData);
    setAllImages(getAllImages);
  }, [pageName]);

  return (
    <div>
      <h1 className="Board-text-center">{pageName}</h1>
      <div className="Board">
        <List
          sx={{ maxWidth: 160 }}
          className="pl-2"
          anchor="left"
          variant="permanent"
        >
          {sidebarElts.map((elt) => (
            <ListItemButton key={elt.name} onClick={() => setName(elt.name)}>
              <ListItemText className="" primary={elt.name} />
            </ListItemButton>
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
            {officers.map((person, idx) => (
              <Grid
                item
                key={`${person.name || "unknown"}-${person.position || "role"}-${idx}`}
              >
                <Fade triggerOnce delay={idx * 100}>
                  {officerCard(person)}
                </Fade>
              </Grid>
            ))}
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default Board;
