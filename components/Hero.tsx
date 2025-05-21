/*
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import DifficultySelect from "./DifficultySelect";
import ScoreCard from "./ScoreCard";

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
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-blue-400">TypeMaster</h1>
        <p className="text-lg text-gray-300">
          Test your speed. Train your brain.
        </p>

        {/* Buttons =/}
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

        {/* Difficulty select =/}
        <DifficultySelect />

        {/* Score display =/}
        <ScoreCard score={bestScore} wpm={bestWPM} />
      </div>
    </main>
  );
}
*/

/*
"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import DifficultySelect from "./DifficultySelect";
import ScoreCard from "./ScoreCard";

export default function HomePage() {
  const [bestScore, setBestScore] = useState<number | null>(null);
  const [bestWPM, setBestWPM] = useState<number | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const score = localStorage.getItem("bestScore");
    const wpm = localStorage.getItem("bestWPM");
    const savedDifficulty = localStorage.getItem("difficulty");
    if (score) setBestScore(Number(score));
    if (wpm) setBestWPM(Number(wpm));
    if (savedDifficulty) {
      setSelectedDifficulty(capitalize(savedDifficulty));
    }
  }, []);

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const handleStartClick = () => {
    if (!selectedDifficulty) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 2500);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white flex items-center justify-center relative px-4">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-blue-400">TypeMaster</h1>
        <p className="text-lg text-gray-300">
          Test your speed. Train your brain.
        </p>

        {/* Buttons =/}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <button
            onClick={handleStartClick}
            disabled={!selectedDifficulty}
            className={`px-6 py-3 rounded-xl text-lg font-semibold transition cursor-pointer ${
              selectedDifficulty
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-800 text-blue-200 cursor-not-allowed"
            }`}
          >
            <Link href={selectedDifficulty ? "/game" : "#"}>Start Game</Link>
          </button>

          <Link href="/progress">
            <button className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-xl text-lg font-semibold transition cursor-pointer">
              View Progress
            </button>
          </Link>
        </div>

        {showWarning && (
          <p className="text-red-400 mt-2 font-medium animate-pulse">
            Please select a difficulty before starting the game.
          </p>
        )}

        {/* Difficulty select =/}
        <DifficultySelect
          value={selectedDifficulty}
          onChange={(value) => setSelectedDifficulty(value)}
        />

        {/* Score display =/}
        <ScoreCard score={bestScore} wpm={bestWPM} />
      </div>
    </div>
  );
}
*/

"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import DifficultySelect from "./DifficultySelect";
import ScoreCard from "./ScoreCard";
import Link from "next/link";

export default function HomePage() {
  const router = useRouter();

  const [bestScore, setBestScore] = useState<number | null>(null);
  const [bestWPM, setBestWPM] = useState<number | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("");
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const score = localStorage.getItem("bestScore");
    const wpm = localStorage.getItem("bestWPM");
    const savedDifficulty = localStorage.getItem("difficulty");
    if (score) setBestScore(Number(score));
    if (wpm) setBestWPM(Number(wpm));
    if (savedDifficulty) {
      setSelectedDifficulty(capitalize(savedDifficulty));
    }
  }, []);

  const capitalize = (str: string) =>
    str.charAt(0).toUpperCase() + str.slice(1);

  const handleStartClick = () => {
    if (!selectedDifficulty) {
      setShowWarning(true);
      setTimeout(() => setShowWarning(false), 2500);
      return;
    }
    router.push("/game");
  };

  return (
    <main className="min-h-screen bg-gray-900 text-white flex items-center justify-center relative px-4">
      <div className="text-center space-y-6">
        <h1 className="text-5xl font-bold text-blue-400">TypeMaster</h1>
        <p className="text-lg text-gray-300">
          Test your speed. Train your brain.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 mt-6">
          <button
            onClick={handleStartClick}
            className={`px-6 py-3 rounded-xl text-lg font-semibold transition ${
              selectedDifficulty
                ? "bg-blue-600 hover:bg-blue-700 text-white"
                : "bg-blue-800 text-blue-200 cursor-not-allowed"
            }`}
          >
            Start Game
          </button>

          <Link href="/progress">
            <button className="px-6 py-3 bg-gray-700 hover:bg-gray-800 text-white rounded-xl text-lg font-semibold transition">
              View Progress
            </button>
          </Link>
        </div>

        {/* Warning message */}
        {showWarning && (
          <p className="text-red-400 mt-2 font-medium animate-pulse">
            Please select a difficulty before starting the game.
          </p>
        )}

        {/* Difficulty select */}
        <DifficultySelect
          value={selectedDifficulty}
          onChange={(value) => setSelectedDifficulty(value)}
        />

        {/* Score display */}
        <ScoreCard score={bestScore} wpm={bestWPM} />
      </div>
    </main>
  );
}
