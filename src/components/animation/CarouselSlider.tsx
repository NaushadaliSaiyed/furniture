import React, { useState } from 'react';

interface CarouselSliderProps {
  images: string[];
}

const Slider: React.FC<CarouselSliderProps> = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevious = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="relative w-full h-full">
      <div className="flex w-full h-full">
        {images.map((imageUrl, index) => (
          <img
            key={index}
            src={imageUrl}
            alt={`Image ${index + 1}`}
            className={`object-cover ${index === currentIndex ? 'block' : 'hidden'} w-fit`}
          />
        ))}
      </div>
      <div className="flex justify-between items-center relative bottom-[50%]">
        <button
          onClick={handlePrevious}
          className="bg-white text-orange-600 hover:text-[#48474D] w-14 h-14 rounded-full text-4xl flex items-center justify-center"
        >
          &lt;
        </button>
        <button
          onClick={handleNext}
          className="bg-white text-orange-600 hover:text-[#48474D] w-14 h-14 rounded-full text-4xl flex items-center justify-center"
        >
          &gt;
        </button>
      </div>
    </div>
  );
};

export default Slider;
