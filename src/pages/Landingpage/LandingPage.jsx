import React, { useEffect, useState } from "react";
import myImage from "../../Images/heroBackground.png";
import Header from "../../components/Header";
import "./LandingPage.css";

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
        <img src={myImage} alt="Description of image" className="leftImage" />

        <div className="content">
          <div className="left">
            <img></img>
            <div className="headerTitle">
              Unlock your Next <br></br> Career Move{" "}
              <div>
                <img></img>
              </div>
            </div>
            <div className="headerSubtitle">
              {" "}
              Tailored opportunities across industries and skill levels,
              <br></br> designed to match your career goals
            </div>

            <div className="leftSearchContainer">
              <div>Start your search</div>
              <div></div>
            </div>
          </div>
          <div className="right"></div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
