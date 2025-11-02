import React from "react";

export default function ResumeCard({ resume }) {
  // open PDF in new tab when card is clicked
  const handleClick = () => {
    if (resume.resumeUrl) {
      window.open(resume.resumeUrl, "_blank", "noopener,noreferrer");
    }
  };

  return (
    <div
      className="bg-white shadow-md rounded-lg p-4 cursor-pointer hover:shadow-xl transition"
    onClick={() => window.open(resume.resumeUrl, "_blank")}
    >
      <h2 className="font-semibold text-lg">{resume.name}</h2>
    </div>
  );
}