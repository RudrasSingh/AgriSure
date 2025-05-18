import React from 'react';

const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  fullWidth = false,
  neumorphic = false,
  disabled = false,
  onClick,
  type = 'button',
  className = ''
}) => {
  const baseClasses = `
    inline-flex items-center justify-center font-medium rounded-lg
    transition-all duration-200 ease-in-out
    focus:outline-none focus:ring-2 focus:ring-offset-2
  `;

  const sizeClasses = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  const neumorphicClasses = neumorphic
    ? 'shadow-neumorphic dark:shadow-neumorphic-dark active:shadow-none active:bg-opacity-90'
    : '';

  const variantClasses = {
    primary: `
      bg-gradient-to-r from-primary-500 to-primary-600
      text-white
      hover:from-primary-600 hover:to-primary-700
      focus:ring-primary-500
    `,
    secondary: `
      bg-gradient-to-r from-secondary-500 to-secondary-600
      text-white
      hover:from-secondary-600 hover:to-secondary-700
      focus:ring-secondary-500
    `,
    accent: `
      bg-gradient-to-r from-accent-500 to-accent-600
      text-white
      hover:from-accent-600 hover:to-accent-700
      focus:ring-accent-500
    `,
    success: `
      bg-gradient-to-r from-success-500 to-success-600
      text-white
      hover:from-success-600 hover:to-success-700
      focus:ring-success-500
    `,
    warning: `
      bg-gradient-to-r from-warning-500 to-warning-600
      text-white
      hover:from-warning-600 hover:to-warning-700
      focus:ring-warning-500
    `,
    error: `
      bg-gradient-to-r from-error-500 to-error-600
      text-white
      hover:from-error-600 hover:to-error-700
      focus:ring-error-500
    `,
    glass: `
      bg-white/20 dark:bg-gray-800/20
      backdrop-blur-md
      text-gray-800 dark:text-white
      hover:bg-white/30 dark:hover:bg-gray-800/30
      border border-white/30 dark:border-gray-700/30
      focus:ring-gray-300 dark:focus:ring-gray-700
    `,
    outline: `
      bg-transparent
      text-gray-800 dark:text-white
      border border-gray-300 dark:border-gray-600
      hover:bg-gray-100 dark:hover:bg-gray-800
      focus:ring-gray-300 dark:focus:ring-gray-700
    `
  };

  const disabledClasses = disabled
    ? 'opacity-60 cursor-not-allowed pointer-events-none'
    : 'hover:scale-[1.02] active:scale-[0.98]';

  const widthClass = fullWidth ? 'w-full' : '';

  return (
    <button
      type={type}
      className={`
        ${baseClasses}
        ${sizeClasses[size]}
        ${variantClasses[variant]}
        ${neumorphicClasses}
        ${disabledClasses}
        ${widthClass}
        ${className}
      `}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;