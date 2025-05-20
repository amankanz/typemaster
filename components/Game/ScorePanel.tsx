/*
// components/Game/ScorePanel.tsx
import React from "react";

type Props = {
  score: number;
  wpm: number;
};

const ScorePanel = ({ score, wpm }: Props) => {
  return (
    <div className="flex justify-between text-white text-lg">
      <div>Score: {score}</div>
      <div>WPM: {wpm}</div>
    </div>
  );
};

export default ScorePanel;
*/

// components/Game/ScorePanel.tsx
import React from "react";

type Props = {
  score: number;
  wpm: number;
  level: number;
  accuracy: number;
};

const ScorePanel = ({ score, wpm, level, accuracy }: Props) => {
  return (
    <div className="flex flex-col sm:flex-row sm:justify-between text-white text-lg gap-1 sm:gap-0">
      <div>Score: {score}</div>
      <div>WPM: {wpm}</div>
      <div>Accuracy: {accuracy}%</div>
      <div>Level: {level}</div>
    </div>
  );
};

export default ScorePanel;
