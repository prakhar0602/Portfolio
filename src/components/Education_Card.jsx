import React from 'react'

const Education_Card = (props) => {
    const year = props.x.year
    const name = props.x.name
    const source = props.x.source
  return (
    <div className='flex flex-col p-5 bg-[rgba(150,150,150,0.1)] rounded-lg w-[18vw] gap-3'>
        <p className='text-[#00e187]'>{year}</p>
        <p className='text-white font-medium'>{name}</p>
        <div className='flex items-center gap-3'>
            <div className='bg-[#00e187] rounded-full h-1 w-1'></div>
            <p className='text-[rgb(150,150,150)]'>{source}</p>
        </div>
    </div>
  )
}

export default Education_Card