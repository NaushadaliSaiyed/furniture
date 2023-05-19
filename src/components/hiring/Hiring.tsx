import React from 'react'
import officepic from '../../assets/Image/laptopinoffice.jpg'
import neha from '../../assets/Image/nehaimage.jpeg'
import sharif from "../../assets/Image/mynewpic.jpeg";
import naushad from "../../assets/Image/naushadpic.jpg";


const Hiring = () => {
    return (
        <>
            <div className='flex justify-between mt-[130px] h-[450px] ml-[109px] w-[84%] border-b-2'>
                <div className='pt-32'>
                    <h1 className='text-3xl font-semibold font-sans'>Careers at Firefox</h1>
                    <p className='pt-14'> Welcome to the Firefox job portal! Join as to become a part of one of the <br />
                        most great IT companies in your career. A team with a clear vision, strong <br />
                        work ethic, and a lot of passion to the work that we do every day.</p>
                </div>
                <img src={neha} alt="" className='relative left-56 top-16 h-[150px] w-[150px] rounded-full' />
                <img src={sharif} alt="" className='relative top-52 left-10 h-[80px] w-[80px] rounded-full' />
                <img src={naushad} alt="" className='relative top-72 left-8 h-[100px] w-[100px] rounded-full' />
                <div>
                    <img src={officepic} alt="" className='h-[450px] w-[300px] rounded-tl-full rounded-bl-full' />
                </div>
            </div>
        </>
    )
}

export default Hiring
