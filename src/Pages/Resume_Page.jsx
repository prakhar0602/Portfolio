import React, { useState } from 'react'
import Resume_Side_Bar from '../components/Resume_Side_Bar'
import Experience from '../components/Experience'
import Education from '../components/Education'
import Skills from '../components/Skills'
import About_me from '../components/About_me'

const Resume_Page = () => {
    const [currentPage,setPage]=useState(0)
    const pages=[<Education/>,<Skills/>,<About_me/>]
  return (
    <div className='flex w-full justify-center'>
        <Resume_Side_Bar setPage={setPage}/>
        <div className='ml-24 w-fit'>
            {
                pages[currentPage]
            }
        </div>
    </div>
  )
}

export default Resume_Page