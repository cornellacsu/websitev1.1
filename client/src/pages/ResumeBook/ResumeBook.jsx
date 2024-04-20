import checkPassword from './Database.jsx';
import React, { useState } from "react";
import "./ResumeBook.css";
import gates_hall from "./gates_hall.png";
import TextField from "@mui/material/TextField";
import Button from '@mui/material/Button';
import LockIcon from "@mui/icons-material/Lock";

function ResumeBook() {
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const [accessGranted, setAccessGranted] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleUserChange = (event) => {
    setUser(event.target.value);
  };

  async function handleLogin(user, password) {
    const valid = await checkPassword(user, password)
    if (valid) {
      setAccessGranted(true)
    }
    else setAccessGranted(false)
  }

  return (
    <>
      <img src={gates_hall} alt="Gates hall" className="image" />
      <div className="img-container">
        <h3>Association of Computer Science Undergraduates</h3>
        <h1>Resume Book Database</h1>
        <LockIcon />
        <TextField
          id="outlined-basic"
          placeholder="Username"
          variant="standard"
          className="passwordfield"
          value={user}
          onChange={handleUserChange}
        />
        <TextField
          id="outlined-basic"
          placeholder="Password"
          variant="standard"
          type="password"
          className="passwordfield"
          value={password}
          onChange={handlePasswordChange}
        />

        <Button variant="outlined" color="primary" onClick={() => handleLogin(user, password)}>Login</Button>
        {accessGranted && <h2>Welcome, ACSU Sponsor!</h2>}
        {!accessGranted && <h2>This page is only accessible to ACSU Sponsors.</h2>}
      </div>
    </>
  );
}

export default ResumeBook;
