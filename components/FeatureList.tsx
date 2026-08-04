import React from 'react';

interface FeatureListProps {
  features: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-4">
      {features.map((feat, idx) => (
        <li key={idx} className="flex items-center space-x-3 p-3 bg-slate-50 rounded-lg border border-slate-100">
          <span className="w-2.5 h-2.5 bg-blue-600 rounded-full flex-shrink-0"></span>
          <span className="font-medium text-slate-700">{feat}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
