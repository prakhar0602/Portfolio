import React, { useState } from 'react'
import Project from '../components/Project'
import zero from '/0.png'
const Work = () => {
    const [current,setCurrent]=useState(0)
    const images=[
        zero
    ]
    const projects=[
        {
            name:'AniStream',
            description:'hvg dfyiuv agdfsydfgvkjhvadskjadvsjdhv cdfs kjhvdfsjhk vadfj hasdv sdvjksd',
            technologies:['MERN','Redux Toolkit','Javascript'],
            github:'https://github.com/prakhar0602/Anistream-Streaming-Project-.git',
            link:'https://anistream-streaming-project-vaie.vercel.app/'
        },
        {
            name:'AniStream1',
            description:'hvg dfyiuv agdfsydfgvkjhvadskjadvsjdhv cdfs kjhvdfsjhk vadfj hasdv sdvjksd',
            technologies:['MERN','Redux Toolkit','Javascript'],
            github:'https://github.com/prakhar0602/Anistream-Streaming-Project-.git',
            link:'https://anistream-streaming-project-vaie.vercel.app/'
        },
        {
            name:'AniStream2',
            description:'hvg dfyiuv agdfsydfgvkjhvadskjadvsjdhv cdfs kjhvdfsjhk vadfj hasdv sdvjksd',
            technologies:['MERN','Redux Toolkit','Javascript'],
            github:'https://github.com/prakhar0602/Anistream-Streaming-Project-.git',
            link:'https://anistream-streaming-project-vaie.vercel.app/'
        },
        {
            name:'AniStream3',
            description:'hvg dfyiuv agdfsydfgvkjhvadskjadvsjdhv cdfs kjhvdfsjhk vadfj hasdv sdvjksd',
            technologies:['MERN','Redux Toolkit','Javascript'],
            github:'https://github.com/prakhar0602/Anistream-Streaming-Project-.git',
            link:'https://anistream-streaming-project-vaie.vercel.app/'
        },
        {
            name:'AniStream4',
            description:'hvg dfyiuv agdfsydfgvkjhvadskjadvsjdhv cdfs kjhvdfsjhk vadfj hasdv sdvjksd',
            technologies:['MERN','Redux Toolkit','Javascript'],
            github:'https://github.com/prakhar0602/Anistream-Streaming-Project-.git',
            link:'https://anistream-streaming-project-vaie.vercel.app/'
        },
        {
            name:'AniStream5',
            description:'hvg dfyiuv agdfsydfgvkjhvadskjadvsjdhv cdfs kjhvdfsjhk vadfj hasdv sdvjksd',
            technologies:['MERN','Redux Toolkit','Javascript'],
            github:'https://github.com/prakhar0602/Anistream-Streaming-Project-.git',
            link:'https://anistream-streaming-project-vaie.vercel.app/'
        },
    ]
  return (
    <div className='w-fit'>
        <Project x={projects[current]} i={current} image={images[current]} />
        <div className='w-full flex justify-end gap-3 text-2xl'>
            <button className='bg-[#00e187] flex w-fit h-fit p-2' onClick={()=>setCurrent(current==0?0:current-1)}><ion-icon name="arrow-round-back"></ion-icon></button>
            <button className='bg-[#00e187] flex w-fit h-fit p-2' onClick={()=>setCurrent(current==(projects.length-1)?(project.length-1):current+1)}><ion-icon name="arrow-round-forward"></ion-icon></button>
        </div>
    </div>
  )
}

export default Work