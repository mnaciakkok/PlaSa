export function parseKeywords(input: string): string[] {
  return input
    .split(',')
    .map(k => k.trim())
    .filter(k => k.length > 0);
}