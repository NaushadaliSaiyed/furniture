import React from 'react'
import { VscSearch } from 'react-icons/vsc';
import "../style/navbar.css"

const Navbar = () => {
  return (
    <div className='fixed flex justify-between items-center text-white bg-[#48474D] w-[84%] h-[12%] top-[15%] left-[8%]'>
        <h1 className='mx-20 font-semibold font-sans'>Botiko</h1>
        <ul className='flex gap-16'>
            <li className='font-mono'>About us</li>
            <li className='font-mono' >Projects</li>
            <li className='font-mono' >Services</li>
            <li className='font-mono'>Shop</li>
            <li className='font-mono' >Contact</li>
        </ul>
        <VscSearch className='mx-20'/>
    </div>
  )
}

export default Navbar
