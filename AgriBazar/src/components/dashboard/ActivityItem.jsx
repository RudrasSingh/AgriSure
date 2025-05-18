import React from 'react';
import { CalendarClock } from 'lucide-react';
import StatusBadge from '../ui/StatusBadge';

const ActivityItem = ({ 
  title, 
  description, 
  time, 
  status = null, 
  icon = null 
}) => {
  return (
    <div className="flex space-x-3">
      <div className="flex-shrink-0">
        <div className="flex items-center justify-center h-8 w-8 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-500 dark:text-primary-400">
          {icon || <CalendarClock size={16} />}
        </div>
      </div>
      <div className="min-w-0 flex-1">
        <div className="text-sm font-medium text-gray-900 dark:text-white truncate">
          {title}
        </div>
        <p className="text-sm text-gray-500 dark:text-gray-400">
          {description}
        </p>
        <div className="mt-1 flex items-center space-x-2">
          <p className="text-xs text-gray-500 dark:text-gray-400">{time}</p>
          {status && <StatusBadge status={status} />}
        </div>
      </div>
    </div>
  );
};

export default ActivityItem;