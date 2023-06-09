import React from 'react'
import Book from '../animation/Book'
import { FaBasketballBall } from 'react-icons/fa';

const AffordableLuxury = () => {
  return (
    <div className='bg-white h-[63%] w-[84%] mt-32 flex ml-[3%]'>
        <div>
          <p className='mt-28 ml-20 font-bold text-5xl'>Affordable Luxury <br /> <br />  Discover Your Dream <span className='text-orange-600'>Home</span> </p>
          <p className='mt-12 ml-20 text-xl'> We love to shake established thought-patterns and create what has never <br /> been attempted before. <br /> we take seeds and grow jungles Furniture plays a significant <br /> role in creating a  comfortable and functional home environment. </p>
          <div className='flex gap-3 items-center ml-16 mt-32 p-4 text-2xl'>
            <p className='font-bold font-serif'> M Be </p>
            <FaBasketballBall />
            <p className='font-bold from-neutral-900'>C </p>
          </div>
        </div>
        <div className='ml-32'>
          <Book />
        </div>
      </div>
  )
}

export default AffordableLuxury