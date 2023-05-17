import React from 'react'
import '../style/contactUs.css'
import ContactUsLeftSide from '../components/contactUs/ContactUsLeftSide';
import ContactUsRightSide from '../components/contactUs/ContactUsRightSide';
import ContactLastDetails from '../components/contactUs/ContactLastDetails';
import capital from '../assets/Image/Copyright-Symbol-Header-Image.png'
import star from '../assets/Image/five star.360_F_280195423.jpg'


const ContactUS = () => {
  return (
    <>
      <div className='bg-white mt-44 ml-28 h-[100vh] w-[80%] flex'>
        <ContactUsLeftSide />
        <ContactUsRightSide />
      </div>
      <div className='iframe ml-28 '>
        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d29376.2214223758!2d72.52587845!3d23.022755949999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1684144486769!5m2!1sen!2sin" width="91%"
          height="450"
          loading="lazy"
        >
        </iframe>
      </div>
      <div className='flex pt-14 pl-32 pb-10 justify-between w-[85%]'>
        <ContactLastDetails />
      </div>
      <div className='flex justify-between w-[90%]'>
        <div className='flex text-center items-center'>
          <img src={capital} alt="" className='h-8 w-14 ml-24' />
          <div className=''>
            <img src={star} alt="" className='h-4 w-24 relative right-2' />
            <p className='text-sm font-semibold'>5.0 by 25 Reviews </p>
          </div>
        </div>
        <div className='flex justify-between gap-10'>
          <p>Copyright 2023 FireFox Studio. All rights reserved</p>
          <p>Cookie Policy</p>
          <p>Privacy Policy</p>
        </div>
      </div>
    </>
  )
}

export default ContactUS
