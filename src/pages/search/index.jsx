import { ChevronRight } from "lucide-react";
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
    <div className="max-w-4xl mx-auto p-6">
      {/* Search Bar */}
      <div className="relative mb-8">
        <input
          type="text"
          placeholder="Search with Keywords (Role, Job Title, Occupation..)"
          className="w-full p-3 pr-20 border rounded-md bg-green-50/30 focus:outline-none focus:ring-1 focus:ring-green-500"
        />
        <button className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-1 text-green-500 font-medium rounded-md">
          Search
        </button>
      </div>

      {/* Frequently Searched */}
      <div className="mb-8">
        <h2 className="text-lg font-medium mb-4">Frequently Searched</h2>
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

      {/* Search Results */}
      <div>
        <h2 className="text-lg font-medium mb-4">Search Results</h2>
        <div className="space-y-3">
          {searchResults.map((company, index) => (
            <div key={index} className="p-3 border rounded-md hover:bg-gray-50">
              {company}
            </div>
          ))}
        </div>
      </div>

      {/* Pagination */}
      <div className="mt-6 flex items-center justify-between">
        <span className="text-sm text-gray-600">1 - 12 of 100</span>
        <div className="flex items-center gap-2">
          {paginationNumbers.map((num, index) => (
            <button
              key={index}
              className={`w-8 h-8 flex items-center justify-center rounded-md 
                ${
                  typeof num === "number" && num === 1
                    ? "bg-blue-50 text-blue-600"
                    : "hover:bg-gray-100"
                }`}
            >
              {num}
            </button>
          ))}
          <button className="w-8 h-8 flex items-center justify-center rounded-md hover:bg-gray-100">
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default JobSearch;
