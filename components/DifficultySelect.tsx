"use client";

import { useEffect, useState } from "react";

const difficulties = ["Beginner", "Intermediate", "Pro"];

export default function DifficultySelect() {
  const [selected, setSelected] = useState("Beginner");

  useEffect(() => {
    const saved = localStorage.getItem("difficulty");
    if (saved) setSelected(saved);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelected(value);
    localStorage.setItem("difficulty", value);
  };

  return (
    <div className="mt-4">
      <label className="block text-sm mb-2 text-gray-400">
        Select Difficulty:
      </label>
      <select
        value={selected}
        onChange={handleChange}
        className="bg-gray-800 text-white px-4 py-2 rounded-md"
      >
        {difficulties.map((diff) => (
          <option key={diff} value={diff}>
            {diff}
          </option>
        ))}
      </select>
    </div>
  );
}
