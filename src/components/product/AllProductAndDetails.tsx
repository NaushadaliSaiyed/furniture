import React from 'react'
import symbioosa from '../../assets/Image/symbioosa-lighting-llev.jpg'
import bobCorner from '../../assets/Image/bob-corner-sofa-module.jpg'

const AllProductAndDetails = () => {
  return (
    <div className='flex gap-[95px]'>
      <div className='mt-20 ml-[114px]  '>
        <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
          <img src={symbioosa} alt="" className='w-[530px] h-[480px]  ' />
        </div>
        <p className='font-semibold mt-7'>Product Design</p>
        <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>Issue tracking app</p>
        <p className='font-semibold mt-7 ' >Make your work routine simple and convenient, <br /> say goodbye to the stress and chaos of managing multiple <br /> tasks and hello to a more productive workday</p>
      </div>
      <div className='mt-56 mr-28'>
        <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
          <img src={bobCorner} alt="" className='w-[570px] h-[450px] ' />
        </div>
        <p className='font-semibold mt-7'>UX/UI Design Research</p>
        <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>Homely app</p>
        <p className='font-semibold mt-7 ' >The main goal of the platform is to offer high-level,<br /> elegant, and modern properties across Europe and South America.</p>
      </div>
    </div>
  )
}

export default AllProductAndDetails
