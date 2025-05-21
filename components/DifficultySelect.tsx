/*
"use client";

import { useEffect, useState } from "react";

const difficulties = ["Beginner", "Intermediate", "Pro"];

export default function DifficultySelect() {
  const [selected, setSelected] = useState("Beginner");

  useEffect(() => {
    const saved = localStorage.getItem("difficulty");
    if (saved) setSelected(capitalize(saved));
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const value = e.target.value;
    setSelected(value);
    localStorage.setItem("difficulty", value.toLowerCase()); // ✅ Save lowercase
  };

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

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
*/

"use client";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

const difficulties = ["Beginner", "Intermediate", "Pro"];

export default function DifficultySelect({ value, onChange }: Props) {
  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const val = e.target.value;
    onChange(val);
    localStorage.setItem("difficulty", val.toLowerCase());
  };

  return (
    <div className="mt-4">
      <label
        className={`block text-sm mb-2 ${
          !value ? "text-yellow-400 font-semibold" : "text-gray-400"
        }`}
      >
        Select Difficulty:
      </label>
      <select
        value={value}
        onChange={handleChange}
        className="bg-gray-800 text-white px-4 py-2 rounded-md"
      >
        <option value="">-- Select Difficulty --</option>
        {difficulties.map((diff) => (
          <option key={diff} value={diff}>
            {diff}
          </option>
        ))}
      </select>
    </div>
  );
}
