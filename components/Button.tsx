import React from 'react'
import { MessageCircle } from 'lucide-react'

interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  onClick?: () => void
  children: React.ReactNode
  className?: string
  href?: string
  target?: string
  rel?: string
  asLink?: boolean
  type?: 'button' | 'submit' | 'reset'
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  onClick,
  children,
  className = '',
  href,
  asLink = false,
  type = 'button',
  ...props
}) => {
  const baseStyles = 'font-semibold rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2'
  
  const variants = {
    primary: 'bg-gradient-to-r from-luxury-gold to-luxury-light-gold text-luxury-black hover:shadow-lg hover:shadow-luxury-gold/30',
    secondary: 'border-2 border-luxury-gold text-luxury-gold hover:bg-luxury-gold/10',
    outline: 'border border-luxury-white/20 text-luxury-white hover:border-luxury-gold hover:text-luxury-gold',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const buttonClass = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`

  if (asLink && href) {
    return (
      <a href={href} className={buttonClass} {...props}>
        {children}
      </a>
    )
  }

  return (
    <button type={type} onClick={onClick} className={buttonClass} {...props}>
      {children}
    </button>
  )
}

interface WhatsAppButtonProps {
  className?: string
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({ className = '' }) => {
  return (
    <a
      href="https://wa.me/917042520702?text=Hi%20Sky%20Hair%20Academy%2C%20I'm%20interested%20in%20your%20hair%20styling%20courses"
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 z-50 ${className}`}
      aria-label="Chat with us on WhatsApp"
    >
      <div className="bg-gradient-to-r from-green-400 to-green-500 p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110">
        <MessageCircle size={24} className="text-white" />
      </div>
    </a>
  )
}
