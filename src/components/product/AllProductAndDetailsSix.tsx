import React from 'react'
import istockphoto8 from "../../assets/Image/istockphoto8.jpg"
import istockphoto10 from "../../assets/Image/istockphoto10.jpg"

const AllProductAndDetailsSix = () => {
  return (
    <div className='flex gap-[95px]'>
          <div className='mt-20 ml-[114px] '>
            <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
              <img src={istockphoto8} alt="" className='w-[530px] h-[520px] ' /></div>
            <p className='font-semibold mt-7'>Product Design</p>
            <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>TuneGo</p>
            <p className='font-semibold mt-7 ' >TuneGO is a free platform to protect your rights and <br />   distribute your music globally through hundreds of digital <br /> music stores, and collect royalties.</p>
          </div>
          <div className='mt-56  mr-28'>
            <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
              <img src={istockphoto10} alt="" className='w-[570px] h-[450px]' /></div>
            <p className='font-semibold mt-7'>UX/UI Design Research</p>
            <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>Lime Home</p>
            <p className='font-semibold mt-7 ' >Limehome is better than a hotel. Run by hospitality professionals and <br />  equipped by interior designers, they are able to combine the quality standard  <br /> of a hotel with the advantages of an apartment.</p>
          </div>
        </div>
  )
}

export default AllProductAndDetailsSix
