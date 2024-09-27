import Navbar from "./components/Navbar"
import {Routes,Route} from 'react-router-dom'
import Home_Page from "./Pages/Home_Page"
import Services from "./Pages/Services"
import Resume_Page from "./Pages/Resume_Page"
import Work from "./Pages/Work"
function App() {
  return (
    <div className="w-screen h-screen bg-[#1c1c22] ">
        <Navbar/>
        <div className='flex w-full justify-center items-center h-[90vh]'>
          <Routes>
            <Route path='/' element={<Home_Page/>} />
            <Route path='/services' element={<Services/>} />
            <Route path='/resume' element={<Resume_Page/>} />
            <Route path='/work' element={<Work/>} />
          </Routes>
        </div>
    </div>
  )
}

export default App
