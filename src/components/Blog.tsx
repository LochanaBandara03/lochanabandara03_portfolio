'use client'

import { motion } from 'framer-motion'
import { FiExternalLink, FiCalendar, FiArrowRight } from 'react-icons/fi'
import Image from 'next/image'

const blogPosts = [
  {
    title: 'What is RAG? A Super Simple Explanation for Beginners',
    description: 'Explain RAG in simple terms, show how it works, and give you real-world examples of where it\'s used.',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/1*X0zFNBrzFbl9iQF1ZWBGnA.png',
    date: 'March 17, 2025',
    link: 'https://medium.com/@lochanabandara2003/what-is-rag-a-super-simple-explanation-for-beginners-faf4904e164e',
  },
  {
    title: 'How to Become an Expert in Data Structures and Algorithms',
    description: 'Data structures organize data efficiently, making programs faster and more effective.',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*sqotwJAmSTktaECT',
    date: 'October 30, 2024',
    link: 'https://medium.com/@lochanabandara2003/how-to-become-an-expert-in-data-structures-and-algorithms-896e74a745a3',
  },
  {
    title: 'Best supporter of Students - NotebookLM',
    description: 'NotebookLM with Gemini 1.5 enhances studying with smart organization, AI search, and collaboration tools.',
    image: 'https://miro.medium.com/v2/resize:fit:1100/format:webp/0*uuViiiwM3J3So4EM.png',
    date: 'June 15, 2024',
    link: 'https://medium.com/@lochanabandara2003/best-supporter-of-students-notebooklm-baadf3eea425',
  },
]

export default function Blog() {
  return (
    <section id="blog" className="py-24 relative">
      {/* Background Effects */}
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium tracking-wider uppercase">My Blog</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2">
            Latest <span className="gradient-text">Articles</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            I write about AI, Machine Learning, and Software Development. 
            Here are some of my recent articles on Medium.
          </p>
        </motion.div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <motion.a
              key={post.title}
              href={post.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="group glass rounded-2xl overflow-hidden hover:bg-white/10 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 z-10" />
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-6">
                {/* Date */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mb-3">
                  <FiCalendar className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  {post.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                  {post.description}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 text-primary font-medium text-sm">
                  <span>Read Article</span>
                  <FiArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </div>
              </div>
            </motion.a>
          ))}
        </div>

        {/* View All Articles */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <a
            href="https://medium.com/@lochanabandara2003"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary rounded-full font-medium hover:opacity-90 transition-opacity"
          >
            <FiExternalLink className="w-5 h-5" />
            View All Articles on Medium
          </a>
        </motion.div>
      </div>
    </section>
  )
}
