'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Instagram } from 'lucide-react'
import { businessConfig } from '@/config/business'
import { Button } from '../Button'

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="section-padding bg-luxury-dark/50">
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-white mb-4">Get In Touch</h2>
          <p className="text-lg text-luxury-white/70 max-w-2xl mx-auto">
            Reach out to us and start your journey to becoming a professional hair artist
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                <Phone size={24} className="text-luxury-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-luxury-white mb-2">Phone</h3>
                <a
                  href={`tel:${businessConfig.contact.phone}`}
                  className="text-luxury-white/70 hover:text-luxury-gold transition-colors"
                >
                  {businessConfig.contact.phone}
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                <Mail size={24} className="text-luxury-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-luxury-white mb-2">Email</h3>
                <a
                  href={`mailto:${businessConfig.contact.email}`}
                  className="text-luxury-white/70 hover:text-luxury-gold transition-colors break-all"
                >
                  {businessConfig.contact.email}
                </a>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                <MapPin size={24} className="text-luxury-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-luxury-white mb-2">Location</h3>
                <p className="text-luxury-white/70">{businessConfig.contact.location}</p>
              </div>
            </div>

            {/* Instagram */}
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 rounded-full bg-luxury-gold/10 flex items-center justify-center">
                <Instagram size={24} className="text-luxury-gold" />
              </div>
              <div>
                <h3 className="font-semibold text-luxury-white mb-2">Instagram</h3>
                <a
                  href={businessConfig.contact.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-luxury-white/70 hover:text-luxury-gold transition-colors"
                >
                  Follow us for updates
                </a>
              </div>
            </div>

            {/* CTA */}
            <Button
              variant="primary"
              size="lg"
              asLink
              href={businessConfig.contact.whatsapp}
              target="_blank"
              className="w-full justify-center"
            >
              Chat on WhatsApp
            </Button>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="glass rounded-2xl overflow-hidden h-96 border border-luxury-gold/20">
              <img
                src="https://images.unsplash.com/photo-1524661135-423995f22d0b?w=600&h=400&fit=crop"
                alt="Location Map"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <div className="text-center">
                  <p className="text-luxury-gold text-lg font-semibold">📍 Janakpuri East</p>
                  <p className="text-luxury-white/80 text-sm mt-2">Metro Station, Delhi</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
