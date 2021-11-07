import React, { useState, useEffect } from "react";
import "./Board.css";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { CardActionArea, CardActions } from '@mui/material';
import officerJson from '../../data/officers2122.json';

function Board() {
    const [pageName, setPageName] = useState('Eboard');
    const [officers, setOfficers] = useState([]);
    const [spacing, setSpacing] = useState(3);

    const setName = (name) => {
        setPageName(name)
    };

    const theme = useTheme();

    const screenLarge = useMediaQuery(theme.breakpoints.up('lg'));
    const screenMedium = useMediaQuery(theme.breakpoints.only('md'));
    const screenSmall = useMediaQuery(theme.breakpoints.only('sm'));

    const sidebarElts = [
        {
            name: "Eboard"
        },
        {
            name: "Academic"
        },
        {
            name: "Corporate"
        },
        {
            name: "Graphic Design"
        },
        {
            name: "Social"
        },
        {
            name: "Web Dev"
        },
        {
            name: "Publicity"
        }
    ]

    const loadOfficerData = (json, teamName) => {
        const officers = json.officers.filter(person => {
            return person ? person.team === teamName ||
                (teamName === 'Eboard' && person.eboard) : null;
        });
        return officers;
    };

    const renderOfficers = officers => {
        const officerElts = []
        officers.forEach((elt) => {
            officerElts.push(
                <Card>
                    <CardActionArea>
                        <CardMedia
                            component="img"
                            height="200"
                            image={require("../../img/team/" + elt.img)}
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
                        <a href={"mailto:" + elt.email}>
                            <img className="Board-card-icon" src={require("../../img/email.png")} />
                        </a>
                    </CardActions>
                </Card>
            )
        });
        return officerElts
    };

    const calculateSpacing = () => {
        if (screenSmall) return 6;
        else if (screenMedium) return 4;
        else if (screenLarge) return 3;
    };

    const genGridItems = (officers) => {
        const gridElts = []
        officers.forEach(elt => {
            gridElts.push(<Grid item xs={spacing}>
                {elt}
            </Grid>);
        });
        return gridElts;
    };

    window.addEventListener('resize', () => { setSpacing(calculateSpacing()) });

    useEffect(() => {
        const officerData = loadOfficerData(officerJson, pageName);
        setOfficers(renderOfficers(officerData));
    }, [pageName]);

    return (
        <div>
            <h1>{pageName}</h1>
            <div className="Board">
                <List sx={{ maxWidth: 140 }}
                    className="Box-sidebar" anchor="left" variant="permanent">
                    {sidebarElts.map(elt => (
                        <ListItem button key={elt.name} onClick={() => setName(elt.name)}>
                            <ListItemText className="Board-text-center" primary={elt.name} />
                        </ListItem>
                    ))}
                </List>
                <Box sx={{ flexGrow: 1 }} ml={10} mr={10} className="Board-box">
                    <Grid container spacing={2}>
                        {genGridItems(officers)}
                    </Grid>
                </Box>
            </div>
        </div >
    );
}

export default Board;
