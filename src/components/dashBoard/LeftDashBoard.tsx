import React from 'react'

const LeftDashBoard = () => {
  return (
    <div className='w-[30%] h-full bg-[#3E3D45]'>
        <div className='fixed opacity-20]'><h1 className='text-[50vh] text-[#48474D]'>01</h1></div>
        <div className='flex flex-col justify-center w-[100%] h-[100%] gap-[5px] text-white fixed top-[2.5rem]'>
            <p className='z-10 ml-28'>INTERIOR</p>
            <p className='z-10 text-[150px] relative ml-[3rem] font-bold text-[#70705b] [text-shadow:_5px_5px_4px_#bfc0bd] font-serif'>Design</p>
            <p className='z-10 w-[17%] ml-28'>The stylish interior makes us want to spend more time in it. We present interesrting sets to create an apartment. We choose the right colors according to our own taste.</p>
            <p className='z-10 ml-28'>Read more</p>
        </div>
    </div>
  )
}

export default LeftDashBoard
