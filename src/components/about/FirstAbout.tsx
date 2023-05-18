import React from 'react'
import { FaBasketballBall } from 'react-icons/fa';

const FirstAbout = () => {
  return (
    <div className='w-[84%] mt-[20%]'>
        <p className='font-semibold text-5xl'>About Us</p>
        <p className='w-[890px] text-1xl mt-32'>Every company has its "Cinderella" story about those dark times when it has just started hitting the market. Our story takes its beginning in 2013, at a small office with a few like-minded people and bottomless cups of coffee, that kept us working throughout the night when we have just started building a company with a strong idea. We strived to build a brand that will contribute to the world with useful products that empower people and make their lives easier. We still believe in it today.</p>
        <span className='flex gap-3 items-center my-28'>
          <p className='font-bold font-serif text-xl'> M Be </p>
          <FaBasketballBall />
          <p className='font-bold text-xl'>C </p>
        </span>
      </div>
  )
}

export default FirstAbout
