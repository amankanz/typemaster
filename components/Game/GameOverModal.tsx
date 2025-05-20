/*
// components/Game/GameOverModal.tsx
import React from "react";

type Props = {
  score: number;
  wpm: number;
  accuracy: number;
  onRestart: () => void;
};

const GameOverModal = ({ score, wpm, accuracy, onRestart }: Props) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center">
      <div className="bg-gray-900 text-white p-6 rounded shadow-lg w-80 text-center">
        <h2 className="text-xl font-bold mb-4">Game Over 🎮</h2>
        <p>Score: {score}</p>
        <p>WPM: {wpm}</p>
        <p>Accuracy: {accuracy}%</p>
        <button
          onClick={onRestart}
          className="mt-4 bg-green-600 px-4 py-2 rounded text-white"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;
*/

// components/Game/GameOverModal.tsx
import React from "react";

type Props = {
  stats: {
    score: number;
    wpm: number;
    accuracy: number;
    level: number;
  };
  onRestart: () => void;
};

const GameOverModal = ({ stats, onRestart }: Props) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50">
      <div className="bg-gray-900 text-white p-6 rounded shadow-lg w-80 text-center">
        <h2 className="text-xl font-bold mb-4">Game Over 🎮</h2>
        <p>Score: {stats.score}</p>
        <p>WPM: {stats.wpm}</p>
        <p>Accuracy: {stats.accuracy}%</p>
        <p>Level: {stats.level}</p>
        <button
          onClick={onRestart}
          className="mt-4 bg-green-600 px-4 py-2 rounded text-white"
        >
          Restart
        </button>
      </div>
    </div>
  );
};

export default GameOverModal;
