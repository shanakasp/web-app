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
      label: "Number of Job Ads(3 Days)",
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-600" />,
      value: "150+",
      label: "Number of Job Ads(7 Days)",
    },
    {
      icon: <Calendar className="w-8 h-8 text-emerald-600" />,
      value: "2000+",
      label: "Number of Job Ads(30 Days)",
    },
  ];

  return (
    <div className="w-full  mx-auto px-4 bg-white">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 py-8">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200"
          >
            <div className="mb-3">{stat.icon}</div>
            <div className="text-2xl font-bold text-emerald-600 mb-1">
              {stat.value}
            </div>
            <div className="text-sm text-gray-600 text-center">
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatsPanel;
