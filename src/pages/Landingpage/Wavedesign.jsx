import React from "react";
import wave1 from "../../Images/Rectangle 16.png";
import wave2 from "../../Images/Rectangle 18.png";
import wave3 from "../../Images/Rectangle 19.png";
import wave4 from "../../Images/Rectangle 20.png";

const WaveDesign = () => {
  return (
    <div className="absolute w-full h-full overflow-hidden -z-10">
      {/* Wave Layer 1 (Rectangle 18) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={wave1}
          alt="Wave 1"
          className="w-full h-25 object-cover object-top"
        />
      </div>
      {/* Wave Layer 2 (Rectangle 19) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={wave4}
          alt="Wave 2"
          className="w-full mt-3 h-25 object-cover object-top"
        />
      </div>
      {/* Wave Layer 3 (Rectangle 20) */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={wave3}
          alt="Wave 3"
          className="w-full h-25 object-cover object-top"
        />
      </div>
      {/* Wave Layer 4 (Rectangle 16) */}
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
