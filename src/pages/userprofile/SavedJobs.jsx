// SavedJobs.js
import React from "react";

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
    <div>
      <h2>Saved Jobs</h2>
      {jobs.map((job) => (
        <div key={job.id}>
          <h3>{job.title}</h3>
          <p>{job.company}</p>
          <p>{job.location}</p>
          <p>Experience: {job.experience}</p>
          <p>Salary: {job.salary}</p>
          <p>Job ID: {job.jobId}</p>
          <p>CCID: {job.ccId}</p>
          <button>Apply Job</button>
        </div>
      ))}
    </div>
  );
};

export default SavedJobs;
