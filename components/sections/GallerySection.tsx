'use client'

import React from 'react'
import { motion } from 'framer-motion'

const galleryImages = [
  { id: 1, title: 'Student Certificate', type: 'certificate', url: 'https://images.unsplash.com/photo-1589519160732-57fc498494f8?w=500&h=500&fit=crop' },
  { id: 2, title: 'Batch Photo', type: 'batch', url: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=500&h=500&fit=crop' },
  { id: 3, title: 'Training Session', type: 'training', url: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=500&h=500&fit=crop' },
  { id: 4, title: 'Professional Hairstyle', type: 'hairstyle', url: 'https://images.unsplash.com/photo-1521995992647-cebe63ad4ea0?w=500&h=500&fit=crop' },
  { id: 5, title: 'Student Success', type: 'success', url: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=500&h=500&fit=crop' },
  { id: 6, title: 'Graduation Day', type: 'graduation', url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=500&h=500&fit=crop' },
]

export const GallerySection: React.FC = () => {
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
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-white mb-4">Student Success Gallery</h2>
          <p className="text-lg text-luxury-white/70 max-w-2xl mx-auto">
            See the amazing transformations and achievements of our students
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {galleryImages.map((image, idx) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="relative group overflow-hidden rounded-xl"
            >
              <div className="relative w-full aspect-square bg-gradient-to-br from-luxury-gold/20 to-luxury-gold/10 rounded-xl overflow-hidden border border-luxury-gold/20">
                <img
                  src={image.url}
                  alt={image.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-luxury-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-start p-4">
                  <h3 className="text-luxury-gold font-semibold">{image.title}</h3>
                </div>
              </div>
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
          <p className="text-luxury-white/70 mb-4">Follow us on Instagram for more updates</p>
          <a
            href="https://www.instagram.com/sky_hairartist?igsh=MWRidGh6bGphdXFl"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-secondary"
          >
            Follow on Instagram
          </a>
        </motion.div>
      </div>
    </section>
  )
}
