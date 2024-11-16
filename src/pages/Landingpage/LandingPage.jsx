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
        <div className="absolute top-0 left-0 w-4/5 h-full -z-10">
          <img
            src={myImage}
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 pt-[7%] pb-[10%] lg:pl-[8%]">
          <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6 pl-[3%]">
              <img
                src={frameImage}
                alt="star"
                className="w-16 md:w-20 mb-4 relative left-[60%]"
              />

              <div className="relative">
                <h1 className="text-5xl font-bold leading-tight">
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

              <p className="md:text-sm  text-gray-700 max-w-2xl">
                Tailored opportunities across industries and skill levels,{" "}
                <br></br>
                designed to match your career goals
              </p>
              <div className="pt-5">
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

            {/* Right Content */}
            <div
              className="w-full lg:w-1/3 bg-cover bg-center bg-no-repeat h-[400px]  shadow-lg rounded-2xl  "
              style={{
                backgroundImage: `url(${backimgr})`, // Ensure backimgr contains a valid image URL
              }}
            >
              <div className="relative md:pt-[20%]   lg:pt-[48%] px-4">
                <div className="space-y-6 md:space-y-8 ">
                  <div className="text-center">
                    <h2 className="text-lg font-bold text-gray-800  ">
                      Effortless Job Search Across Leading Companies
                    </h2>
                    <p className="text-gray-600 text-sm font-medium lg:pt-[5%]">
                      Search by role, experience, and location to find
                      opportunities that align with your skills and aspirations.
                    </p>
                  </div>

                  {/* Search Form */}
                  <div className="bg-[#fff9f7] rounded-lg shadow-md p-2  md:space-y-0 md:flex md:items-center md:space-x-4">
                    {/* Search Role */}
                    <div className="flex items-center flex-1">
                      <Search className="w-5 h-5 text-gray-400 mr-2" />
                      <input
                        type="text"
                        placeholder="Search Role"
                        className="w-full bg-transparent outline-none text-gray-600 text-sm md:text-xs"
                      />
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-8 bg-gray-300" />

                    {/* Experience */}
                    <div className="flex items-center">
                      <Briefcase className="w-4 h-4 text-gray-400 mr-2" />
                      <input
                        type="text"
                        placeholder="Exp"
                        className="w-5 bg-transparent outline-none text-gray-600 text-sm md:text-xs"
                      />
                    </div>

                    {/* Divider */}
                    <div className="hidden md:block w-px h-8 bg-gray-300" />

                    {/* Location */}
                    <div className="flex items-center flex-1">
                      <MapPin className="w-5 h-5 text-gray-400 mr-2" />
                      <input
                        type="text"
                        placeholder="Location"
                        className="w-full bg-transparent outline-none text-gray-600 text-sm md:text-xs"
                      />
                    </div>

                    {/* Search Button */}
                    <button className="w-full md:w-auto bg-[#049c64] hover:bg-emerald-500 text-white p-3 rounded-md transition-colors">
                      <Search className="w-5 h-5 mx-auto" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Wave Design Section */}
      <div className="-mt-[4%]">
        {" "}
        <WaveDesign />
      </div>

      {/* Stats Panel */}
      <div className="mt-8 md:mt-12 lg:mt-20 ">
        <StatsPanel />
      </div>

      {/* Testimonial and Review Sections */}
      <Testimonial />
      <Review />
    </div>
  );
}

export default LandingPage;
