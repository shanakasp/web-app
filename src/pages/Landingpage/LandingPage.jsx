import { Briefcase, MapPin, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import frameImage from "../../Images/Frame.png";
import frameImage6 from "../../Images/LRight.png";
import frameImage2 from "../../Images/Vector.png";
import myImage from "../../Images/heroBackground.png";
import Header from "../../components/Header";
import "./LandingPage.css";
import Review from "./Review";
import StatsPanel from "./StatsPanel";
import Testimonial from "./Testimonial";
import WaveDesign from "./Wavedesign";
function LandingPage() {
  const [isHeaderScrolled, setIsHeaderScrolled] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const handleScroll = () => {
      setIsHeaderScrolled(window.pageYOffset > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <Header isScrolled={isHeaderScrolled} />
      <div className="heroSection">
        <div className="absolute top-0 left-0 w-4/5 h-[100%] -z-10">
          <img
            src={myImage}
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="content flex flex-col lg:flex-row items-center lg:items-start">
          <div className="left w-full lg:w-1/2 p-4">
            <img src={frameImage} alt="star" className="star" />
            <div className="relative">
              <div className="headerTitle text-5xl md:text-7xl font-bold z-50 relative">
                Unlock your Next <br />
                <span
                  style={{ color: "#049c64", position: "relative", zIndex: 10 }}
                >
                  Career
                </span>{" "}
                Move
              </div>

              {/* Image positioned behind the "Career" text */}
              <img
                src={frameImage2}
                alt="shadow"
                className="absolute -mt-[8%] -z-10 top-[130%] -left-[5%] transform -translate-y-1/2"
              />
            </div>

            <div className="headerSubtitle text-lg xl:text-xl md:text-lg mt-6 z-50">
              Tailored opportunities across industries and skill levels,
              <br />
              designed to match your career goals
            </div>

            <button className="flex items-center space-x-3 bg-[#049c64] text-white px-8 py-4 rounded-full text-xl hover:bg-emerald-500 transition-colors mt-[15%]">
              <span
                onClick={() => navigate("/jobs")}
                className="cursor-pointer  "
              >
                Start Your Search
              </span>
              <div className="flex items-center justify-center w-6 h-6 rounded-full border-2 border-white">
                <svg
                  className="w-6 h-6"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </div>
            </button>
          </div>
          <div
            className="flex flex-col items-center justify-between w-full h-full xl:w-[642px] xl:h-[733px] rounded-3xl p-6 relative"
            style={{
              backgroundImage: `url(${frameImage6})`,
              backgroundSize: "contain",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              overflow: "hidden",
            }}
          >
            {/* Illustration and Heading */}
            <div className="flex flex-col items-center justify-center text-center mb-auto pt-[35%] px-4 sm:px-6 md:px-8  ">
              <div className="relative w-full h-36 sm:h-40 md:h-48 flex items-center justify-center">
                {/* Add any SVG or images here if necessary */}
              </div>
              <h1 className="text-[#333333] opacity-90 font-bold text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-2xl mt-4 max-w-full sm:max-w-3xl md:max-w-4xl lg:max-w-5xl px-4 sm:px-6 md:px-8 text-center">
                Effortless Job Search Across Leading Companies
              </h1>
              <p className="text-gray-600 mt-[3%] text-base sm:text-base md:text-base lg:text-lg max-w-full sm:max-w-2xl md:max-w-2xl lg:max-w-2xl px-4 sm:px-6 md:px-8 font-medium text-left">
                Search by role, experience, and location to find opportunities
                that align with your skills and aspirations.
              </p>
            </div>

            {/* Search Fields */}
            <div className="bg-[#fff9f7] rounded-md shadow-md py-3 px-2 sm:px-4 flex flex-col md:flex-row items-center gap-2 z-20 mt-auto max-w-full mx-auto sm:max-w-2xl md:max-w-2xl lg:max-w-2xl sm:-pl-[15%]">
              {/* Search Role */}
              <div className="flex items-center flex-1">
                <Search className="w-4 h-5 sm:w-6 sm:h-6 text-gray-400 mr-2 sm:mr-3" />
                <input
                  type="text"
                  placeholder="Search Role"
                  className="flex-grow outline-none text-gray-600 text-xs sm:text-sm md:text-base"
                />
              </div>

              {/* Divider */}
              <div className="hidden md:block w-[1px] h-8 md:h-10 bg-[#979797]" />

              {/* Experience */}
              <div className="flex items-center px-2 sm:px-4 py-2">
                <Briefcase className="w-4 h-5 sm:w-4 sm:h-6 text-gray-400 mr-2 sm:mr-3" />
                <input
                  type="text"
                  placeholder="Exp."
                  className="w-14 sm:w-16 outline-none text-gray-600 text-xs sm:text-sm md:text-base"
                />
              </div>

              {/* Divider */}
              <div className="hidden md:block w-[1px] h-8 md:h-10 bg-[#979797]" />

              {/* Location */}
              <div className="flex items-center flex-1 px-2 sm:px-4 py-2">
                <MapPin className="w-4 h-5 sm:w-6 sm:h-6 text-gray-400 mr-2 sm:mr-3" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-14 sm:w-16 outline-none text-gray-600 text-xs sm:text-sm md:text-base"
                />
              </div>

              {/* Search Button */}
              <div>
                <button className="bg-[#049c64] p-2 sm:p-3 rounded-md hover:bg-emerald-500 transition-colors">
                  <Search className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "-18%" }}>
        {" "}
        <WaveDesign />
      </div>
      <div style={{ marginTop: "8%" }}>
        <StatsPanel />
      </div>
      {/* <JobStatisticsDashboard /> */}
      <Testimonial />
      <Review />
    </div>
  );
}

export default LandingPage;
