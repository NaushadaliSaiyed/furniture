import React from 'react'
import LeftDashBoard from '../components/dashBoard/LeftDashBoard'
import RightDashBoard from '../components/dashBoard/RightDashBoard'

const DashBoard = () => {
  return (
    <>
      <div className='w-full h-screen flex justify-center items-center'>
        <div className='w-[90%] h-[80%] flex'>
          <LeftDashBoard />
          <RightDashBoard />
        </div>
      </div>
    </>
  )
}

export default DashBoard
