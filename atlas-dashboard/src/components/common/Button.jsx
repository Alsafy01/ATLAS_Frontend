// src/components/common/Button.jsx
import React from 'react';
import { useTheme } from '../../contexts/ThemeContext';

const Button = ({ children, variant = 'primary', size = 'md', className = '', ...props }) => {
  const { isDark } = useTheme();

  const baseClasses = 'rounded-md font-medium transition-colors duration-200';
  
  const variants = {
    primary: `bg-primary-500 text-white hover:bg-primary-600 
              ${isDark ? 'hover:bg-primary-400' : 'hover:bg-primary-600'}`,
    secondary: `bg-gray-200 text-gray-900 hover:bg-gray-300
                ${isDark ? 'bg-gray-700 text-gray-100 hover:bg-gray-600' : ''}`,
    outline: `border-2 border-primary-500 text-primary-500 hover:bg-primary-50
              ${isDark ? 'border-primary-400 text-primary-400 hover:bg-gray-800' : ''}`,
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg',
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;