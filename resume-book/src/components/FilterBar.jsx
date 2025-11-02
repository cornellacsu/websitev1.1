import React from "react";

export default function FilterBar({ yearFilter, setYearFilter }) {
  const years = [2026, 2027, 2028, 2029];

  return (
    <div className="flex justify-center gap-4">
      <select
        className="border rounded p-2 shadow"
        value={yearFilter}
        onChange={e => setYearFilter(e.target.value)}
      >
        <option value="">All Years </option>
        {years.map(y => (
          <option key={y} value={y}>{y}</option>
        ))}
      </select>
    </div>
  );
}
