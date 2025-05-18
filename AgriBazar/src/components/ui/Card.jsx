import React from 'react';

const Card = ({ 
  children, 
  variant = 'default', 
  className = '', 
  onClick = null,
  hoverEffect = false
}) => {
  const baseClasses = `
    rounded-xl overflow-hidden
    transition-all duration-200
  `;

  const hoverClasses = hoverEffect 
    ? 'hover:shadow-xl hover:scale-[1.02]'
    : '';

  const clickableClasses = onClick 
    ? 'cursor-pointer'
    : '';

  const variantClasses = {
    default: `
      bg-white dark:bg-neutral-800
      shadow-md
      border border-gray-100 dark:border-neutral-700
    `,
    glass: `
      bg-white/20 dark:bg-gray-800/20
      backdrop-blur-md
      shadow-lg
      border border-white/30 dark:border-gray-700/30
    `,
    gradient: `
      bg-gradient-to-br from-white/50 to-white/30
      dark:from-neutral-800/50 dark:to-neutral-800/30
      backdrop-blur-md
      shadow-lg
      border border-white/30 dark:border-gray-700/30
    `,
    solid: `
      bg-white dark:bg-gray-800
      shadow-lg
    `,
    neumorphic: `
      bg-gray-100 dark:bg-gray-800
      shadow-neumorphic dark:shadow-neumorphic-dark
    `
  };

  return (
    <div
      className={`
        ${baseClasses} 
        ${variantClasses[variant]} 
        ${hoverClasses}
        ${clickableClasses}
        ${className}
      `}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;