import { Briefcase, MapPin, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
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
            <div className="headerTitle">
              Unlock your Next <br /> Career Move
            </div>{" "}
            <img src={frameImage2} alt="shadow" className="shadow" />
            <div className="headerSubtitle">
              {" "}
              Tailored opportunities across industries and skill levels,
              <br /> designed to match your career goals
            </div>
            <button className="flex items-center space-x-3 bg-emerald-500 text-white px-8 py-4 rounded-full text-lg hover:bg-emerald-600 transition-colors">
              <span>Start Your Search</span>
              <svg
                className="w-5 h-5"
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
            </button>
          </div>
          <div className="right">
            <img
              src={frameImage6}
              alt="next"
              className="rightbackgroundimage1"
            ></img>
            <img
              src={frameImage7}
              alt="next"
              className="rightbackgroundimage7"
            ></img>
            <img
              src={frameImage4}
              alt="next"
              className="rightbackgroundimage2"
            ></img>
            <img
              src={frameImage8}
              alt="next"
              className="rightbackgroundimage8"
            ></img>
            <img
              src={frameImage9}
              alt="next"
              className="rightbackgroundimage9"
            ></img>
            <div className="rightContent">
              <p className="firsttitle">
                Effortless Job Search Across Leading Companies
              </p>
              <p className="secondtitle">
                Search by role, experience, and location to find opportunities
                that align with your skills and aspirations.
              </p>
              {/* Search Component */}
              <div className="bg-white rounded-full shadow-md p-2 flex flex-col md:flex-row items-center gap-2">
                <div className="flex items-center flex-1 px-4 py-2">
                  <Search className="w-5 h-5 text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Search Role"
                    className="w-full outline-none text-gray-600"
                  />
                </div>

                <div className="hidden md:block w-px h-8 bg-gray-200" />

                <div className="flex items-center px-4 py-2">
                  <Briefcase className="w-5 h-5 text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Exp."
                    className="w-20 outline-none text-gray-600"
                  />
                </div>

                <div className="hidden md:block w-px h-8 bg-gray-200" />

                <div className="flex items-center flex-1 px-4 py-2">
                  <MapPin className="w-5 h-5 text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-full outline-none text-gray-600"
                  />
                </div>

                <button className="bg-emerald-500 p-3 rounded-full hover:bg-emerald-600 transition-colors">
                  <Search className="w-5 h-5 text-white" />
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
