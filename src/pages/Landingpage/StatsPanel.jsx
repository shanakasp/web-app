import React from "react";
import Calendar3 from "../../Images/30D.png";
import Calendar1 from "../../Images/3D.png";
import Calendar2 from "../../Images/7D.png";
import Megaphone from "../../Images/Commercial.png";
import Permanent from "../../Images/Permanent Job.png";
const StatsPanel = () => {
  const stats = [
    {
      icon: (
        <img
          src={Permanent}
          alt="Permanent Job"
          className="w-15 h-15 text-#049c64
"
        />
      ), // Fixed the icon as an image
      value: "250+",
      label: "Number of Companies",
    },
    {
      icon: (
        <img
          src={Megaphone}
          alt="Job Ads"
          className="w-15 h-15 text-#049c64
"
        />
      ),
      value: "3000+",
      label: "Number of Job Ads",
    },
    {
      icon: (
        <img
          src={Calendar1}
          alt="Job Ads (3 Days)"
          className="w-15 h-15 text-#049c64
"
        />
      ), // Updated with correct image import
      value: "50+",
      label: "Number of Job Ads (3 Days)",
    },
    {
      icon: (
        <img
          src={Calendar2}
          alt="Job Ads (7 Days)"
          className="w-15 h-15 text-#049c64
"
        />
      ),
      value: "150+",
      label: "Number of Job Ads (7 Days)",
    },
    {
      icon: (
        <img
          src={Calendar3}
          alt="Job Ads (30 Days)"
          className="w-15 h-15 text-#049c64
"
        />
      ),
      value: "2000+",
      label: "Number of Job Ads (30 Days)",
    },
  ];

  return (
    <div>
      {" "}
      <div className="relative z-10 w-full bg-[#fff9f7] pb-5 ">
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 border-b border-gray-300 shadow-lg py-3">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-[#fff9f7] bg-opacity-90 backdrop-blur-sm p-3 sm:p-4 md:p-5 lg:p-6 flex flex-col items-center justify-center hover:shadow-xl transition-shadow duration-300"
            >
              <div className="mb-2 sm:mb-3 md:mb-4 lg:mb-4 text-sm sm:text-base md:text-lg lg:text-xl">
                <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 lg:w-12 lg:h-8">
                  {stat.icon}
                </div>
              </div>
              <div className="text-[#049c64] text-sm sm:text-base md:text-lg lg:text-xl font-bold mb-1 sm:mb-2 md:mb-3 lg:mb-4">
                {stat.value}
              </div>
              <div className="text-[#979797] text-xs sm:text-sm md:text-base lg:text-sm text-center font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="w-full mx-auto pt-5 px-4 bg-[#fff9f7] z-30">
        {/* Stats cards overlaid on waves */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mb-5 gap-4 bg-[#fff9f7] z-30 shadow-sm border border-gray-300 py-4 px-2 shadow-xl rounded-lg">
          {/* Left Column - 2 tables */}
          <div className="space-y-4">
            <div className="flex flex-col bg-[#fff9f7] rounded-lg shadow-sm border border-gray-300 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between p-4">
                <h2 className="text-lg font-medium">
                  Number of Jobs by Location
                </h2>
                <select className="border border-gray-300 rounded-md px-2 py-1 text-xs text-gray-700 bg-[#fff9f7]">
                  <option>This Month</option>
                  <option>Last Month</option>
                  <option>Last 3 Months</option>
                </select>
              </div>
              <div className="grid grid-cols-4 gap-4 p-4 bg-[#fff9f7] text-xs">
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
                  { location: "Salem", count: 20 },
                  { location: "Secunderabad", count: 60 },
                  { location: "Others", count: 60 },
                ].map((job, index) => (
                  <div
                    key={index}
                    className={`flex flex-col items-center justify-center p-1 border-l-2 border-black ${
                      (index + 1) % 4 === 0 ? "border-r-2" : "" // Adds right border to the last item in each row
                    }`}
                  >
                    <span className="text-xxxs xl:text-xxs font-medium">
                      {job.location}: {job.count}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col bg-[#fff9f7] rounded-lg  border border-gray-300 hover:shadow-md transition-shadow duration-200">
              <div className="flex items-center justify-between p-4">
                <h2 className="text-lg font-medium">
                  Number of Jobs by Experience
                </h2>
                <select className="border border-gray-300 rounded-md p-1 text-sm text-gray-700 bg-[#fff9f7]">
                  <option>This Month</option>
                  <option>Last Month</option>
                  <option>Last 3 Months</option>
                </select>
              </div>
              <div className="p-4 bg-[#fff9f7]">
                <div className="w-full border-b border-gray-300">
                  <div className="grid grid-cols-2 bg-sky-950 text-white rounded-t-lg">
                    <div className="p-3 font-medium text-left">Experience</div>
                    <div className="p-3 font-medium text-center">
                      No. of Job Ads
                    </div>
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
                        className={`grid grid-cols-2 hover:bg-gray-50 ${
                          index % 2 === 0 ? "bg-white" : "bg-[#fff9f7]"
                        }`}
                      >
                        <div className="p-3 text-sm text-left">{item.exp}</div>
                        <div className="p-3 text-sm text-center">
                          {item.count}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Middle Column */}
          <div className="flex flex-col bg-fff9f7 rounded-lg shadow-sm border border-gray-300 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between p-4">
              <h2 className="text-lg font-medium">
                Number of Jobs by Industry
              </h2>
              <select className="border border-gray-300 rounded-md p-1 text-sm text-gray-700 bg-[#fff9f7]">
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
              </select>
            </div>
            <div className="p-4 bg-[#fff9f7]">
              <div className="w-full border-b border-gray-300">
                <div className="grid grid-cols-2 bg-sky-950 text-white rounded-t-lg">
                  <div className="p-3 font-medium text-left">Industry</div>
                  <div className="p-3 font-medium text-center">
                    No. of Job Ads
                  </div>
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
                      className={`grid grid-cols-2 hover:bg-gray-50 ${
                        index % 2 === 0 ? "bg-white" : "bg-[#fff9f7]"
                      }`}
                    >
                      <div className="p-3 text-sm text-left">
                        {item.industry}
                      </div>
                      <div className="p-3 text-sm text-center">
                        {item.count}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column */}
          <div className="flex flex-col bg-fff9f7 rounded-lg shadow-sm border border-gray-300 hover:shadow-md transition-shadow duration-200">
            <div className="flex items-center justify-between p-4">
              <h2 className="text-lg font-medium">
                Number of Jobs by Function
              </h2>
              <select className="border border-gray-300 rounded-md p-1 text-sm text-gray-700 bg-[#fff9f7]">
                <option>This Month</option>
                <option>Last Month</option>
                <option>Last 3 Months</option>
              </select>
            </div>
            <div className="p-4 bg-[#fff9f7]">
              <div className="w-full border-b border-gray-300">
                <div className="grid grid-cols-2 bg-sky-950 text-white rounded-t-lg">
                  <div className="p-3 font-medium text-left">Function</div>
                  <div className="p-3 font-medium text-center">
                    No. of Job Ads
                  </div>
                </div>
                <div className="divide-y divide-gray-200">
                  {[
                    { salary: "10K-30K", count: 10 },
                    { salary: "30K-50K", count: 20 },
                    { salary: "50K-70K", count: 30 },
                    { salary: "70K-90K", count: 40 },
                    { salary: "90K-1L", count: 50 },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className={`grid grid-cols-2 hover:bg-gray-50 ${
                        index % 2 === 0 ? "bg-white" : "bg-[#fff9f7]"
                      }`}
                    >
                      <div className="p-3 text-sm text-left">{item.salary}</div>
                      <div className="p-3 text-sm text-center">
                        {item.count}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatsPanel;
