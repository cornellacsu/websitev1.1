import React from "react";
import FlipBook from "./FlipBook.jsx";

const ResumeBook = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <FlipBook pdfUrl= "/resumes/Sample-Resumes.pdf" />
    </div>
  );
};

export default ResumeBook;

/* pdfUrl="/public/resumes/Composición 2.2.pdf" */