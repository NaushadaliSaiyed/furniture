import React from 'react'
import { VscSearch } from 'react-icons/vsc';

const Navbar = () => {
  return (
    <div className='fixed flex justify-between items-center text-white bg-[#48474D] w-[84%] h-[12%] top-[15%] left-[8%]'>
        <h1 className='mx-20 font-semibold text-2xl'><i>Botiko</i></h1>
        <ul className='flex gap-12'>
            <li className='font-mono font-semibold' >Prodcast</li>
            <li className='font-mono font-semibold'>About</li>
            <li className='font-mono font-semibold' >Services</li>
            <li className='font-mono font-semibold' >Contact us</li>
        </ul>
        <VscSearch className='mx-20'/>
    </div>
  )
}

export default Navbar
