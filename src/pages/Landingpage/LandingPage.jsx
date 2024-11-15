import { Briefcase, MapPin, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import frameImage7 from "../../Images/Ellipse 66.png";
import frameImage9 from "../../Images/Ellipse 67.png";
import frameImage8 from "../../Images/Ellipse 69.png";
import frameImage from "../../Images/Frame.png";
import frameImage6 from "../../Images/Rectangle 14.png";
import frameImage2 from "../../Images/Vector.png";
import myImage from "../../Images/heroBackground.png";
import frameImage4 from "../../Images/rightheaderimage.png";
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
        <div className="absolute top-0 left-0 w-4/5 h-[90%] -z-10">
          <img
            src={myImage}
            alt="background"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="content">
          <div className="left">
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

            <button className="flex items-center space-x-3 bg-[#049c64] text-white px-8 py-4 rounded-full text-xl hover:bg-emerald-500 transition-colors mt-[23%]">
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

          <div className="right flex flex-col relative  max-w-[642px] h-[733px] w-[733px]  mx-auto">
            {/* Background images */}
            <img
              src={frameImage6}
              alt="next"
              className="rightbackgroundimage1 absolute"
            />
            <img
              src={frameImage7}
              alt="next"
              className="rightbackgroundimage7 absolute"
            />
            <img
              src={frameImage4}
              alt="next"
              className="rightbackgroundimage2 absolute"
            />
            <img
              src={frameImage8}
              alt="next"
              className="rightbackgroundimage8 absolute"
            />
            <img
              src={frameImage9}
              alt="next"
              className="rightbackgroundimage9 absolute"
            />

            {/* Text content */}
            <div className="rightContent relative z-10 px-1 ">
              <p className="firsttitle">
                Effortless Job Search Across Leading <br /> Companies
              </p>
              <p className="secondtitle">
                Search by role, experience, and location to find opportunities
                that align with your skills and aspirations.
              </p>
            </div>

            {/* Search feature at the bottom */}

            <div className="bg-[#fff9f7] rounded-md shadow-md pl-6 py-2 flex flex-col md:flex-row items-center gap-2 z-20 w-[600px] absolute right-9 top-[82%]">
              <div className="flex items-center flex-1">
                <Search className="w-6 h-6 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Search Role"
                  className="w-full outline-none text-gray-600"
                />
              </div>

              <div className="hidden md:block w-[0.7px] h-10 bg-[#979797]" />

              <div className="flex items-center px-4 py-2">
                <Briefcase className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Exp."
                  className="w-20 outline-none text-gray-600"
                />
              </div>

              <div className="hidden md:block w-[1px] h-10 bg-[#979797]" />

              <div className="flex items-center flex-1 px-4 py-2">
                <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                <input
                  type="text"
                  placeholder="Location"
                  className="w-full outline-none text-gray-600"
                />
              </div>
              <div className="mr-1">
                <button className="bg-[#049c64] p-3 rounded-md hover:bg-emerald-500 transition-colors">
                  <Search className="w-8 h-8 text-white" />
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
