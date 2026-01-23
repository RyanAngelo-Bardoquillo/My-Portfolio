import React from 'react'
import './About.css'

function About() {
  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="section-title">About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate web developer with a love for creating clean, 
              efficient, and user-friendly applications. I enjoy turning complex 
              problems into simple, beautiful solutions.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, 
              contributing to open source projects, or sharing knowledge with the 
              developer community.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
