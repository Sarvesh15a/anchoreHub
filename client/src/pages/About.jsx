import React from 'react'
import Header from '../components/Header'
import FooterCom from './../components/Footer';
import dummyPhoto from '../assets/dummy-photo.jpg';
const About = () => {
  
  return (
    <>
    <Header/>
       <div>Profile</div>
       <div className="flex flex-col items-center mb-20">
      <h1 className="text-2xl font-bold mt-8 mb-4">User Profile</h1>
      <img src={dummyPhoto} alt="Dummy Photo" className="rounded-full w-60 h-60 mb-4" />
      <div className="text-center" >
        <p className="text-lg">Name: John Doe</p>
        <p className="text-lg">Email: johndoe@example.com</p>
        <p className="text-lg">Phone number: 6306053193</p>
        <p className="text-lg">Address: 122/132/b/malakraj allahabad</p>
        {/* Add more profile information */}
      </div>
    </div >

       <FooterCom/>
    </>
  )
}

export default About