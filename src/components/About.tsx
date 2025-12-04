'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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
          className="text-center mb-10 sm:mb-16"
        >
          <span className="text-primary text-xs sm:text-sm font-medium tracking-wider uppercase">About Me</span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2">
            Get to Know <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
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
                  <div className="text-center p-4 sm:p-6 md:p-8">
                    <div className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 mx-auto rounded-full overflow-hidden mb-4 sm:mb-6 ring-4 ring-primary/30">
                      <Image
                        src="https://lochanabandara.vercel.app/static/media/profile-photo.9a36113c8b1815d1432b.jpg"
                        alt="Lochana Bandara"
                        width={192}
                        height={192}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl sm:text-2xl font-bold gradient-text">Lochana Bandara</h3>
                    <p className="text-gray-400 mt-2 text-sm sm:text-base">AI/ML Enthusiast</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4 sm:mb-6">
              Passionate About <span className="gradient-text">AI & Innovation</span>
            </h3>
            
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Highly motivated and results-driven second-year Computer Engineering
              undergraduate at the Faculty of Engineering, University of Sri Jayewardenepura, 
              with a strong foundation in Full Stack Development, Machine Learning, and Generative AI.
            </p>
            
            <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
              Passionate about implementing AI-driven solutions in software to drive
              innovation and solve real-world problems. Seeking opportunities to apply my technical
              expertise in AI and software development to create impactful solutions.
            </p>

            {/* Education */}
            <div className="glass rounded-xl sm:rounded-2xl p-4 sm:p-6">
              <div className="flex items-center gap-3 sm:gap-4">
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-primary to-secondary rounded-lg sm:rounded-xl flex items-center justify-center text-xl sm:text-2xl">
                  🎓
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-lg">B.Sc. in Computer Engineering</h4>
                  <p className="text-gray-400 text-xs sm:text-base">University of Sri Jayewardenepura</p>
                  <p className="text-xs sm:text-sm text-primary">2022 - Present</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
