import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Navbar = () => {
  const navLinks = [
    {
        title:'Home',
        path:'/'
    },
    {
        title:'Services',
        path:'/services'
    },
    {
        title:'Resume',
        path:'/resume'
    },
    {
        title:'Work',
        path:'/work'
    },
    // {
    //     title:'Contact',
    //     path:'/contact'
    // }
  ]
  const [currentPage,changeCurrentPage]=useState(location.pathname)
  const navigate=useNavigate()
  function changePage(a){
    changeCurrentPage(a)
    navigate(a)
  }
  return (
    <div className='text-white flex justify-around items-center h-[10vh]'>
        <div className="flex justify-around w-full items-center">
            <div className='flex gap-2 h-fit '>
                <p className="text-2xl h-fit w-fit font-bold">Prakhar</p>
                <p className='text-[#00e187] text-4xl -mt-[8px] flex font-medium'>.</p>
            </div>
            <div className='flex w-[calc(33vw)] items-center'>
                <ul className='flex justify-around w-full text-md font-medium items-center'>
                    {
                        navLinks.map((link,i)=>(
                            <li className='cursor-pointer'>
                                <button className={` hover:text-[#00e187]  ${currentPage==link.path ? 'text-[#00e187]' : ''}  ${currentPage==link.path ? 'underline-offset-8 underline' : ''}`} onClick={()=>changePage(link.path)}>
                                    <p className="">
                                        {
                                            link.title
                                        }
                                    </p>    
                                </button>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Navbar