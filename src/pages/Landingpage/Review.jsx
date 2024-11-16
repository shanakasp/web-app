import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";
import Man1 from "../../Images/man1.png";
import Man2 from "../../Images/man2.png";
import Man3 from "../../Images/man3.png";

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Nathan R",
      username: "@nook",
      avatar: Man1,
      rating: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Michel Anderson",
      username: "@andrw",
      avatar: Man2,
      rating: 5,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
    {
      name: "Anderson",
      username: "@andrw",
      avatar: Man3,
      rating: 3,
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    },
  ];

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === reviews.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - 1 : prevIndex - 1
    );
  };

  const renderStars = (rating) => {
    return [...Array(5)].map((_, index) => (
      <span
        key={index}
        className={`text-xl sm:text-2xl md:text-3xl lg:text-4xl ${
          index < rating ? "text-yellow-400" : "text-gray-200"
        }`}
      >
        ★
      </span>
    ));
  };

  const getVisibleReviews = () => {
    const prev = currentIndex === 0 ? reviews.length - 1 : currentIndex - 1;
    const next = currentIndex === reviews.length - 1 ? 0 : currentIndex + 1;
    return [prev, currentIndex, next];
  };

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 py-8 bg-[#fff9f7] from-green-50/50 -z-10">
      <div className="relative h-[400px] sm:h-[500px] md:h-[600px] lg:h-[650px]">
        <div className="absolute inset-0 flex items-center justify-center">
          {getVisibleReviews().map((index, position) => {
            const isCenter = position === 1;
            return (
              <div
                key={index}
                className={`absolute transition-all duration-500 ease-in-out
                  ${
                    position === 0
                      ? "left-0 -translate-x-1/4 scale-90 opacity-50 z-0"
                      : ""
                  }
                  ${isCenter ? "translate-x-0 scale-100 opacity-100 z-10" : ""}
                  ${
                    position === 2
                      ? "right-0 translate-x-1/4 scale-90 opacity-50 z-0"
                      : ""
                  }`}
                style={{
                  width: isCenter ? "60%" : "40%",
                }}
              >
                <div
                  className="bg-[#fff9f7] border border-gray-200 border-solid p-4 sm:p-6 md:p-8 transform transition-transform duration-500"
                  style={{
                    boxShadow:
                      "0 4px 8px rgba(16, 185, 129, 0.1), 0 -8px 8px rgba(16, 185, 129, 0.1)",
                  }}
                >
                  <div className="flex flex-col items-center text-center mb-4 sm:mb-6 md:mb-8">
                    <img
                      src={reviews[index].avatar}
                      alt={reviews[index].name}
                      className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-gray-300 mb-3"
                    />
                    <h3 className="text-base  font-semibold mb-1">
                      {reviews[index].name}
                    </h3>
                    <p className="text-sm  text-gray-500">
                      {reviews[index].username}
                    </p>
                  </div>
                  <p className="text-sm  text-gray-600 text-center mb-6 leading-relaxed line-clamp-6">
                    {reviews[index].text}
                  </p>
                  <div className="flex justify-center space-x-1">
                    {renderStars(reviews[index].rating)}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors z-30"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-50 transition-colors z-30"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 flex justify-center mt-6 gap-2 z-30">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors ${
                currentIndex === index ? "bg-[#049c64]" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
