import React, { useState, useRef, useEffect } from 'react';
import { Layout, Bell, Search } from 'lucide-react';
import NotificationsBox from '../dashboard/NotificationsBox';
import ThemeSwitcher from '../common/ThemeSwitcher';

const Topbar = () => {
  const [showNotifications, setShowNotifications] = useState(false);
  const notificationsRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (notificationsRef.current && !notificationsRef.current.contains(event.target)) {
        setShowNotifications(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);
  
  return (
    <header className="h-16 bg-background-light dark:bg-background-dark border-b border-border-light dark:border-border-dark transition-colors duration-200">
      <div className="h-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full flex items-center justify-between">
          <div className="flex items-center">
            <Layout className="h-8 w-8 text-primary-500" />
            <span className="ml-2 text-xl font-semibold text-text-primary-light dark:text-text-primary-dark">
              Corporate LMS
            </span>
          </div>

          <div className="flex items-center space-x-4">
          <ThemeSwitcher />
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
              
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-10 pr-4 py-2 border rounded-lg 
                         border-border-light dark:border-border-dark
                         bg-background-light dark:bg-background-dark
                         text-text-primary-light dark:text-text-primary-dark
                         focus:outline-none focus:ring-2 focus:ring-primary-500"
              />
            </div>
            

            <div className="relative" ref={notificationsRef}>
          <button
            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 relative"
            onClick={() => setShowNotifications(!showNotifications)}
          >
            <Bell className="h-5 w-5 text-text-secondary-light dark:text-text-secondary-dark" />
            <span className="absolute top-0 right-0 h-2 w-2 bg-primary-500 rounded-full"></span>
          </button>
          
          {showNotifications && <NotificationsBox onClose={() => setShowNotifications(false)} />}
        </div>
            
            <button className="p-2">
              <img
                src="/api/placeholder/32/32"
                alt="Profile"
                className="h-8 w-8 rounded-full ring-2 ring-border-light dark:ring-border-dark"
              />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Topbar;