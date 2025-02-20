// src/components/common/ThemeSwitcher.jsx
import React from 'react';
import { Sun, Moon, Monitor } from 'lucide-react';
import { useTheme } from '../../contexts/ThemeContext';

const ThemeSwitcher = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div className="relative flex items-center gap-2">
      <button
        onClick={() => setTheme('light')}
        className={`p-2 rounded-lg transition-colors ${
          theme === 'light'
            ? 'bg-primary-100 text-primary-500'
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
        }`}
        title="Light mode"
      >
        <Sun className="h-5 w-5" />
      </button>

      <button
        onClick={() => setTheme('dark')}
        className={`p-2 rounded-lg transition-colors ${
          theme === 'dark'
            ? 'bg-primary-100 text-primary-500 dark:bg-gray-700'
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
        }`}
        title="Dark mode"
      >
        <Moon className="h-5 w-5" />
      </button>

      <button
        onClick={() => setTheme('system')}
        className={`p-2 rounded-lg transition-colors ${
          theme === 'system'
            ? 'bg-primary-100 text-primary-500 dark:bg-gray-700'
            : 'text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800'
        }`}
        title="System preference"
      >
        <Monitor className="h-5 w-5" />
      </button>
    </div>
  );
};

export default ThemeSwitcher;