import React from 'react'
import officepic from '../../assets/Image/laptopinoffice.jpg'

const Hiring = () => {
    return (
        <div className='flex justify-between mt-[130px] bg-slate-300 h-[450px] ml-[109px] w-[84%]'>
            <div className='pt-32'>
                <h1 className='text-3xl font-semibold font-sans'>Careers at Firefox</h1>
                <p className='pt-14'> Welcome to the Firefox job portal! Join as to become a part of one of the <br />
                    most great IT companies in your career. A team with a clear vision, strong <br />
                    work ethic, and a lot of passion to the work that we do every day.</p>
            </div>
            <div>
                <img src={officepic} alt="" className='h-[450px] w-[300px] rounded-tl-full rounded-bl-full' />
            </div>
        </div>
    )
}

export default Hiring
