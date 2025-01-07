export interface Tool {
  name: string;
  description: string;
  effectivenessScore: number;
  category: string;
  url: string;
}

export interface SearchResult {
  tools: Tool[];
  keywords: string[];
}