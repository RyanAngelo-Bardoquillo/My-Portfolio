import React, { useState } from 'react'
import './Skills.css'

function Skills() {
  const skills = [
    { name: 'HTML', level: 90 },
    { name: 'CSS', level: 85 },
    { name: 'JavaScript', level: 80 },
    { name: 'React', level: 75 },
    { name: 'Node.js', level: 70 },
    { name: 'Git', level: 80 },
    { name: 'Responsive Design', level: 85 },
    { name: 'UI/UX', level: 75 }
  ]

  const [hoveredSkill, setHoveredSkill] = useState(null)

  return (
    <section id="skills" className="skills">
      <div className="container">
        <h2 className="section-title">Growth</h2>
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div 
              key={index} 
              className="skill-item"
              onMouseEnter={() => setHoveredSkill(index)}
              onMouseLeave={() => setHoveredSkill(null)}
            >
              <div className="skill-name">{skill.name}</div>
              {hoveredSkill === index && (
                <div className="skill-progress-container">
                  <div className="skill-progress-bar">
                    <div 
                      className="skill-progress-fill" 
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                  <span className="skill-level-text">{skill.level}%</span>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills
