import React from 'react';

const StatusBadge = ({ status, className = '' }) => {
  const baseClasses = `
    inline-flex items-center px-2.5 py-0.5
    rounded-full text-xs font-medium
  `;

  const statusClasses = {
    pending: 'bg-warning-100 text-warning-800 dark:bg-warning-900/30 dark:text-warning-300',
    approved: 'bg-success-100 text-success-800 dark:bg-success-900/30 dark:text-success-300',
    rejected: 'bg-error-100 text-error-800 dark:bg-error-900/30 dark:text-error-300',
    active: 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300',
    inactive: 'bg-gray-100 text-gray-800 dark:bg-gray-700 dark:text-gray-300',
    completed: 'bg-secondary-100 text-secondary-800 dark:bg-secondary-900/30 dark:text-secondary-300'
  };

  // Default to 'pending' if an unknown status is provided
  const statusClass = statusClasses[status.toLowerCase()] || statusClasses.pending;

  return (
    <span className={`${baseClasses} ${statusClass} ${className}`}>
      {status.charAt(0).toUpperCase() + status.slice(1)}
    </span>
  );
};

export default StatusBadge;