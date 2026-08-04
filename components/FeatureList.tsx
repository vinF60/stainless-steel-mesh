import React from 'react';

interface FeatureListProps {
  features: string[];
}

const FeatureList: React.FC<FeatureListProps> = ({ features }) => {
  return (
    <section className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Features</h2>
      <ul className="grid grid-cols-2 gap-4">
        {features.map((feat, idx) => (
          <li key={idx} className="flex items-center space-x-2">
            <span className="w-3 h-3 bg-primary rounded-full"></span>
            <span>{feat}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FeatureList;
