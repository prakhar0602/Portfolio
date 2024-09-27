import React from 'react'
import profile_pic from '/1707141939091.jpeg'
import { Link } from 'react-router-dom';
const Home_Page = () => {
    async function downloadCV(){
        window.open("https://github.com/prakhar0602/prakhar0602/raw/refs/heads/main/Prakhar_s_Resume.pdf");
    }
  return (
    <div className='flex flex-col gap-10 text-white justify-center w-full items-center'>
        <div className='flex w-full justify-center gap-14 '>
            <div className='flex flex-col w-[30vw]'>
                <p className='text-lg font-medium w-fit'>Software Developer</p>
                <p className='text-6xl font-bold mt-2 w-fit'>Hello I'm</p>
                <p className='text-6xl font-bold text-[#00e187] w-fit'>Prakhar Gupta</p>
                <p className='text-md w-[80%] mt-8'>I excel at crafting elegant digital experiences and I am proficient in various programming languages and technologies.</p>
                <div className='flex gap-8 mt-10 w-fit justfy-center items-center'>
                    <button className='border-[#00e187] text-[#00e187] border-[1px] py-3 px-6 rounded-[50px]  hover:text-white hover:bg-[#00e187]'>
                        <div className='flex gap-5  justify-center items-center text-xl'>
                            <button onClick={downloadCV}className='text-sm bg-transparent w-fit font-medium'>DOWNLOAD CV</button>
                            <p className='flex w-fit'><ion-icon name="download"></ion-icon></p>   
                        </div>
                    </button>
                    <Link to="https://github.com/prakhar0602" target="_blank" className='flex text-xl rounded-full border-[1px] w-fit border-[#00e187] text-[#00e187] w-fit h-fit p-2  hover:text-white hover:bg-[#00e187]'><ion-icon name="logo-github"></ion-icon></Link>
                    <Link to="https://www.linkedin.com/in/prakhar-gupta-322051221/" target="_blank"className='flex text-xl rounded-full border-[1px] w-fit border-[#00e187] text-[#00e187] w-fit h-fit p-2  hover:text-white hover:bg-[#00e187]'><ion-icon name="logo-linkedin"></ion-icon></Link>
                </div>
            </div>
            <div className='w-fit rounded-full'>
                <img className="h-[53vh] rounded-full" src={profile_pic} alt="" />
            </div>
        </div>
        <div className='flex justify-around gap-24'>
            <div className='flex gap-3 justify-center items-center'>
                <p className='text-5xl font-bold flex justify-center items-center'>8</p>
                <span className='w-20 text-sm'>Projects Completed</span>
            </div>
            <div className='flex gap-3 justify-center items-center'>
                <p className='text-5xl font-bold flex justify-center items-center'>10</p>
                <span className='w-20 text-sm'>Technologies Mastered</span>
            </div>
            <div className='flex gap-3 justify-center items-center'>
                <p className='text-5xl font-bold flex justify-center items-center'>82</p>
                <span className='w-20 text-sm'>Code Commits</span>
            </div>
        </div>
    </div>
  )
}

export default Home_Page