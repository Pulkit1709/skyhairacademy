'use client'

import React, { useState, useEffect } from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import { Button } from './Button'

const navigationLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Why Us', href: '/#why-us' },
  { label: 'Courses', href: '/#courses' },
  { label: 'About Founder', href: '/#founder' },
  { label: 'FAQ', href: '/#faq' },
  { label: 'Contact', href: '/#contact' },
]

export const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  return (
    <header className="fixed top-0 w-full z-40 bg-luxury-black/80 backdrop-blur-md border-b border-luxury-gold/20">
      <div className="luxury-container flex items-center justify-between h-20">
        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <div className="font-bold text-2xl gold-gradient">Sky Hair</div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navigationLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-luxury-white hover:text-luxury-gold transition-colors duration-300 text-sm font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Buttons */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="secondary"
            size="sm"
            asLink
            href="https://wa.me/917042520702?text=Hi%20Sky%20Hair%20Academy%2C%20I'm%20interested%20in%20your%20courses"
            target="_blank"
          >
            WhatsApp
          </Button>
          <Button
            variant="primary"
            size="sm"
            onClick={() => {
              const element = document.getElementById('contact')
              element?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            Join Batch
          </Button>
        </div>

        {/* Mobile Menu Button */}
        {isMounted && (
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 hover:bg-luxury-gold/10 rounded-lg transition-colors"
          >
            {isOpen ? (
              <X size={24} className="text-luxury-gold" />
            ) : (
              <Menu size={24} className="text-luxury-gold" />
            )}
          </button>
        )}
      </div>

      {/* Mobile Navigation */}
      {isMounted && isOpen && (
        <nav className="md:hidden bg-luxury-dark border-t border-luxury-gold/20">
          <div className="luxury-container py-4 flex flex-col gap-4">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-luxury-white hover:text-luxury-gold transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              size="md"
              asLink
              href="https://wa.me/917042520702?text=Hi%20Sky%20Hair%20Academy%2C%20I'm%20interested%20in%20your%20courses"
              target="_blank"
              className="w-full justify-center mt-4"
            >
              Chat on WhatsApp
            </Button>
          </div>
        </nav>
      )}
    </header>
  )
}
