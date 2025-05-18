import React from 'react';

const Spinner = ({ size = 'md', className = '' }) => {
  const sizeClasses = {
    sm: 'w-4 h-4',
    md: 'w-6 h-6',
    lg: 'w-8 h-8',
    xl: 'w-12 h-12'
  };

  return (
    <div className={`${className} flex justify-center items-center`}>
      <div className={`${sizeClasses[size]} animate-spin`}>
        <div className="h-full w-full border-4 border-t-primary-500 border-r-primary-300 border-b-primary-200 border-l-primary-100 rounded-full"></div>
      </div>
    </div>
  );
};

export default Spinner;