import React from 'react'
import istockphoto from "../../assets/Image/istockphoto.jpg";
import istockphoto1 from "../../assets/Image/istockphoto1.jpg";

const AllProductAndDetailsThree = () => {
  return (
    <div className='flex gap-[95px]'>
          <div className='mt-20 ml-[114px]  '>
            <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
              <img src={istockphoto} alt="" className='w-[530px] h-[520px] ' /></div>
            <p className='font-semibold mt-7'>Product Design</p>
            <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>Bo app</p>
            <p className='font-semibold mt-7 ' >Bo is the easiest way to send someone the perfect present at <br /> the perfect time. Gifting made simple - so you can simply focus on <br /> the people  and moments you care.</p>
          </div>
          <div className='mt-56  mr-28'>
            <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
              <img src={istockphoto1} alt="" className='w-[570px] h-[450px] ' /></div>
            <p className='font-semibold mt-7'>Branding Product Design</p>
            <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>ByNext. All-in-one home <br /> services provider</p>
            <p className='font-semibold mt-7 ' >Laundry, Dry Cleaning & Home Cleaning From home cleaning to <br /> dry cleaning and laundry we're here to help, every step of the way.</p>
          </div>
        </div>
  )
}

export default AllProductAndDetailsThree
