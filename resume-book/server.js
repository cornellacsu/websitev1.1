import dotenv from "dotenv";
import express from "express";
import fetch from "node-fetch";
import cors from "cors";
import { randomBytes } from "crypto";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));
dotenv.config({ path: join(__dirname, ".env.server") });

const app = express();
const PORT = process.env.PORT ?? 3001;
const PASSWORD = process.env.RESUME_BOOK_PASSWORD ?? "";
const TOKEN_TTL_SECONDS = Number.parseInt(
  process.env.RESUME_BOOK_TOKEN_TTL_SECONDS ?? "86400",
  10
);
const TOKEN_TTL_MS =
  Number.isFinite(TOKEN_TTL_SECONDS) && TOKEN_TTL_SECONDS > 0
    ? TOKEN_TTL_SECONDS * 1000
    : 24 * 60 * 60 * 1000;
const tokens = new Map();

app.use(
  cors({
    origin: "http://localhost:5173", // frontend origin in dev
  })
);
app.use(express.json());

const GOOGLE_SCRIPT_URL =
  process.env.GOOGLE_SCRIPT_URL ??
  "https://script.google.com/macros/s/AKfycbw-75KFH_2NxOKr_1HtRlh-vmCgXFSEZ5pT5QrY2V9cCsDIsgOqVboqn8Yrc-NH4CZY/exec";

const isPasswordConfigured = (res) => {
  if (!PASSWORD) {
    res.status(500).json({ error: "Server is not configured." });
    return false;
  }

  return true;
};

const issueToken = () => randomBytes(32).toString("hex");

const storeToken = (token) => {
  const expiresAt = Date.now() + TOKEN_TTL_MS;
  tokens.set(token, expiresAt);
  return expiresAt;
};

const getBearerToken = (req) => {
  const header = req.get("authorization") ?? "";
  if (!header.startsWith("Bearer ")) {
    return "";
  }

  return header.slice("Bearer ".length).trim();
};

const requireAuth = (req, res, next) => {
  if (!isPasswordConfigured(res)) {
    return;
  }

  const token = getBearerToken(req);
  if (!token) {
    res.status(401).json({ error: "Missing token." });
    return;
  }

  const expiresAt = tokens.get(token);
  if (!expiresAt) {
    res.status(401).json({ error: "Invalid token." });
    return;
  }

  if (Date.now() > expiresAt) {
    tokens.delete(token);
    res.status(401).json({ error: "Token expired." });
    return;
  }

  next();
};

app.post("/login", (req, res) => {
  if (!isPasswordConfigured(res)) {
    return;
  }

  const { password } = req.body ?? {};
  if (typeof password !== "string" || password.trim() === "") {
    res.status(400).json({ error: "Password is required." });
    return;
  }

  if (password !== PASSWORD) {
    res.status(401).json({ error: "Invalid password." });
    return;
  }

  const token = issueToken();
  const expiresAt = storeToken(token);

  res.json({ token, expiresAt });
});

// Proxy endpoint
app.get("/resumes", requireAuth, async (req, res) => {
  let response;

  try {
    response = await fetch(GOOGLE_SCRIPT_URL);

    if (!response.ok) {
      const errorBody = await response.text();
      console.error("Google Script responded with", response.status, errorBody);

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
