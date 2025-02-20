import React from 'react';
import { Bell, Award, BookOpen, MessageSquare } from 'lucide-react';

const NotificationsBox = ({ notifications = [], onClose }) => {
  // Mock notifications data
  const defaultNotifications = [
    {
      id: 1,
      type: 'certificate',
      title: 'New Certificate Issued',
      message: 'Your Blockchain Fundamentals certificate has been issued',
      time: '2 hours ago',
      read: false,
      icon: Award
    },
    {
      id: 2,
      type: 'course',
      title: 'Course Reminder',
      message: 'Continue your progress in Smart Contracts Development',
      time: '1 day ago',
      read: true,
      icon: BookOpen
    },
    {
      id: 3,
      type: 'message',
      title: 'AI Assistant Update',
      message: 'New learning recommendations available',
      time: '2 days ago',
      read: true,
      icon: MessageSquare
    }
  ];

  const allNotifications = notifications.length > 0 ? notifications : defaultNotifications;

  return (
    <div className="absolute right-0 mt-2 w-80 bg-surface-light dark:bg-surface-dark rounded-lg shadow-lg border border-border-light dark:border-border-dark overflow-hidden">
      <div className="p-4 border-b border-border-light dark:border-border-dark">
        <div className="flex items-center justify-between">
          <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
            Notifications
          </h3>
          <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            {allNotifications.filter(n => !n.read).length} new
          </span>
        </div>
      </div>

      <div className="max-h-96 overflow-y-auto">
        {allNotifications.length > 0 ? (
          allNotifications.map((notification) => (
            <div
              key={notification.id}
              className={`p-4 border-b border-border-light dark:border-border-dark hover:bg-gray-50 dark:hover:bg-gray-800 
                ${!notification.read ? 'bg-primary-50 dark:bg-primary-900/20' : ''}`}
            >
              <div className="flex items-start space-x-3">
                <div className="flex-shrink-0">
                  <notification.icon className="h-6 w-6 text-primary-500" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium text-text-primary-light dark:text-text-primary-dark">
                    {notification.title}
                  </p>
                  <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                    {notification.message}
                  </p>
                  <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-1">
                    {notification.time}
                  </p>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="p-4 text-center text-text-secondary-light dark:text-text-secondary-dark">
            No notifications
          </div>
        )}
      </div>

      <div className="p-3 text-center border-t border-border-light dark:border-border-dark">
        <button
          className="text-sm text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
          onClick={() => {/* Handle view all */}}
        >
          View all notifications
        </button>
      </div>
    </div>
  );
};

export default NotificationsBox;