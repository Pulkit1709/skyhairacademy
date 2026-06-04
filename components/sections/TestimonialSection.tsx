'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { TestimonialCard } from '../Modal'

const testimonials = [
  {
    name: 'Priya Singh',
    role: 'Professional Hair Artist',
    text: 'The training was amazing! I learned real skills from industry professionals. Now I have my own client base and earn well. Highly recommended!',
  },
  {
    name: 'Rajesh Kumar',
    role: 'Salon Owner',
    text: 'Best decision ever! The curriculum is updated with latest trends. My salon staff completed this course and now we have top-notch professionals.',
  },
  {
    name: 'Neha Patel',
    role: 'Freelance Hair Stylist',
    text: 'Alam Khan is an exceptional trainer. The practical training with real models made all the difference. I now have regular clients booking me.',
  },
  {
    name: 'Kavya Desai',
    role: 'Bridal Specialist',
    text: 'The bridal course transformed my career! I work with premium wedding planners now. The business training was invaluable.',
  },
  {
    name: 'Ankita Sharma',
    role: 'Career Changer',
    text: 'As a housewife, I wanted a new career. This course gave me confidence and skills. Now I earn independently from home!',
  },
  {
    name: 'Mohit Gupta',
    role: 'Salon Professional',
    text: 'The advanced techniques I learned are being used every day in the salon. Our clients appreciate the quality of work now.',
  },
]

export const TestimonialSection: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section className="section-padding bg-luxury-dark/50">
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-white mb-4">Student Testimonials</h2>
          <p className="text-lg text-luxury-white/70 max-w-2xl mx-auto">
            Real stories from students who transformed their careers
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {testimonials.map((testimonial, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <TestimonialCard
                name={testimonial.name}
                role={testimonial.role}
                text={testimonial.text}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
