import React, { useState, useEffect } from 'react';
import { useSwipeable } from 'react-swipeable';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';



interface CarouselSliderProps {
    images: string[];
    interval?: number;
}

const CarouselSlider: React.FC<CarouselSliderProps> = ({ images, interval = 2000 }) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : currentIndex + 1));
        }, interval);
        return () => {
            clearInterval(intervalId);
        };
    }, [images.length, interval, currentIndex]);

    const handlePrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : currentIndex - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };

    const handleDotIndicatorClick = (index: number) => {
        setCurrentIndex(index);
    };

    const handleSwipe = (delta: number) => {
        if (delta < 0) {
            handleNext();
        } else {
            handlePrevious();
        }
    };

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => handleSwipe(-1),
        onSwipedRight: () => handleSwipe(1),
        preventScrollOnSwipe: true,
        trackMouse: true
    });

    return (
        <div className="w-[84%] h-[80vh] flex flex-col justify-center items-center my-10">
            <div className="relative w-full h-full"    {...swipeHandlers}>
                <div className="flex w-full h-full">
                    {images.map((imageUrl, index) => (
                        <img
                            key={index}
                            src={imageUrl}
                            alt={`Image ${index + 1}`}
                            width={"100%"}
                            className={`object-cover cursor-grab ${index === currentIndex ? 'block' : 'hidden'}`}
                        />
                    ))}
                </div>
                <div className="flex justify-between items-center relative bottom-[50%]">
                    <button
                        onClick={handlePrevious}
                        className="bg-white font-semibold text-orange-600 hover:text-[#48474D] w-14 h-14 rounded-full text-4xl flex items-center justify-center"
                    >
                        <AiOutlineLeft />
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-white font-semibold text-orange-600 hover:text-[#48474D] w-14 h-14 rounded-full text-4xl flex items-center justify-center"
                    >
                        <AiOutlineRight />
                    </button>
                </div>
                <div className="flex justify-center items-center relative bottom-[15%]">
                    {images.map((_, index) => (
                        <div
                            key={index}
                            className={`w-3 h-3 mx-1 rounded-full cursor-pointer ${index === currentIndex ? 'bg-orange-600' : 'bg-white'}`}
                            onClick={() => handleDotIndicatorClick(index)}
                        />
                    ))}
                </div>
            </div>
        </div>

    );
};

export default CarouselSlider;
