import React, { useState } from 'react'
import './Contact.css'

const FORMSPREE_FORM_ID = import.meta.env.VITE_FORMSPREE_FORM_ID || 'YOUR_FORM_ID'

function Contact() {
  const [status, setStatus] = useState('') // 'sending' | 'success' | 'error'
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('sending')
    const fd = new FormData()
    fd.append('name', formData.name)
    fd.append('email', formData.email)
    fd.append('message', formData.message)
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
        method: 'POST',
        body: fd,
      })
      if (res.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch {
      setStatus('error')
    }
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section id="contact" className="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="contact-content">
          <p className="contact-description">
            I'm always open to discussing new projects, creative ideas, or
            opportunities to be part of your visions.
          </p>
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="your@email.com"
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Your message..."
                rows={5}
                required
              />
            </div>
            <button type="submit" className="contact-submit" disabled={status === 'sending'}>
              {status === 'sending' ? 'Sending...' : 'Send Message'}
            </button>
            {status === 'success' && (
              <p className="form-status form-status-success">Thanks! I'll get back to you soon.</p>
            )}
            {status === 'error' && (
              <p className="form-status form-status-error">Something went wrong. Try again or email rAngelobardoquillo@gmail.com</p>
            )}
          </form>
          <div className="contact-links">
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
