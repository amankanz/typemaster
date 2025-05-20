/*
// components/Game/LivesIndicator.tsx
import React from "react";

type Props = {
  lives: number;
};

const LivesIndicator = ({ lives }: Props) => {
  return <div className="text-red-400">{"❤️".repeat(lives)}</div>;
};

export default LivesIndicator;
*/

// components/Game/LivesIndicator.tsx
import React from "react";

type Props = {
  lives: number;
};

const LivesIndicator = ({ lives }: Props) => {
  const safeLives = Math.max(0, lives); // prevents negative repeat
  return <div className="text-red-400">{"❤️".repeat(safeLives)}</div>;
};

export default LivesIndicator;
