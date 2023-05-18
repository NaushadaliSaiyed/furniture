import React from 'react'
import bobCorner5 from '../../assets/Image/bob-corner-sofa-module5.jpg'
import istocphoto4 from '../../assets/Image/istockphoto4.jpg'


const AllProductAndDetailsFour = () => {
    return (
        <div className='flex gap-[95px]'>
            <div className='mt-20 ml-[114px] '>
                <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
                    <img src={istocphoto4} alt="" className='w-[530px] h-[520px] ' /></div>
                <p className='font-semibold mt-7'>Product Design</p>
                <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>Hot-desk booking app</p>
                <p className='font-semibold mt-7 ' >Hybrid work is reinventing the way we work. It changes the way
                    <br /> we use the workplace but also the way we communicate and manage <br /> our teams. So, we have created a booking platform that <br /> helps easily manage hybrid work</p>
            </div>
            <div className='mt-56  mr-28'>
                <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
                    <img src={bobCorner5} alt="" className='w-[570px] h-[450px] ' /></div>
                <p className='font-semibold mt-7'>Product Design</p>
                <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>Sweet Analytics Website Redesign</p>
                <p className='font-semibold mt-7 ' >During the design process, our top priority was the user's <br /> perception of the company. We focused on a simple and clean <br /> presentation of the platform, as well as graphics that <br /> clearly reflect its capabilities.</p>
            </div>
        </div>
    )
}

export default AllProductAndDetailsFour
