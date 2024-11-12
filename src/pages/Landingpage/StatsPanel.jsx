import { Building2, Calendar, Megaphone } from "lucide-react";
import React from "react";

const StatsPanel = () => {
  const stats = [
    {
      icon: <Building2 className="w-8 h-8 text-emerald-600" />,
      value: "250+",
      label: "Number of Companies",
    },
    {
      icon: <Megaphone className="w-8 h-8 text-emerald-600" />,
      value: "3000+",
      label: "Number of Job Ads",
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-600" />,
      value: "50+",
      label: "Number of Job Ads (3 Days)",
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-600" />,
      value: "150+",
      label: "Number of Job Ads (7 Days)",
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-600" />,
      value: "2000+",
      label: "Number of Job Ads (30 Days)",
    },
  ];

  return (
    <div className="w-full mx-auto px-4 rounded-lg bg-[#fff9f7]">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8">
        {/* Left Column - 2 tables */}
        <div className="space-y-4">
          <div className="flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between p-4">
              <h2 className="text-lg font-semibold">
                Number of Jobs by Location
              </h2>
              <select className="border border-gray-300 rounded-md p-1 text-sm text-gray-700">
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
              </select>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4">
              {[
                { location: "Ahmedabad", count: 10 },
                { location: "Bengaluru", count: 5 },
                { location: "Chennai", count: 20 },
                { location: "Coimbatore", count: 20 },
                { location: "Delhi", count: 30 },
                { location: "Gurgaon", count: 20 },
                { location: "Hyderabad", count: 20 },
                { location: "Kolkata", count: 10 },
                { location: "Madurai", count: 60 },
                { location: "Mumbai", count: 10 },
                { location: "Noida", count: 60 },
                { location: "Pune", count: 6 },
                { location: "Salem", count: 20 },
                { location: "Secunderabad", count: 60 },
                { location: "Others", count: 60 },
              ].map((job, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center border-r border-b border-gray-200 border-solid p-2"
                >
                  <span className="text-sm font-medium">{job.location}</span>
                  <span className="text-sm text-gray-600">{job.count}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between p-4">
              <h2 className="text-lg font-semibold">
                Number of Jobs by Experience
              </h2>
              <select className="border border-gray-300 rounded-md p-1 text-sm text-gray-700">
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
              </select>
            </div>
            <div className="p-4">
              <div className="w-full">
                <div className="grid grid-cols-2 bg-sky-950 text-white rounded-t-lg">
                  <div className="p-3 font-medium">Experience</div>
                  <div className="p-3 font-medium">No. of Job Ads</div>
                </div>
                <div className="divide-y divide-gray-200">
                  {[
                    { exp: "0-2 years", count: 5 },
                    { exp: "3-5 years", count: 20 },
                    { exp: "6-9 years", count: 30 },
                    { exp: "10-13 years", count: 10 },
                    { exp: "14-20 years", count: 6 },
                    { exp: "20+ years", count: 10 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-2 hover:bg-gray-50"
                    >
                      <div className="p-3 text-sm">{item.exp}</div>
                      <div className="p-3 text-sm">{item.count}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column */}
        <div className="flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-semibold">
              Number of Jobs by Industry
            </h2>
            <select className="border border-gray-300 rounded-md p-1 text-sm text-gray-700">
              <option>This Month</option>
              <option>Last Month</option>
              <option>Last 3 Months</option>
            </select>
          </div>
          <div className="p-4">
            <div className="w-full">
              <div className="grid grid-cols-2 bg-sky-950 text-white rounded-t-lg">
                <div className="p-3 font-medium">Industry</div>
                <div className="p-3 font-medium">No. of Job Ads</div>
              </div>
              <div className="divide-y divide-gray-200">
                {[
                  { industry: "Technology/Telecom", count: 10 },
                  { industry: "Services", count: 20 },
                  { industry: "Manufacturing/Engineering", count: 30 },
                  { industry: "Banking/Finance/Insurance", count: 40 },
                  { industry: "Commerce", count: 50 },
                  { industry: "Construction & Engineering", count: 60 },
                  { industry: "Power & Energy", count: 70 },
                  { industry: "Healthcare", count: 80 },
                  { industry: "Logistics", count: 90 },
                  { industry: "Agriculture", count: 100 },
                  { industry: "Lifestyle", count: 110 },
                  { industry: "Others", count: 120 },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 hover:bg-gray-50"
                  >
                    <div className="p-3 text-sm">{item.industry}</div>
                    <div className="p-3 text-sm">{item.count}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200">
          <div className="flex items-center justify-between p-4">
            <h2 className="text-lg font-semibold">
              Number of Jobs by Function
            </h2>
            <select className="border border-gray-300 rounded-md p-1 text-sm text-gray-700">
              <option>This Month</option>
              <option>Last Month</option>
              <option>Last 3 Months</option>
            </select>
          </div>
          <div className="p-4">
            <div className="w-full">
              <div className="grid grid-cols-2 bg-sky-950 text-white rounded-t-lg">
                <div className="p-3 font-medium">Function</div>
                <div className="p-3 font-medium">No. of Job Ads</div>
              </div>
              <div className="divide-y divide-gray-200">
                {[
                  { function: "Technology", count: 20 },
                  { function: "Human Resources", count: 16 },
                  { function: "Finance", count: 20 },
                  { function: "Operations & Supply Chain", count: 14 },
                  { function: "Customer Service/Support", count: 15 },
                  { function: "Sales/Business Development", count: 38 },
                  { function: "Healthcare", count: 48 },
                  { function: "Legal & Compliance", count: 24 },
                  {
                    function: "Data Analytics & Business Intelligence",
                    count: 3,
                  },
                  { function: "Education", count: 15 },
                  { function: "Engineering", count: 55 },
                  { function: "Others", count: 155 },
                ].map((item, index) => (
                  <div
                    key={index}
                    className="grid grid-cols-2 hover:bg-gray-50"
                  >
                    <div className="p-3 text-sm">{item.function}</div>
                    <div className="p-3 text-sm">{item.count}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
