import React from 'react'

const LeftDashBoard = () => {
  return (
    <div className='w-[30%] h-full bg-[#3E3D45]'>
      {/* <div className='fixed]'>
        <h1 className='text-[50vh] text-[#48474D]'>01</h1>
      </div> */}
      <div className='flex flex-col h-[100%] text-white bg-red-300'>
        <p className='z-10 '>INTERIOR</p>
        {/* text-[150px] relative ml-[3rem] font-bold text-[#70705b] [text-shadow:_5px_5px_4px_#bfc0bd] font-serif */}
        <p className='z-10'>Design</p>
        {/* w-[17%] ml-28 */}
        <p className='z-10'>The stylish interior makes us want to spend more time in it. We present interesrting sets to create an apartment. We choose the right colors according to our own taste.</p>
        {/* ml-28 */}
        <p className='z-10'>Read more</p>
      </div>
    </div>
  )
}

export default LeftDashBoard
