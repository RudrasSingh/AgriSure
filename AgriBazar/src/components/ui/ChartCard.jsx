import React from 'react';
import Card from './Card';

const ChartCard = ({ title, subtext, className = '', children }) => {
  return (
    <Card className={`p-4 h-full ${className}`}>
      <div className="flex flex-col h-full">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h3>
            {subtext && <p className="text-sm text-gray-500 dark:text-gray-400">{subtext}</p>}
          </div>
        </div>
        <div className="flex-1 min-h-[200px] flex items-center justify-center">
          {children || (
            <div className="w-full h-40 bg-gray-100 dark:bg-gray-700 rounded-lg animate-pulse flex items-center justify-center">
              <p className="text-gray-400 dark:text-gray-500">Chart Placeholder</p>
            </div>
          )}
        </div>
      </div>
    </Card>
  );
};

export default ChartCard;