import React from 'react'
import '../style/contactUs.css'
import ContactUsLeftSide from '../components/contactUs/ContactUsLeftSide';
import ContactUsRightSide from '../components/contactUs/ContactUsRightSide';


const ContactUS = () => {
  return (
    <>
      <div className='bg-white mt-44 ml-28 h-[100vh] w-[80%] flex'>
        <ContactUsLeftSide />
        <ContactUsRightSide />
      </div>
    </>
  )
}

export default ContactUS
