import { ChevronDown } from "lucide-react";
import React from "react";

const JobStatisticsDashboard = () => {
  const DropdownButton = ({ text }) => (
    <button className="flex items-center text-gray-600 text-sm hover:bg-gray-100 px-3 py-1 rounded">
      {text}
      <ChevronDown className="w-4 h-4 ml-1" />
    </button>
  );

  return (
    <div className="max-w-7xl mx-auto p-4 space-y-6">
      <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* Location Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              Number of Jobs by Location
            </h2>
            <DropdownButton text="This Month" />
          </div>
          <div className="flex flex-wrap gap-2">
            <div className="flex items-center bg-gray-100 rounded-full px-4 py-2">
              <span className="text-sm">Ahmedabad: 10</span>
            </div>
            {/* Add other location tags as needed */}
          </div>
        </div>

        {/* Industry Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              Number of Jobs by Industry
            </h2>
            <DropdownButton text="This Month" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-800 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Industry</th>
                  <th className="text-right p-3 rounded-tr-lg">
                    No. of Job Ads
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="p-3">Technology/Telecom</td>
                  <td className="p-3 text-right">10</td>
                </tr>
                {/* Add other industry rows as needed */}
              </tbody>
            </table>
          </div>
        </div>

        {/* Function Section */}
        <div className="bg-white rounded-lg shadow p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-lg font-semibold">
              Number of Jobs by Function
            </h2>
            <DropdownButton text="This Month" />
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-navy-800 text-white">
                  <th className="text-left p-3 rounded-tl-lg">Function</th>
                  <th className="text-right p-3 rounded-tr-lg">
                    No. of Job Ads
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y">
                <tr className="hover:bg-gray-50">
                  <td className="p-3">Technology</td>
                  <td className="p-3 text-right">20</td>
                </tr>
                {/* Add other function rows as needed */}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">
            Number of Jobs by Experience
          </h2>
          <DropdownButton text="This Month" />
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-navy-800 text-white">
                <th className="text-left p-3 rounded-tl-lg">Experience</th>
                <th className="text-right p-3 rounded-tr-lg">No. of Job Ads</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              <tr className="hover:bg-gray-50">
                <td className="p-3">0-2 years</td>
                <td className="p-3 text-right">5</td>
              </tr>
              {/* Add other experience rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobStatisticsDashboard;
