import { ChevronLeft, ChevronRight } from "lucide-react";
import React, { useState } from "react";

const ReviewCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = [
    {
      name: "Nathan R",
      avatar: "/api/placeholder/48/48",
      rating: 3,
      text: "Great experience working with the team. They delivered the project on time and were very professional throughout the process.",
      position: "Client",
    },
    {
      name: "Michel Anderson",
      avatar: "/api/placeholder/48/48",
      rating: 5,
      text: "Exceptional service! The attention to detail and customer support were outstanding. Would definitely recommend to others.",
      position: "Customer",
    },
    {
      name: "Anderson",
      avatar: "/api/placeholder/48/48",
      rating: 3,
      text: "Very satisfied with the results. The team was responsive and addressed all our concerns promptly.",
      position: "Client",
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
        className={`text-xl ${
          index < rating ? "text-yellow-400" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  return (
    <div className="w-full max-w-6xl mx-auto px-4 py-8">
      <div className="relative">
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="w-full flex-shrink-0 px-4 md:px-8">
                <div className="bg-white rounded-lg shadow-lg p-6 md:p-8">
                  <div className="flex items-center mb-4">
                    <img
                      src={review.avatar}
                      alt={review.name}
                      className="w-12 h-12 rounded-full"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{review.name}</h3>
                      <p className="text-gray-600">{review.position}</p>
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{review.text}</p>
                  <div className="flex items-center">
                    {renderStars(review.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full shadow-lg hover:bg-gray-100 transition-colors"
        >
          <ChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        <div className="flex justify-center mt-4 gap-2">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-2 h-2 rounded-full transition-colors ${
                currentIndex === index ? "bg-blue-500" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ReviewCarousel;
