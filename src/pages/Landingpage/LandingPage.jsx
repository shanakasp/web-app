import { Briefcase, MapPin, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import frameImage from "../../Images/Frame.png";
import backimgr from "../../Images/LRight.png";
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

  const handleClick = () => {
    navigate("/jobs");
  };

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
    <div className="min-h-screen">
      <Header isScrolled={isHeaderScrolled} />

      {/* Hero Section */}
      <section className="relative w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute top-0 left-0 w-4/5 h-[120vh] -z-10">
          <img
            src={myImage}
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 pt-[5%] pb-[15%] lg:pl-[8%]">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 relative ">
              <img
                src={frameImage}
                alt="star"
                className="w-12 md:w-12  relative left-[65%] -top-10"
              />
              <img
                src={frameImage}
                alt="star"
                className="w-12 md:w-12 relative left-[90%] -top-10 "
              />

              <img
                src={frameImage}
                alt="star"
                className="w-12 md:w-12  relative left-[80%] -top-5"
              />

              <div className="relative -mt-20">
                <h1 className="text-4xl font-bold leading-tight">
                  Unlock your Next <br />
                  <span className="text-[#049c64] relative z-10">
                    Career
                  </span>{" "}
                  Move
                </h1>
                <img
                  src={frameImage2}
                  alt="shadow"
                  className="absolute -bottom-1 -left-4 w-32 md:w-30 -z-10"
                />
              </div>

              <p className="md:text-xs  text-gray-700 max-w-2xl">
                Tailored opportunities across industries and skill levels,{" "}
                <br></br>
                designed to match your career goals
              </p>
              <div className="pt-12">
                <button
                  onClick={handleClick}
                  className="flex items-center space-x-3 bg-[#049c64] hover:bg-emerald-500 text-white px-8 py-2.5 rounded-full text-base  transition-colors pt-3"
                >
                  <span>Start Your Search</span>
                  <div className="flex items-center justify-center w-4 h-4 rounded-full border-2 border-white">
                    <svg
                      className="w-4 h-4"
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
            </div>
            <div
              className="w-full lg:w-1/3 xl:w-1/4 mg:w-1/5 bg-cover bg-center bg-no-repeat h-[280px] sm:h-[350px] shadow-lg rounded-2xl "
              style={{
                backgroundImage: `url(${backimgr})`,
                marginTop: "40px",
              }}
            >
              <div className="h-full flex flex-col justify-end p-3 sm:p-4 ">
                <div className="space-y-3 sm:space-y-6">
                  {/* Header Content */}
                  <div className="text-center px-2">
                    <h2 className="text-base font-bold text-gray-800 mb-1 sm:mb-2">
                      Effortless Job Search Across Leading Companies
                    </h2>
                    <p className="text-gray-600 text-xxs font-medium">
                      Search by role, experience, and location to find
                      opportunities that align with your skills and aspirations.
                    </p>
                  </div>

                  {/* Search Form */}
                  <div className="bg-[#fff9f7] rounded-lg shadow-md p-2 space-y-2 sm:space-y-0 sm:flex sm:items-center">
                    {/* Search Role */}
                    <div className="flex items-center w-full sm:w-auto sm:flex-[3]">
                      <Search className="w-4 h-4 text-gray-400 mr-1 flex-shrink-0" />
                      <input
                        type="text"
                        placeholder="Search Role"
                        className="w-full bg-transparent outline-none text-gray-600 xl:text-[8px] lg:text-[10px]"
                      />
                    </div>

                    {/* Divider - Visible only on larger screens */}
                    <div className="hidden sm:block w-px h-6 bg-gray-300 mx-2" />

                    {/* Experience */}
                    <div className="flex items-center w-full sm:w-12">
                      <Briefcase className="w-3 h-3 text-gray-400 mr-1 flex-shrink-0" />
                      <input
                        type="text"
                        placeholder="Exp"
                        className="w-4 bg-transparent outline-none text-gray-600 xl:text-[8px] lg:text-[10px]"
                      />
                    </div>

                    {/* Divider - Visible only on larger screens */}
                    <div className="hidden sm:block w-px h-6 bg-gray-300 mx-2" />

                    {/* Location */}
                    <div className="flex items-center w-full sm:w-auto sm:flex-[2]">
                      <MapPin className="w-3 h-4 text-gray-400 mr-1 flex-shrink-0" />
                      <input
                        type="text"
                        placeholder="Location"
                        className="w-full bg-transparent outline-none text-gray-600 xl:text-[8px] lg:text-[10px]"
                      />
                    </div>

                    {/* Search Button */}
                    <button className="w-full sm:w-auto bg-[#049c64] hover:bg-emerald-500 text-white px-2 py-2 rounded-md transition-colors mt-2 sm:mt-0 sm:ml-2">
                      <Search className="w-4 h-4 mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Design Section */}
      <div className="-mt-[16%]">
        {" "}
        <WaveDesign />
      </div>

      {/* Stats Panel */}
      <div className="mt-8 md:mt-1  ">
        <StatsPanel />
      </div>

      {/* Testimonial and Review Sections */}
      <Testimonial />
      <Review />
    </div>
  );
}

export default LandingPage;
