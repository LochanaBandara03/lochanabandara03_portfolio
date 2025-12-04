'use client'

import { motion } from 'framer-motion'
import { FiHeart, FiGithub, FiLinkedin, FiTwitter, FiArrowUp } from 'react-icons/fi'

const socialLinks = [
  { icon: FiGithub, href: 'https://github.com/LochanaBandara03', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
  { icon: FiTwitter, href: 'https://twitter.com/', label: 'Twitter' },
]

const quickLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
]

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative py-16 border-t border-white/10">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-primary/5 to-transparent pointer-events-none" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <a href="#home" className="text-2xl font-bold gradient-text">
              Lochana
            </a>
            <p className="text-gray-400 mt-4 max-w-xs">
              Full Stack Developer creating digital experiences with passion and precision.
            </p>
            <div className="flex gap-4 mt-6">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  className="p-2 text-gray-400 hover:text-primary transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-400 hover:text-primary transition-colors duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-lg font-semibold mb-4">Get In Touch</h3>
            <div className="space-y-2 text-gray-400">
              <p>hello@itslochana.me</p>
              <p>Sri Lanka</p>
            </div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-gray-400 text-sm flex items-center gap-1"
          >
            © {new Date().getFullYear()} Lochana Bandara. Made with 
            <FiHeart className="text-red-500 mx-1" /> 
            using Next.js
          </motion.p>

          {/* Back to Top */}
          <motion.button
            onClick={scrollToTop}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="p-3 glass rounded-full text-gray-400 hover:text-primary hover:bg-white/10 transition-all duration-300"
            aria-label="Back to top"
          >
            <FiArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}
