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
