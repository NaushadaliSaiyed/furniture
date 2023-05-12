import React from 'react'
import Book from '../components/animation/Book'
import { FaBasketballBall } from 'react-icons/fa';
import SarviceProduct from '../components/service/SarviceProduct';

const Services = () => {
  return (
    <>
      <div className='bg-white h-[63%] w-[84%] mt-36 flex ml-[3%]'>
        <div>
          
          <p className='mt-28 ml-20 font-bold text-5xl'>Affordable Luxury <br /> <br />  Discover Your Dream <span className='text-orange-600'>Home</span> </p>
          <p className='mt-12 ml-20 text-xl'> We love to shake established thought-patterns and create what has never <br /> been attempted before. we take seeds and grow jungles </p>
          <div className='flex gap-3 items-center ml-20 mt-52'>
            <p className='font-bold font-serif'> M Be </p>
            <FaBasketballBall />
            <p className='font-bold from-neutral-900'>C </p>
          </div>
        </div>
        <div className='ml-32'>
          <Book />
        </div>
      </div>
      <SarviceProduct/>
    </>
  )
}

export default Services
