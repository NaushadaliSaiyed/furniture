import React from 'react'
import { AiOutlineCopy } from 'react-icons/ai'


const ContactUsRightSide = () => {
    return (
        <div className='w-[100%]'>
            <p className='text-2xl font-semibold'>Email</p>
            <span className='flex mt-3 text-center items-center gap-2'>
                <p className='text-orange-400 cursor-pointer'>rohit@tapatap.com</p>
                <AiOutlineCopy className='text-lg' />
            </span>
            <p className='text-2xl font-semibold mt-12'>Phones</p>
            <div className='flex justify-between'>
                <span>
                    <p className='mt-2'>Russia</p>
                    <p> +07 (65) 785 9874</p>
                </span>
                <span>
                    <p className='mt-2'>India</p>
                    <p> +91 (98) 5401 2040</p>
                </span>
                <span>
                    <p className='mt-2'>France</p>
                    <p> +33 (75) 786 6548</p>
                </span>
            </div>
            <div className='mt-10'>
                <p className='text-lg font-semibold'>Address</p>
                <p> B-303 Mondeal Heights, <br />
                    Iskon Cross Road, <br />
                    S.G Highway, Ramdev Nagar <br />
                    A'bad Gujarat - 380015
                </p>
            </div>
        </div>
    )
}

export default ContactUsRightSide
