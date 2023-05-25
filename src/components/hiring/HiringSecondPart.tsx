import React from 'react'

const HiringSecondPart = () => {
    return (
        <div className='flex justify-between w-[84%] ml-28 items-center text-center pb-28'>
            <div className='pt-20'>
                <h1 className='text-4xl font-semibold'>We constantly try to make you </h1>
                <p className='text-3xl font-semibold text-orange-600 pt-4 text-start'>proud of your workspace</p>
                <p className='text-gray-600 pt-9 text-start'> At Firefox, we work hard to create a comfortable working space for <br />
                    every team member, and we're happy that the result speaks for <br />
                    itself. </p>
                <button className='border h-8 w-40 rounded-md bg-orange-600 text-white mt-8 mr-80'>See open positions</button>
            </div>
            <div>
                <div className='h-56 w-56 rounded-full border' ></div>
            </div>
        </div>
    )
}

export default HiringSecondPart