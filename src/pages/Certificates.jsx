import React, { useState } from 'react';
import { Search, Award, Download, ExternalLink, Filter } from 'lucide-react';

const Certificates = () => {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  // Mock certificates data
  const certificates = [
    {
      id: 1,
      name: 'Blockchain Fundamentals',
      issueDate: '2024-02-15',
      expiryDate: '2027-02-15',
      status: 'verified',
      issuer: 'Atlas Academy',
      credentialId: '0x1234...5678',
      type: 'Course Completion'
    },
    {
      id: 2,
      name: 'Smart Contract Development',
      issueDate: '2024-01-20',
      expiryDate: '2027-01-20',
      status: 'verified',
      issuer: 'Atlas Academy',
      credentialId: '0x8765...4321',
      type: 'Certification'
    }
  ];

  const filteredCertificates = certificates.filter(cert => 
    (filter === 'all' || cert.type.toLowerCase() === filter) &&
    (cert.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
     cert.issuer.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div className="p-6 bg-background-light dark:bg-background-dark">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold mb-4 text-text-primary-light dark:text-text-primary-dark">
          My Certificates
        </h1>
        
        {/* Filters and Search */}
        <div className="flex flex-col md:flex-row gap-4 md:items-center justify-between">
          <div className="flex space-x-2">
            <select
              value={filter}
              onChange={(e) => setFilter(e.target.value)}
              className="border border-border-light dark:border-border-dark rounded-lg px-3 py-2
                       bg-surface-light dark:bg-surface-dark
                       text-text-primary-light dark:text-text-primary-dark"
            >
              <option value="all">All Types</option>
              <option value="certification">Certifications</option>
              <option value="course completion">Course Completion</option>
            </select>
          </div>

          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 
                           text-text-secondary-light dark:text-text-secondary-dark" />
            <input
              type="text"
              placeholder="Search certificates..."
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

      {/* Certificates Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCertificates.map(cert => (
          <div
            key={cert.id}
            className="bg-surface-light dark:bg-surface-dark rounded-lg shadow p-6"
          >
            <div className="flex items-start justify-between mb-4">
              <Award className="h-8 w-8 text-primary-500" />
              <span className={`px-3 py-1 rounded-full text-sm
                            ${cert.status === 'verified' 
                              ? 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400'
                              : 'bg-yellow-100 dark:bg-yellow-900/50 text-yellow-600 dark:text-yellow-400'
                            }`}>
                {cert.status === 'verified' ? 'Verified on Chain' : 'Pending'}
              </span>
            </div>

            <h3 className="text-lg font-semibold mb-2 text-text-primary-light dark:text-text-primary-dark">
              {cert.name}
            </h3>
            <p className="text-text-secondary-light dark:text-text-secondary-dark mb-4">
              {cert.issuer}
            </p>

            <div className="space-y-2 text-sm text-text-secondary-light dark:text-text-secondary-dark mb-4">
              <p>Issued: {new Date(cert.issueDate).toLocaleDateString()}</p>
              <p>Expires: {new Date(cert.expiryDate).toLocaleDateString()}</p>
              <p className="font-mono text-xs">ID: {cert.credentialId}</p>
            </div>

            <div className="flex space-x-2">
              <button className="flex items-center px-3 py-2 rounded-lg
                             bg-primary-50 dark:bg-primary-900/50 
                             text-primary-500 dark:text-primary-400
                             hover:bg-primary-100 dark:hover:bg-primary-900">
                <Download className="h-4 w-4 mr-2" />
                Download
              </button>
              <button className="flex items-center px-3 py-2 rounded-lg
                             bg-surface-light dark:bg-surface-dark
                             text-text-secondary-light dark:text-text-secondary-dark
                             border border-border-light dark:border-border-dark
                             hover:bg-gray-50 dark:hover:bg-gray-800">
                <ExternalLink className="h-4 w-4 mr-2" />
                Verify
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredCertificates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            No certificates found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default Certificates;