'use client'

import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiArrowDown } from 'react-icons/fi'
import { SiMedium } from 'react-icons/si'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/LochanaBandara03', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://www.linkedin.com/in/lochana-bandara-51a723232/', label: 'LinkedIn' },
  { icon: SiMedium, href: 'https://medium.com/@lochanabandara2003', label: 'Medium' },
]

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-darker">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-transparent to-transparent" />
      <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6"
          >
            <span className="inline-block px-4 py-2 glass rounded-full text-sm text-gray-300">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6"
          >
            Hello, I&apos;m{' '}
            <span className="gradient-text">Lochana </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-xl sm:text-2xl md:text-3xl text-gray-400 mb-8"
          >
            Computer Engineering Undergraduate | <span className="text-primary">AI & ML Enthusiast</span>
          </motion.h2>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-gray-400 text-lg max-w-2xl mx-auto mb-10"
          >
            Passionate about implementing AI-driven solutions in software to drive innovation 
            and solve real-world problems. Experienced in Full Stack Development, Machine Learning, 
            and Generative AI.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-10"
          >
            <a
              href="#projects"
              className="px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-medium hover:opacity-90 transition-opacity text-center"
            >
              View My Work
            </a>
            {/* <a
              href="#about"
              className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full font-medium hover:opacity-90 transition-opacity text-center"
            >
              Learn More
            </a> */}
            <a
              href="#about"
              className="px-8 py-4 bg-gradient-to-r from-indigo-600 to-blue-600 rounded-full font-medium hover:opacity-90 transition-opacity text-center"
            >
              Download CV
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex gap-4 justify-center"
          >
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 glass rounded-full flex items-center justify-center hover:bg-white/10 hover:scale-110 transition-all duration-300"
                aria-label={social.label}
              >
                <social.icon className="w-5 h-5" />
              </a>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.a
          href="#about"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors"
        >
          <span className="text-sm">Scroll Down</span>
          <FiArrowDown className="w-5 h-5" />
        </motion.a>
      </motion.div>
    </section>
  )
}
