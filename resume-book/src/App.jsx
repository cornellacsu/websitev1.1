import React, { useState, useEffect } from "react";
import FilterBar from "./components/FilterBar";
import ResumeCard from "./components/ResumeCard";

const SHEET_URL = "/api/resumes";
export default function App() {
  const [resumes, setResumes] = useState([]);
  const [yearFilter, setYearFilter] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const loadResumes = async () => {
      try {
        const res = await fetch(SHEET_URL);

        if (!res.ok) {
          const errorBody = await res.text();
          throw new Error(
            `Request to resume backend failed with ${res.status}: ${errorBody}`,
          );
        }

        const data = await res.json();

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
        setErrorMessage("");
      } catch (err) {
        console.error("Failed to fetch sheet data:", err);
        setErrorMessage(
          "We couldn't retrieve the resume list right now. Please try again later.",
        );
        setResumes([]);
      }
    };

    loadResumes();
  }, []);

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
          <p
            className={`text-center ${
              errorMessage ? "text-red-600" : "text-gray-500"
            }`}
          >
            {errorMessage || "No resumes found."}
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
