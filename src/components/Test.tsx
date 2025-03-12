'use client'

import React, { useState } from 'react';

interface Option {
  id: string;
  title: string;
  description: string;
  icon?: React.ReactNode;
}

interface TwoColumnSelectorProps {
  options: Option[];
  onSelect: (option: Option) => void;
  defaultSelected?: string;
}

const TwoColumnSelector: React.FC<TwoColumnSelectorProps> = ({
  options,
  onSelect,
  defaultSelected,
}) => {
  const [selectedId, setSelectedId] = useState<string>(defaultSelected || '');

  const handleSelect = (option: Option) => {
    setSelectedId(option.id);
    onSelect(option);
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-3 w-full max-w-4xl mx-auto">
      {options.map((option) => (
        <div
          key={option.id}
          onClick={() => handleSelect(option)}
          className={`
            relative rounded-xl p-4 cursor-pointer transition-all duration-200
            border-2 hover:border-indigo-500 hover:shadow-lg
            ${selectedId === option.id 
              ? 'bg-gradient-to-br from-indigo-500/10 to-purple-500/10 border-indigo-500 shadow-md' 
              : 'bg-gray-900/50 border-gray-800 hover:bg-gray-900/70'}
          `}
        >
          <div className="flex items-start gap-3">
            {option.icon && (
              <div className="flex-shrink-0 text-indigo-400">
                {option.icon}
              </div>
            )}
            <div className="flex-1">
              <h3 className="font-medium text-white text-lg mb-1">{option.title}</h3>
              <p className="text-gray-400 text-sm">{option.description}</p>
            </div>
            <div className={`
              h-5 w-5 rounded-full border-2 flex-shrink-0 mt-1
              ${selectedId === option.id 
                ? 'border-indigo-500 bg-indigo-500/30' 
                : 'border-gray-600'}
            `}>
              {selectedId === option.id && (
                <div className="h-2 w-2 bg-indigo-500 rounded-full m-auto" />
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

// Example usage
const ExampleComponent: React.FC = () => {
  const [selected, setSelected] = useState<Option | null>(null);
  
  const options: Option[] = [
    {
      id: 'option1',
      title: 'Standard Deployment',
      description: 'Deploy your application with our recommended settings.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      ),
    },
    {
      id: 'option2',
      title: 'Advanced Configuration',
      description: 'Customize every aspect of your deployment environment.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      id: 'option3',
      title: 'High Performance',
      description: 'Optimized for high-traffic applications with priority resources.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      id: 'option4',
      title: 'Enterprise Solution',
      description: 'Full-featured deployment with dedicated support and SLA guarantees.',
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white p-6 flex flex-col items-center justify-center">
      <h2 className="text-2xl font-bold mb-6 text-center">Select Deployment Type</h2>
      
      <TwoColumnSelector
        options={options}
        onSelect={setSelected}
        defaultSelected="option1"
      />
      
      {selected && (
        <div className="mt-8 p-4 rounded-lg bg-gray-900/70 border border-gray-800 max-w-md">
          <p className="text-indigo-400 font-medium">Selected: {selected.title}</p>
          <p className="text-gray-400 mt-2">{selected.description}</p>
        </div>
      )}
    </div>
  );
};

export default ExampleComponent;