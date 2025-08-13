import React from 'react'
import NavBar from '@/components/NavBar'
import HeroSection from '@/components/HeroSection'
import Courses from '@/components/Courses'

const Home = () => {
  return (
    <div>
        <NavBar />
        <HeroSection />
        <Courses /> 
    </div>
  )
}

export default Home