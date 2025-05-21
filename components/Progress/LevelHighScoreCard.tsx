// LevelHighScoreCard.tsx
"use client";

import React from "react";

export default function LevelHighScoreCard({
  level,
  highScore,
}: {
  level: number;
  highScore: number;
}) {
  return (
    <div className="bg-white/5 rounded-2xl p-4 shadow-md w-full flex justify-between items-center">
      <div>
        <h3 className="text-lg font-semibold">Current Level</h3>
        <p className="text-2xl text-green-400">{level}</p>
      </div>
      <div>
        <h3 className="text-lg font-semibold">High Score</h3>
        <p className="text-2xl text-yellow-400">{highScore}</p>
      </div>
    </div>
  );
}
