import React, { useState, useRef } from "react";
import { Award, Upload, Users, AlertCircle, File, X } from "lucide-react";

const CertificateIssuing = () => {
  const fileInputRef = useRef(null);
  const [formData, setFormData] = useState({
    studentId: "",
    certificateType: "course",
    courseName: "",
    issueDate: "",
    expiryDate: "",
    additionalDetails: "",
  });
  const [selectedFile, setSelectedFile] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Create FormData object to handle file upload
    const data = new FormData();
    Object.keys(formData).forEach((key) => {
      data.append(key, formData[key]);
    });
    if (selectedFile) {
      data.append("certificate", selectedFile);
    }

    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setSelectedFile(null);
      setFormData({
        studentId: "",
        certificateType: "course",
        courseName: "",
        issueDate: "",
        expiryDate: "",
        additionalDetails: "",
      });
    }, 2000);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (
      file &&
      (file.type === "application/pdf" || file.type.startsWith("image/"))
    ) {
      setSelectedFile(file);
    } else {
      alert("Please upload a PDF or image file");
    }
  };

  const handleFileRemove = () => {
    setSelectedFile(null);
    fileInputRef.current.value = "";
  };

  // Add this before the return statement
  const fileUploadSection = (
    <div className="border-2 border-dashed border-border-light dark:border-border-dark rounded-lg p-6">
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept="application/pdf,image/*"
        className="hidden"
        id="certificate-file"
      />

      {selectedFile ? (
        <div className="flex items-center justify-between p-3 bg-surface-light dark:bg-surface-dark rounded-lg">
          <div className="flex items-center space-x-3">
            <File className="h-6 w-6 text-primary-500" />
            <div>
              <p className="text-text-primary-light dark:text-text-primary-dark font-medium">
                {selectedFile.name}
              </p>
              <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm">
                {(selectedFile.size / 1024 / 1024).toFixed(2)} MB
              </p>
            </div>
          </div>
          <button
            type="button"
            onClick={handleFileRemove}
            className="p-1 hover:bg-gray-100 dark:hover:bg-gray-800 rounded"
          >
            <X className="h-5 w-5 text-text-secondary-light dark:text-text-secondary-dark" />
          </button>
        </div>
      ) : (
        <label
          htmlFor="certificate-file"
          className="flex flex-col items-center justify-center cursor-pointer py-8"
        >
          <Upload className="h-12 w-12 text-text-secondary-light dark:text-text-secondary-dark mb-2" />
          <p className="text-text-primary-light dark:text-text-primary-dark font-medium">
            Upload Certificate Template
          </p>
          <p className="text-text-secondary-light dark:text-text-secondary-dark text-sm mt-1">
            PDF or Image files up to 10MB
          </p>
        </label>
      )}
    </div>
  );

  // Insert the fileUploadSection in the form, after the Additional Details field
  // Find this section in your existing form:

  return (
    <div className="p-6 bg-background-light dark:bg-background-dark">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold text-text-primary-light dark:text-text-primary-dark">
          Issue New Certificate
        </h1>
        <p className="text-text-secondary-light dark:text-text-secondary-dark mt-2">
          Create and issue blockchain-verified certificates to students
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Issue Form */}
        <div className="lg:col-span-2">
          <form
            onSubmit={handleSubmit}
            className="bg-surface-light dark:bg-surface-dark rounded-lg shadow p-6"
          >
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
                  Student ID
                </label>
                <input
                  type="text"
                  name="studentId"
                  value={formData.studentId}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border
                           border-border-light dark:border-border-dark
                           bg-background-light dark:bg-background-dark
                           text-text-primary-light dark:text-text-primary-dark
                           focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
                  Certificate Type
                </label>
                <select
                  name="certificateType"
                  value={formData.certificateType}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border
                           border-border-light dark:border-border-dark
                           bg-background-light dark:bg-background-dark
                           text-text-primary-light dark:text-text-primary-dark"
                  required
                >
                  <option value="course">Course Completion</option>
                  <option value="skill">Skill Certificate</option>
                  <option value="program">Program Certificate</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
                  Course/Program Name
                </label>
                <input
                  type="text"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border
                           border-border-light dark:border-border-dark
                           bg-background-light dark:bg-background-dark
                           text-text-primary-light dark:text-text-primary-dark
                           focus:outline-none focus:ring-2 focus:ring-primary-500"
                  required
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
                    Issue Date
                  </label>
                  <input
                    type="date"
                    name="issueDate"
                    value={formData.issueDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border
                             border-border-light dark:border-border-dark
                             bg-background-light dark:bg-background-dark
                             text-text-primary-light dark:text-text-primary-dark"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
                    Expiry Date
                  </label>
                  <input
                    type="date"
                    name="expiryDate"
                    value={formData.expiryDate}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border
                             border-border-light dark:border-border-dark
                             bg-background-light dark:bg-background-dark
                             text-text-primary-light dark:text-text-primary-dark"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
                  Additional Details
                </label>
                <textarea
                  name="additionalDetails"
                  value={formData.additionalDetails}
                  onChange={handleChange}
                  rows="4"
                  className="w-full px-4 py-2 rounded-lg border
                           border-border-light dark:border-border-dark
                           bg-background-light dark:bg-background-dark
                           text-text-primary-light dark:text-text-primary-dark
                           focus:outline-none focus:ring-2 focus:ring-primary-500"
                ></textarea>
              </div>

              <div>
                <label className="block text-sm font-medium text-text-primary-light dark:text-text-primary-dark mb-2">
                  Certificate Template
                </label>
                {fileUploadSection}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2 px-4 rounded-lg
                         bg-primary-500 hover:bg-primary-600
                         text-white font-medium
                         disabled:opacity-50 disabled:cursor-not-allowed
                         flex items-center justify-center space-x-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent"></div>
                    <span>Issuing...</span>
                  </>
                ) : (
                  <>
                    <Award className="h-5 w-5" />
                    <span>Issue Certificate</span>
                  </>
                )}
              </button>
            </div>
          </form>
        </div>

        {/* Info Panel */}
        <div className="space-y-4">
          <div className="bg-surface-light dark:bg-surface-dark rounded-lg shadow p-6">
            <h3 className="text-lg font-medium text-text-primary-light dark:text-text-primary-dark mb-4">
              Important Information
            </h3>
            <ul className="space-y-3 text-text-secondary-light dark:text-text-secondary-dark">
              <li className="flex items-start space-x-2">
                <AlertCircle className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>
                  Certificates will be permanently stored on the blockchain
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Users className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>
                  Make sure to verify student credentials before issuing
                </span>
              </li>
              <li className="flex items-start space-x-2">
                <Upload className="h-5 w-5 text-primary-500 flex-shrink-0 mt-0.5" />
                <span>The process may take a few minutes to complete</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CertificateIssuing;
