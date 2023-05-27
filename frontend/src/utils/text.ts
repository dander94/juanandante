export const pluralize = (word: string, count: number, plural?: string): string => (
  (count === 1)
    ? word
    : plural || `${word}s`
);
