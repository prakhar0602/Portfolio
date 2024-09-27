import React from 'react'
import Education_Card from './Education_Card'

const Skills = () => {
    const skills=[
        [
            "logo-html5",
            "logo-css3",
            "logo-javascript",
            "logo-nodejs"            
        ],
        [
            "logo-python",
        ]
    ]
  return (
    <div className='flex flex-col gap-5'>
        <div className='text-white text-2xl font-bold'>
            <p>My Skills</p>
        </div>
        <div className='text-[rgb(100,100,100)] font-medium '>
            <p>
            Empowered by a diverse skill set, transforming challenges into innovative solutions. 
            </p>
        </div>
        <div>
            <div className='h-[300px] flex flex-col gap-5 overflow-auto scrollbar-thin scrollbar-thumb-[#00e187] scrollbar-track-[rgba(0,0,0,0)]'>
                {
                    skills.map((x,i)=>(
                        <div className='flex gap-5'>
                            {
                                x.map((y,j)=>(
                                    <p className='flex text-white text-6xl p-8 bg-[rgba(150,150,150,0.1)] rounded-lg'>
                                    <ion-icon name={y}></ion-icon>
                                    </p>
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

export default Skills