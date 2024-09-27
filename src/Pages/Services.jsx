import React from 'react'
import Service from '../components/Service'

const Services = () => {
  return (
    <div className='flex flex-col gap-16'>
        <div className='flex gap-16'>
        {/* <Service index="1" name="Web Development" description="lorem ipsumfh jdfhgvadskifughdf dbfv dfbv aks vbsdiufvwdv gbdfig fdgdf ifuk ghdfklgbafdkl a"  />
        <Service index="2" name="Android Development" description="lorem ipsumfh jdfhgvadskifughdf dbfv dfbv aks vbsdiufvwdv gbdfig fdgdf ifuk ghdfklgbafdkl a"  /> */}
        <Service index="1" name="Frontend Development" description="As a front-end developer, I transform creative visions into immersive digital experiences, ensuring that every interaction feels intuitive, engaging, and seamless."  />
        <Service index="2" name="Backend Development" description="As a backend developer, I architect the foundation that powers seamless and efficient digital experiences, ensuring that systems run smoothly behind the scenes."  />
        </div>
        <div className=' flex gap-16'>
        {/* <Service index="3" name="IOS Development" description="lorem ipsumfh jdfhgvadskifughdf dbfv dfbv aks vbsdiufvwdv gbdfig fdgdf ifuk ghdfklgbafdkl a"  /> */}
        {/* <Service index="4" name="Software Development" description="lorem ipsumfh jdfhgvadskifughdf dbfv dfbv aks vbsdiufvwdv gbdfig fdgdf ifuk ghdfklgbafdkl a"  /> */}
        <Service index="3" name="Android Development" description="I design and build mobile applications that bring convenience, entertainment, and innovation right into the hands of users."  />
        <Service index="4" name="FullStack Development" description="I also specialize in building comprehensive, end-to-end solutions, seamlessly bridging the gap between front-end design and back-end functionality."  />
        </div>
    </div>
  )
}

export default Services