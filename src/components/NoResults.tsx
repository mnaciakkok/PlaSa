import React from 'react';
import { SearchX } from 'lucide-react';

export function NoResults() {
  return (
    <div className="text-center py-8">
      <SearchX className="w-12 h-12 text-gray-400 mx-auto mb-4" />
      <h3 className="text-lg font-medium text-gray-900 mb-2">
        No matching tools found
      </h3>
      <p className="text-gray-600">
        Try different keywords or broaden your search terms
      </p>
    </div>
  );
}