import React, { useState, useCallback } from 'react';
import { SearchForm } from './components/SearchForm';
import { RecommendationsList } from './components/RecommendationsList';
import { searchTools } from './utils/searchTools';
import { SearchResult } from './types';
import { Sparkles } from 'lucide-react';

function App() {
  const [searchResult, setSearchResult] = useState<SearchResult | null>(null);

  const handleSearch = useCallback((keywords: string[]) => {
    const result = searchTools(keywords);
    setSearchResult(result);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-2">
            <Sparkles className="text-blue-500" />
            AI Tool Finder
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover the perfect AI tools and technologies to enhance your productivity based on your profile
          </p>
        </div>

        <div className="flex justify-center mb-12">
          <SearchForm onSearch={handleSearch} />
        </div>

        {searchResult && <RecommendationsList searchResult={searchResult} />}
      </div>
    </div>
  );
}

export default App;