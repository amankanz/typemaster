type ScoreCardProps = {
  score: number | null;
  wpm: number | null;
};

export default function ScoreCard({ score, wpm }: ScoreCardProps) {
  if (score === null && wpm === null) return null;

  return (
    <div className="mt-6 bg-gray-800 rounded-lg p-4 inline-block text-sm text-gray-300">
      {score !== null && <p>🏆 Best Score: {score}</p>}
      {wpm !== null && <p>⚡ Best WPM: {wpm}</p>}
    </div>
  );
}
