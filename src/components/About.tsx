'use client'

import { motion } from 'framer-motion'
import { FiDownload, FiCode, FiPenTool, FiDatabase } from 'react-icons/fi'

const highlights = [
  { icon: FiCode, title: 'Clean Code', description: 'Writing maintainable and scalable code' },
  { icon: FiPenTool, title: 'UI/UX Design', description: 'Creating beautiful user experiences' },
  { icon: FiDatabase, title: 'Full Stack', description: 'End-to-end application development' },
]

export default function About() {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">About Me</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Get to Know <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image/Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              {/* Decorative Elements */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-secondary rounded-3xl blur-3xl opacity-20" />
              <div className="absolute inset-4 glass rounded-3xl overflow-hidden">
                <div className="w-full h-full bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-32 h-32 mx-auto rounded-full bg-gradient-to-br from-primary to-secondary mb-6 flex items-center justify-center text-6xl">
                      👨‍💻
                    </div>
                    <h3 className="text-2xl font-bold gradient-text">Lochana Bandara</h3>
                    <p className="text-gray-400 mt-2">Software Developer</p>
                  </div>
                </div>
              </div>
              
              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, type: 'spring' }}
                className="absolute -right-4 -bottom-4 glass rounded-2xl p-4"
              >
                <div className="text-center">
                  <span className="text-3xl font-bold gradient-text">2+</span>
                  <p className="text-sm text-gray-400">Years Experience</p>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6">
              Passionate Developer Creating <span className="gradient-text">Digital Excellence</span>
            </h3>
            
            <p className="text-gray-400 mb-6 leading-relaxed">
              I&apos;m a dedicated full-stack developer with a passion for creating beautiful, 
              functional, and user-centered digital experiences. With expertise in modern 
              web technologies, I transform ideas into reality through clean code and 
              innovative solutions.
            </p>
            
            <p className="text-gray-400 mb-8 leading-relaxed">
              When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing 
              to open-source projects, or sharing knowledge with the developer community. 
              I believe in continuous learning and staying updated with the latest industry trends.
            </p>

            {/* Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 mb-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="glass rounded-xl p-4 text-center hover:bg-white/10 transition-colors duration-300"
                >
                  <item.icon className="w-8 h-8 mx-auto text-primary mb-2" />
                  <h4 className="font-medium text-sm">{item.title}</h4>
                  <p className="text-xs text-gray-500 mt-1">{item.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Download CV Button */}
            <motion.a
              href="/resume.pdf"
              download
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-secondary rounded-full text-white font-medium hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
            >
              <FiDownload size={20} />
              Download Resume
            </motion.a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
