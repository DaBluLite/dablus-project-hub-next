'use client'

import React, { useState } from 'react';

const Carousel = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? children.length - 1 : prevIndex - 1));
  };

  const handleNextClick = () => {
    setCurrentIndex((prevIndex) => (prevIndex === children.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="max-w-[70rem] mx-auto">
      <div className="relative">
        <div className="flex transition-transform duration-500 ease-in-out">
          {children.map((item, index) => (
            <div
              key={index}
              className={`flex-shrink-0 w-full ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
            >
              {item}
            </div>
          ))}
        </div>
        <button
          className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
          onClick={handlePrevClick}
        >
          Prev
        </button>
        <button
          className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md"
          onClick={handleNextClick}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Carousel;