/*
"use client";

import LevelHighScoreCard from "@/components/Progress/LevelHighScoreCard";
import WPMChart from "@/components/Progress/WPMChart";
import AccuracyChart from "@/components/Progress/AccuracyChart";
import AchievementsPanel from "@/components/Progress/AchievementsPanel";
import MilestoneSummary from "@/components/Progress/MilestoneSummary";
import ResetProgressButton from "@/components/Progress/ResetProgressButton";

export default function ProgressPage() {
  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 flex flex-col items-center">
      <div className="w-full max-w-4xl space-y-6">
        <h1 className="text-3xl font-bold text-center mb-4">Your Progress</h1>

        {/* Level and High Score =/}
        <LevelHighScoreCard />

        {/* Charts =/}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <WPMChart />
          <AccuracyChart />
        </div>

        {/* Achievements =/}
        <AchievementsPanel />

        {/* Milestones =/}
        <MilestoneSummary />

        {/* Reset Button =/}
        <div className="flex justify-center">
          <ResetProgressButton />
        </div>
      </div>
    </div>
  );
}
*/

"use client";

import React, { useEffect, useState } from "react";
import LevelHighScoreCard from "@/components/Progress/LevelHighScoreCard";
import WPMChart from "@/components/Progress/WPMChart";
import AccuracyChart from "@/components/Progress/AccuracyChart";
import AchievementsPanel from "@/components/Progress/AchievementsPanel";
import MilestoneSummary from "@/components/Progress/MilestoneSummary";
import ResetProgressButton from "@/components/Progress/ResetProgressButton";

export default function ProgressPage() {
  const [level, setLevel] = useState(1);
  const [highScore, setHighScore] = useState(0);
  const [wpmData, setWpmData] = useState<{ session: string; wpm: number }[]>(
    []
  );
  const [accuracyData, setAccuracyData] = useState<
    { session: string; accuracy: number }[]
  >([]);
  const [achievements, setAchievements] = useState<
    { emoji: string; label: string }[]
  >([]);
  const [totalWords, setTotalWords] = useState(0);
  const [sessionsCompleted, setSessionsCompleted] = useState(0);

  useEffect(() => {
    const statsStr = localStorage.getItem("typingGameStats");

    if (statsStr) {
      try {
        const stats = JSON.parse(statsStr);

        setLevel(stats.level ?? 1);
        setHighScore(stats.highScore ?? 0);
        setWpmData(stats.wpmHistory ?? []);
        setAccuracyData(stats.accuracyHistory ?? []);
        setAchievements(stats.achievements ?? []);
        setTotalWords(stats.totalWords ?? 0);
        setSessionsCompleted(stats.sessionsCompleted ?? 0);
      } catch (error) {
        console.error(
          "Failed to parse typingGameStats from localStorage",
          error
        );
      }
    }
  }, []);

  const handleReset = () => {
    localStorage.removeItem("typingGameStats");
    location.reload();
  };

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center px-4 pt-30 pb-10 gap-6">
      <div className="w-full max-w-4xl space-y-6">
        <LevelHighScoreCard level={level} highScore={highScore} />

        <div className="grid md:grid-cols-2 gap-6">
          <WPMChart data={wpmData} />
          <AccuracyChart data={accuracyData} />
        </div>

        <AchievementsPanel achievements={achievements} />
        <MilestoneSummary
          totalWords={totalWords}
          sessionsCompleted={sessionsCompleted}
        />
        <ResetProgressButton onReset={handleReset} />
      </div>
    </div>
  );
}
