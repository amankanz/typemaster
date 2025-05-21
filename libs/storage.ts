/*
export function saveStatsToLocalStorage(stats: {
  score: number;
  wpm: number;
  accuracy: number;
}) {
  const best = JSON.parse(localStorage.getItem("bestStats") || "{}");

  const updated = {
    score: Math.max(stats.score, best.score || 0),
    wpm: Math.max(stats.wpm, best.wpm || 0),
    accuracy: Math.max(stats.accuracy, best.accuracy || 0),
  };

  localStorage.setItem("bestStats", JSON.stringify(updated));
}

export function getBestStats() {
  return JSON.parse(localStorage.getItem("bestStats") || "{}");
}
*/

// libs/storage.ts
export function saveStatsToLocalStorage({
  score,
  wpm,
  accuracy,
  level,
}: {
  score: number;
  wpm: number;
  accuracy: number;
  level: number;
}) {
  const prev = JSON.parse(localStorage.getItem("typingGameStats") || "{}");
  const sessionId = new Date().toISOString();

  const newStats = {
    level: Math.max(prev.level || 1, level),
    highScore: Math.max(prev.highScore || 0, score),
    wpmHistory: [...(prev.wpmHistory || []), { session: sessionId, wpm }],
    accuracyHistory: [
      ...(prev.accuracyHistory || []),
      { session: sessionId, accuracy },
    ],
    achievements: updateAchievements(
      prev.achievements || [],
      score,
      accuracy,
      wpm
    ),
    totalWords: (prev.totalWords || 0) + Math.floor((wpm * 60) / 5),
    sessionsCompleted: (prev.sessionsCompleted || 0) + 1,
  };

  localStorage.setItem("typingGameStats", JSON.stringify(newStats));
}

function updateAchievements(
  current: { emoji: string; label: string }[],
  score: number,
  accuracy: number,
  wpm: number
): { emoji: string; label: string }[] {
  const newAchievements: { emoji: string; label: string }[] = [];

  if (score >= 200 && !current.find((a) => a.label === "Scored 200+")) {
    newAchievements.push({ emoji: "🏆", label: "Scored 200+" });
  }
  if (accuracy >= 95 && !current.find((a) => a.label === "Accuracy Master")) {
    newAchievements.push({ emoji: "🎯", label: "Accuracy Master" });
  }
  if (wpm >= 60 && !current.find((a) => a.label === "Speed Demon")) {
    newAchievements.push({ emoji: "⚡", label: "Speed Demon" });
  }

  return [...current, ...newAchievements];
}
