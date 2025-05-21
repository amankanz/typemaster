// MilestoneSummary.tsx
"use client";

import React from "react";

interface Props {
  totalWords: number;
  sessionsCompleted: number;
}

export default function MilestoneSummary({
  totalWords,
  sessionsCompleted,
}: Props) {
  return (
    <div className="bg-white/5 rounded-2xl p-4 shadow-md w-full">
      <h3 className="text-lg font-semibold mb-2">Milestones</h3>
      <ul className="list-disc ml-6 space-y-1">
        <li>Typed {totalWords} words</li>
        <li>Completed {sessionsCompleted} sessions</li>
        <li>{totalWords >= 100 && "🏅 Passed 100 words milestone!"}</li>
      </ul>
    </div>
  );
}
