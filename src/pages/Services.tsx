import React from 'react'
import Book from '../components/animation/Book'
import { FaBasketballBall } from 'react-icons/fa';
import SarviceProduct from '../components/service/SarviceProduct';

const Services = () => {
  return (
    <>
      <div className='bg-white h-[63%] w-[84%] mt-28 flex ml-[8%]'>
        <div>
          <h1 className='mt-20 ml-20 font-bold text-5xl'> Software Development <br />Services</h1>
          <p className='mt-12 ml-20 text-xl'> We love to shake established thought-patterns and create what has never <br /> been attempted before. we take seeds and grow jungles </p>
          <div className='flex gap-3 items-center ml-20 mt-24'>
            <p className='font-bold font-serif'> M Be </p>
            <FaBasketballBall />
            <p className='font-bold from-neutral-900'>C </p>
          </div>
        </div>
        <div>
          <Book />
        </div>
      </div>
      <SarviceProduct/>
    </>
  )
}

export default Services
