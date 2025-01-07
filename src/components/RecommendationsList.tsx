import React from 'react';
import { ToolCard } from './ToolCard';
import { NoResults } from './NoResults';
import { SearchResult } from '../types';

interface RecommendationsListProps {
  searchResult: SearchResult;
}

export function RecommendationsList({ searchResult }: RecommendationsListProps) {
  if (!searchResult.tools.length) {
    return <NoResults />;
  }

  return (
    <div className="max-w-4xl mx-auto">
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-900 mb-2">
          Top Recommendations
        </h2>
        <p className="text-gray-600">
          Based on keywords: {searchResult.keywords.join(', ')}
        </p>
      </div>
      
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {searchResult.tools.map((tool) => (
          <ToolCard key={tool.name} tool={tool} />
        ))}
      </div>
    </div>
  );
}