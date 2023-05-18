import React, { useState } from 'react'
import { AiOutlineBars } from 'react-icons/ai';
import { VscSearch } from 'react-icons/vsc';
import { useLocation } from 'react-router';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [show, setShow] = useState(false)
  const location = useLocation()
  const topMargin = location.pathname === "/" ? "top-[15%]" : 'top-[8%]'
  return (
    <div className={location.pathname !== "/" ? `fixed w-full h-[20%] top-0 bg-white z-50` : "relative"}>
      <div className={`fixed flex justify-between items-center text-white bg-[#48474D] w-[84%] h-[12%] ${topMargin} left-[8%] z-30`}>
        <h1 className='mx-20 font-semibold text-2xl'><Link to={"/"}><i>Botiko</i></Link></h1>
        <ul className='flex gap-12'>
          <li className='font-mono font-semibold cursor-pointer md:block hidden'><Link to={'product'}>Product</Link></li>
          <li className='font-mono font-semibold cursor-pointer hidden md:block '><Link to={'about'}>About</Link></li>
          <li className='font-mono font-semibold cursor-pointer hidden md:block'><Link to={'services'}>Services</Link></li>
          <li className='font-mono font-semibold cursor-pointer hidden md:block'><Link to={'contact-us'}>Contact us</Link></li>
        </ul>
        <VscSearch className='mx-20' />
        <AiOutlineBars className='md:hidden mx-5 text-lg ' onClick={() => setShow(!show)} />
        {show && <div className='absolute right-[0px] top-[55px] rounded w-[100px] h-[100px] text-center bg-[#48474D] md:hidden'>
          <ul>
            <li>Product</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact us</li>
          </ul>

        </div>}
      </div>
    </div>
  )
}

export default Navbar
