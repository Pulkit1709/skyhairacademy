'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Card } from '../Card'
import { businessConfig } from '@/config/business'

export const CareerSection: React.FC = () => {
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
    <section className="section-padding">
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-white mb-4">Career Opportunities</h2>
          <p className="text-lg text-luxury-white/70 max-w-2xl mx-auto">
            Multiple paths to success after completing your training
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {businessConfig.careerOpportunities.map((opportunity, idx) => (
            <motion.div key={idx} variants={itemVariants}>
              <Card className="text-center">
                <div className="text-5xl font-bold gold-gradient mb-4">
                  {['💼', '💇', '💍', '👥', '🏠', '🏢'][idx]}
                </div>
                <h3 className="text-xl font-bold text-luxury-white mb-2">{opportunity.title}</h3>
                <p className="text-luxury-white/70">{opportunity.description}</p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
