import React from "react";
import Wave from "react-wavify";

const AnimatedWaves = () => {
  return (
    <div className="relative w-full h-32">
      <div
        className="mt-1 absolute inset-0 w-full h-full"
        style={{ opacity: 0.8 }}
      >
        <Wave
          fill="url(#gradient4)"
          options={{
            height: 35, // Height of the wave itself
            amplitude: 45, // Amplitude of the wave
            speed: 0.112, // Positive speed for left to right movement
            points: 4,
          }}
        >
          <defs>
            <linearGradient id="gradient4" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#FA9E9E" />
              <stop offset="100%" stopColor="#FFBAB1" />
            </linearGradient>
          </defs>
        </Wave>
      </div>

      <div
        className="absolute inset-0 w-full h-full mt-2"
        style={{ opacity: 0.7 }}
      >
        <Wave
          fill="url(#gradient3)"
          options={{
            height: 35, // Height of the wave itself
            amplitude: 40, // Amplitude of the wave
            speed: 0.102, // Positive speed for left to right movement
            points: 6,
          }}
        >
          <defs>
            <linearGradient id="gradient3" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#FF4BC5" />
              <stop offset="100%" stopColor="#1A43AB" />
            </linearGradient>
          </defs>
        </Wave>
      </div>

      <div
        className="absolute inset-0 w-full h-full mt-2"
        style={{ opacity: 0.6 }}
      >
        <Wave
          fill="url(#gradient2)"
          options={{
            height: 45, // Height of the wave itself
            amplitude: 40, // Amplitude of the wave
            speed: 0.13, // Positive speed for left to right movement
            points: 5,
          }}
        >
          <defs>
            <linearGradient id="gradient2" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#172B4D" />
              <stop offset="100%" stopColor="#FF4BC5" />
            </linearGradient>
          </defs>
        </Wave>
      </div>

      <div className="absolute inset-0 w-full h-full " style={{ opacity: 0.8 }}>
        <Wave
          fill="url(#gradient1)"
          options={{
            height: 45, // Height of the wave itself
            amplitude: 40, // Amplitude of the wave
            speed: 0.095, // Positive speed for left to right movement
            points: 5,
          }}
        >
          <defs>
            <linearGradient id="gradient1" x1="0" x2="1" y1="0" y2="0">
              <stop offset="0%" stopColor="#9AE5CA" />
              <stop offset="100%" stopColor="#00AA6B" />
            </linearGradient>
          </defs>
        </Wave>
      </div>
    </div>
  );
};

export default AnimatedWaves;
