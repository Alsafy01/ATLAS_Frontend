import React from 'react';
import RecentCourses from '../components/dashboard/RecentCourses';
import DeadlinesCard from '../components/dashboard/DeadlinesCard';
import ProgressCard from '../components/dashboard/ProgressCard';
import CertificatesCard from '../components/dashboard/CertificatesCard';

const Dashboard = () => {
  return (
    <div className="p-6 bg-background-light dark:bg-background-dark">
      <h1 className="text-2xl font-bold mb-6 text-text-primary-light dark:text-text-primary-dark">
        Dashboard
      </h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <ProgressCard />
        <DeadlinesCard />
        <CertificatesCard />
      </div>
      
      <RecentCourses />
    </div>
  );
};

export default Dashboard;