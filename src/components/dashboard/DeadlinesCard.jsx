import React from 'react';
import { Calendar } from 'lucide-react';

const DeadlinesCard = () => {
  const deadlines = [
    {
      id: 1,
      course: 'Blockchain Fundamentals',
      deadline: '2024-03-01',
      type: 'Assignment'
    },
    {
      id: 2,
      course: 'Project Management',
      deadline: '2024-03-05',
      type: 'Quiz'
    }
  ];

  return (
    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg shadow">
      <h3 className="text-lg font-semibold mb-4 text-text-primary-light dark:text-text-primary-dark">
        Upcoming Deadlines
      </h3>
      <div className="space-y-4">
        {deadlines.map((item) => (
          <div 
            key={item.id}
            className="flex items-start space-x-3 p-3 rounded-lg 
                       border border-border-light dark:border-border-dark"
          >
            <Calendar className="h-5 w-5 text-primary-500" />
            <div>
              <h4 className="font-medium text-text-primary-light dark:text-text-primary-dark">
                {item.course}
              </h4>
              <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                {item.type} due {item.deadline}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeadlinesCard;