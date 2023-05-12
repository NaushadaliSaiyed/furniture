import React from 'react'
import Typed from 'react-typed';

const DashBoard = () => {
  const TypingComponent: any = () => {
    return (
      <Typed
        strings={['need technology to reveal the beautiful of products.', 'believe in beautiful and smart design.', 'need to build complex projects.', 'are striving for quality at all stages.']}
        typeSpeed={50}
        loop
      />
    );
  }
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-[90%] h-[80%] flex'>
          <div className='w-[30%] h-full bg-[#3E3D45] relative'>
            <div className='flex flex-col h-[100%] text-white font-mono justify-end p-[10%] gap-3'>
              <p className='z-10 font-semibold text-[#bfc0bd]'>INTERIOR</p>
              <p className='z-10 text-[96px] font-bold text-[#ffffff] [text-shadow:_5px_5px_4px_#bfc0bd] font-serif'>D
                <span className='text-gray-200'>e</span>
                <span className='text-gray-300'>s</span>
                <span className='text-gray-400'>i</span>
                <span className='text-gray-500'>g</span>
                <span className='text-gray-600'>n</span>
              </p>
              <p className='z-10 font-semibold text-[#bfc0bd] mb-10'>The stylish interior makes us want to spend more time in it. We present interesrting sets to create an apartment. We choose the right colors according to our own taste.</p>
              <p className='z-10 font-semibold text-[#bfc0bd]'>Read more</p>
            </div>
            <div className='relative bottom-full w-full h-full flex justify-center items-center opacity-5'>
              <h1 className='text-[360px] text-gray-300'>01</h1>
            </div>
          </div>
          <div className="w-[70%] h-full bg-blue-200 bg-[url('/src/assets/dark-furniture-2.jpg')] bg-no-repeat bg-cover">
          </div>
        </div>
      </div>
    </>
  )
}

export default DashBoard
