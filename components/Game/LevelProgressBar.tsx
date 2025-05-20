/*
// components/Game/LevelProgressBar.tsx
import React from "react";

type Props = {
  current: number;
  total: number;
};

const LevelProgressBar = ({ current, total }: Props) => {
  const percent = Math.round((current / total) * 100);
  return (
    <div className="w-full h-2 bg-gray-600 rounded">
      <div
        className="h-full bg-blue-500 rounded"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default LevelProgressBar;
*/

/*
// components/Game/LevelProgressBar.tsx
import React from "react";

type Props = {
  progress: number; // e.g. 0.75 means 75% done
};

const LevelProgressBar = ({ progress }: Props) => {
  const percent = Math.round(progress * 100);

  return (
    <div className="w-full h-2 bg-gray-600 rounded">
      <div
        className="h-full bg-blue-500 rounded"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default LevelProgressBar;
*/

// components/Game/LevelProgressBar.tsx
import React from "react";

type Props = {
  progress: number; // e.g. 0.75 means 75% done
};

const LevelProgressBar = ({ progress }: Props) => {
  // Clamp to avoid overflow
  const percent = Math.min(100, Math.max(0, Math.round(progress * 100)));

  return (
    <div className="w-full h-2 bg-gray-600 rounded overflow-hidden">
      <div
        className="h-full bg-blue-500"
        style={{ width: `${percent}%` }}
      ></div>
    </div>
  );
};

export default LevelProgressBar;
