/*
import React from "react";

function Hero() {
  return (
    <div className="bg-zinc-900 text-zinc-100 min-h-screen px-4 py-6">
      <div className="bg-zinc-800 p-6 rounded-xl shadow-md">
        <h1 className="text-3xl font-bold text-emerald-400">TypeMaster</h1>
        <p className="text-zinc-400 mt-2">
          Sharpen your skills. Level up your typing game.
        </p>
      </div>
    </div>
  );
}

export default Hero;
*/

"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import DifficultySelect from "./DifficultySelect";
import ScoreCard from "./ScoreCard";
import ThemeToggle from "./ThemeToggle";

export default function HomePage() {
  const [bestScore, setBestScore] = useState<number | null>(null);
  const [bestWPM, setBestWPM] = useState<number | null>(null);

  useEffect(() => {
    const score = localStorage.getItem("bestScore");
    const wpm = localStorage.getItem("bestWPM");
    if (score) setBestScore(Number(score));
    if (wpm) setBestWPM(Number(wpm));
  }, []);

  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center relative px-4">
      {/* Optional theme toggle */}
      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-blue-400">TypeMaster</h1>
        <p className="text-lg text-gray-300">
          Test your speed. Train your brain.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <Link href="/game">
            <button className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl text-lg font-semibold transition cursor-pointer">
              Start Game
            </button>
          </Link>
          <Link href="/progress">
            <button className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-xl text-lg font-semibold transition cursor-pointer">
              View Progress
            </button>
          </Link>
        </div>

        {/* Difficulty select */}
        <DifficultySelect />

        {/* Score display */}
        <ScoreCard score={bestScore} wpm={bestWPM} />
      </div>
    </main>
  );
}
