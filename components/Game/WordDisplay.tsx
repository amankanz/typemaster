// components/Game/WordDisplay.tsx
"use client";
import React from "react";

type Props = {
  word: string;
  userInput: string;
};

export default function WordDisplay({ word, userInput }: Props) {
  return (
    <div className="text-3xl font-mono tracking-wide text-center">
      {word.split("").map((char, i) => {
        let color = "text-white";
        if (i < userInput.length) {
          color = char === userInput[i] ? "text-green-400" : "text-red-500";
        }
        return (
          <span key={i} className={`${color}`}>
            {char}
          </span>
        );
      })}
    </div>
  );
}
