// components/Game/TypingInput.tsx
"use client";
import React, { useEffect, useRef } from "react";

type Props = {
  value: string;
  onChange: (value: string) => void;
  disabled?: boolean;
};

export default function TypingInput({ value, onChange, disabled }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      disabled={disabled}
      className="w-full text-center text-xl px-4 py-2 rounded bg-gray-800 text-white outline-none border border-gray-700 focus:ring-2 focus:ring-indigo-500"
      placeholder="Type the word here..."
    />
  );
}
