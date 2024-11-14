import { ArrowRight, Bookmark, Share2, Star } from "lucide-react";
import React from "react";

const JobDetail = () => {
  return (
    <div className="max-w-4xl bg-white rounded-lg shadow-lg p-6">
      {/* Header Section */}
      <div className="flex flex-col lg:flex-row justify-between items-start gap-4 mb-4">
        {/* Left side with title and company info */}
        <div className="flex items-start gap-4">
          <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center shrink-0">
            <img
              src="/api/placeholder/64/64"
              alt="Company logo"
              className="w-12 h-12 object-contain"
            />
          </div>
          <div>
            <h1 className="text-xl font-semibold text-gray-900">
              Delivery Head - Customer Service Operations (15-20 yrs)
            </h1>
            <div className="mt-2">
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center px-2 py-1 bg-emerald-500 text-white rounded text-sm">
                  3.7 <Star className="h-3 w-3 ml-1" />
                </span>
                <span className="text-gray-500 text-sm">
                  Based on 81.7k Reviews
                </span>
              </div>
              <h2 className="text-lg text-gray-700 mt-1">
                Tata Consultancy Services Ltd
              </h2>
            </div>
          </div>
        </div>

        {/* Right side with action buttons */}
        <div className="flex gap-2 shrink-0">
          <button className="px-6 py-2 bg-white border-2 border-emerald-500 border-solid text-emerald-500 rounded-full hover:bg-emerald-50 font-medium">
            Follow
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Share2 className="h-5 w-5" />
          </button>
          <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-full">
            <Bookmark className="h-5 w-5" />
          </button>
        </div>
      </div>

      {/* Location and Experience */}
      <div className="flex flex-wrap gap-4 text-gray-600 mt-4">
        <div className="flex items-center gap-2">
          <span className="text-gray-400">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
          </span>
          15-20 Yrs
        </div>
        <div className="flex items-center gap-2">
          <span className="text-gray-400">
            <svg
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </span>
          Mumbai, Pune
        </div>
      </div>

      {/* Job Description */}
      <div className="mt-6">
        <p className="text-gray-600 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>

      {/* Salary and IDs Section */}
      <div className="mt-6 bg-emerald-50 p-4 rounded-lg">
        <div className="text-emerald-600 font-medium text-lg">
          Salary: $40,000 - $60,000
        </div>
        <div className="mt-2 flex flex-wrap gap-4 text-sm text-gray-600">
          <div>Job ID: #12345</div>
          <div>CCID: #120001</div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-6 flex flex-wrap gap-4">
        <button className="inline-flex items-center px-6 py-2 text-emerald-600 hover:bg-emerald-50 rounded-md">
          Read More
        </button>
        <button className="inline-flex items-center px-6 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 gap-2">
          Easy Apply
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

      {/* Posted Date */}
      <div className="mt-4 text-right text-sm text-gray-500">
        2024 August 25
        <span className="ml-2">45d</span>
      </div>
    </div>
  );
};

export default JobDetail;
