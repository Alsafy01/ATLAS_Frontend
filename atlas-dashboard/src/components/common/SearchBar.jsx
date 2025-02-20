import React from 'react';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -mt-2 h-4 w-4 text-text-secondary-light dark:text-text-secondary-dark" />
      <input
        type="text"
        placeholder="Search courses..."
        className="pl-10 pr-4 py-2 border border-border-light dark:border-border-dark rounded-lg 
                 bg-surface-light dark:bg-surface-dark
                 text-text-primary-light dark:text-text-primary-dark
                 placeholder-text-secondary-light dark:placeholder-text-secondary-dark
                 focus:outline-none focus:ring-2 focus:ring-primary-500"
      />
    </div>
  );
};

export default SearchBar;