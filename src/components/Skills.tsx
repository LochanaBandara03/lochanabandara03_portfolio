'use client'

import { motion } from 'framer-motion'
import { 
  SiReact, SiNextdotjs, SiTypescript, SiJavascript, 
  SiTailwindcss, SiNodedotjs, SiPython, SiMongodb,
  SiPostgresql, SiGit, SiFigma, SiDocker
} from 'react-icons/si'

const skills = [
  { name: 'React', icon: SiReact, color: '#61DAFB', level: 90 },
  { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', level: 85 },
  { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 85 },
  { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 95 },
  { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 90 },
  { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 80 },
  { name: 'Python', icon: SiPython, color: '#3776AB', level: 75 },
  { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 80 },
  { name: 'PostgreSQL', icon: SiPostgresql, color: '#4169E1', level: 75 },
  { name: 'Git', icon: SiGit, color: '#F05032', level: 85 },
  { name: 'Figma', icon: SiFigma, color: '#F24E1E', level: 70 },
  { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 65 },
]

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">My Skills</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Technologies I <span className="gradient-text">Work With</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I&apos;m constantly learning and expanding my skill set. Here are the technologies 
            and tools I use to bring ideas to life.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.05 }}
              className="group"
            >
              <div className="glass rounded-2xl p-6 text-center h-full hover:bg-white/10 transition-all duration-300 glow-hover">
                <div 
                  className="w-14 h-14 mx-auto mb-4 flex items-center justify-center rounded-xl transition-all duration-300"
                  style={{ backgroundColor: `${skill.color}15` }}
                >
                  <skill.icon 
                    size={32} 
                    style={{ color: skill.color }}
                    className="group-hover:scale-110 transition-transform duration-300"
                  />
                </div>
                <h3 className="font-medium text-sm mb-2">{skill.name}</h3>
                
                {/* Skill Level Bar */}
                <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.05 }}
                    className="h-full rounded-full"
                    style={{ backgroundColor: skill.color }}
                  />
                </div>
                <span className="text-xs text-gray-500 mt-1 block">{skill.level}%</span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Skills Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-400">
            Also experienced with: 
            <span className="text-gray-300"> REST APIs, GraphQL, Firebase, AWS, Vercel, GitHub Actions, Agile/Scrum</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}
