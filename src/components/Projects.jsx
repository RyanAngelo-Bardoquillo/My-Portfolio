import React from 'react'
import './Projects.css'

function Projects() {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured online shopping platform with shopping cart, user authentication, and payment integration. Features include product filtering, search functionality, and order management.',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe API']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features. Built with modern web technologies for optimal performance.',
      tech: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS']
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'An interactive weather application that displays current conditions and forecasts for multiple locations. Features include location search, favorite cities, and beautiful data visualizations.',
      tech: ['React', 'JavaScript', 'Weather API', 'Chart.js']
    },
    {
      id: 4,
      title: 'Social Media Dashboard',
      description: 'A comprehensive analytics dashboard for social media metrics. Track engagement, follower growth, and content performance with beautiful charts and real-time data updates.',
      tech: ['React', 'Express', 'PostgreSQL', 'D3.js']
    },
    {
      id: 5,
      title: 'Recipe Finder App',
      description: 'Discover and save your favorite recipes with this intuitive cooking app. Features include ingredient-based search, dietary filters, meal planning, and shopping list generation.',
      tech: ['React', 'CSS', 'REST API', 'LocalStorage']
    }
  ]

  return (
    <section id="projects" className="projects">
      <div className="container">
        <h2 className="section-title">Projects</h2>
        <div className="projects-grid">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <h3 className="project-title">{project.title}</h3>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.tech.map((tech, index) => (
                  <span key={index} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects
