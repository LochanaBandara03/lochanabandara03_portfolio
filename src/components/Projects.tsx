'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'

const projects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured online shopping platform with cart functionality, user authentication, and payment integration.',
    image: '/projects/ecommerce.jpg',
    tags: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
    github: 'https://github.com/LochanaBandara03',
    live: '#',
    featured: true,
  },
  {
    title: 'Task Management App',
    description: 'A collaborative project management tool with real-time updates, drag-and-drop interface, and team features.',
    image: '/projects/taskapp.jpg',
    tags: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
    github: 'https://github.com/LochanaBandara03',
    live: '#',
    featured: true,
  },
  {
    title: 'AI Chat Application',
    description: 'An intelligent chatbot application powered by OpenAI API with conversation history and custom personas.',
    image: '/projects/aichat.jpg',
    tags: ['Next.js', 'OpenAI', 'Prisma', 'PostgreSQL'],
    github: 'https://github.com/LochanaBandara03',
    live: '#',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    description: 'A modern personal portfolio website with smooth animations and responsive design.',
    image: '/projects/portfolio.jpg',
    tags: ['Next.js', 'Framer Motion', 'Tailwind'],
    github: 'https://github.com/LochanaBandara03',
    live: 'https://itslochana.me',
    featured: false,
  },
  {
    title: 'Weather Dashboard',
    description: 'Real-time weather application with location search, forecasts, and beautiful visualizations.',
    image: '/projects/weather.jpg',
    tags: ['React', 'Weather API', 'Chart.js'],
    github: 'https://github.com/LochanaBandara03',
    live: '#',
    featured: false,
  },
  {
    title: 'Blog Platform',
    description: 'A content management system with markdown support, SEO optimization, and admin dashboard.',
    image: '/projects/blog.jpg',
    tags: ['Next.js', 'MDX', 'Tailwind'],
    github: 'https://github.com/LochanaBandara03',
    live: '#',
    featured: false,
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-primary/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">My Work</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Here are some of my recent projects. Each one was built to solve a specific 
            problem and taught me something new.
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="space-y-24 mb-24">
          {projects.filter(p => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className={`grid lg:grid-cols-2 gap-8 items-center ${
                index % 2 === 1 ? 'lg:flex-row-reverse' : ''
              }`}
            >
              {/* Project Image */}
              <div className={`relative group ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative overflow-hidden rounded-2xl">
                  <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 glass flex items-center justify-center">
                    <FiFolder className="w-24 h-24 text-primary/50" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-darker/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6 gap-4">
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-3 glass rounded-full hover:bg-white/20 transition-colors"
                    >
                      <FiGithub size={20} />
                    </motion.a>
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      className="p-3 glass rounded-full hover:bg-white/20 transition-colors"
                    >
                      <FiExternalLink size={20} />
                    </motion.a>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className={index % 2 === 1 ? 'lg:order-1 lg:text-right' : ''}>
                <span className="text-primary text-sm font-medium">Featured Project</span>
                <h3 className="text-2xl md:text-3xl font-bold mt-2 mb-4">{project.title}</h3>
                <div className="glass rounded-xl p-6 mb-4">
                  <p className="text-gray-400">{project.description}</p>
                </div>
                <div className={`flex flex-wrap gap-2 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-2xl font-bold text-center mb-12"
        >
          Other Noteworthy Projects
        </motion.h3>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.filter(p => !p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="glass rounded-xl p-6 hover:bg-white/10 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <FiFolder className="w-10 h-10 text-primary" />
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <FiGithub size={20} />
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-primary transition-colors"
                  >
                    <FiExternalLink size={20} />
                  </a>
                </div>
              </div>
              <h4 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h4>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.tags.map(tag => (
                  <span key={tag} className="text-xs text-gray-500">
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <motion.a
            href="https://github.com/LochanaBandara03"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 px-6 py-3 glass rounded-full hover:bg-white/10 transition-all duration-300"
          >
            <FiGithub size={20} />
            View More on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
