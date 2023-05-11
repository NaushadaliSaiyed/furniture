import React from 'react'
import { VscSearch } from 'react-icons/vsc';
import { useLocation } from 'react-router';

const Navbar = () => {
  const location = useLocation()
  return (

   <>{location.pathname === "/" ?
    <div className='fixed flex justify-between items-center text-white bg-[#48474D] w-[84%] h-[12%] top-[15%] left-[8%] z-30'>
      <h1 className='mx-20 font-semibold text-2xl'><i>Botiko</i></h1>
      <ul className='flex gap-12'>
        <li className='font-mono font-semibold cursor-pointer'>Prodcast</li>
        <li className='font-mono font-semibold cursor-pointer'>About</li>
        <li className='font-mono font-semibold cursor-pointer'>Services</li>
        <li className='font-mono font-semibold cursor-pointer'  >Contact us</li>
      </ul>
      <VscSearch className='mx-20' /> 
    </div>  :
     <div className='fixed flex justify-between items-center text-white bg-[#48474D] w-[84%] h-[12%] top-[10%] left-[8%] z-30'>
    <h1 className='mx-20 font-semibold text-2xl'><i>Botiko</i></h1>
    <ul className='flex gap-12'>
      <li className='font-mono font-semibold cursor-pointer'>Prodcast</li>
      <li className='font-mono font-semibold cursor-pointer'>About</li>
      <li className='font-mono font-semibold cursor-pointer'>Services</li>
      <li className='font-mono font-semibold cursor-pointer'  >Contact us</li>
    </ul>
    <VscSearch className='mx-20' /> 
  </div>}
   </>
  
  )
}

export default Navbar
