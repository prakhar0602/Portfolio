import React, { useState } from 'react'

const Service = (props) => {
    let index=props.index
    let name = props.name
    let description = props.description
    let [ishover,setHover]=useState(false)
  return (
    <div className='flex flex-col text-white hover:text-[#00e187] gap-5'
        onMouseEnter={()=>setHover(true)}
        onMouseLeave={()=>setHover(false)}
    >
        <div className='flex text-4xl justify-between w-full '>
            <p className=''>{`0${index}`}</p>
            <div className='flex bg-white text-black rounded-full m-0 h-fit w-fit'>
            {
                ishover?(
                    <p className=' m-0 flex bg-[#00e187] w-full rounded-full p-2 h-full '>
                        <ion-icon name="arrow-forward"></ion-icon>
                    </p>
                ):(
                    <p className='h-fit w-fit flex p-2'>
                        <ion-icon name="arrow-dropright"></ion-icon>
                    </p>
                )
            }
            </div>
        </div>
        <div>
            <p className='text-3xl font-medium'>{name}</p>
        </div>
        <div>
            <p className='text-white w-[calc(30vw)] pr-5'>{description}</p>
        </div>
        <div className='w-full h-[2px]'>
            <p className='w-full bg-[rgb(100,100,100)] h-full'></p>
        </div>
    </div>
  )
}

export default Service