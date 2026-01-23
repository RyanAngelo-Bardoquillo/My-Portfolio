import React from 'react'
import './Contact.css'

function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas, or 
            opportunities to be part of your visions.
          </p>
          <div className="contact-links">
            <a href="mailto:your.email@example.com" className="contact-link">
              📧 Email Me
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              💻 GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="contact-link">
              💼 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
