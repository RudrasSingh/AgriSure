import React, { forwardRef } from 'react';

const Input = forwardRef(({ 
  label, 
  id, 
  type = 'text', 
  placeholder = '', 
  error = '', 
  fullWidth = true,
  disabled = false,
  className = '',
  icon = null,
  ...props 
}, ref) => {
  const baseInputClasses = `
    bg-white dark:bg-neutral-800
    text-gray-900 dark:text-white
    border border-gray-300 dark:border-gray-600
    rounded-lg
    focus:outline-none
    focus:ring-2
    focus:ring-primary-500 dark:focus:ring-primary-400
    focus:border-transparent
    placeholder-gray-400 dark:placeholder-gray-500
    transition duration-200
    disabled:opacity-60 disabled:cursor-not-allowed
    px-4 py-2
  `;

  const widthClass = fullWidth ? 'w-full' : '';
  const iconClass = icon ? 'pl-10' : '';
  const errorClass = error ? 'border-error-500 focus:ring-error-500' : '';

  return (
    <div className={`mb-4 ${widthClass} ${className}`}>
      {label && (
        <label
          htmlFor={id}
          className="block mb-2 font-medium text-gray-700 dark:text-gray-200 text-sm"
        >
          {label}
        </label>
      )}
      <div className="relative">
        {icon && (
          <div className="left-0 absolute inset-y-0 flex items-center pl-3 text-gray-400 pointer-events-none">
            {icon}
          </div>
        )}
        <input
          ref={ref}
          type={type}
          id={id}
          className={`${baseInputClasses} ${widthClass} ${iconClass} ${errorClass}`}
          placeholder={placeholder}
          disabled={disabled}
          {...props}
        />
      </div>
      {error && <p className="mt-1 text-error-500 text-sm">{error}</p>}
    </div>
  );
});

Input.displayName = 'Input';

export default Input;