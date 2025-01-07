import { Tool } from '../types';

// Weight factors for different match types
const WEIGHTS = {
  CATEGORY: 3,
  DESCRIPTION: 2,
  NAME: 1,
  EFFECTIVENESS: 0.5
};

export function calculateToolScore(tool: Tool, keywords: string[]): number {
  let score = 0;
  const toolCategory = tool.category.toLowerCase();
  const toolDescription = tool.description.toLowerCase();
  const toolName = tool.name.toLowerCase();

  for (const keyword of keywords) {
    // Category matches (highest weight)
    if (toolCategory.includes(keyword)) {
      score += WEIGHTS.CATEGORY;
    }

    // Description matches
    if (toolDescription.includes(keyword)) {
      score += WEIGHTS.DESCRIPTION;
    }

    // Name matches
    if (toolName.includes(keyword)) {
      score += WEIGHTS.NAME;
    }
  }

  // Factor in the effectiveness score (as a percentage)
  score *= (1 + (tool.effectivenessScore / 100) * WEIGHTS.EFFECTIVENESS);

  return score;
}