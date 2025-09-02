import React, { useState, useEffect } from "react";
import FilterBar from "./components/FilterBar";
import ResumeCard from "./components/ResumeCard";

// Backend URL serving JSON from Google Sheets
const SHEET_URL = "http://localhost:3001/resumes";

export default function App() {
  const [resumes, setResumes] = useState([]);
  const [yearFilter, setYearFilter] = useState("");

  useEffect(() => {
    fetch(SHEET_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log("Raw data from backend:", data);

        // Only keep rows with a Public Resume Link
        const formatted = data
          .filter(
            (row) =>
              row["Public Resume Link"] &&
              row["Public Resume Link"].trim() !== ""
          )
          .map((row) => ({
            name: row["Full Name"],
            graduationYear: parseInt(row["Graduation Year"]),
            resumeUrl: row["Public Resume Link"],
          }));

        setResumes(formatted);
      })
      .catch((err) =>
        console.error("Failed to fetch sheet data:", err)
      );
  }, []);

  // Filter by graduation year
  const filteredResumes = yearFilter
    ? resumes.filter(
        (r) => r.graduationYear === parseInt(yearFilter)
      )
    : resumes;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-4xl font-bold text-center mb-8">
        ACSU Resume Book
      </h1>

      <FilterBar
        yearFilter={yearFilter}
        setYearFilter={setYearFilter}
      />

      <div className="flex flex-col gap-4 mt-6">
        {filteredResumes.length === 0 ? (
          <p className="text-center text-gray-500">
            No resumes found.
          </p>
        ) : (
          filteredResumes.map((resume, idx) => (
            <ResumeCard key={idx} resume={resume} />
          ))
        )}
      </div>
    </div>
  );
}