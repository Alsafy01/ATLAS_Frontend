import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

const CertificatesCard = () => {
  const certificates = [
    {
      id: 1,
      name: 'Blockchain Fundamentals',
      date: '2024-02-15',
      status: 'Verified on Chain',
      hash: '0x1234...5678'
    },
    {
      id: 2,
      name: 'Project Management Essentials',
      date: '2024-01-30',
      status: 'Pending Verification',
      hash: null
    }
  ];

  return (
    <div className="bg-surface-light dark:bg-surface-dark p-4 rounded-lg shadow">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold text-text-primary-light dark:text-text-primary-dark">
          Recent Certificates
        </h3>
        <Award className="h-5 w-5 text-primary-500" />
      </div>
      
      <div className="space-y-4">
        {certificates.map((cert) => (
          <div 
            key={cert.id}
            className="p-3 rounded-lg border border-border-light dark:border-border-dark"
          >
            <h4 className="font-medium text-text-primary-light dark:text-text-primary-dark">
              {cert.name}
            </h4>
            <p className="text-sm text-text-secondary-light dark:text-text-secondary-dark mt-1">
              {cert.status}
            </p>
            {cert.hash && (
              <div className="flex items-center mt-2 text-xs text-primary-500 hover:text-primary-600">
                <ExternalLink className="h-3 w-3 mr-1" />
                <a href={`https://explorer.example.com/${cert.hash}`} target="_blank" rel="noopener noreferrer">
                  View on Chain
                </a>
              </div>
            )}
            <p className="text-xs text-text-secondary-light dark:text-text-secondary-dark mt-2">
              Issued: {new Date(cert.date).toLocaleDateString()}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificatesCard;