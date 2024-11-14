// SavedJobs.js
import React from "react";
import JobDetail from "../jobs/JobDetail";
import LeftJobList from "../jobs/LeftJobList";

const SavedJobs = () => {
  // Sample job data
  const jobs = [
    {
      id: 1,
      title: "Delivery Head - Customer Service Operations",
      company: "Tata Consultancy Services Ltd",
      location: "Mumbai, Pune",
      experience: "15-20 Yrs",
      salary: "$40,000 - $60,000",
      jobId: "#12345",
      ccId: "#120001",
    },
    // Add more job objects as needed
  ];

  return (
    <div className="mb-[5%]">
      {/* Main Content */}
      <div className="flex flex-col sm:flex-row w-full gap-4">
        <div className="w-full sm:w-1/3">
          <LeftJobList />
        </div>
        <div className="w-full sm:w-2/3">
          <JobDetail j />
        </div>
      </div>
    </div>
  );
};

export default SavedJobs;
