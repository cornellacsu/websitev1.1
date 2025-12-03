"use client";
import { Box, Button, Stack } from "@mui/material";

const YEAR_OPTIONS = [
  { label: "All Years", value: "" },
  { label: "2029", value: "2029" },
  { label: "2028", value: "2028" },
  { label: "2027", value: "2027" },
  { label: "2026", value: "2026" },
];

interface FilterBarProps {
  yearFilter: string;
  setYearFilter: (value: string) => void;
}

export default function FilterBar({
  yearFilter,
  setYearFilter,
}: FilterBarProps) {
  return (
    <Box>
      <Stack
        direction="row"
        spacing={1}
        sx={{
          flexWrap: "wrap",
          gap: 1,
        }}
      >
        {YEAR_OPTIONS.map((option) => (
          <Button
            key={option.value}
            onClick={() => setYearFilter(option.value)}
            variant={yearFilter === option.value ? "contained" : "outlined"}
            sx={{
              borderRadius: "20px",
              fontWeight: 700,
              textTransform: "none",
              fontSize: "0.9rem",
              py: 1,
              px: 2.5,
              transition: "all 0.2s",
              ...(yearFilter === option.value
                ? {
                    background:
                      "linear-gradient(135deg, #b81c34 0%, #d91c46 100%)",
                    color: "#FFFFFF",
                    border: "none",
                    boxShadow: "0 8px 24px rgba(184, 28, 52, 0.3)",
                  }
                : {
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    color: "#B5BAC1",
                    backgroundColor: "rgba(255, 255, 255, 0.03)",
                    "&:hover": {
                      borderColor: "#b81c34",
                      backgroundColor: "rgba(184, 28, 52, 0.1)",
                    },
                  }),
            }}
          >
            {option.label}
          </Button>
        ))}
      </Stack>
    </Box>
  );
}
