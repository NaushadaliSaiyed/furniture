import React from 'react'

const Product = () => {
  return (

    <div className='h-screen w-full'>
      <div className=' h-[680px] flex flex-col ml-8 gap-16'>
        <p className='font-semibold text-5xl mt-64'>Case Studies</p>
        <p className='w-[890px] text-1xl '>We believe that great products cannot happen without passion, intelligence, and personal commitment, and it is demonstrated by our portfolio that spans different customers, industries, and target audiences.</p>
      </div>
      <div className='bg-slate-400 h-[680px] flex  '>
        <div className='mt-36'>
          <img src="../src/assets/symbioosa-lighting-llev.jpg" alt="" className='w-[370px] h-[450px]' />
          <p>Product Design</p>
          <p>Issue tracking app</p>
          <p>Make your work routine simple and convenient, say goodbye to the stress and chaos of managing multiple tasks and hello to a more productive workday</p>
        </div>
        <div className='mt-48'>
           <img src="../src/assets/bob-corner-sofa-module.jpg" alt="" className='w-[370px] h-[450px]' />
        </div>
      </div>

    </div>

  )
}

export default Product
