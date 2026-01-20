import React, { useState, useEffect } from "react";
import FilterBar from "./components/FilterBar";
import ResumeCard from "./components/ResumeCard";

const SHEET_URL = `${import.meta.env.BASE_URL}api/resumes`;
const LOGIN_URL = `${import.meta.env.BASE_URL}api/login`;
const TOKEN_STORAGE_KEY = "resume_book_token";
export default function App() {
  const [resumes, setResumes] = useState([]);
  const [yearFilter, setYearFilter] = useState("");
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

  useEffect(() => {
    if (!token) {
      setResumes([]);
      setErrorMessage("");
      return;
    }

    // using auth token after successful login, fetch resumes
    const loadResumes = async () => {
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
          return;
        }

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
  }, [token]);

  // use global server password to log in
  const handleLogin = async (event) => {
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
      setLoginError(err.message || "Login failed. Please try again.");
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

  const filteredResumes = yearFilter
    ? resumes.filter(
        (r) => r.graduationYear === parseInt(yearFilter)
      )
    : resumes;

  if (!token) {
    // Resume Book Authentication/Login Page UI
    return (
      <div className="min-h-screen bg-gray-100 p-6 flex items-center justify-center">
        <form
          className="bg-white shadow-md rounded-lg p-6 w-full max-w-md"
          onSubmit={handleLogin}
        >
          <h1 className="text-3xl font-bold text-center mb-2">
            ACSU Resume Book
          </h1>
          <p className="text-sm text-gray-600 text-center">
            Enter the password to continue.
          </p>
          <label className="block mt-6 text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            autoComplete="current-password"
            className="mt-2 w-full rounded border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-gray-400"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
          {loginError ? (
            <p className="text-red-600 text-sm mt-3">{loginError}</p>
          ) : null}
          <button
            type="submit"
            className="mt-6 w-full rounded bg-gray-900 py-2 text-white font-semibold disabled:opacity-60"
            disabled={isLoggingIn || password.trim() === ""}
          >
            {isLoggingIn ? "Signing in..." : "Sign in"}
          </button>
        </form>
      </div>
    );
  }

  
  return (

    // Sign-out Button
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-4xl font-bold">ACSU Resume Book</h1>
        <button
          className="text-sm text-gray-600 hover:text-gray-900 underline"
          onClick={handleLogout}
          type="button"
        >
          Sign out
        </button>
      </div>


    // Resume Filter Button
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
