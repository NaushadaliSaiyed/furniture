import React from 'react'
import istockphoto6 from '../../assets/Image/istockphoto6.jpg'
import istockphoto7 from '../../assets/Image/istockphoto7.jpg'

const AllProductAndDetailsFive = () => {
    return (
        <div className='flex gap-[95px]'>
            <div className='mt-20 ml-[114px]  '>
                <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
                    <img src={istockphoto6} alt="" className='w-[530px] h-[520px] ' /></div>
                <p className='font-semibold mt-7'>Product Design</p>
                <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>Quinlex - Project
                    Management <br /> Application</p>
                <p className='font-semibold mt-7 ' >The aim is to create an app which will make lives of
                    <br />
                    people with diabetes simplier.</p>
            </div>
            <div className='mt-56  mr-28'>
                <div className='hover:transform hover:scale-95 hover:-translate-y-1 transition ease-in-out delay-200'>
                    <img src={istockphoto7} alt="" className='w-[570px] h-[450px] ' /></div>
                <p className='font-semibold mt-7'>Product Design</p>
                <p className='font-semibold text-4xl mt-5 hover:text-orange-600'>Diabetes Control</p>
                <p className='font-semibold mt-7 ' >Catch here how we designed the mobile experience  for teams
                    <br /> on the  go. There is nothing better than a top-notch project <br /> management  app that helps keep everyone productive</p>
            </div>
        </div>
    )
}

export default AllProductAndDetailsFive
