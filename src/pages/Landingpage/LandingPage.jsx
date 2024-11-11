import React, { useEffect, useState } from "react";
import frameImage3 from "../../Images/Back Arrow.png";
import frameImage7 from "../../Images/Ellipse 66.png";
import frameImage from "../../Images/Frame.png";
import frameImage6 from "../../Images/Rectangle 14.png";
import frameImage2 from "../../Images/Vector.png";
import frameImage4 from "../../Images/rightheaderimage.png";

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
        <div
          className="heroBackground"
          style={{
            backgroundImage: `url(${myImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
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
            <div className="leftSearchContainer">
              <div>Start your search</div>{" "}
              <img src={frameImage3} alt="next" className="backarrow" />
            </div>
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
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
