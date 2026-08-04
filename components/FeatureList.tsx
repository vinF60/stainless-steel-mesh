import React from 'react';

interface FeatureListProps {
  features: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
      {features.map((feat, idx) => (
        <li
          key={idx}
          className="flex items-start space-x-3 p-4 bg-white rounded-xl border border-slate-200/80 shadow-xs hover:border-sky-300 hover:shadow-md transition-all group"
        >
          <div className="w-6 h-6 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center font-bold text-xs flex-shrink-0 mt-0.5 group-hover:bg-sky-600 group-hover:text-white transition-colors">
            ✓
          </div>
          <span className="font-semibold text-slate-800 text-sm leading-snug">{feat}</span>
        </li>
      ))}
    </ul>
  );
};

export default FeatureList;
