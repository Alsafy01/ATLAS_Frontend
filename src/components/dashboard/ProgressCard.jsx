import React from 'react';
import { BookOpen, Clock, Trophy } from 'lucide-react';

const ProgressCard = () => {
  // Mock data - in real app, this would come from props or API
  const stats = {
    coursesCompleted: 4,
    totalCourses: 6,
    hoursSpent: 24,
    certificatesEarned: 2,
    overallProgress: 66
  };

  return (
    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
          Learning Progress
        </h3>
        <div className="bg-primary-50 dark:bg-primary-900/50 text-primary-500 dark:text-primary-400 
                      rounded-full px-3 py-1 text-sm font-medium">
          {stats.overallProgress}% Complete
        </div>
      </div>

      <div className="space-y-4">
        {/* Overall Progress Bar */}
        <div className="space-y-2">
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-primary-500 h-2 rounded-full transition-all duration-300" 
              style={{ width: `${stats.overallProgress}%` }}
            ></div>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 pt-2">
          {/* Courses Progress */}
          <div className="space-y-1">
            <div className="flex items-center text-text-secondary-light dark:text-text-secondary-dark">
              <BookOpen className="h-4 w-4 mr-2" />
              <span className="text-sm">Courses</span>
            </div>
            <p className="text-text-primary-light dark:text-text-primary-dark font-semibold">
              {stats.coursesCompleted}/{stats.totalCourses} Completed
            </p>
          </div>

          {/* Hours Spent */}
          <div className="space-y-1">
            <div className="flex items-center text-text-secondary-light dark:text-text-secondary-dark">
              <Clock className="h-4 w-4 mr-2" />
              <span className="text-sm">Time Spent</span>
            </div>
            <p className="text-text-primary-light dark:text-text-primary-dark font-semibold">
              {stats.hoursSpent} Hours
            </p>
          </div>

          {/* Certificates */}
          <div className="space-y-1 col-span-2">
            <div className="flex items-center text-text-secondary-light dark:text-text-secondary-dark">
              <Trophy className="h-4 w-4 mr-2" />
              <span className="text-sm">Certificates Earned</span>
            </div>
            <p className="text-text-primary-light dark:text-text-primary-dark font-semibold">
              {stats.certificatesEarned} Certificates
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProgressCard;