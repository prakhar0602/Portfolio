import React from 'react'

const Project = (props) => {
    const i=props.i
    const name=props.x.name
    const description = props.x.description
    const technologies = props.x.technologies
    const github = props.x.github
    const link = props.x.link
    const image = props.image
    return (
    <div className='flex gap-10 w-fit text-white'>
        <div className='flex flex-col gap-5'>
            <p className='text-7xl font-bold'>0{i+1}</p>
            <p className='text-4xl font-semibold'>{name}</p>
            <p className='text-2xl w-[500px]'>{description}</p>
            <div className='flex gap-5 text-[#00e187] font-semibold'>
                {
                    technologies.map((technology,i)=>(
                        <p className=''>{technology}</p>
                    ))
                }
            </div>
            <div className='h-[1px] bg-[rgb(150,150,150)] w-full'></div>
            <div className='flex text-3xl text-white gap-5'>
                <a className='p-2 flex rounded-full bg-[rgba(150,150,150,0.2)]' href={github}><ion-icon name="logo-github"></ion-icon></a>
                <a className='p-2 flex rounded-full bg-[rgba(150,150,150,0.2)]' href={link}><ion-icon name="link"></ion-icon></a>
            </div>
        </div>
        <div>
            <img src={image} className='w-[500px] h-[300px]' alt="" />
        </div>
    </div>
  )
}

export default Project