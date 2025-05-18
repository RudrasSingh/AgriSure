import React, { useEffect, useState } from 'react';
import { X, CheckCircle, AlertCircle, Info, AlertTriangle } from 'lucide-react';

const Toast = ({ message, type = 'success', onClose }) => {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(false);
      setTimeout(onClose, 300); // Wait for fade out animation
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  const icons = {
    success: <CheckCircle className="w-5 h-5 text-success-500" />,
    error: <AlertCircle className="w-5 h-5 text-error-500" />,
    warning: <AlertTriangle className="w-5 h-5 text-warning-500" />,
    info: <Info className="w-5 h-5 text-primary-500" />
  };

  const baseClasses = `
    flex items-center justify-between w-full max-w-sm p-4 mb-4 
    text-gray-800 dark:text-gray-100
    bg-white/90 dark:bg-gray-800/90 
    backdrop-blur-md rounded-lg shadow-lg
    transition-all duration-300 ease-in-out
    border-l-4
  `;

  const typeClasses = {
    success: 'border-success-500',
    error: 'border-error-500',
    warning: 'border-warning-500',
    info: 'border-primary-500'
  };

  return (
    <div className={`${baseClasses} ${typeClasses[type]} ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-2'}`}>
      <div className="flex items-center">
        <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8">
          {icons[type]}
        </div>
        <div className="ml-3 text-sm font-normal">{message}</div>
      </div>
      <button 
        type="button" 
        className="ml-auto -mx-1.5 -my-1.5 bg-white/20 dark:bg-gray-700/20 text-gray-400 hover:text-gray-900 dark:hover:text-white rounded-lg p-1.5 inline-flex h-8 w-8 items-center justify-center"
        onClick={() => {
          setIsVisible(false);
          setTimeout(onClose, 300);
        }}
      >
        <X className="w-4 h-4" />
      </button>
    </div>
  );
};

export default Toast;