import { ChevronDown, Filter, Search } from "lucide-react";
import React from "react";
const JobListing = () => {
  return (
    <div className="max-w-full mx-auto p-4 mt-10">
      <hr className="xl:mt-4" />
      {/* Search Section */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-2  px-10 py-3">
        {/* Search Role */}
        <div className="md:col-span-7 relative">
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
        <div className="md:col-span-2 relative">
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
        <div className="md:col-span-2 relative">
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
        <div className="md:col-span-1">
          <button className="w-full bg-white border border-emerald-500 border-solid text-emerald-500 px-4 py-2 rounded-md">
            Search
          </button>
        </div>
      </div>
      <hr />

      <div>
        {/* Filters */}
        <div className="flex flex-wrap gap-2 mb-6 items-center">
          <button className="flex items-center gap-2 px-4 py-2 bg-emerald-500 text-white rounded-md">
            <Filter className="h-4 w-4" />
            Filter
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 border-solid rounded-md">
            Location
            <ChevronDown className="h-4 w-4" />
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 border-solid rounded-md">
            Job Title
            <ChevronDown className="h-4 w-4" />
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 border-solid rounded-md">
            Exp.Min
            <ChevronDown className="h-4 w-4" />
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 border-solid rounded-md">
            Exp.Max
            <ChevronDown className="h-4 w-4" />
          </button>

          <button className="flex items-center gap-2 px-4 py-2 bg-white border border-gray-300 border-solid rounded-md">
            Sort By
            <ChevronDown className="h-4 w-4" />
          </button>

          <span className="text-gray-700 font-medium">36 Jobs Search</span>
        </div>
      </div>
    </div>
  );
};

export default JobListing;
