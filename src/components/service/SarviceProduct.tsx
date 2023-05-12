import React from 'react';
import { TbSofa } from 'react-icons/tb';
import { GiBed } from 'react-icons/gi';
import { GiWoodenChair } from 'react-icons/gi';


// import Lottie from "lottie-react";
// import groovyWalkAnimation2 from "../../assets/json/wired-lineal-1356-wooden-box.json";


const SarviceProduct = () => {
    return (
        <div className='bg-neutral-100 '>
            <div>
                <p className=' ml-28 font-semibold text-4xl mb-20'>Your One-Stop Shop for Trendy and Timeless Furniture</p>
            </div>
            <div className='flex items-center ml-28 gap-24'>
                <div className='bg-white h-[26rem] w-[21rem] flex flex-col items-center gap-5 p-4'>
                    <span><TbSofa className='text-8xl' /></span>
                    <p className='font-medium text-3xl mt-5 hover:text-orange-600' >Luxurious Sofas</p>
                    <p className='w-52'>Style and Functionality Combine: Explore Our Range  of Chic Sofas
                        The Ultimate Sofa Shopping  Experience: Find Your Perfect Match Here
                        Upgrade Your Living Space with Our  High-Quality  Sofas and Couches
                    </p>

                </div>
                <div className='bg-white h-[26rem] w-[21rem] flex flex-col items-center gap-5 p-6'>
                    <span><GiWoodenChair className='text-8xl  ' /></span>
                    <p className='font-medium text-3xl mt-5 hover:text-orange-600'>Perfect Chair Today</p>
                    <p className='w-52'>Chairs are an essential piece of furniture in any home or office. They not only serve a functional purpose but can also add style and comfort to a space. </p>
                </div>
                <div className='bg-white h-[26rem] w-[21rem] flex flex-col items-center gap-5 p-6'>
                    <span><GiBed className='text-8xl' /></span>
                    <p className='font-medium text-3xl mt-5 hover:text-orange-600'> Our Collection </p>
                    <p  className='w-52'>Your Personal Oasis: Find Comfort and Style in Our Selection of Designer Beds
                        Sweet Dreams Made Affordable: Browse Our Range of Beds and Mattresses
                        Wake Up 
                    </p>
                </div>

            </div>
        </div>
    )
}

export default SarviceProduct
