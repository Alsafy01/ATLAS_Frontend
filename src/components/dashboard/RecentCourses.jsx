import React from 'react';

const RecentCourses = () => {
  return (
    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4 text-text-primary-light dark:text-text-primary-dark">
        Recent Courses
      </h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {[1, 2, 3].map((course) => (
          <div 
            key={course} 
            className="border border-border-light dark:border-border-dark rounded-lg p-4 
                       bg-surface-light dark:bg-surface-dark"
          >
            <div className="h-32 bg-gray-100 dark:bg-gray-800 rounded-lg mb-2"></div>
            <h4 className="font-medium text-text-primary-light dark:text-text-primary-dark">
              Course Title {course}
            </h4>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
              Progress: {course * 25}%
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentCourses;