'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { CourseCard } from '../Card'
import { businessConfig } from '@/config/business'

interface CoursesSectionProps {
  onCourseClick?: () => void
}

export const CoursesSection: React.FC<CoursesSectionProps> = ({ onCourseClick }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section id="courses" className="section-padding">
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-white mb-4">Our Courses</h2>
          <p className="text-lg text-luxury-white/70 max-w-2xl mx-auto">
            Choose the perfect course for your career goals
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {businessConfig.courses.map((course) => (
            <motion.div key={course.id} variants={itemVariants}>
              <CourseCard
                title={course.title}
                duration={course.duration}
                description={course.description}
                highlights={course.highlights}
                certification={course.certification}
                onClick={onCourseClick}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-luxury-white/70 mb-4">Ready to start your journey?</p>
          <a
            href="https://wa.me/917042520702?text=Hi%20Sky%20Hair%20Academy%2C%20I'm%20interested%20in%20your%20courses"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-primary"
          >
            Inquire on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
