'use client'

import React, { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from './Button'

interface AdmissionFormProps {
  isOpen: boolean
  onClose: () => void
}

export const AdmissionForm: React.FC<AdmissionFormProps> = ({ isOpen, onClose }) => {
  const [isMounted, setIsMounted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    course: 'basic',
  })

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // WhatsApp message with form data
    const message = `Hi Sky Hair Academy, I want to join the course. My details:
Name: ${formData.name}
Phone: ${formData.phone}
Email: ${formData.email}
Course: ${formData.course}`
    
    const encodedMessage = encodeURIComponent(message)
    window.open(`https://wa.me/917042520702?text=${encodedMessage}`, '_blank')
    onClose()
  }

  if (!isMounted || !isOpen) return null

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm p-4">
      <div className="glass rounded-2xl max-w-md w-full p-8 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 hover:bg-luxury-gold/10 rounded-lg transition-colors"
        >
          <X size={20} className="text-luxury-gold" />
        </button>

        <h2 className="text-2xl font-bold text-luxury-white mb-2">Join Sky Hair Academy</h2>
        <p className="text-luxury-white/70 mb-6">Fill the form and we'll contact you via WhatsApp</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold text-luxury-gold mb-2">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-luxury-dark border border-luxury-gold/20 rounded-lg px-4 py-3 text-luxury-white placeholder-luxury-white/30 focus:outline-none focus:border-luxury-gold transition-colors"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-semibold text-luxury-gold mb-2">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
              className="w-full bg-luxury-dark border border-luxury-gold/20 rounded-lg px-4 py-3 text-luxury-white placeholder-luxury-white/30 focus:outline-none focus:border-luxury-gold transition-colors"
              placeholder="+91 XXXXXXXXXX"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold text-luxury-gold mb-2">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-luxury-dark border border-luxury-gold/20 rounded-lg px-4 py-3 text-luxury-white placeholder-luxury-white/30 focus:outline-none focus:border-luxury-gold transition-colors"
              placeholder="your@email.com"
            />
          </div>

          <div>
            <label htmlFor="course" className="block text-sm font-semibold text-luxury-gold mb-2">
              Interested Course
            </label>
            <select
              id="course"
              name="course"
              value={formData.course}
              onChange={handleChange}
              className="w-full bg-luxury-dark border border-luxury-gold/20 rounded-lg px-4 py-3 text-luxury-white focus:outline-none focus:border-luxury-gold transition-colors"
            >
              <option value="basic">Basic Hair Styling Course</option>
              <option value="advanced">Advanced Hair Styling Course</option>
              <option value="bridal">Bridal Hairstyle Course</option>
              <option value="professional">Professional Hair Artist Program</option>
            </select>
          </div>

          <Button type="submit" variant="primary" className="w-full justify-center mt-6">
            Continue on WhatsApp
          </Button>
        </form>
      </div>
    </div>
  )
}

interface TestimonialCardProps {
  name: string
  role: string
  text: string
  image?: string
}

export const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, text, image }) => {
  return (
    <div className="glass rounded-xl p-6">
      <div className="flex gap-1 mb-4">
        {[...Array(5)].map((_, i) => (
          <span key={i} className="text-luxury-gold">★</span>
        ))}
      </div>
      <p className="text-luxury-white/80 italic mb-4 text-sm leading-relaxed">"{text}"</p>
      <div className="border-t border-luxury-gold/20 pt-4 flex items-center gap-3">
        {image && (
          <img
            src={image}
            alt={name}
            className="w-12 h-12 rounded-full object-cover border border-luxury-gold/30"
          />
        )}
        <div>
          <p className="font-semibold text-luxury-white">{name}</p>
          <p className="text-luxury-gold text-sm">{role}</p>
        </div>
      </div>
    </div>
  )
}
