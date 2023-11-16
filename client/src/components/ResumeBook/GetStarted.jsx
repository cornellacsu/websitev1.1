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
    const [isSponsor, setIsSponsor] = React.useState(false)
    const [isStudent, setIsStudent] = React.useState(false)
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

    const handleToggleSponsor = () => {
        setIsSponsor(true)
    };

    const handleToggleStudent = () => {
        setIsStudent(true)
    };

    const handleToggleHome = () => {
        setIsSponsor(false)
        setIsStudent(false)
    }
  
    const handleClickOpen = () => {
      setOpen(true);
      handleToggleHome();
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
            <Dialog 
            open={open} 
            onClose={handleClose} 
            maxWidth='md'>
                <DialogContent>
                    {isStudent && (
                        <div>
                            I am a student!
                        </div>
                    )}
                    {isSponsor && (
                        <div style={{width: '400px'}}>
                            <DialogTitle style={{color: '#000000'}}>Please enter your access code to view the Resume Book.</DialogTitle>
                            <div>
                            <TextField
                                autoFocus
                                required
                                margin="dense"
                                id="access-code"
                                label="Access Code"
                                type="text"
                                fullWidth
                                variant="standard"
                                onChange={handleInputChange}
                                />
                            <DialogContentText style={{marginBottom: '15px'}}>
                                Don't have a code? <a href="mailto:acsu@cornell.edu">Email us.</a>
                            </DialogContentText>
                            </div>
                            <DialogActions>
                                <Button onClick={handleToggleHome} style={{fontWeight: 700}}>
                                    Back
                                </Button>
                                <Button onClick={handleClose}
                                    variant="contained"
                                    color="primary"
                                    type="submit"
                                    style={{fontWeight: 700}}>
                                    Submit
                                </Button>
                            </DialogActions>
                        </div>
                    )}
                    {!isStudent && !isSponsor && (
                        <div style={{padding: '50px'}}>
                            <DialogTitle style={{color: '#000000'}}>I am a...</DialogTitle>
                            <div style={{marginTop: '30px'}}>
                                <Button onClick={handleToggleStudent} style={{
                                    fontWeight: 700,
                                    color: '#b01c33',
                                    marginRight: '40px',
                                    fontSize: '1.2rem'
                                    }}>
                                    Student
                                </Button>
                                <Button onClick={handleToggleSponsor} style={{
                                    fontWeight: 700,
                                    color: '#b01c33', 
                                    marginLeft: '40px',
                                    fontSize: '1.2rem'
                                    }}>
                                    Sponsor
                                </Button>
                            </div>
                        </div>
                    )}
                </DialogContent>
            </Dialog>
      </div>
    );
}