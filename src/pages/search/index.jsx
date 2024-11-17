import { ChevronRight, Search } from "lucide-react";
import React from "react";

const JobSearch = () => {
  const frequentSearches = [
    { text: "Java Developer", type: "role" },
    { text: "Web Developer", type: "role" },
    { text: "Graphic Designer", type: "role" },
    { text: "HR Manager", type: "role" },
    { text: "SAP", type: "skill" },
    { text: "Agile", type: "skill" },
    { text: "SCRUM", type: "skill" },
    { text: "MERN Developer", type: "role" },
    { text: "Consultant", type: "role" },
    { text: "Sales Manager", type: "role" },
  ];

  const searchResults = ["CTS", "Infosys", "Accenture", "Google", "TCS"];

  const paginationNumbers = [1, 2, 3, 4, "...", 10, 11];

  return (
    <div className="max-w-full mt-[12%] lg:mt-[6%] xl:mt-[4%] sm:mt-[8%] ">
      <div className="w-7xl mx-auto  px-[7%]">
        <hr className="relative left-1/2 right-1/2 -mx-[51vw] w-screen border-t-2 border-gray-200" />

        <div className="sm:grid sm:grid-cols-12 gap-4 mt-6">
          {/* Search bar */}
          <div className="sm:col-span-10 relative">
            <div className="absolute inset-y-0 left-3 flex items-center">
              <Search className="h-5 w-5 text-[#049c64]" />
            </div>
            <input
              type="text"
              placeholder="Search With Keywords (Role, JobTitle, Occupation ...)"
              className="w-full pl-10 pr-3 py-2 bg-emerald-100 border-0 rounded-md focus:ring-2 focus:ring-emerald-500 placeholder-[#049c64] font-medium"
            />
          </div>

          {/* Search button */}
          <div className="sm:col-span-2 mt-2 sm:mt-0">
            <button className="w-full bg-white border border-[#049c64] border-solid text-[#049c64] px-4 py-2 rounded-md hover:bg-emerald-50">
              Search
            </button>
          </div>
        </div>

        <hr className="relative left-1/2 right-1/2 -mx-[51vw] w-screen border-t-2 border-gray-200 mt-4" />

        {/* Frequently Searched */}
        <div className="border-2 mt-6 p-4">
          <h2 className="text-base font-medium mb-4">Frequently Searched</h2>
          <div className="flex flex-wrap gap-3">
            {frequentSearches.map((item, index) => (
              <button
                key={index}
                className="text-sm px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-md text-blue-500"
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>

        {/* Search Results */}
        <div className="border-2 mt-4 p-4">
          <h2 className="text-base font-medium mb-4 relative inline-block">
            Search Results
            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-[#111111] opacity-70"></span>
          </h2>

          {searchResults.map((company, index) => (
            <div
              key={index}
              className="p-3 hover:bg-gray-50 rounded-md text-sm"
            >
              {company}
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="mt-6 flex items-center justify-between pb-3">
          <span className="text-sm  text-gray-600">1 - 12 of 100</span>
          <div className="flex items-center gap-4 text-sm">
            {paginationNumbers.map((num, index) => (
              <button
                key={index}
                className={`w-4 h-4 flex items-center justify-center ${
                  typeof num === "number" && num === 1
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-100"
                } rounded-md`}
              >
                {num}
              </button>
            ))}
            <button className="w-4 h-4 flex items-center justify-center hover:bg-gray-100 rounded-md">
              <ChevronRight size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
