import React from 'react'
import ThemeToggle from '../Component/ThemeToggle'
import StarBackground from '../Component/StarBackground'
import Navbar from '../Component/Navbar'
import HeroSection from '../Component/HeroSection'
import AboutSection  from '../Component/AboutSection'
import SkillsSection from '../Component/SkillsSection'
import ProjectsSection from '../Component/ProjectsSection'
import ContactSection from '../Component/ContactSection'
import Footer from '../Component/Footer'




const Home = () => {
  return (
    <div className='min-h-screen bg-background text-foreground overflow-x-hidden'>
      <ThemeToggle/>
      <StarBackground/>
      <Navbar/>
      <main>
        <HeroSection/>
        <AboutSection/>
        <SkillsSection/>
        <ProjectsSection/>
        <ContactSection/>

      </main>
      <Footer/>
      
    </div>
  )
}

export default Home