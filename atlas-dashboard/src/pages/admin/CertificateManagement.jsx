import React, { useState } from 'react';
import { Plus, Search, Edit2, Trash2, Award } from 'lucide-react';

const CertificateManagement = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showAddModal, setShowAddModal] = useState(false);
  const [certificates, setCertificates] = useState([
    {
      id: 1,
      templateName: 'Blockchain Certification',
      courseName: 'Blockchain Fundamentals',
      issueDate: '2024-02-15',
      validityPeriod: '3 years',
      status: 'active',
      issuedCount: 45
    },
    {
      id: 2,
      templateName: 'Smart Contract Developer',
      courseName: 'Smart Contract Development',
      issueDate: '2024-01-20',
      validityPeriod: '3 years',
      status: 'draft',
      issuedCount: 0
    }
  ]);

  const filteredCertificates = certificates.filter(cert =>
    cert.templateName.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cert.courseName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-6 bg-background-light dark:bg-background-dark">
      {/* Header */}
      <div className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark">
            Certificate Management
          </h1>
          <button
            onClick={() => setShowAddModal(true)}
            className="flex items-center px-4 py-2 bg-primary-500 text-white rounded-lg
                     hover:bg-primary-600 dark:hover:bg-primary-400"
          >
            <Plus className="h-5 w-5 mr-2" />
            New Template
          </button>
        </div>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 
                         text-text-secondary-light dark:text-text-secondary-dark" />
          <input
            type="text"
            placeholder="Search templates..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2 border rounded-lg
                     border-border-light dark:border-border-dark
                     bg-surface-light dark:bg-surface-dark
                     text-text-primary-light dark:text-text-primary-dark
                     placeholder-text-secondary-light dark:placeholder-text-secondary-dark
                     focus:outline-none focus:ring-2 focus:ring-primary-500"
          />
        </div>
      </div>

      {/* Certificates Table */}
      <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-800">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium 
                           text-text-secondary-light dark:text-text-secondary-dark
                           uppercase tracking-wider">
                  Template Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium 
                           text-text-secondary-light dark:text-text-secondary-dark
                           uppercase tracking-wider">
                  Course
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium 
                           text-text-secondary-light dark:text-text-secondary-dark
                           uppercase tracking-wider">
                  Issue Date
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium 
                           text-text-secondary-light dark:text-text-secondary-dark
                           uppercase tracking-wider">
                  Validity
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium 
                           text-text-secondary-light dark:text-text-secondary-dark
                           uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium 
                           text-text-secondary-light dark:text-text-secondary-dark
                           uppercase tracking-wider">
                  Issued
                </th>
                <th className="px-6 py-3 relative">
                  <span className="sr-only">Actions</span>
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-light dark:divide-border-dark">
              {filteredCertificates.map((cert) => (
                <tr key={cert.id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <Award className="h-5 w-5 text-primary-500 mr-2" />
                      <span className="text-text-primary-light dark:text-text-primary-dark">
                        {cert.templateName}
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-text-primary-light dark:text-text-primary-dark">
                    {cert.courseName}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-text-secondary-light dark:text-text-secondary-dark">
                    {new Date(cert.issueDate).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-text-secondary-light dark:text-text-secondary-dark">
                    {cert.validityPeriod}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`px-2 py-1 text-xs rounded-full ${
                      cert.status === 'active'
                        ? 'bg-green-100 dark:bg-green-900/50 text-green-600 dark:text-green-400'
                        : 'bg-gray-100 dark:bg-gray-900/50 text-gray-600 dark:text-gray-400'
                    }`}>
                      {cert.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-text-secondary-light dark:text-text-secondary-dark">
                    {cert.issuedCount}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800
                                     text-text-secondary-light dark:text-text-secondary-dark">
                        <Edit2 className="h-4 w-4" />
                      </button>
                      <button className="p-1 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800
                                     text-red-500 dark:text-red-400">
                        <Trash2 className="h-4 w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Empty State */}
      {filteredCertificates.length === 0 && (
        <div className="text-center py-12">
          <p className="text-text-secondary-light dark:text-text-secondary-dark">
            No certificate templates found matching your criteria.
          </p>
        </div>
      )}
    </div>
  );
};

export default CertificateManagement;