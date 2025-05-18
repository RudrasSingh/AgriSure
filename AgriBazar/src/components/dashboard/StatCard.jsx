import React from 'react';
import Card from '../ui/Card';

const StatCard = ({ title, value, icon, change, changeType, className = '' }) => {
  return (
    <Card className={`p-4 ${className}`}>
      <div className="flex justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500 dark:text-gray-400">{title}</p>
          <p className="mt-1 text-2xl font-semibold text-gray-800 dark:text-white">{value}</p>
          
          {change && (
            <div className="mt-1 flex items-center">
              <span className={`text-xs font-medium ${
                changeType === 'increase' 
                  ? 'text-success-600 dark:text-success-400' 
                  : changeType === 'decrease' 
                    ? 'text-error-600 dark:text-error-400'
                    : 'text-gray-500 dark:text-gray-400'
              }`}>
                {changeType === 'increase' ? '↑' : changeType === 'decrease' ? '↓' : ''} {change}
              </span>
              <span className="ml-1 text-xs text-gray-500 dark:text-gray-400">vs last month</span>
            </div>
          )}
        </div>
        
        <div className="p-2 bg-primary-50 dark:bg-primary-900/20 rounded-lg">
          {icon}
        </div>
      </div>
    </Card>
  );
};

export default StatCard;