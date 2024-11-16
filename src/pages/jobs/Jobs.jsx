import { ChevronDown, MapPin, Search } from "lucide-react";
import React, { useState } from "react";
import Filter from "../../Images/Slider.png";
import JobDetail from "./JobDetail";
import LeftJobList from "./LeftJobList";

const Jobs = () => {
  const [selectedJob, setSelectedJob] = useState(null);

  return (
    <div className="max-w-full  sm:p-10 mt-10">
      <hr class="relative left-1/2 right-1/2 -mx-[49vw] w-[98vw] border-t-2 border-gray-200 mt-4" />
      {/* Search Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-2 py-3 px-[5%] mt-1">
        {/* Search Role */}
        <div className="sm:col-span-7 relative">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Search className="h-5 w-5 lg:h-4 lg:w-4 lg:-mt-2 text-[#049c64]" />
          </div>
          <input
            type="text"
            placeholder="Search Role"
            className="lg:text-sm w-full pl-10 pr-3 py-2 bg-emerald-100 border-0 rounded-md focus:ring-2 focus:ring-emerald-500 placeholder-[#049c64] font-medium"
          />
        </div>
        {/* Search By CCID */}
        <div className="sm:col-span-2 relative">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Search className="h-5 w-5 lg:h-4 lg:w-4 lg:-mt-2 text-[#049c64]" />
          </div>
          <input
            type="text"
            placeholder="Search By CCID"
            className="lg:text-sm w-full pl-10 pr-3 py-2 bg-emerald-100 border-0 rounded-md focus:ring-2 focus:ring-emerald-500 placeholder-[#049c64] font-medium"
          />
        </div>
        {/* Location */}
        <div className="sm:col-span-2 relative">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <MapPin className="h-5 w-5 lg:h-4 lg:w-4 lg:-mt-2 text-[#049c64]" />{" "}
            {/* Location Icon */}
          </div>
          <input
            type="text"
            placeholder="Location"
            className="lg:text-sm w-full pl-10 pr-3 py-2 bg-emerald-100 border-0 rounded-md focus:ring-2 focus:ring-emerald-500 placeholder-[#049c64] font-medium"
          />
        </div>
        {/* Search Button */}
        <div className="sm:col-span-1  sm:pl-2">
          <button className="w-full lg:text-sm bg-white border border-[#049c64] border-solid text-[#049c64] xl:px-4 py-2 rounded-md hover:bg-emerald-50">
            Search
          </button>
        </div>
      </div>
      <hr class="relative left-1/2 right-1/2 -mx-[49vw] w-[98vw] border-t-2 border-gray-200 mt-1" />

      {/* Filters Section */}
      <div className="grid grid-cols-1 sm:grid-cols-7 gap-4 mb-6 items-center w-full mt-3 px-[5%]">
        <button className="flex items-center justify-center gap-2 px-4 py-2 rounded-full border border-[#049c64] text-[#049c64] font-medium  md:text-sm xl:text-base">
          <img src={Filter} alt="Filter" className="h-4 w-4" />
          Filter
        </button>

        {["Location", "Job Title", "Exp.Min", "Exp.Max", "Sort By"].map(
          (filter) => (
            <button
              key={filter}
              className="flex items-center justify-center gap-2 px-4 py-2 bg-fff9f7 border border-gray-300 border-solid rounded-full hover:bg-gray-50 md:text-xxs xl:text-base"
            >
              {filter}
              <ChevronDown className="h-4 w-4" />
            </button>
          )
        )}

        <div className="text-gray-700 font-medium text-right md:text-sm xl:text-base">
          36 Jobs Search
        </div>
      </div>

      {/* Main Content */}
      <div className="flex flex-col sm:flex-row w-full gap-4 px-[5%]">
        <div className="w-full h-full sm:w-1/3">
          <LeftJobList onSelectJob={setSelectedJob} />
        </div>
        <div className="w-full sm:w-2/3">
          <JobDetail job={selectedJob} />
        </div>
      </div>

      {/* Pagination */}
      <div className="flex items-center justify-between mt-6 px-[5%]">
        <span className="text-base sm:text-xl text-gray-600">
          1 - 12 of 100
        </span>
        <div className="flex gap-3 sm:gap-5">
          {[1, 2, 3, 4, "....", 10, 11].map((page, index) => (
            <button
              key={index}
              className={`w-8 h-8 flex items-center justify-center rounded ${
                page === 1
                  ? "bg-[#049c64] text-white"
                  : "text-gray-600 hover:bg-gray-100"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="w-8 h-8 flex items-center justify-center rounded text-gray-600 hover:bg-gray-100">
            <ChevronDown className="h-4 w-4 rotate-270" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Jobs;
