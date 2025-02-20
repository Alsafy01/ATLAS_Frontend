import React from 'react';
import { Mail, Phone, MapPin, Briefcase, Calendar, Edit2 } from 'lucide-react';

const Profile = () => {
  // Mock user data - would come from API/context in real app
  const user = {
    name: 'Sarah Johnson',
    role: 'Software Engineer',
    email: 'sarah.johnson@example.com',
    phone: '+1 (555) 123-4567',
    location: 'San Francisco, CA',
    company: 'Tech Solutions Inc.',
    joinDate: '2023-01-15',
    bio: 'Passionate about blockchain technology and continuous learning.',
    skills: ['JavaScript', 'React', 'Blockchain', 'Smart Contracts', 'Project Management'],
    education: [
      {
        degree: 'Master of Computer Science',
        school: 'Stanford University',
        year: '2020'
      },
      {
        degree: 'Bachelor of Engineering',
        school: 'MIT',
        year: '2018'
      }
    ]
  };

  return (
    <div className="p-6 bg-background-light dark:bg-background-dark">
      {/* Profile Header */}
      <div className="mb-6 bg-surface-light dark:bg-surface-dark rounded-lg shadow p-6">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-4">
            <div className="h-20 w-20 rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center">
              <span className="text-2xl font-bold text-primary-500">{user.name.charAt(0)}</span>
            </div>
            <div>
              <h1 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark">
                {user.name}
              </h1>
              <p className="text-text-secondary-light dark:text-text-secondary-dark">{user.role}</p>
            </div>
          </div>
          <button className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 text-text-secondary-light dark:text-text-secondary-dark">
            <Edit2 className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Contact Information */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-text-primary-light dark:text-text-primary-dark">
            Contact Information
          </h2>
          <div className="space-y-4">
            <div className="flex items-center text-text-secondary-light dark:text-text-secondary-dark">
              <Mail className="h-5 w-5 mr-3" />
              <span>{user.email}</span>
            </div>
            <div className="flex items-center text-text-secondary-light dark:text-text-secondary-dark">
              <Phone className="h-5 w-5 mr-3" />
              <span>{user.phone}</span>
            </div>
            <div className="flex items-center text-text-secondary-light dark:text-text-secondary-dark">
              <MapPin className="h-5 w-5 mr-3" />
              <span>{user.location}</span>
            </div>
            <div className="flex items-center text-text-secondary-light dark:text-text-secondary-dark">
              <Briefcase className="h-5 w-5 mr-3" />
              <span>{user.company}</span>
            </div>
            <div className="flex items-center text-text-secondary-light dark:text-text-secondary-dark">
              <Calendar className="h-5 w-5 mr-3" />
              <span>Joined {new Date(user.joinDate).toLocaleDateString()}</span>
            </div>
          </div>
        </div>

        {/* Skills */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-text-primary-light dark:text-text-primary-dark">
            Skills
          </h2>
          <div className="flex flex-wrap gap-2">
            {user.skills.map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-sm
                         bg-primary-50 dark:bg-primary-900/50 
                         text-primary-500 dark:text-primary-400"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Education */}
        <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow p-6">
          <h2 className="text-lg font-semibold mb-4 text-text-primary-light dark:text-text-primary-dark">
            Education
          </h2>
          <div className="space-y-4">
            {user.education.map((edu, index) => (
              <div key={index} className="border-l-2 border-primary-500 pl-4">
                <h3 className="font-medium text-text-primary-light dark:text-text-primary-dark">
                  {edu.degree}
                </h3>
                <p className="text-text-secondary-light dark:text-text-secondary-dark">
                  {edu.school}
                </p>
                <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark">
                  {edu.year}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;