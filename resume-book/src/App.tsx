"use client";

import { useState, useEffect } from "react";
import type { FormEvent } from "react";
import {
  Box,
  Button,
  Container,
  Typography,
  TextField,
  Grid,
  InputAdornment,
  Stack,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import FilterBar from "./components/FilterBar.js";
import ResumeCard from "./components/ResumeCard.js";

const SHEET_URL = import.meta.env.VITE_RESUME_API_URL || "";
const DERIVED_LOGIN_URL =
  SHEET_URL && /\/resumes\/?$/.test(SHEET_URL)
    ? SHEET_URL.replace(/\/resumes\/?$/, "/login")
    : "";
const LOGIN_URL = import.meta.env.VITE_RESUME_LOGIN_URL || DERIVED_LOGIN_URL;
const TOKEN_STORAGE_KEY = "resume_book_token";

interface ResumeData {
  id: number;
  name: string;
  email: string;
  major: string;
  careerInterests: string;
  graduationYear: number;
  resumeUrl: string;
}

export default function App() {
  const [yearsFilter, setYearsFilter] = useState<string[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [resumes, setResumes] = useState<ResumeData[]>([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);
  const [token, setToken] = useState(() => {
    if (typeof window === "undefined") {
      return "";
    }

    return window.localStorage.getItem(TOKEN_STORAGE_KEY) ?? "";
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      setResumes([]);
      setErrorMessage("");
      setLoading(false);
      return;
    }

    const loadResumes = async () => {
      setLoading(true);
      try {
        const res = await fetch(SHEET_URL, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        if (res.status === 401) {
          window.localStorage.removeItem(TOKEN_STORAGE_KEY);
          setToken("");
          setLoginError("Session expired. Please sign in again.");
          setErrorMessage("Please sign in to view the resume list.");
          setResumes([]);
          return;
        }

        if (!res.ok) {
          const errorBody = await res.text();
          throw new Error(
            `Request to resume backend failed with ${res.status}: ${errorBody}`
          );
        }

        const data = await res.json();

        const formatted = data
          .filter(
            (row: any) =>
              row["Public Resume Link"] &&
              row["Public Resume Link"].trim() !== ""
          )
          .map((row: any, index: number) => ({
            id: index,
            name: row["Full Name"],
            email: row["Email (netid)"],
            major: row["Major"],
            careerInterests: row["Career Interests"],
            graduationYear: Number.parseInt(row["Graduation Year"]),
            resumeUrl: row["Public Resume Link"],
          }));

        setResumes(formatted);
        setErrorMessage("");
      } catch (err) {
        console.error("Failed to fetch sheet data:", err);
        setErrorMessage(
          "We couldn't retrieve the resume list right now. Please try again later."
        );
        setResumes([]);
      } finally {
        setLoading(false);
      }
    };

    loadResumes();
  }, [token]);

  const handleLogin = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsLoggingIn(true);
    setLoginError("");

    try {
      const res = await fetch(LOGIN_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (!res.ok) {
        const errorBody = await res.json().catch(() => ({}));
        const message = errorBody.error || "Login failed. Please try again.";
        throw new Error(message);
      }

      const data = await res.json();
      if (!data?.token) {
        throw new Error("Login response missing token.");
      }

      window.localStorage.setItem(TOKEN_STORAGE_KEY, data.token);
      setToken(data.token);
      setPassword("");
      setErrorMessage("");
    } catch (err) {
      console.error("Login failed:", err);
      setLoginError(
        err instanceof Error ? err.message : "Login failed. Please try again."
      );
    } finally {
      setIsLoggingIn(false);
    }
  };

  const handleLogout = () => {
    window.localStorage.removeItem(TOKEN_STORAGE_KEY);
    setToken("");
    setPassword("");
    setLoginError("");
    setErrorMessage("");
  };

  const filteredResumes = resumes.filter((resume) => {
    const matchesYears =
      yearsFilter.length === 0 ||
      yearsFilter.includes(resume.graduationYear.toString());
    const matchesSearch =
      searchQuery === "" ||
      resume.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resume.major.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resume.careerInterests
        .toLowerCase()
        .includes(searchQuery.toLowerCase()) ||
      resume.email.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesYears && matchesSearch;
  });

  const loginMessage = loginError || errorMessage;

  if (!token) {
    return (
      <Box
        sx={{
          minHeight: "100vh",
          background:
            "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%)",
          py: 8,
          display: "flex",
          alignItems: "center",
        }}
      >
        <Container maxWidth="sm">
          <Box
            component="form"
            onSubmit={handleLogin}
            sx={{
              backgroundColor: "rgba(255, 255, 255, 0.04)",
              border: "1px solid rgba(255, 255, 255, 0.08)",
              borderRadius: "16px",
              p: 4,
              boxShadow: "0 20px 60px rgba(0, 0, 0, 0.35)",
            }}
          >
            <Typography
              variant="h4"
              sx={{
                fontWeight: 800,
                textAlign: "center",
                background:
                  "linear-gradient(135deg, #510b16ff, #b81c34, #510b16ff);",
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 1,
              }}
            >
              ACSU Resume Book
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#B5BAC1", textAlign: "center", mb: 3 }}
            >
              Enter the password to continue.
            </Typography>
            <TextField
              fullWidth
              type="password"
              autoComplete="current-password"
              label="Password"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.2s",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    borderColor: "rgba(255, 255, 255, 0.15)",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "#b81c34",
                    boxShadow: "0 0 0 3px rgba(184, 28, 52, 0.1)",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  color: "#FFFFFF",
                },
                "& .MuiInputLabel-root": {
                  color: "#B5BAC1",
                },
              }}
            />
            {loginMessage ? (
              <Typography
                variant="body2"
                sx={{ color: "#d91c46", mt: 2 }}
              >
                {loginMessage}
              </Typography>
            ) : null}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoggingIn || password.trim() === ""}
              sx={{
                mt: 3,
                background:
                  "linear-gradient(135deg, #b81c34 0%, #d91c46 100%)",
                fontWeight: 700,
                textTransform: "none",
                "&:hover": {
                  background:
                    "linear-gradient(135deg, #a5162c 0%, #c0183f 100%)",
                },
              }}
            >
              {isLoggingIn ? "Signing in..." : "Sign in"}
            </Button>
          </Box>
        </Container>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0a0a0a 0%, #1a1a1a 25%, #0f0f0f 50%, #1a1a1a 75%, #0a0a0a 100%)",
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 2 }}>
          <Button
            variant="text"
            onClick={handleLogout}
            sx={{
              color: "#B5BAC1",
              textTransform: "none",
              fontWeight: 600,
              "&:hover": {
                color: "#FFFFFF",
              },
            }}
          >
            Sign out
          </Button>
        </Box>
        {/* Header Section */}
        <Box sx={{ mb: 8, textAlign: "center" }}>
          <Typography
            variant="h2"
            sx={{
              fontWeight: 800,
              background:
                "linear-gradient(135deg, #510b16ff, #b81c34, #510b16ff);",
              backgroundClip: "text",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              mb: 2,
              letterSpacing: "-0.02em",
            }}
          >
            ACSU Resume Book
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: "#B5BAC1",
              fontSize: "1.1rem",
              maxWidth: "600px",
              mx: "auto",
            }}
          >
            Discover talented Cornellians and support their future professional
            careers
          </Typography>
        </Box>

        {/* Filter Section */}
        <Box sx={{ mb: 6 }}>
          <Stack spacing={2}>
            {/* Search Bar */}
            <TextField
              fullWidth
              placeholder="Search by name, major, career interests, or email..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchIcon sx={{ color: "#949BA4", mr: 1 }} />
                  </InputAdornment>
                ),
              }}
              sx={{
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                  borderRadius: "12px",
                  border: "1px solid rgba(255, 255, 255, 0.1)",
                  transition: "all 0.2s",
                  "&:hover": {
                    backgroundColor: "rgba(255, 255, 255, 0.08)",
                    borderColor: "rgba(255, 255, 255, 0.15)",
                  },
                  "&.Mui-focused": {
                    backgroundColor: "rgba(255, 255, 255, 0.1)",
                    borderColor: "#b81c34",
                    boxShadow: "0 0 0 3px rgba(184, 28, 52, 0.1)",
                  },
                },
                "& .MuiOutlinedInput-input": {
                  color: "#FFFFFF",
                  "&::placeholder": {
                    color: "#949BA4",
                    opacity: 1,
                  },
                },
              }}
            />

            {/* Year Filter */}
            <FilterBar
              yearsFilter={yearsFilter}
              setYearsFilter={setYearsFilter}
            />
          </Stack>
        </Box>

        {/* Resumes Grid */}
        {loading ? (
          <Box
            sx={{
              textAlign: "center",
              py: 8,
            }}
          >
            <Typography variant="h6" sx={{ color: "#949BA4" }}>
              Loading resumes...
            </Typography>
          </Box>
        ) : filteredResumes.length === 0 ? (
          <Box
            sx={{
              textAlign: "center",
              py: 8,
            }}
          >
            <Typography variant="h6" sx={{ color: "#949BA4" }}>
              {errorMessage || "No resumes found. Try adjusting your filters."}
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {filteredResumes.map((resume) => (
              <Grid key={resume.id}>
                <ResumeCard resume={resume} />
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
}
