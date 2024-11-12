import React from "react";
import topPartRight1 from "../../Images/Ellipse 3.png";
import topPart2 from "../../Images/Screenshot_1.png";
import topPart from "../../Images/Screenshot_2.png";
import topPartRight2 from "../../Images/Screenshot_4-removebg-preview.png";

const Index = () => {
  return (
    <div className="flex h-screen">
      <div className="flex-1 bg-[#049c64]">
        <img src={topPart}></img>
        <img src={topPart2}></img>
      </div>
      <div className="flex-1 bg-[#dadaea]">
        <img src={topPartRight1}></img>
        <img src={topPartRight2}></img>
      </div>
    </div>
  );
};

export default Index;
