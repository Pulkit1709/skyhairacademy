'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Button } from '../Button'
import { businessConfig } from '@/config/business'

interface HeroSectionProps {
  onJoinClick: () => void
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onJoinClick }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-12 overflow-hidden">
      <div className="luxury-container w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="mb-6">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.8 }}
                className="inline-block bg-luxury-gold/10 border border-luxury-gold/30 rounded-full px-4 py-2 mb-6"
              >
                <span className="text-luxury-gold text-sm font-semibold">Welcome to Sky Hair Academy</span>
              </motion.div>
            </div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="text-5xl md:text-6xl lg:text-7xl font-bold text-luxury-white mb-6 leading-tight"
            >
              Become a Professional{' '}
              <span className="gold-gradient">Hair Artist</span> in Just One Month
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-lg text-luxury-white/70 mb-8 leading-relaxed max-w-lg"
            >
              {businessConfig.subtitle}
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="grid grid-cols-3 gap-4 mb-8"
            >
              <div>
                <div className="text-3xl font-bold gold-gradient">{businessConfig.stats.communityTrust}</div>
                <p className="text-sm text-luxury-white/60">Community Trust</p>
              </div>
              <div>
                <div className="text-3xl font-bold gold-gradient">{businessConfig.stats.studentsTrained}</div>
                <p className="text-sm text-luxury-white/60">Students Trained</p>
              </div>
              <div>
                <div className="text-3xl font-bold gold-gradient">{businessConfig.stats.placementRate}</div>
                <p className="text-sm text-luxury-white/60">Placement Rate</p>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="primary"
                size="lg"
                onClick={onJoinClick}
              >
                Join Next Batch
              </Button>
              <Button
                variant="secondary"
                size="lg"
                asLink
                href={businessConfig.contact.whatsapp}
                target="_blank"
              >
                Chat on WhatsApp
              </Button>
            </motion.div>
          </motion.div>

          {/* Right - Founder Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-luxury-gold/20 to-luxury-light-gold/20 blur-3xl rounded-full"></div>
              
              {/* Image Container */}
              <div className="relative rounded-2xl overflow-hidden border-2 border-luxury-gold/30 shadow-2xl shadow-luxury-gold/20">
                <img
                  src="/founder.jpg"
                  alt="Alam Khan - Founder"
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
