// useGameEngine.ts
import { useEffect, useState, useRef } from "react";
import { getRandomWord } from "@/libs/wordBank";
import { saveStatsToLocalStorage } from "@/libs/storage";

type Difficulty = "beginner" | "intermediate" | "pro";

export default function useGameEngine(difficulty: Difficulty | null) {
  const [word, setWord] = useState("");
  const [input, setInput] = useState("");
  const [score, setScore] = useState(0);
  const [wpm, setWPM] = useState(0);
  const [level, setLevel] = useState(1);
  const [progress, setProgress] = useState(0);
  const [accuracy, setAccuracy] = useState(100);
  const [lives, setLives] = useState(3);
  const [isPaused, setIsPaused] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [soundOn, setSoundOn] = useState(true);

  const totalTime = 60;
  const [timeLeft, setTimeLeft] = useState(totalTime);
  const correctChars = useRef(0);
  const totalChars = useRef(0);

  const WORDS_PER_LEVEL = 10;
  const [correctWordsInLevel, setCorrectWordsInLevel] = useState(0);

  // ✅ Set the initial word when difficulty is available
  useEffect(() => {
    if (difficulty) {
      setWord(getRandomWord(difficulty));
    }
  }, [difficulty]);

  useEffect(() => {
    if (isPaused || isGameOver) return;
    if (timeLeft <= 0 || lives <= 0) {
      endGame();
      return;
    }

    const interval = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [timeLeft, isPaused, isGameOver]);

  const handleInputChange = (value: string) => {
    if (isGameOver || !difficulty) return;

    setInput(value);
    totalChars.current += 1;

    if (word.startsWith(value)) {
      if (value === word) {
        setScore((s) => s + 10);
        correctChars.current += word.length;
        setInput("");
        setWord(getRandomWord(difficulty));

        setCorrectWordsInLevel((count) => {
          const nextCount = count + 1;
          if (nextCount >= WORDS_PER_LEVEL) {
            setLevel((lvl) => lvl + 1);
            setProgress(0);
            return 0;
          }

          setProgress((nextCount + 1) / WORDS_PER_LEVEL);
          return nextCount;
        });
      }
    } else {
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
    if (!difficulty) return;

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
    setWord(getRandomWord(difficulty));
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
    difficulty,
    correctWordsInLevel,
    stats: { score, wpm, accuracy, level },
  };
}
