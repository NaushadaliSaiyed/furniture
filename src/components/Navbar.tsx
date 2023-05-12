import React from 'react'
import { VscSearch } from 'react-icons/vsc';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation()
  const topMargin = location.pathname === "/" ? "top-[15%]" : 'top-[8%]'
  return (
    <div className={`fixed flex justify-between items-center text-white bg-[#48474D] w-[84%] h-[12%] ${topMargin} left-[8%] z-30`}>
      <h1 className='mx-20 font-semibold text-2xl'><Link to={"/"}><i>Botiko</i></Link></h1>
      <ul className='flex gap-12'>
        <li className='font-mono font-semibold cursor-pointer'><Link to={'product'}>Product</Link></li>
        <li className='font-mono font-semibold cursor-pointer'><Link to={'about'}>About</Link></li>
        <li className='font-mono font-semibold cursor-pointer'><Link to={'services'}>Services</Link></li>
        <li className='font-mono font-semibold cursor-pointer'><Link to={'contact-us'}>Contact us</Link></li>
      </ul>
      <VscSearch className='mx-20' />
    </div>
  )
}

export default Navbar
