import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { Home, BookOpen, User, MessageSquare, Award, Settings, FileText } from 'lucide-react';

const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const navigation = [
    { name: 'Dashboard', icon: Home, path: '/' },
    { name: 'Courses', icon: BookOpen, path: '/courses' },
    { name: 'Profile', icon: User, path: '/profile' },
    { name: 'AI Assistant', icon: MessageSquare, path: '/ai-assistant' },
    { name: 'Certificates', icon: Award, path: '/certificates' }
  ];

  const adminNavigation = [
    { name: 'Certificate Management', icon: Settings, path: '/admin/certificates' },
    { name: 'Issue Certificate', icon: FileText, path: '/admin/certificates/issue' }
  ];

  return (
    <div className="w-64 bg-surface-light dark:bg-surface-dark border-r border-border-light dark:border-border-dark min-h-screen">
      <nav className="p-4 space-y-1">
        {navigation.map((item) => (
          <button
            key={item.path}
            onClick={() => navigate(item.path)}
            className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg ${
              location.pathname === item.path
                ? 'bg-primary-50 text-primary-500 dark:bg-primary-900 dark:text-primary-300'
                : 'text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-50 dark:hover:bg-gray-800'
            }`}
          >
            <item.icon className="h-5 w-5" />
            <span>{item.name}</span>
          </button>
        ))}
        
        <div className="pt-4 mt-4 border-t border-border-light dark:border-border-dark">
          <div className="px-4 text-sm font-medium text-text-disabled-light dark:text-text-disabled-dark">
            Admin
          </div>
          {adminNavigation.map((item) => (
            <button
              key={item.path}
              onClick={() => navigate(item.path)}
              className={`w-full flex items-center space-x-2 px-4 py-2 rounded-lg mt-2 ${
                location.pathname === item.path
                  ? 'bg-primary-50 text-primary-500 dark:bg-primary-900 dark:text-primary-300'
                  : 'text-text-secondary-light dark:text-text-secondary-dark hover:bg-gray-50 dark:hover:bg-gray-800'
              }`}
            >
              <item.icon className="h-5 w-5" />
              <span>{item.name}</span>
            </button>
          ))}
        </div>
      </nav>
    </div>
  );
};

export default Sidebar;