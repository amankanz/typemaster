// ResetProgressButton.tsx
"use client";

import React from "react";

export default function ResetProgressButton({
  onReset,
}: {
  onReset: () => void;
}) {
  return (
    <button
      onClick={onReset}
      className="mt-6 px-6 py-2 bg-red-600 text-white rounded-xl hover:bg-red-700 transition"
    >
      Reset Progress
    </button>
  );
}
