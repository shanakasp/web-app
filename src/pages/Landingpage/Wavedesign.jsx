import React from "react";
import wave1 from "../../Images/Rectangle 16.png";
import wave2 from "../../Images/Rectangle 18.png";
import wave3 from "../../Images/Rectangle 19.png";
import wave4 from "../../Images/Rectangle 20.png";

const WaveDesign = () => {
  return (
    <div className="relative w-full -z-10">
      {/* Wave backgrounds */}
      <div className="absolute inset-0 w-full h-full">
        <img
          src={wave1}
          alt="Wave 1"
          className="w-full h-25 object-cover object-top"
          style={{
            animation: "wave1 8s infinite ease-in-out",
          }}
        />
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img
          src={wave4}
          alt="Wave 2"
          className="w-full mt-3 h-25 object-cover object-top"
          style={{
            animation: "wave2 6s infinite ease-in-out",
          }}
        />
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img
          src={wave3}
          alt="Wave 3"
          className="w-full h-25 object-cover object-top"
          style={{
            animation: "wave3 7s infinite ease-in-out",
          }}
        />
      </div>
      <div className="absolute inset-0 w-full h-full">
        <img
          src={wave2}
          alt="Wave 4"
          className="w-full mt-10 h-15 object-cover object-top"
          style={{
            animation: "wave4 5s infinite ease-in-out",
          }}
        />
      </div>

      <style jsx>{`
        @keyframes wave1 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(15px);
          }
        }

        @keyframes wave2 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }

        @keyframes wave3 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(8px);
          }
        }

        @keyframes wave4 {
          0%,
          100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-5px);
          }
        }
      `}</style>
    </div>
  );
};

export default WaveDesign;
