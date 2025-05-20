/*
// components/Game/GameControls.tsx
import React from "react";

type Props = {
  onPause: () => void;
  onGiveUp: () => void;
};

const GameControls = ({ onPause, onGiveUp }: Props) => {
  return (
    <div className="flex gap-4">
      <button
        onClick={onPause}
        className="bg-yellow-500 text-black px-3 py-1 rounded"
      >
        Pause
      </button>
      <button
        onClick={onGiveUp}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Give Up
      </button>
    </div>
  );
};

export default GameControls;
*/

// components/Game/GameControls.tsx
import React from "react";

type Props = {
  isPaused: boolean;
  togglePause: () => void;
  giveUp: () => void;
  soundOn: boolean;
  toggleSound: () => void;
};

const GameControls = ({
  isPaused,
  togglePause,
  giveUp,
  soundOn,
  toggleSound,
}: Props) => {
  return (
    <div className="flex flex-wrap gap-4 justify-center">
      <button
        onClick={togglePause}
        className="bg-yellow-500 text-black px-3 py-1 rounded"
      >
        {isPaused ? "Resume" : "Pause"}
      </button>
      <button
        onClick={giveUp}
        className="bg-red-500 text-white px-3 py-1 rounded"
      >
        Give Up
      </button>
      <button
        onClick={toggleSound}
        className="bg-indigo-500 text-white px-3 py-1 rounded"
      >
        Sound: {soundOn ? "On" : "Off"}
      </button>
    </div>
  );
};

export default GameControls;
