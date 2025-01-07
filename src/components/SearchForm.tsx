import React, { useState } from 'react';
import { Search } from 'lucide-react';
import { parseKeywords } from '../utils/keywordParser';

interface SearchFormProps {
  onSearch: (keywords: string[]) => void;
}

export function SearchForm({ onSearch }: SearchFormProps) {
  const [input, setInput] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const keywords = parseKeywords(input);
    if (keywords.length > 0) {
      onSearch(keywords);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-2xl">
      <div className="relative">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Enter profile keywords (e.g., writer, marketing, data analysis)"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
        >
          <Search size={20} />
        </button>
      </div>
      <p className="text-sm text-gray-500 mt-2">
        Separate keywords with commas and click search to find recommendations
      </p>
    </form>
  );
}