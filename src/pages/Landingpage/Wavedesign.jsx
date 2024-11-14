import { Building2, Calendar, Speaker } from "lucide-react";
import React from "react";
import wave1 from "../../Images/Rectangle 16.png";
import wave2 from "../../Images/Rectangle 18.png";
import wave3 from "../../Images/Rectangle 19.png";
import wave4 from "../../Images/Rectangle 20.png";

const WaveDesign = () => {
  const stats = [
    {
      icon: <Building2 className="w-8 h-8 text-emerald-600" />,
      value: "250+",
      label: "Number of Companies",
    },
    {
      icon: <Speaker className="w-8 h-8 text-emerald-600" />,
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
    <div className="relative w-full -z-10 ">
      {/* Wave backgrounds */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={wave1}
          alt="Wave 1"
          className="w-full h-25 object-cover object-top"
        />
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img
          src={wave4}
          alt="Wave 2"
          className="w-full mt-3 h-25 object-cover object-top"
        />
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img
          src={wave3}
          alt="Wave 3"
          className="w-full h-25 object-cover object-top"
        />
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img
          src={wave2}
          alt="Wave 4"
          className="w-full mt-10 h-15 object-cover object-top"
        />
      </div>
    </div>
  );
};

export default WaveDesign;
