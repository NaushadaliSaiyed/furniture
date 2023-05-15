import React from 'react'
import { Select } from 'antd';
import '../style/contactUs.css'
import { ImAttachment } from 'react-icons/im'

const handleChange = (value: string) => {
  console.log(`selected ${value}`);
};

const ContactUS = () => {
  return (
    <>
      <div className='bg-white mt-44 ml-28 h-[100vh]'>
        <div className='w-[40%]'>
          <p className='text-2xl from-neutral-800'>Want to estimate a project ?</p>
          <p className='mt-5'> Just tell us about your project, what are your goals, <br /> and let's start.</p>
          <div className='mt-6'>
            <label htmlFor="" className='cursor-pointer'> Your name </label>
          </div>
          <input
            type="text"
            className='border-2 mt-2 h-10 w-80 outline-none rounded-md placeholder:text-base pl-4 text-gray-600'
            placeholder='Your Name' />
          <div className='mt-6 cursor-pointer'>
            <label htmlFor="" className='cursor-pointer'> Email </label>
          </div>
          <input
            type="text"
            className='border-2 mt-2 h-10 w-80 outline-none rounded-md placeholder:text-base pl-4 text-gray-600'
            placeholder='Your Email' />
          <div className='mt-6'>
            <label htmlFor="" className='cursor-pointer'> Where you know us from? </label>
          </div>
          <Select
            className='where-you-know'
            defaultValue="Where you know us from?"
            style={{ width: 320 }}
            onChange={handleChange}
            options={[
              { value: 'Found you with search engine', label: 'Found you with search engine' },
              { value: 'Dribble', label: 'Dribble' },
              { value: 'podcast', label: 'podcast' },
              { value: 'Blog article', label: 'Blog article' },
              { value: 'Advertisement', label: 'Advertisement' },
              { value: 'Someone Suggested you', label: 'Someone Suggested you' },
            ]}
          />
          <div className='mt-6'>
            <label htmlFor="" className='cursor-pointer'> Message </label>
          </div>
          <textarea
            className='mt-2 w-80 h-24 outline-none border-2 rounded-md placeholder:text-base pl-4 text-gray-600 resize-none'
            name="text"
            id=""
            placeholder='Your Message'
          ></textarea>
          <div className='flex justify-between w-80 mt-5'>
            <span className='flex text-center items-center gap-4 cursor-pointer hover:text-orange-500'> <ImAttachment className='text-lg'/> <p className=''> Attach File </p></span>
            <button className='bg-orange-600 h-10 w-44 rounded-sm text-white font-semibold text-base cursor-pointer'>Send Message</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default ContactUS
