import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { withStyles } from "@material-ui/core/styles";
import { useState } from "react";

export default function JoinUs() {
  const [open, setOpen] = React.useState(false);
  const [formValues, setFormValues] = useState({
    email: "",
    name: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
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
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formValues),
    };
    fetch(
      "https://www.list.cornell.edu/subscribe/subscribe.tml",
      requestOptions
    )
      .then((response) => response.json())
      .then((data) => console.log(data));
  };

  const JoinButton = withStyles({
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

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div>
      <JoinButton
        onClick={() => openInNewTab("https://forms.gle/3zNz5Qad2DX8i39D8")}
      >
        Join Us!
      </JoinButton>
      <Dialog open={open} onClose={handleClose}>
        <form onSubmit={handleSubscribe}>
          <DialogTitle>Subscribe</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Join our mailing list to get notified about relevant opportunities
              (e.g. internships/jobs), our upcoming events, and other events of
              interest in the Cornell Engineering community. Anyone is welcome
              to join at no cost. Just fill in your email below to subscribe!
            </DialogContentText>
            <TextField
              autoFocus
              required
              margin="normal"
              id="email"
              label="Email Address"
              type="email"
              fullWidth
              variant="standard"
              value={formValues.email}
              onChange={handleInputChange}
            />
            <TextField
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              value={formValues.name}
              onChange={handleInputChange}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} style={{ fontWeight: 700 }}>
              Cancel
            </Button>
            <Button
              variant="contained"
              color="primary"
              type="submit"
              style={{ fontWeight: 700 }}
            >
              Subscribe
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
