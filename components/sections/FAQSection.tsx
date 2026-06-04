'use client'

import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { businessConfig } from '@/config/business'

interface FAQItemProps {
  question: string
  answer: string
  isOpen: boolean
  onClick: () => void
}

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, onClick }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="glass rounded-lg overflow-hidden"
    >
      <button
        onClick={onClick}
        className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-luxury-gold/5 transition-colors"
      >
        <span className="font-semibold text-luxury-white">{question}</span>
        <ChevronDown
          size={20}
          className={`text-luxury-gold transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      <motion.div
        initial={{ height: 0, opacity: 0 }}
        animate={{ height: isOpen ? 'auto' : 0, opacity: isOpen ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden"
      >
        <div className="px-6 py-4 border-t border-luxury-gold/20 text-luxury-white/70">
          {answer}
        </div>
      </motion.div>
    </motion.div>
  )
}

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <section id="faq" className="section-padding">
      <div className="luxury-container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-luxury-white mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-luxury-white/70 max-w-2xl mx-auto">
            Find answers to common questions about our courses
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-3xl mx-auto space-y-4"
        >
          {isMounted && businessConfig.faqs.map((faq, idx) => (
            <FAQItem
              key={idx}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === idx}
              onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-luxury-white/70 mb-4">Didn't find your answer? Let's chat!</p>
          <a
            href={businessConfig.contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block btn-secondary"
          >
            Message us on WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}
