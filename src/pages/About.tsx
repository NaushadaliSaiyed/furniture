import React from 'react'
import CarouselSlider from '../components/about/CarouselSlider';
import officeNatureOne from '../assets/Image/officeNatureOne.jpg'
import officeNatureTwo from '../assets/Image/officeNatureTwo.jpg'
import officeNatureThree from '../assets/Image/officeNatureThree.jpg'
import FirstAbout from '../components/about/FirstAbout';
import SecoundAbout from '../components/about/SecoundAbout';
import ThirdAbout from '../components/about/ThirdAbout';
import Achievements from '../components/about/Achievements';
import ContactLastDetails from '../components/contactUs/ContactLastDetails';


const About = () => {
  const images = [
    officeNatureOne,
    officeNatureTwo,
    officeNatureThree,
  ];
  
  return (
    <div className='h-full w-full flex flex-col items-center '>
      <FirstAbout/>      
      <SecoundAbout/>
      <ThirdAbout/>
      <Achievements/>
      <CarouselSlider images={images}  />
      <ContactLastDetails/>
    </div>
  )
}

export default About
