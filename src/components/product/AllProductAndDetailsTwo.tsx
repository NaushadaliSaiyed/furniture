import React from 'react'
import istockphoto2 from "../../assets/Image/istockphoto2.jpg"
import istockphoto3 from "../../assets/Image/istockphoto3.jpg"

const AllProductAndDetailsTwo = () => {
  return (
    <div className='flex gap-[95px]'>
          <div className='mt-20 ml-[114px] '>
            <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
              <img src={istockphoto2} alt="" className='w-[530px] h-[520px] ' />
            </div>
            <p className='font-semibold mt-7'>UX/UI Design Research</p>
            <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>The #1 app for making <br /> music on your phone</p>
            <p className='font-semibold mt-7 ' >Join 10 million other music creators</p>
          </div>
          <div className='mt-56 mr-28'>
            <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
              <img src={istockphoto3} alt="" className='w-[570px] h-[450px] ' /></div>
            <p className='font-semibold mt-7'>Product Design</p>
            <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>Duds app</p>
            <p className='font-semibold mt-7 ' >Shazam for clothes. An antidote to the feeling when you <br />  really
              want some sneakers that you saw on a blogger,  but he doesn't respond <br /> to comments, and you can't find them on the brand's website</p>
          </div>
        </div>
  )
}

export default AllProductAndDetailsTwo
