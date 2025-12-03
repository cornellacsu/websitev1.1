import {
  Card,
  CardContent,
  Typography,
  Box,
  Button,
  Avatar,
  Chip,
} from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import EmailIcon from "@mui/icons-material/Email";
import SchoolIcon from "@mui/icons-material/School";
import WorkIcon from "@mui/icons-material/Work";

interface Resume {
  id: number;
  name: string;
  email: string;
  major: string;
  careerInterests: string;
  graduationYear: number;
  resumeUrl: string;
}

interface ResumeCardProps {
  resume: Resume;
}

export default function ResumeCard({ resume }: ResumeCardProps) {
  const interests = resume.careerInterests
    .split(",")
    .map((interest) => interest.trim())
    .filter((interest) => interest.length > 0);
  return (
    <Card
      sx={{
        backgroundColor: "rgba(255, 255, 255, 0.05)",
        border: "1px solid rgba(255, 255, 255, 0.1)",
        borderRadius: "16px",
        height: "100%",
        width: "350px",
        display: "flex",
        flexDirection: "column",
        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        cursor: "pointer",
        "&:hover": {
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          borderColor: "#b81c34",
          transform: "translateY(-8px)",
          boxShadow: "0 20px 60px rgba(184, 28, 52, 0.15)",
        },
      }}
    >
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          gap: 2,
        }}
      >
        {/* Header with Avatar */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            sx={{
              width: 56,
              height: 56,
              background: `linear-gradient(135deg, #b81c34 0%, #d91c46 100%)`,
              fontSize: "1.5rem",
              fontWeight: 700,
            }}
          >
            {resume.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </Avatar>
          <Box>
            <Typography
              variant="h6"
              sx={{
                color: "#FFFFFF",
                fontWeight: 700,
                fontSize: "1rem",
              }}
            >
              {resume.name}
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: "#949BA4",
                fontSize: "0.875rem",
              }}
            >
              Class of {resume.graduationYear}
            </Typography>
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
            <SchoolIcon sx={{ fontSize: "1rem", color: "#b81c34" }} />
            <Typography
              variant="caption"
              sx={{
                color: "#949BA4",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Major
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "#FFFFFF",
              fontWeight: 500,
              fontSize: "0.9rem",
            }}
          >
            {resume.major}
          </Typography>
        </Box>

        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
            <WorkIcon sx={{ fontSize: "1rem", color: "#b81c34" }} />
            <Typography
              variant="caption"
              sx={{
                color: "#949BA4",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Career Interests
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.75 }}>
            {interests.map((interest, idx) => (
              <Chip
                key={idx}
                label={interest}
                size="small"
                sx={{
                  background:
                    "linear-gradient(135deg, rgba(184, 28, 52, 0.2) 0%, rgba(217, 28, 70, 0.2) 100%)",
                  border: "1px solid rgba(184, 28, 52, 0.4)",
                  color: "#b81c34",
                  fontWeight: 600,
                  fontSize: "0.75rem",
                  height: "24px",
                  "& .MuiChip-label": {
                    padding: "0 8px",
                  },
                }}
              />
            ))}
          </Box>
        </Box>

        <Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 0.5 }}>
            <EmailIcon sx={{ fontSize: "1rem", color: "#b81c34" }} />
            <Typography
              variant="caption"
              sx={{
                color: "#949BA4",
                fontSize: "0.75rem",
                textTransform: "uppercase",
                letterSpacing: "0.05em",
              }}
            >
              Contact
            </Typography>
          </Box>
          <Typography
            variant="body2"
            sx={{
              color: "#B5BAC1",
              fontSize: "0.85rem",
              wordBreak: "break-all",
            }}
          >
            {resume.email}
          </Typography>
        </Box>

        {/* View Resume Button */}
        <Button
          href={resume.resumeUrl}
          target="_blank"
          rel="noopener noreferrer"
          variant="contained"
          endIcon={<ArrowForwardIcon />}
          sx={{
            background:
              "linear-gradient(90deg, #0a0a0a 0%, #6d0f1f 40%, #b01c33 55%, #6d0f1f 70%, #0a0a0a 100%);",
            color: "#FFFFFF",
            fontWeight: 700,
            textTransform: "uppercase",
            fontSize: "0.75rem",
            letterSpacing: "0.05em",
            py: 1.2,
            borderRadius: "8px",
            transition: "all 0.2s",
            mt: "auto",
            "&:hover": {
              // boxShadow: "0 8px 24px rgba(184, 28, 52, 0.3)",
              transform: "translateY(-2px)",
            },
          }}
        >
          View Resume
        </Button>
      </CardContent>
    </Card>
  );
}
