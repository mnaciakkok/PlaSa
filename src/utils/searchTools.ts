import { Tool, SearchResult } from '../types';
import { toolsDatabase } from '../data/tools';
import { calculateToolScore } from './scoring';

export function searchTools(keywords: string[]): SearchResult {
  if (!keywords.length) return { tools: [], keywords: [] };

  const keywordsLower = keywords.map(k => k.toLowerCase());
  
  // Score each tool based on matches
  const scoredTools = toolsDatabase.map(tool => ({
    ...tool,
    score: calculateToolScore(tool, keywordsLower)
  }));
  
  // Sort by score and get top 3
  const topTools = scoredTools
    .sort((a, b) => b.score - a.score)
    .filter(tool => tool.score > 0) // Only include relevant tools
    .slice(0, 3)
    .map(({ score, ...tool }) => tool);

  return {
    tools: topTools,
    keywords
  };
}