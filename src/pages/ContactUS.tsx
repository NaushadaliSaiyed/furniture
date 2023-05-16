import React from 'react'
import '../style/contactUs.css'
import ContactUsLeftSide from '../components/contactUs/ContactUsLeftSide';
import ContactUsRightSide from '../components/contactUs/ContactUsRightSide';
import ContactLastDetails from '../components/contactUs/ContactLastDetails';


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
      <div className='flex pt-14 pl-32 justify-between w-[85%]'>
        <ContactLastDetails/>
      </div>
    </>
  )
}

export default ContactUS
