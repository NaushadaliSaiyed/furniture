import React from 'react'

const ContactUS = () => {
  return (
    <>
      <div className='bg-white mt-44 ml-28'>
        <div>
          <p className='text-2xl from-neutral-800'>Want to estimate a project ?</p>
          <p className='mt-5'> Just tell us about your project, what are your goals, <br /> and let's start.</p>
          <div className='mt-6'>
            <label htmlFor=""> Your name </label>
          </div>
          <input
            type="text"
            className='border-2 mt-2 h-10 w-80 bor rounded-md placeholder:text-base pl-5 text-gray-600'
            placeholder='Your Name' />
          <div className='mt-6'>
            <label htmlFor=""> Email </label>
          </div>
          <input
            type="text"
            className='border-2 mt-2 h-10 w-80 bor rounded-md placeholder:text-base pl-5 text-gray-600'
            placeholder='Your Email' />
          <div className='mt-6'>
            <label htmlFor=""> Where you know us from? </label>
          </div>
          <input
            type="text"
            className='border-2 mt-2 h-10 w-80 bor rounded-md placeholder:text-base pl-5 text-gray-600 select-text'
            placeholder='Where you know us from?' />
        </div>
      </div>
    </>
  )
}

export default ContactUS
