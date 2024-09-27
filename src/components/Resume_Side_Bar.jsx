import React, { useState } from 'react'

const Resume_Side_Bar = (props) => {
    const setPage=props.setPage
    const [current,changeCurrent] = useState(0)
    const buttons=['Education','Skills','About Me']
    function changeButton(i){
        changeCurrent(i)
        setPage(i)
    }
  return (
    <div className='flex flex-col gap-8'>
        <div className='text-4xl text-white font-semibold'>
            <p>Why hire me?</p>
        </div>
        <div className='text-xl text-[rgb(100,100,100)]'>
            <p className='w-[380px]'>With expertise across the full development stack, I deliver efficient, scalable solutions tailored to user needs. My dedication to clean code and seamless functionality ensures top-quality results. </p>
        </div>
        <div className='w-full flex flex-col gap-5'>
            {
                buttons.map((x,i)=>(
                    <button className={`${i==current?'bg-[#00e187]':'bg-[rgba(120,120,120,0.2)] text-white'} font-medium py-2 w-full rounded-lg`} onClick={()=>changeButton(i)}>{x}</button>
                ))
            }
        </div>
    </div>
  )
}

export default Resume_Side_Bar