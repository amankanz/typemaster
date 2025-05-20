export const wordBank = {
  beginner: [
    "cat",
    "dog",
    "book",
    "car",
    "red",
    "blue",
    "sun",
    "tree",
    "run",
    "jump",
  ],
  intermediate: [
    "market",
    "random",
    "signal",
    "button",
    "canvas",
    "toggle",
    "orange",
    "planet",
    "puzzle",
    "camera",
  ],
  pro: [
    "articulate",
    "synchronize",
    "philosopher",
    "revolutionary",
    "hypothetical",
    "architecture",
    "counterfeit",
    "sophisticated",
    "responsibility",
    "appreciation",
  ],
};

export function getRandomWord(
  difficulty: "beginner" | "intermediate" | "pro" = "beginner"
) {
  const words = wordBank[difficulty];
  const index = Math.floor(Math.random() * words.length);
  return words[index];
}
