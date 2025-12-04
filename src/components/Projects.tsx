'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink, FiFolder } from 'react-icons/fi'
import Image from 'next/image'

const projects = [
  {
    title: 'AI Assistant Based on Constitution of Sri Lanka',
    description: 'Built an AI assistant to deliver accurate, source-backed answers to complex legal questions without reading entire legal documents, enhancing legal accessibility.',
    image: '/ai-assistant.png',
    tags: ['RAG', 'LangChain', 'ChromaDB', 'LLaMA 3.2', 'Ollama'],
    github: '',
    live: '',
    featured: true,
  },
  {
    title: 'Smart Traffic Management System',
    description: 'Optimized traffic flow using Machine Learning and Computer Vision. Built with YOLOv5 for real-time vehicle detection and traffic analysis.',
    image: '/traffic-management.png',
    tags: ['YOLOv5', 'TensorFlow', 'Python', 'Computer Vision'],
    github: 'https://github.com/LochanaBandara03/Traffic-management-system',
    live: '',
    featured: true,
  },
  {
    title: 'Heart Disease Classification',
    description: 'Classification of heart disease using Machine Learning algorithms. Data analysis and visualization with comprehensive model evaluation.',
    image: '/heart-classification.png',
    tags: ['Python', 'Pandas', 'Matplotlib', 'Scikit-learn'],
    github: 'https://github.com/LochanaBandara03/Heart-disease-classification',
    live: '',
    featured: true,
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
          className="text-center mb-10 sm:mb-16 px-2"
        >
          <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase">My Work</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 mt-3 sm:mt-4 max-w-2xl mx-auto text-sm sm:text-base">
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
                <div className="relative overflow-hidden rounded-2xl aspect-video flex items-center justify-center bg-black/10">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="object-cover w-full h-full rounded-2xl"
                    style={{ maxHeight: '100%', maxWidth: '100%' }}
                  />
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
                    {project.live && (
                      <motion.a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.1 }}
                        className="p-3 glass rounded-full hover:bg-white/20 transition-colors"
                      >
                        <FiExternalLink size={20} />
                      </motion.a>
                    )}
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
                <div className={`flex flex-wrap gap-2 mb-6 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  {project.tags.map(tag => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-primary/10 text-primary rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className={`flex gap-4 ${index % 2 === 1 ? 'lg:justify-end' : ''}`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 px-4 py-2 glass rounded-lg hover:bg-white/10 transition-all"
                  >
                    <FiGithub className="w-5 h-5" />
                    <span>Code</span>
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-secondary rounded-lg hover:opacity-90 transition-opacity"
                    >
                      <FiExternalLink className="w-5 h-5" />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
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
