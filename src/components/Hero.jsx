import React from 'react'
import './Hero.css'

function Hero() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 70
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset
      const offsetPosition = elementPosition - headerHeight

      // Trigger animation immediately when scrolling
      element.classList.add('visible')
      
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Hi, I'm <span className="highlight">Ryan!</span></h1>
        <p className="hero-subtitle">Web Developer & Creative Problem Solver</p>
        <p className="hero-description">
          I build beautiful and functional web experiences
        </p>
        <div className="hero-buttons">
          <a 
            href="#projects" 
            className="btn btn-primary"
            onClick={(e) => { e.preventDefault(); scrollToSection('projects') }}
          >
            View My Work
          </a>
          <a 
            href="#contact" 
            className="btn btn-secondary"
            onClick={(e) => { e.preventDefault(); scrollToSection('contact') }}
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero
