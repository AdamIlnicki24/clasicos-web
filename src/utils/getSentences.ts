export function getSentences(text: string, sentenceCount: number): string {
  return text
    .split(".")
    .filter((sentence) => sentence.trim().length > 0)
    .slice(0, sentenceCount)
    .map((sentece) => sentece.trim() + ".")
    .join(" ");
}
