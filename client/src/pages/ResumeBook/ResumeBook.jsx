import React from "react";
import "./ResumeBook.css";
import gates_hall from "./gates_hall.png"
import TextField from "@mui/material/TextField";
import LockIcon from '@mui/icons-material/Lock';

function ResumeBook() {
  return (
    <div className="container">
      <h3>Association of Computer Science Undergraduates</h3>
      <h1>Resume Book Database</h1>
      <LockIcon />
      <img src={gates_hall} alt="Gates hall" className="image" />
      <TextField id="outlined-basic" placeholder="Password" variant="standard" type="password" className="passwordfield" />
      <h2>This page is only accessible to ACSU Sponsors.</h2>
    </div>
  );
}

export default ResumeBook;
