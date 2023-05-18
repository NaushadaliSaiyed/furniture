import React from 'react'
import { GiLaurelsTrophy } from 'react-icons/gi';



const Achievements = () => {
    return (
        <div className="w-[84%] h-fit flex flex-col my-10 gap-20">
            <p className='font-semibold text-5xl'>OUR ACHIEVEMENTS</p>
            <div className='flex gap-[5%]'>
                <div className='w-[16%] h-[19vh] text-yellow-600 flex flex-col justify-center items-center rounded-full'>
                    <GiLaurelsTrophy className='w-full h-3/4'/>
                    <p className='w-full h-1/4 flex text-center justify-center items-center'>28 Behance Galeries</p>
                </div>
                <div className='w-[16%] h-[19vh] text-yellow-600 flex flex-col justify-center items-center rounded-full'>
                    <GiLaurelsTrophy className='w-full h-3/4'/>
                    <p className='w-full h-1/4 flex text-center justify-center items-center'>5.0 Rating on Clutch</p>
                </div>
                <div className='w-[16%] h-[19vh] text-yellow-600 flex flex-col justify-center items-center rounded-full'>
                    <GiLaurelsTrophy className='w-full h-3/4'/>
                    <p className='w-full h-1/4 flex text-center justify-center items-center'>Top 3 on Dribbble</p>
                </div>
                <div className='w-[16%] h-[19vh] text-yellow-600 flex flex-col justify-center items-center rounded-full'>
                    <GiLaurelsTrophy className='w-full h-3/4'/>
                    <p className='w-full h-1/4 flex text-center justify-center items-center'>22 reviews on Clutch</p>
                </div>
                <div className='w-[16%] h-[19vh] text-yellow-600 flex flex-col justify-center items-center rounded-full'>
                    <GiLaurelsTrophy className='w-full h-3/4'/>
                    <p className='w-full h-1/4 flex text-center justify-center items-center'>Verified on Business of Apps</p>
                </div>
            </div>
        </div>
    )
}

export default Achievements
