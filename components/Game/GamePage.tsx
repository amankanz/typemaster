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
