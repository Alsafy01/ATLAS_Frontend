import React from 'react';

const CourseCard = ({ course }) => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow overflow-hidden">
      <div className="h-48 bg-gray-100 dark:bg-gray-800"></div>
      <div className="p-4">
        <div className="flex justify-between items-start mb-2">
          <h3 className="font-semibold text-text-primary-light dark:text-text-primary-dark">
            {course.title}
          </h3>
          <span className="bg-primary-50 text-primary-500 dark:bg-primary-900 dark:text-primary-300 text-xs px-2 py-1 rounded">
            {course.category}
          </span>
        </div>
        <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mb-3">
          Instructor: {course.instructor}
        </p>
        <div className="mb-3">
          <div className="flex justify-between text-sm mb-1">
            <span className="text-text-secondary-light dark:text-text-secondary-dark">Progress</span>
            <span className="text-text-primary-light dark:text-text-primary-dark">{course.progress}%</span>
          </div>
          <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
            <div 
              className="bg-primary-500 h-2 rounded-full" 
              style={{ width: `${course.progress}%` }}
            ></div>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
            {course.duration}
          </span>
          <button className="px-4 py-2 bg-primary-500 hover:bg-primary-600 dark:hover:bg-primary-400 text-white rounded-lg">
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;