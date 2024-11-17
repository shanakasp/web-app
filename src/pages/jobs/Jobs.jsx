import { ChevronDown, MapPin, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import Filter from "../../Images/Slider.png";
import JobDetail from "./JobDetail";
import LeftJobList from "./LeftJobList";

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024); // 1024px is the lg breakpoint
    };

    handleResize(); // Initial check
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="max-w-full sm:p-10 mt-10">
      <hr className="relative left-1/2 right-1/2 -mx-[49vw] w-[98vw] border-t-2 border-gray-200 mt-4" />

      {/* Search Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 py-3 px-[5%] mt-1">
        {/* Search Role */}
        <div className="sm:col-span-7 relative">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Search className="h-5 w-5 lg:h-4 lg:w-4 lg:-mt-1 text-[#049c64]" />
          </div>
          <input
            type="text"
            placeholder="Search Role"
            className="lg:text-xs w-full pl-10 pr-3 py-2 bg-emerald-100 border-0 rounded-md focus:ring-2 focus:ring-emerald-500 placeholder-[#049c64] font-medium"
          />
        </div>
        {/* Search By CCID */}
        <div className="sm:col-span-2 relative">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Search className="h-5 w-5 lg:h-4 lg:w-4 lg:-mt-1 text-[#049c64]" />
          </div>
          <input
            type="text"
            placeholder="Search By CCID"
            className="lg:text-xs w-full pl-10 pr-3 py-2 bg-emerald-100 border-0 rounded-md focus:ring-2 focus:ring-emerald-500 placeholder-[#049c64] font-medium"
          />
        </div>
        {/* Location */}
        <div className="sm:col-span-2 relative">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <MapPin className="h-5 w-5 lg:h-4 lg:w-4 lg:-mt-1 text-[#049c64]" />
          </div>
          <input
            type="text"
            placeholder="Location"
            className="lg:text-xs w-full pl-10 pr-3 py-2 bg-emerald-100 border-0 rounded-md focus:ring-2 focus:ring-emerald-500 placeholder-[#049c64] font-medium"
          />
        </div>
        {/* Search Button */}
        <div className="sm:col-span-1 sm:pl-2">
          <button className="w-full lg:text-xs xl:text-base px-1 bg-white border border-[#049c64] border-solid text-[#049c64] xl:px-2 py-2 rounded-md hover:bg-emerald-50">
            Search
          </button>
        </div>
      </div>

      <hr className="relative left-1/2 right-1/2 -mx-[49vw] w-[98vw] border-t-2 border-gray-200 mt-1" />

      {/* Filters Section */}
      <div className="grid grid-cols-1 sm:grid-cols-7 gap-4 mb-6 items-center w-full mt-3 px-[5%] overflow-x-auto">
        <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#049c64] text-[#049c64] font-medium md:text-sm xl:text-base whitespace-nowrap">
          <img src={Filter} alt="Filter" className="h-4 w-4" />
          Filter
        </button>

        {["Location", "Job Title", "Exp.Min", "Exp.Max", "Sort By"].map(
          (filter) => (
            <button
              key={filter}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-fff9f7 border border-gray-300 border-solid rounded-full hover:bg-gray-50 md:text-xs xl:text-base lg:text-xs whitespace-nowrap"
            >
              {filter}
              <ChevronDown className="h-4 w-4" />
            </button>
          )
        )}

        <div className="text-gray-700 font-medium text-right md:text-sm xl:text-base whitespace-nowrap">
          36 Jobs Search
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col lg:flex-row w-full gap-4 px-[5%] min-h-screen">
        <div
          className={`${isMobile ? "w-full" : "w-1/3"} h-full overflow-y-auto`}
        >
          <div className="sticky top-0">
            <LeftJobList onSelectJob={setSelectedJob} />
          </div>
        </div>
        <div
          className={`${isMobile ? "w-full" : "w-2/3"} h-full overflow-y-auto`}
        >
          <div className="sticky top-0">
            <JobDetail job={selectedJob} />
          </div>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex flex-col sm:flex-row items-center justify-between mt-6 mb-2 px-[5%] gap-4">
        <span className="text-sm text-gray-600">1 - 12 of 100</span>
        <div className="flex gap-3 xs:gap-6 overflow-x-auto">
          {[1, 2, 3, 4, "....", 10, 11].map((page, index) => (
            <button
              key={index}
              className={`w-6 h-6 flex items-center justify-center rounded ${
                page === 1
                  ? "bg-[#049c64] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="w-6 h-6 flex items-center justify-center rounded text-gray-600 hover:bg-gray-100">
            <ChevronDown className="h-4 w-4 rotate-270" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
