import React from 'react'
import '../style/contactUs.css'
import ContactUsLeftSide from '../components/contactUs/ContactUsLeftSide';
import ContactUsRightSide from '../components/contactUs/ContactUsRightSide';
import ContactLastDetails from '../components/contactUs/ContactLastDetails';
import ContactUsIfram from '../components/contactUs/ContactUsIfram';


const ContactUS = () => {
  return (
    <>
      <div className='bg-white mt-44 ml-28 h-[100vh] w-[80%] flex flex-col md:flex-row'>
        <ContactUsLeftSide />
        <ContactUsRightSide />
      </div>
      <ContactUsIfram />
      <ContactLastDetails />
    </>
  )
}

export default ContactUS
