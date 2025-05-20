/*
// components/Game/TimerBar.tsx
import React from "react";

type Props = {
  percentage: number;
};

const TimerBar = ({ percentage }: Props) => {
  return (
    <div className="w-full h-2 bg-gray-700 rounded">
      <div
        className="h-full bg-green-500 transition-all duration-100 ease-linear rounded"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default TimerBar;
*/

// components/Game/TimerBar.tsx
import React from "react";

type Props = {
  timeLeft: number;
  totalTime: number;
};

const TimerBar = ({ timeLeft, totalTime }: Props) => {
  const percentage = Math.max((timeLeft / totalTime) * 100, 0);

  return (
    <div className="w-full h-2 bg-gray-700 rounded">
      <div
        className="h-full bg-green-500 transition-all duration-100 ease-linear rounded"
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default TimerBar;
