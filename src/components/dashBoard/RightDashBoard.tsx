import React from 'react'
import Typed  from 'react-typed';

const RightDashBoard = () => {

const TypingComponent:any = () => {
    return (
      <Typed
        strings={['need technology to reveal the beautiful of products.', 'believe in beautiful and smart design.', 'need to build complex projects.', 'are striving for quality at all stages.']}
        typeSpeed={50}
        loop
      />
    );
  }





  return (
    <div className="w-[70%] h-full bg-blue-200 bg-[url('/src/assets/dark-furniture.jpg')] bg-no-repeat bg-cover">
      <div className='flex justify-center items-start w-full h-full'>
        <p className='text-2xl font-semibold text-gray-700'>For those who</p>
        <p className='text-2xl font-semibold text-gray-700'><TypingComponent/></p>
      </div>
    </div>
  )
}

export default RightDashBoard
