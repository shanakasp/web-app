import { ChevronDown, Filter, Search } from "lucide-react";
import React from "react";
import JobDetail from "./JobDetail";
import LeftjobList from "./LeftJobList";

const JobListing = () => {
  return (
    <div className="max-w-full mx-auto p-4 sm:p-10 mt-10">
      <hr className="sm:mt-4" />
      {/* Search Section */}
      <div className="grid grid-cols-1 sm:grid-cols-12 gap-2 py-3">
        {/* Search Role */}
        <div className="sm:col-span-7 relative">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search Role"
            className="w-full pl-10 pr-3 py-2 bg-emerald-200 border-0 rounded-md focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        {/* Search By CCID */}
        <div className="sm:col-span-2 relative">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Search By CCID"
            className="w-full pl-10 pr-3 py-2 bg-emerald-200 border-0 rounded-md focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        {/* Location */}
        <div className="sm:col-span-2 relative">
          <div className="absolute inset-y-0 left-3 flex items-center">
            <Search className="h-5 w-5 text-gray-400" />
          </div>
          <input
            type="text"
            placeholder="Location"
            className="w-full pl-10 pr-3 py-2 bg-emerald-200 border-0 rounded-md focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        {/* Search Button */}
        <div className="sm:col-span-1 mt-2 sm:mt-0">
          <button className="w-full bg-white border border-emerald-500 border-solid text-emerald-500 px-4 py-2 rounded-md">
            Search
          </button>
        </div>
      </div>
      <hr />

      <div>
        {/* Filters */}
        <div className="grid grid-cols-1 sm:grid-cols-7 gap-4 mb-6 items-center w-full mt-3">
          {/* Filter Button */}
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-md">
            <Filter className="h-4 w-4" />
            Filter
          </button>

          {/* Location Filter */}
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 border-solid rounded-md">
            Location
            <ChevronDown className="h-4 w-4" />
          </button>

          {/* Job Title Filter */}
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 border-solid rounded-md">
            Job Title
            <ChevronDown className="h-4 w-4" />
          </button>

          {/* Exp. Min Filter */}
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 border-solid rounded-md">
            Exp.Min
            <ChevronDown className="h-4 w-4" />
          </button>

          {/* Exp. Max Filter */}
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 border-solid rounded-md">
            Exp.Max
            <ChevronDown className="h-4 w-4" />
          </button>

          {/* Sort By Filter */}
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-white border border-gray-300 border-solid rounded-md">
            Sort By
            <ChevronDown className="h-4 w-4" />
          </button>
          <div className="text-gray-700 font-medium text-right w-full sm:col-span-2">
            36 Jobs Search
          </div>
        </div>{" "}
      </div>

      <div className="flex flex-col sm:flex-row w-full">
        <div className="w-full sm:w-1/3 mr-0 sm:mr-4 mb-4 sm:mb-0">
          <LeftjobList />
        </div>
        <div className="w-full sm:w-2/3">
          <JobDetail />
        </div>
      </div>

      <div className="flex items-center justify-between mt-6">
        <span className="text-base sm:text-xl text-gray-600">
          1 - 12 of 100
        </span>
        <div className="flex gap-3 sm:gap-5">
          {[1, 2, 3, 4, "....", 10, 11].map((page, index) => (
            <button
              key={index}
              className={`w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded ${
                page === 1 ? "bg-emerald-500 text-white" : "text-gray-600"
              }`}
            >
              {page}
            </button>
          ))}
          <button className="w-6 h-6 sm:w-8 sm:h-8 flex items-center justify-center rounded text-gray-600">
            <ChevronDown className="h-4 w-4 rotate-270" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
