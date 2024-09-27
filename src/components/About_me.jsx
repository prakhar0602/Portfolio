import React from 'react'

const About_me = () => {
    const details = [
        [
            ["Name","Prakhar Gupta"],
            ["Experience","0 Years"],
            ["Nationality","Indian"],
            ["Freelance","Available"],
        ],
        [
            ["Phone","+91 8218748718"],
            ["Languages","English, Hindi"],
            ["Email","prakhar06092002@gmail.com"],
            ["LinkedIn","https://www.linkedin.com/in/prakhar-gupta-322051221/"],
        ]
    ]
  return (
    <div className='flex flex-col gap-5'>
    <div className='text-white text-2xl font-bold'>
        <p>About Me</p>
    </div>
    <div className='text-[rgb(100,100,100)] font-medium '>
        <p>
        Driven by passion and creativity, crafting exceptional digital experiences that inspire and engage. 
        </p>
    </div>
    <div>
        <div className='h-[300px] flex gap-14 overflow-auto scrollbar-thin scrollbar-thumb-[#00e187] scrollbar-track-[rgba(0,0,0,0)]'>
            {
                details.map((x,i)=>(
                    <div className='flex flex-col gap-5'>
                        {
                            x.map((y,j)=>(
                                <div className='flex'>
                                    <p className='text-[rgb(150,150,150)] w-[100px]'>{y[0]} </p>
                                    {
                                        y[0]!=="LinkedIn"?(
                                        <p className='text-white w-fit'>{y[1]}</p>
                                        ):(
                                        <a className="text-white hover:text-[#00e187]" href={y[1]}>Click</a>
                                        )
                                    }
                                </div>
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

export default About_me