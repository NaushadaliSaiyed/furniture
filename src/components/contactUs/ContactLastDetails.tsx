import React from 'react'

const ContactLastDetails = () => {
    return (
        <>
            <div className=''>
                <p className='font-semibold text-lg'> Visit us </p>
                <div className='mt-4 text-gray-500'>
                    Alaska <br />
                    ui. Massachusetts 25, 05-958 <br />
                    sharif@front.studio
                </div>
            </div>
            <span>
                <p className='font-semibold text-lg'>Call us</p>
                <div className='mt-4 text-gray-500'>
                    <div className='cursor-pointer'>
                        <p>Russia</p>
                        <p className='hover:underline-text-orange-400'> +07 (65) 785 9874</p>
                    </div>
                    <div className='mt-3 cursor-pointer'>
                        <p>India</p>
                        <p> +91 (98) 5401 2040</p>
                    </div>
                    <div className='mt-3 cursor-pointer'>
                        <p>France</p>
                        <p> +33 (75) 786 6548</p>
                    </div>
                </div>
            </span>
            <span>
                <p className='font-semibold text-lg'>Company</p>
                <div className='mt-4 cursor-pointer text-gray-500'>
                    <p>Cases</p>
                    <p>Service</p>
                    <p>About Us</p>
                    <p>Blog</p>
                    <p>Careers</p>
                    <p>Contact Us</p>
                </div>
            </span>
            <div> <p className='font-semibold text-lg'>Details</p> </div>
            <span>
                <p className='font-semibold text-lg'>Follow us</p>
                <div className='mt-4 cursor-pointer text-gray-500'>
                    <p>Dribble</p>
                    <p>Trello</p>
                    <p>Instagram</p>
                    <p>Facebook</p>
                    <p>Linkedin</p>
                    <p>Twitter</p>
                    <p>Medium</p>
                </div>
            </span>
        </>
    )
}

export default ContactLastDetails
