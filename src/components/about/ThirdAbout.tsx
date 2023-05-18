import React from 'react'
import office1 from '../../assets/office1.jpg'
import office2 from '../../assets/office1.jpg'


const ThirdAbout = () => {
    return (
        <div className='w-full h-[30rem] flex justify-between items-center p-[8%]'>
            <img src={office1} alt="" width={"48%"} />
            <img src={office2} alt="" width={"48%"} />
        </div>
    )
}

export default ThirdAbout
