/*
import { useEffect, useState, useRef } from "react";
import { getRandomWord } from "@/libs/wordBank";
import { saveStatsToLocalStorage } from "@/libs/storage";

export default function useGameEngine() {
  const [word, setWord] = useState("");
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [wpm, setWPM] = useState(0);
  const [level, setLevel] = useState(1);
  const [progress, setProgress] = useState(0); // 0–100
  const [accuracy, setAccuracy] = useState(100);
  const [lives, setLives] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  const totalTime = 60; // 60 seconds per level
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const correctChars = useRef(0);
  const totalChars = useRef(0);

  // Countdown
  useEffect(() => {
    if (isPaused || isGameOver) return;
    if (timeLeft <= 0 || lives <= 0) {
      endGame();
      return;
    }

    const interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft, isPaused, isGameOver]);

  useEffect(() => {
    setWord(getRandomWord());
  }, [level]);

  const handleInputChange = (value: string) => {
    if (isGameOver) return; // Prevent updates after game ends
    setInput(input);

    setInput(value);
    totalChars.current += 1;

    if (word.startsWith(value)) {
      if (value === word) {
        // Completed word
        setScore((s) => s + 10);
        correctChars.current += word.length;
        setInput("");
        setWord(getRandomWord());
        setProgress((p) => {
          const next = p + 10;
          if (next >= 100) {
            setLevel((lvl) => lvl + 1);
            return 0;
          }
          return next;
        });
      }
    } else {
      // Mistake
      setLives((l) => l - 1);
    }

    const acc = (correctChars.current / totalChars.current) * 100;
    setAccuracy(Math.round(acc));
    setWPM(
      Math.round(correctChars.current / 5 / ((totalTime - timeLeft) / 60))
    );
  };

  const togglePause = () => setIsPaused((p) => !p);
  const toggleSound = () => setSoundOn((s) => !s);

  const endGame = () => {
    setIsGameOver(true);
    saveStatsToLocalStorage({ score, wpm, accuracy });
  };

  const restart = () => {
    setScore(0);
    setWPM(0);
    setLevel(1);
    setProgress(0);
    setAccuracy(100);
    setLives(3);
    setTimeLeft(totalTime);
    setIsPaused(false);
    setIsGameOver(false);
    setInput("");
    correctChars.current = 0;
    totalChars.current = 0;
    setWord(getRandomWord());
  };

  return {
    word,
    input,
    handleInputChange,
    score,
    wpm,
    level,
    progress,
    accuracy,
    lives,
    isPaused,
    isGameOver,
    togglePause,
    toggleSound,
    soundOn,
    endGame,
    restart,
    timeLeft,
    totalTime,
    stats: { score, wpm, accuracy, level },
  };
}
*/

import { useEffect, useState, useRef } from "react";
import { getRandomWord } from "@/libs/wordBank";
import { saveStatsToLocalStorage } from "@/libs/storage";

export default function useGameEngine() {
  const [word, setWord] = useState("");
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [wpm, setWPM] = useState(0);
  const [level, setLevel] = useState(1);
  const [progress, setProgress] = useState(0); // 0–1 (fraction)
  const [accuracy, setAccuracy] = useState(100);
  const [lives, setLives] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  const totalTime = 60; // seconds per level
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const correctChars = useRef(0);
  const totalChars = useRef(0);

  const WORDS_PER_LEVEL = 10;
  const [correctWordsInLevel, setCorrectWordsInLevel] = useState(0);

  // Countdown
  useEffect(() => {
    if (isPaused || isGameOver) return;
    if (timeLeft <= 0 || lives <= 0) {
      endGame();
      return;
    }

    const interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft, isPaused, isGameOver]);

  useEffect(() => {
    setWord(getRandomWord());
  }, [level]);

  const handleInputChange = (value: string) => {
    if (isGameOver) return;

    setInput(value);
    totalChars.current += 1;

    if (word.startsWith(value)) {
      if (value === word) {
        // Correct full word
        setScore((s) => s + 10);
        correctChars.current += word.length;
        setInput("");
        setWord(getRandomWord());

        setCorrectWordsInLevel((count) => {
          const nextCount = count + 1;

          // Level up
          if (nextCount >= WORDS_PER_LEVEL) {
            setLevel((lvl) => lvl + 1);
            setProgress(0);
            return 0;
          }

          // Update progress (0 to 1)
          setProgress((nextCount + 1) / WORDS_PER_LEVEL);
          return nextCount;
        });
      }
    } else {
      // Incorrect input
      setLives((l) => l - 1);
    }

    const acc = (correctChars.current / totalChars.current) * 100;
    setAccuracy(Math.round(acc));

    const minutes = (totalTime - timeLeft) / 60;
    const wordsTyped = correctChars.current / 5;
    setWPM(Math.round(wordsTyped / minutes || 0));
  };

  const togglePause = () => setIsPaused((p) => !p);
  const toggleSound = () => setSoundOn((s) => !s);

  const endGame = () => {
    setIsGameOver(true);
    saveStatsToLocalStorage({ score, wpm, accuracy });
  };

  const restart = () => {
    setScore(0);
    setWPM(0);
    setLevel(1);
    setProgress(0);
    setAccuracy(100);
    setLives(3);
    setTimeLeft(totalTime);
    setIsPaused(false);
    setIsGameOver(false);
    setInput("");
    correctChars.current = 0;
    totalChars.current = 0;
    setCorrectWordsInLevel(0);
    setWord(getRandomWord());
  };

  return {
    word,
    input,
    handleInputChange,
    score,
    wpm,
    level,
    progress,
    accuracy,
    lives,
    isPaused,
    isGameOver,
    togglePause,
    toggleSound,
    soundOn,
    endGame,
    restart,
    timeLeft,
    totalTime,
    correctWordsInLevel, // ✅ This fixes the warning
    stats: { score, wpm, accuracy, level },
  };
}
