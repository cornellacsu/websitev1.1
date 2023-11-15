import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {withStyles} from "@material-ui/core/styles";
import {useState} from "react";

export default function GetStarted() {
    const [open, setOpen] = React.useState(false);
    const [formValues, setFormValues] = useState({
      email: "",
      name: "",
    });
  
    const handleInputChange = (e) => {
      const {id, value} = e.target;
      setFormValues({
        ...formValues,
        [id]: value,
      });
    };
  
    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
    const handleSubscribe = (e) => {
      e.preventDefault();
      console.log(formValues);
      const requestOptions = {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formValues),
      };
      fetch(
        "https://www.list.cornell.edu/subscribe/subscribe.tml",
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => console.log(data));
    };
  
    const GetStartedButton = withStyles({
      root: {
        boxShadow: "none",
        fontWeight: 700,
        textTransform: "none",
        fontSize: 16,
        padding: "6px 12px",
        border: "1px solid",
        lineHeight: 1.5,
        backgroundColor: "#b01c33",
        color: "white",
        "&:hover": {
          backgroundColor: "#c73046",
          borderColor: "#b01c33",
          boxShadow: "none",
        },
        "&:active": {
          boxShadow: "none",
          backgroundColor: "#b01c33",
          borderColor: "#b01c33",
        },
        "&:focus": {
          boxShadow: "0 0 0 0.2rem rgba(135, 22, 38,.5)",
        },
      },
      label: {
        textTransform: "capitalize",
      },
    })(Button);
  
    return (
      <div>
        <GetStartedButton onClick={handleClickOpen}>
          Get Started
        </GetStartedButton>
        <Dialog open={open} onClose={handleClose}>
          <form onSubmit={handleSubscribe}>
            <DialogTitle style={{marginTop: '30px', color: '#000000'}}>I am a...</DialogTitle>
            <DialogContent>
              <Button onClick={handleClose} style={{fontWeight: 700, margin: '50px', color: '#b01c33', marginRight: '35px', marginTop: '35px'}}>
                Student
              </Button>
              <Button onClick={handleClose} style={{fontWeight: 700, margin: '50px', color: '#b01c33', marginLeft: '35px', marginTop: '35px'}}>
                Sponsor
              </Button>
            </DialogContent>
          </form>
        </Dialog>
      </div>
    );
  }