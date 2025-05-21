/*
"use client";

import WordDisplay from "@/components/Game/WordDisplay";
import TypingInput from "@/components/Game/TypingInput";
import TimerBar from "@/components/Game/TimerBar";
import ScorePanel from "@/components/Game/ScorePanel";
import LivesIndicator from "@/components/Game/LivesIndicator";
import GameControls from "@/components/Game/GameControls";
import LevelProgressBar from "@/components/Game/LevelProgressBar";
import GameOverModal from "@/components/Game/GameOverModal";

import useGameEngine from "@/hooks/useGameEngine";

export default function GamePage() {
  const game = useGameEngine();

  return (
    <main className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-between p-6 relative">
      <div className="w-full max-w-3xl space-y-4">
        <TimerBar timeLeft={game.timeLeft} totalTime={game.totalTime} />

        <ScorePanel
          score={game.score}
          wpm={game.wpm}
          level={game.level}
          accuracy={game.accuracy}
        />

        <LivesIndicator lives={game.lives} />

        <WordDisplay word={game.word} userInput={game.input} />

        <TypingInput
          value={game.input}
          onChange={game.handleInputChange}
          disabled={game.isGameOver}
        />

        <LevelProgressBar progress={game.progress} />

        <GameControls
          isPaused={game.isPaused}
          togglePause={game.togglePause}
          giveUp={game.endGame}
          soundOn={game.soundOn}
          toggleSound={game.toggleSound}
        />
      </div>

      {game.isGameOver && (
        <GameOverModal stats={game.stats} onRestart={game.restart} />
      )}
    </main>
  );
}
*/

"use client";

import { useEffect, useState } from "react";
import WordDisplay from "@/components/Game/WordDisplay";
import TypingInput from "@/components/Game/TypingInput";
import TimerBar from "@/components/Game/TimerBar";
import ScorePanel from "@/components/Game/ScorePanel";
import LivesIndicator from "@/components/Game/LivesIndicator";
import GameControls from "@/components/Game/GameControls";
import LevelProgressBar from "@/components/Game/LevelProgressBar";
import GameOverModal from "@/components/Game/GameOverModal";

import useGameEngine from "@/hooks/useGameEngine";

type Difficulty = "beginner" | "intermediate" | "pro";

export default function GamePage() {
  const [difficulty, setDifficulty] = useState<Difficulty | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("difficulty");
    if (stored) {
      const normalized = stored.toLowerCase();
      if (["beginner", "intermediate", "pro"].includes(normalized)) {
        setDifficulty(normalized as Difficulty);
      }
    }
  }, []);

  const game = useGameEngine(difficulty);

  if (!difficulty || !game.word) {
    return (
      <main className="min-h-screen bg-gray-950 text-white flex items-center justify-center">
        <p>Loading game...</p>
      </main>
    );
  }

  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-between px-6 pt-30 pb-6  relative">
      <div className="w-full max-w-3xl space-y-4">
        <TimerBar timeLeft={game.timeLeft} totalTime={game.totalTime} />

        <ScorePanel
          score={game.score}
          wpm={game.wpm} /* Words per minute (WPM) */
          level={game.level}
          accuracy={game.accuracy}
        />

        <LivesIndicator lives={game.lives} />

        <WordDisplay word={game.word} userInput={game.input} />

        <TypingInput
          value={game.input}
          onChange={game.handleInputChange}
          disabled={game.isGameOver}
        />

        <LevelProgressBar progress={game.progress} />

        <GameControls
          isPaused={game.isPaused}
          togglePause={game.togglePause}
          giveUp={game.endGame}
          soundOn={game.soundOn}
          toggleSound={game.toggleSound}
        />
      </div>

      {game.isGameOver && (
        <GameOverModal stats={game.stats} onRestart={game.restart} />
      )}
    </div>
  );
}
