import React from 'react';
import { ExternalLink, Zap } from 'lucide-react';
import { Tool } from '../types';

interface ToolCardProps {
  tool: Tool;
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold text-gray-900">{tool.name}</h3>
        <span className="flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
          <Zap size={16} />
          {tool.effectivenessScore}%
        </span>
      </div>
      <p className="text-gray-600 mb-4">{tool.description}</p>
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">{tool.category}</span>
        <a
          href={tool.url}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-1 text-blue-500 hover:text-blue-600 transition-colors"
        >
          Learn More
          <ExternalLink size={16} />
        </a>
      </div>
    </div>
  );
}