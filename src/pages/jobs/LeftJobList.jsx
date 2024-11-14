import { Bookmark, Briefcase, MapPin, MessageSquare } from "lucide-react";
import React, { useEffect, useState } from "react";
import UserIcon from "../../Images/Salary.png";
import ImageCalender from "../../Images/Screenshot_5.png";
const LeftJobList = ({ onSelectJob }) => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    // Simulated data - replace with actual API call
    setJobs([
      {
        id: "12345",
        ccid: "120001",
        title: "Delivery Head",
        company: "Tata Consultancy Services Ltd",
        experience: "15-20 Yrs",
        location: "Mumbai, Pune",
        salary: "$150 - $400",
        department: "Finance",
        postedOn: "2024 Aug 12",
        ccUpdateDate: "2024 sep 15",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      },
      // Duplicate entries for demonstration
      {
        id: "12346",
        ccid: "120001",
        title: "Delivery Head",
        company: "Tata Consultancy Services Ltd",
        experience: "15-20 Yrs",
        location: "Mumbai, Pune",
        salary: "$150 - $400",
        department: "Finance",
        postedOn: "2024 Aug 12",
        ccUpdateDate: "2024 sep 15",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...",
      },
    ]);
  }, []);

  return (
    <div className=" max-h-[calc(100vh-300px)] overflow-y-auto border rounded-lg ">
      {jobs.map((job) => (
        <div
          key={job.id}
          onClick={() => onSelectJob(job)}
          className="bg-[#fff9f7] border border-gray-200 border-solid p-4 cursor-pointer hover:bg-[#f1fff9] hover:border-l-4 hover:border-l-[#049c64] relative group"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-1">
              <h3 className="font-medium text-lg text-gray-900">{job.title}</h3>
              <p className=" font-medium text-sm text-gray-600">
                {job.company}
              </p>
            </div>
            <div className="flex flex-col items-end gap-2">
              <button className="text-gray-400 hover:text-[#049c64]">
                <Bookmark className="h-5 w-5" />
              </button>
              <span className="px-3 py-1 text-sm text-white bg-[#049c64] rounded-md">
                {job.department}
              </span>
            </div>
          </div>

          <div className="mt-4 space-y-3">
            <div className="flex items-center text-sm gap-4 text-[#979797]">
              <div className="flex items-center gap-2">
                <Briefcase className="h-4 w-4" />
                <span className="text-lg">{job.experience}</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4" />
                <span className="text-lg">{job.location}</span>
              </div>
            </div>

            <div className="mt-3 space-y-3">
              <div className="flex items-start gap-2 text-sm ">
                <MessageSquare className="h-4 w-4 mt-1 flex-shrink-0 text-[#979797]" />
                <p className="line-clamp-2">
                  {job.description}
                  <button className="text-[#049c64] hover:underline ml-1">
                    Read More
                  </button>
                </p>
              </div>
            </div>

            <div className="flex items-center text-sm  gap-2">
              <img src={UserIcon} alt="User Icon" className="h-5 w-5" />
              <span className="text-lg">{job.salary}</span>
            </div>
          </div>

          <div className="mt-3 pt-3 border-t border-gray-200">
            <div className="flex justify-between text-xs ">
              <div className="flex gap-1">
                <span className="text-sm text-[#979797]">
                  Job ID: #{job.id}
                </span>
                <span className="mx-2 text-[#979797]">|</span>
                <span className="text-sm text-[#979797]">
                  CCID: #{job.ccid}
                </span>
              </div>
            </div>{" "}
            <div className="flex justify-between items-center w-full text-xs mt-4">
              {/* Left Section */}
              <div className="flex items-center gap-2">
                <span>Posted On: {job.postedOn}</span>
              </div>

              {/* Right Section */}
              <div className="flex items-center gap-2 ">
                <span>CC Update date</span>
                <div className="flex items-center gap-2 px-2 py-1 rounded text-[#049c64] border border-[#049c64] border-solid">
                  <img src={ImageCalender} alt="icon" className="h-4 w-4" />
                  <span>{job.ccUpdateDate}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default LeftJobList;
