"use client";

import { useState, useEffect } from "react";
import {
  Box,
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

const SHEET_URL = import.meta.env.VITE_RESUME_API_URL;

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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadResumes = async () => {
      try {
        const res = await fetch(SHEET_URL!);

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

    if (SHEET_URL) {
      loadResumes();
    }
  }, []);

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
