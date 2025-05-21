// AchievementsPanel.tsx
"use client";

import React from "react";

interface Props {
  achievements: { label: string; emoji: string }[];
}

export default function AchievementsPanel({ achievements }: Props) {
  return (
    <div className="bg-white/5 rounded-2xl p-4 shadow-md w-full">
      <h3 className="text-lg font-semibold mb-4">Achievements</h3>
      <div className="flex flex-wrap gap-4">
        {achievements.map((ach, index) => (
          <div
            key={index}
            className="flex items-center space-x-2 bg-white/10 px-3 py-2 rounded-lg"
          >
            <span className="text-xl">{ach.emoji}</span>
            <span>{ach.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
