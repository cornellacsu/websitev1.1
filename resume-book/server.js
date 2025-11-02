import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = process.env.PORT ?? 3001;

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SCRIPT_URL ??
  "https://script.google.com/macros/s/AKfycbw-75KFH_2NxOKr_1HtRlh-vmCgXFSEZ5pT5QrY2V9cCsDIsgOqVboqn8Yrc-NH4CZY/exec";

// Proxy endpoint
app.get("/resumes", async (req, res) => {
  let response;

  try {
    response = await fetch(GOOGLE_SCRIPT_URL);

    if (!response.ok) {
      const errorBody = await response.text();
      console.error(
        "Google Script responded with",
        response.status,
        errorBody
      );

      return res.status(502).json({
        error: "Upstream service unavailable",
        status: response.status,
      });
    }

    const data = await response.json();

    res.json(data); 
  } catch (error) {
    console.error("Error fetching from Google Script:", error);

    if (response) {
      console.error("Last response status:", response.status);
    }

    res.status(502).json({ error: "Failed to fetch data" });
  }
});

app.listen(PORT, "127.0.0.1", () => {
  console.log(`Backend running at http://localhost:${PORT}`);
});