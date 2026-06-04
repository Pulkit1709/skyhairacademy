import React from 'react'
import { Mail, Phone, MapPin, Instagram } from 'lucide-react'
import { businessConfig } from '@/config/business'

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-luxury-dark border-t border-luxury-gold/20">
      <div className="luxury-container py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold gold-gradient mb-4">{businessConfig.name}</h3>
            <p className="text-luxury-white/70 text-sm">
              Premium hair styling training institute in Delhi, founded by {businessConfig.founder}.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-luxury-gold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <a href="/#home" className="text-luxury-white/70 hover:text-luxury-gold transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/#courses" className="text-luxury-white/70 hover:text-luxury-gold transition-colors">
                  Courses
                </a>
              </li>
              <li>
                <a href="/#founder" className="text-luxury-white/70 hover:text-luxury-gold transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="/#faq" className="text-luxury-white/70 hover:text-luxury-gold transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Courses */}
          <div>
            <h4 className="text-lg font-semibold text-luxury-gold mb-4">Courses</h4>
            <ul className="space-y-2">
              {businessConfig.courses.map((course) => (
                <li key={course.id}>
                  <a href="/#courses" className="text-luxury-white/70 hover:text-luxury-gold transition-colors text-sm">
                    {course.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-luxury-gold mb-4">Contact</h4>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <Phone size={18} className="text-luxury-gold mt-1 flex-shrink-0" />
                <a
                  href={`tel:${businessConfig.contact.phone}`}
                  className="text-luxury-white/70 hover:text-luxury-gold transition-colors text-sm"
                >
                  {businessConfig.contact.phone}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <Mail size={18} className="text-luxury-gold mt-1 flex-shrink-0" />
                <a
                  href={`mailto:${businessConfig.contact.email}`}
                  className="text-luxury-white/70 hover:text-luxury-gold transition-colors text-sm break-all"
                >
                  {businessConfig.contact.email}
                </a>
              </div>
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-luxury-gold mt-1 flex-shrink-0" />
                <span className="text-luxury-white/70 text-sm">{businessConfig.contact.location}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links & Copyright */}
        <div className="border-t border-luxury-gold/20 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-luxury-white/60 text-sm">
            © {currentYear} {businessConfig.name}. All rights reserved.
          </p>

          <div className="flex items-center gap-4 mt-4 md:mt-0">
            <a
              href={businessConfig.contact.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-luxury-gold/10 hover:bg-luxury-gold/20 transition-colors"
              aria-label="Instagram"
            >
              <Instagram size={18} className="text-luxury-gold" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
