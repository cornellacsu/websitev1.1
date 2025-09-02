import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 3001;

const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbw-75KFH_2NxOKr_1HtRlh-vmCgXFSEZ5pT5QrY2V9cCsDIsgOqVboqn8Yrc-NH4CZY/exec";

// Allow React dev server to talk to backend
app.use(cors({ origin: "http://localhost:5173" }));

// Proxy endpoint
app.get("/resumes", async (req, res) => {
    try {
        const response = await fetch(GOOGLE_SCRIPT_URL);
        const data = await response.json();

        res.json(data); // send to frontend
    } catch (error) {
        console.error("Response status:", response.status);
        const text = await response.text();
        console.error("Response body:", text);
        console.error("Error fetching from Google Script:", error);
        res.status(500).json({ error: "Failed to fetch data" });
    }
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});