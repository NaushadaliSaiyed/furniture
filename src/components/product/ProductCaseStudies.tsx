import React from 'react'
import Lottie from "lottie-react";
import Typed from 'react-typed';
import groovyWalkAnimation from "../../assets/json/wired-lineal-497-truck-delivery.json";



const ProductCaseStudies = () => {
    const TypingComponent: any = () => {
        return (
            <>
                <Typed
                    strings={['and benefits', 'beautiful and smart design.', 'need to build complex projects.',]}
                    typeSpeed={80}
                    loop
                />
            </>
        );
    }
    return (
        <div className='flex'>
            <div className=' h-[680px] flex flex-col ml-[7.7rem] gap-16'>
                <p className='font-semibold text-5xl mt-64'> <span className='text-orange-600' >Perks </span><TypingComponent /></p>
                <p className='font-semibold text-5xl'>Case Studies</p>
                <p className='w-[890px] text-1xl '>We believe that great products cannot happen without passion, intelligence, and personal  <br /> commitment, and it is demonstrated by our portfolio that spans different customers, <br /> industries, and target audiences.</p>
            </div>
            <div>
                <Lottie animationData={groovyWalkAnimation} loop={true} style={{ marginTop: "373px", marginRight: "121px" }} />
            </div>
        </div>
    )
}

export default ProductCaseStudies
