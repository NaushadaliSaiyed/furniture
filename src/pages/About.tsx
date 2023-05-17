import React from 'react'
import { FaBasketballBall } from 'react-icons/fa';
import CarouselSlider from '../components/animation/CarouselSlider';
import officeneture from '../assets/Image/officeneture.jpg'
import officeneture2 from '../assets/Image/officeneture2.jpg'
import officeneture3 from '../assets/Image/officeneture3.jpg'


const About = () => {
  const images = [
    officeneture,
    officeneture2,
    officeneture3,
  ];
  
  return (
    <div className='h-full w-full flex flex-col items-center '>
      <div className='w-[84%] mt-[20%]'>
        <p className='font-semibold text-5xl'>About Us</p>
        <p className='w-[890px] text-1xl mt-32'>Every company has its "Cinderella" story about those dark times when it has just started hitting the market. Our story takes its beginning in 2013, at a small office with a few like-minded people and bottomless cups of coffee, that kept us working throughout the night when we have just started building a company with a strong idea. We strived to build a brand that will contribute to the world with useful products that empower people and make their lives easier. We still believe in it today.</p>
        <span className='flex gap-3 items-center my-28'>
          <p className='font-bold font-serif text-xl'> M Be </p>
          <FaBasketballBall />
          <p className='font-bold text-xl'>C </p>
        </span>
      </div>
      <div className='bg-[#f3f3f3] h-96 flex justify-center items-center'>
        <div className='w-[84%] flex items-center justify-center'>
          <p className='text-4xl font-semibold tracking-tighter'>
            With 50+ experienced designers and JS developers on board, we build custom digital products for forward - thinking enterprises and startups. With the main office based in Warsaw (Poland), we also operate in different locations, including the United States and the United Kingdom.
          </p>
        </div>
      </div>
      <div className='w-full h-[30rem] flex justify-between items-center p-[8%]'>
        <img src="../src/assets/office1.jpg" alt="" width={"48%"}/>
        <img src="../src/assets/office2.jpg" alt="" width={"48%"}/>
      </div>
      <div className="w-[84%] h-[80vh] flex flex-col justify-center items-center">
      <CarouselSlider images={images}  />
      </div>
    </div>
  )
}

export default About
