import React from 'react';

import { FaFontAwesomeLogoFull, FaRegFontAwesomeLogoFull } from 'react-icons/fa';

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
