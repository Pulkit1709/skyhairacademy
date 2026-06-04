'use client'

import React, { useState, useEffect, useLayoutEffect } from 'react'
import { Header } from '@/components/Header'
import { Footer } from '@/components/Footer'
import { WhatsAppButton } from '@/components/Button'
import { AdmissionForm } from '@/components/Modal'
import { HeroSection } from '@/components/sections/HeroSection'
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection'
import { CoursesSection } from '@/components/sections/CoursesSection'
import { CurriculumSection } from '@/components/sections/CurriculumSection'
import { GallerySection } from '@/components/sections/GallerySection'
import { TestimonialSection } from '@/components/sections/TestimonialSection'
import { CareerSection } from '@/components/sections/CareerSection'
import { FounderSection } from '@/components/sections/FounderSection'
import { FAQSection } from '@/components/sections/FAQSection'
import { ContactSection } from '@/components/sections/ContactSection'
import '@/app/globals.css'

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useLayoutEffect(() => {
    setIsMounted(true)
  }, [])

  useEffect(() => {
    if (!isMounted) return

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [isMounted])

  // Exit intent popup - show when user tries to leave
  useEffect(() => {
    if (!isMounted) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0) {
        // Only show after scrolling a bit
        if (window.scrollY > 500) {
          setIsFormOpen(true)
        }
      }
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    return () => document.removeEventListener('mouseleave', handleMouseLeave)
  }, [isMounted])

  return (
    <>
      <Header />
      <main>
        <HeroSection onJoinClick={() => setIsFormOpen(true)} />
        <WhyChooseUsSection />
        <CoursesSection onCourseClick={() => setIsFormOpen(true)} />
        <CurriculumSection />
        <GallerySection />
        <TestimonialSection />
        <CareerSection />
        <FounderSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />

      {/* Floating WhatsApp Button */}
      <WhatsAppButton />

      {/* Admission Form Modal */}
      <AdmissionForm isOpen={isFormOpen} onClose={() => setIsFormOpen(false)} />

      {/* Sticky Apply Button - appears after scrolling */}
      {isMounted && isScrolled && (
        <div className="fixed top-24 right-4 z-30 md:hidden animate-fade-in-up">
          <button
            onClick={() => setIsFormOpen(true)}
            className="btn-primary shadow-lg"
          >
            ✓ Join Now
          </button>
        </div>
      )}
    </>
  )
}
