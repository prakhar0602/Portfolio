import React from 'react'
import Education_Card from './Education_Card'

const Education = () => {
    const education = [
        [
            {
                year:2019,
                name:'X',
                source:"St. George's College"
            },
            {
                year:2021,
                name:'XII',
                source:"R.C.S Memorial"
            }
        ],
        [
            {
                year:2025,
                name:'BTech',
                source:"GLA University"
            }
        ]
    ]
  return (
    <div className='flex flex-col gap-5'>
        <div className='text-white text-2xl font-bold'>
            <p>My Education</p>
        </div>
        <div className='text-[rgb(100,100,100)] font-medium '>
            <p>
            Building a foundation of knowledge, driving innovation with every step forward. 
            </p>
        </div>
        <div>
            <div className='h-[300px] flex flex-col gap-5 overflow-auto scrollbar-thin scrollbar-thumb-[#00e187] scrollbar-track-[rgba(0,0,0,0)]'>
                {
                    education.map((x,i)=>(
                        <div className='flex gap-5'>
                            {
                                x.map((y,j)=>(
                                    <Education_Card x={y} />
                                ))
                            } 
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default Education