import React from 'react'

const LeftDashBoard = () => {
  return (
    <div className='w-[30%] h-full bg-[#3E3D45]'>
      {/* fixed w-full h-full justify-center items-center */}
      <div className='divkadiv'>
        <h1 className='text-white'>01</h1>
      </div>
      <div className='flex flex-col h-[100%] text-white font-mono justify-end p-[10%] gap-3 relative top-0 '>
        <p className='z-10 font-semibold text-[#bfc0bd]'>INTERIOR</p>
        <p className='z-10 text-[96px] font-bold text-[#ffffff] [text-shadow:_5px_5px_4px_#bfc0bd] font-serif'>Design</p>
        <p className='z-10 font-semibold text-[#bfc0bd] mb-10'>The stylish interior makes us want to spend more time in it. We present interesrting sets to create an apartment. We choose the right colors according to our own taste.</p>
        <p className='z-10 font-semibold text-[#bfc0bd]'>Read more</p>
      </div>
    </div>
  )
}

export default LeftDashBoard
