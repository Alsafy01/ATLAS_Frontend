import React, { useState } from 'react';
import CourseCard from '../components/courses/CourseCard';
import { Search } from 'lucide-react';

const Courses = () => {
  const [category, setCategory] = useState('all');
  const [sortBy, setSortBy] = useState('latest');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock data for courses
  const courses = [
    {
      id: 1,
      title: 'Blockchain Fundamentals',
      progress: 75,
      duration: '8 weeks',
      instructor: 'Dr. Sarah Johnson',
      category: 'Technology'
    },
    {
      id: 2,
      title: 'Project Management Basics',
      progress: 45,
      duration: '6 weeks',
      instructor: 'John Smith',
      category: 'Management'
    },
    {
      id: 3,
      title: 'Data Security Essentials',
      progress: 30,
      duration: '4 weeks',
      instructor: 'Mike Wilson',
      category: 'Security'
    }
  ];

  // Filter and sort courses
  const filteredCourses = courses
    .filter(course => 
      (category === 'all' || course.category.toLowerCase() === category) &&
      (course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
       course.instructor.toLowerCase().includes(searchQuery.toLowerCase()))
    )
    .sort((a, b) => {
      if (sortBy === 'progress') return b.progress - a.progress;
      if (sortBy === 'popular') return b.id - a.id; // Mock popularity
      return b.id - a.id; // Latest by default
    });

  return (
    <div className="p-6 bg-background-light dark:bg-background-dark">
      {/* Header Section */}
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-4 text-text-primary-light dark:text-text-primary-dark">
          Available Courses
        </h1>
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="flex flex-wrap gap-2">
            <select 
              className="border border-border-light dark:border-border-dark rounded-lg px-3 py-2
                         bg-surface-light dark:bg-surface-dark
                         text-text-primary-light dark:text-text-primary-dark"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="technology">Technology</option>
              <option value="management">Management</option>
              <option value="security">Security</option>
            </select>
            <select 
              className="border border-border-light dark:border-border-dark rounded-lg px-3 py-2
                         bg-surface-light dark:bg-surface-dark
                         text-text-primary-light dark:text-text-primary-dark"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option value="latest">Sort by: Latest</option>
              <option value="popular">Sort by: Popular</option>
              <option value="progress">Sort by: Progress</option>
            </select>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 
                             text-text-secondary-light dark:text-text-secondary-dark" />
            <input
              type="text"
              placeholder="Search courses..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 pr-4 py-2 w-full md:w-64
                         border border-border-light dark:border-border-dark rounded-lg
                         bg-surface-light dark:bg-surface-dark
                         text-text-primary-light dark:text-text-primary-dark
                         placeholder-text-secondary-light dark:placeholder-text-secondary-dark
                         focus:outline-none focus:ring-2 focus:ring-primary-500"
            />
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map(course => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>

      {/* Empty State */}
      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            No courses found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default Courses;