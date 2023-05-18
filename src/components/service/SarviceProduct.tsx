import React from 'react';
import { TbSofa } from 'react-icons/tb';
import { GiBed } from 'react-icons/gi';
import { GiWoodenChair } from 'react-icons/gi';
import { FaFirstOrderAlt, FaFontAwesomeLogoFull, FaRegFontAwesomeLogoFull } from 'react-icons/fa';
import { FaPaintRoller } from 'react-icons/fa';
import { RiHomeGearFill } from 'react-icons/ri';
import { BsGift } from 'react-icons/bs';
import { RxTwitterLogo, RxNotionLogo, RxDiscordLogo, RxIconjarLogo, RxSketchLogo } from 'react-icons/rx';
import { IoLogoVk, IoLogoSass, IoLogoGoogle, IoLogoFreebsdDevil, IoLogoBitcoin, IoLogoXing, IoLogoSlack } from 'react-icons/io';
import { TfiThemifyLogo } from 'react-icons/tfi';
import { DiJqueryLogo } from 'react-icons/di';
import video from "../../assets/Image/happy-young.webm"
import video1 from "../../assets/Image/happy-family.webm"


// import Lottie from "lottie-react";
// import groovyWalkAnimation2 from "../../assets/json/wired-lineal-1356-wooden-box.json";


const SarviceProduct = () => {
    return (
        <>
            <div className='bg-neutral-100 '>
                <div>
                    <p className=' ml-28 font-semibold text-4xl mb-20 pt-10'>Your One-Stop Shop for Trendy and Timeless Furniture</p>
                </div>
                <div className='flex  justify-center  gap-[149px] items-center '>
                    <div className='bg-white h-[416px] w-[21%] flex flex-col items-center gap-5 p-4'>
                        <span><TbSofa className='text-8xl' /></span>
                        <p className='font-medium text-2xl mt-5 hover:text-orange-600' >Luxurious Sofas</p>
                        <p className='w-52'>Style and Functionality Combine: Explore Our Range  of Chic Sofas
                            The Ultimate Sofa Shopping  Experience: Find Your Perfect Match Here
                            Upgrade Your Living Space with Our  High-Quality  Sofas and Couches
                        </p>
                    </div>

                    <div className='bg-white h-[416px] w-[21%] flex flex-col items-center gap-5 p-6'>
                        <span><GiWoodenChair className='text-8xl  ' /></span>
                        <p className='font-medium text-2xl mt-5 hover:text-orange-600'>Perfect Chair Today</p>
                        <p className='w-52'>Chairs are an essential piece of furniture in any home or office. They not only serve a functional purpose but can also add style and comfort to a space. </p>
                    </div>
                    <div className='bg-white h-[416px] w-[21%] flex flex-col items-center gap-5 p-6'>
                        <span><GiBed className='text-8xl' /></span>
                        <p className='font-medium text-2xl mt-5 hover:text-orange-600'> Our Collection </p>
                        <p className='w-52'>Your Personal Oasis: Find Comfort and Style in Our Selection of Designer Beds
                            Sweet Dreams Made Affordable: Browse Our Range of Beds and Mattresses
                            Wake Up
                        </p>
                    </div>
                </div>


                <div className='flex justify-center  gap-[149px] mt-16 '>
                    <div className='bg-white h-[416px] w-[21%] flex flex-col items-center gap-5 p-4'>
                        <span><FaFirstOrderAlt className='text-8xl' /></span>
                        <p className='font-medium text-2xl mt-5 hover:text-orange-600' >The art of furniture </p>
                        <p className='w-52'> It can take on many shapes and styles, from sleek and modern to ornate and classic. The art of furniture involves a combination of design, craftsmanship, and functionality.
                        </p>
                    </div>
                    <div className='bg-white h-[416px] w-[21%] flex flex-col items-center gap-5 p-6 '>
                        <span><FaPaintRoller className='text-8xl  ' /></span>
                        <p className='font-medium text-2xl mt-5 hover:text-orange-600'>Color when choosing </p>
                        <p className='w-52'> Different colors can also evoke different emotions, with warm tones such as red and orange creating a cozy and inviting atmosphere, and cool tones such as blue and relaxing environment.</p>
                    </div>
                    <div className='bg-white h-[416px] w-[21%] flex flex-col items-center gap-5 p-6'>
                        <span><RiHomeGearFill className='text-8xl' /></span>
                        <p className='font-medium text-2xl mt-5 hover:text-orange-600'> Our Dream Home </p>
                        <p className='w-52'> From sofas and beds to tables and chairs, each piece of furniture serves a unique purpose. The right furniture can maximize space, improve organization,  home.
                        </p>
                    </div>
                </div>

                <div className='flex justify-normal  mt-16 pb-10 ml-[108px] '>
                    <div className='bg-white h-[416px] w-[23%] flex flex-col items-center gap-5 p-4'>
                        <span><BsGift className='text-8xl' /></span>
                        <p className='font-medium text-2xl mt-5 hover:text-orange-600' >Gift for a loved one </p>
                        <p className='w-52'>A unique piece of furniture can add character to their space and become a cherished and practical item that they use daily. It's a gift that can truly last a lifetime.
                        </p>
                    </div>
                </div>
            </div>
            <div>
                <div className='flex flex-col gap-7 ml-28 mt-8'>
                    <p className='font-sans font-semibold text-6xl' >Our Clients</p>
                    <p className='text-xl text-gray-600'>We believe brands are the cultural connection between <br /> companies and their communities</p>
                </div>

                <div className='text-6xl flex items-center gap-24 ml-28 mt-24' >
                    <RxTwitterLogo />
                    <RxNotionLogo />
                    <TfiThemifyLogo />
                    <RxDiscordLogo />
                    <IoLogoVk />
                    <IoLogoSass />
                    <IoLogoGoogle />
                    <IoLogoFreebsdDevil />
                </div>
                <div className='text-6xl flex items-center gap-24 ml-28 mt-10 mb-24' >
                    <RxSketchLogo />
                    <IoLogoSlack />
                    <FaFontAwesomeLogoFull />
                    <IoLogoBitcoin />
                    <IoLogoXing />
                    <FaRegFontAwesomeLogoFull />
                    <DiJqueryLogo />
                    <RxIconjarLogo />
                </div>
            </div>
            <div className='w-full max-h-fit flex justify-center bg-neutral-100'>
                <div className='w-[84%] max-h-fit flex justify-around items-center'>
                    <video src={video} autoPlay={true} loop />
                    <video src={video1} autoPlay={true} loop />
                </div>
            </div>
            <div className='flex items-center p-28'>
                <p className='font-sans font-semibold text-6xl' >Let's make Something amazing together Start by <span className='text-orange-600 border-b-4 border-orange-600 hover:text-gray-400 hover:border-gray-400' >saying hi</span></p>
            </div>
        </>
    )
}

export default SarviceProduct
