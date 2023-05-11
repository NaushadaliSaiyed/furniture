import Lottie from "lottie-react";
import animationData1 from '../../assets/wired-lineal-112-book-morph.json';
import React from 'react';


const Book = () => {
    return (
        <div>
            <Lottie className="h-50 w-60 mt-16 ml-20" animationData={animationData1} />
        </div>
    )
}

export default Book
