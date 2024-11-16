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
    <div className="max-h-[calc(100vh)] overflow-y-auto border rounded-lg custom-scrollbar">
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #f1f1f1;
          border-radius: 4px;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #049c64;
          border-radius: 4px;
          opacity: 0.7;
        }
        
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #037c50;
        }
  
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #979797 #f1f1f1;
        }
      `}</style>
      {jobs.map((job) => (
        <div
          key={job.id}
          onClick={() => onSelectJob(job)}
          className="bg-[#fff9f7] border border-gray-200 border-solid px-2 py-1 cursor-pointer hover:bg-[#f1fff9] hover:border-l-4 hover:border-l-[#049c64] relative group"
        >
          <div className="flex justify-between items-start">
            <div className="space-y-0.5">
              <h3 className="font-medium text-sm sm:text-base md:text-sm lg:text-base text-gray-900">
                {job.title}
              </h3>
              <p className="font-medium text-xs sm:text-sm md:text-xs lg:text-xs text-gray-600">
                {job.company}
              </p>
            </div>
            <div className="flex flex-col items-end gap-1.5">
              <button className="text-gray-400 hover:text-[#049c64]">
                <Bookmark className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-3.5 md:w-3.5" />
              </button>
              <span className="px-2 py-0.5 text-xs md:text-[11px] lg:text-xs text-white bg-[#049c64] rounded-md">
                {job.department}
              </span>
            </div>
          </div>

          <div className="mt-2 sm:mt-3 md:mt-2 space-y-2">
            <div className="flex items-center text-xs md:text-[11px] lg:text-xs gap-3 text-[#979797]">
              <div className="flex items-center gap-1">
                <Briefcase className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-3 md:w-3" />
                <span className="text-xs sm:text-sm md:text-[11px] lg:text-xs">
                  {job.experience}
                </span>
              </div>
              <div className="flex items-center gap-1">
                <MapPin className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-3 md:w-3" />
                <span className="text-xs sm:text-sm md:text-[11px] lg:text-xs">
                  {job.location}
                </span>
              </div>
            </div>

            <div className="mt-2 space-y-2">
              <div className="flex items-start gap-1">
                <MessageSquare className="h-3 w-3 sm:h-3.5 sm:w-3.5 md:h-3 md:w-3 mt-0.5 flex-shrink-0 text-[#979797]" />
                <p className="text-xs md:text-[11px] lg:text-xs line-clamp-2">
                  {job.description}
                  <button className="text-[#049c64] hover:underline ml-1">
                    Read More
                  </button>
                </p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <img
                src={UserIcon}
                alt="User Icon"
                className="h-3.5 w-3.5 sm:h-4 sm:w-4 md:h-3.5 md:w-3.5"
              />
              <span className="text-xs md:text-[11px] lg:text-xs text-gray-600">
                {job.salary}
              </span>
            </div>
          </div>

          <div className="mt-2 pt-2 border-t border-gray-200">
            <div className="flex justify-between text-[10px]">
              <div className="flex gap-1">
                <span className="text-[10px] md:text-[9px] lg:text-[10px] text-[#979797]">
                  Job ID: #{job.id}
                </span>
                <span className="mx-1 text-[#979797]">|</span>
                <span className="text-[10px] md:text-[9px] lg:text-[10px] text-[#979797]">
                  CCID: #{job.ccid}
                </span>
              </div>
            </div>
            <div className="flex justify-between items-center w-full text-[10px] md:text-[9px] lg:text-[10px] mt-2">
              <div className="flex items-center gap-1">
                <span>Posted On: {job.postedOn}</span>
              </div>

              <div className="flex items-center gap-1">
                <span>CC Update date</span>
                <div className="flex items-center gap-1 px-1.5 py-0.5 rounded text-[#049c64] border border-[#049c64] border-solid">
                  <img
                    src={ImageCalender}
                    alt="icon"
                    className="h-3 w-3 md:h-2.5 md:w-2.5"
                  />
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
