'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { businessConfig } from '@/config/business'

export const FounderSection: React.FC = () => {
  return (
    <section id="founder" className="section-padding bg-luxury-dark/50">
      <div className="luxury-container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="flex justify-center"
          >
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/20 to-luxury-light-gold/20 blur-3xl rounded-full"></div>
              <div className="relative rounded-2xl overflow-hidden border-2 border-luxury-gold/30 shadow-2xl shadow-luxury-gold/20">
                <img
                  src="/founder.jpg"
                  alt="Alam Khan"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-bold text-luxury-white mb-4">
              Meet {businessConfig.founder}
            </h2>
            <div className="space-y-4 text-luxury-white/70 leading-relaxed mb-6">
              <p>
                {businessConfig.founder} is a renowned professional hair trainer and artist with over 10+ years of
                industry experience. He has transformed the careers of thousands of students across India.
              </p>
              <p>
                His passion for excellence and commitment to practical training has made Sky Hair Academy one of the
                most trusted institutes in Delhi. He believes in hands-on training and personalized mentoring.
              </p>
              <p>
                {businessConfig.founder} stays updated with the latest trends in the beauty industry and ensures that
                every student learns cutting-edge techniques used in top salons worldwide.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div>
                <div className="text-3xl font-bold gold-gradient">{businessConfig.stats.yearsExperience}</div>
                <p className="text-sm text-luxury-white/60">Years of Experience</p>
              </div>
              <div>
                <div className="text-3xl font-bold gold-gradient">{businessConfig.stats.studentsTrained}</div>
                <p className="text-sm text-luxury-white/60">Students Trained</p>
              </div>
            </div>

            {/* CTA */}
            <a
              href={businessConfig.contact.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block btn-primary"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
