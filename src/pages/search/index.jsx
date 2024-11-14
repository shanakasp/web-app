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
    <div className="max-w-7xl mx-auto py-[7%] border-t-2">
      <hr></hr>
      <div className="sm:grid sm:grid-cols-12 gap-4 mt-4">
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

      <div class="border-b-2 mt-2"></div>

      {/* Frequently Searched */}
      <div class="border-2 mt-2">
        <div className="mb-8  pt-3">
          <h2 className="text-lg font-medium my-2 ml-3">Frequently Searched</h2>
          <div className="flex flex-wrap gap-2">
            {frequentSearches.map((item, index) => (
              <button
                key={index}
                className="px-4 py-2 bg-gray-50 hover:bg-gray-100 rounded-md text-blue-500"
              >
                {item.text}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Search Results */}
      <div class="border-2 mt-2 p-3">
        <h2 className="text-lg font-medium mb-4">Search Results</h2>

        {searchResults.map((company, index) => (
          <div key={index} className="p-3  hover:bg-gray-50">
            {company}
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-base sm:text-xl text-gray-600">
          1 - 12 of 100
        </span>
        <div className="flex items-center gap-2">
          {paginationNumbers.map((num, index) => (
            <button
              key={index}
              className={`w-8 h-8 flex items-center justify-center  
                ${
                  typeof num === "number" && num === 1
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
            >
              {num}
            </button>
          ))}
          <button className="w-8 h-8 flex items-center justify-center hover:bg-gray-100">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
