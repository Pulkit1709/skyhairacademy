import React from 'react'

interface CardProps {
  className?: string
  children: React.ReactNode
  hover?: boolean
}

export const Card: React.FC<CardProps> = ({ className = '', children, hover = true }) => {
  return (
    <div
      className={`glass rounded-xl p-6 ${hover ? 'hover-lift' : ''} ${className}`}
    >
      {children}
    </div>
  )
}

interface CourseCardProps {
  title: string
  duration: string
  description: string
  highlights: string[]
  certification: string
  onClick?: () => void
}

export const CourseCard: React.FC<CourseCardProps> = ({
  title,
  duration,
  description,
  highlights,
  certification,
  onClick,
}) => {
  return (
    <Card className="flex flex-col h-full">
      <div className="mb-4">
        <div className="inline-block bg-luxury-gold/20 text-luxury-gold px-3 py-1 rounded-full text-sm font-semibold">
          {duration}
        </div>
      </div>

      <h3 className="text-xl font-bold text-luxury-white mb-3">{title}</h3>
      <p className="text-luxury-white/70 text-sm mb-4 flex-grow">{description}</p>

      <div className="mb-4">
        <h4 className="text-sm font-semibold text-luxury-gold mb-2">What You'll Learn:</h4>
        <ul className="space-y-2">
          {highlights.slice(0, 3).map((highlight, idx) => (
            <li key={idx} className="flex items-start gap-2 text-sm text-luxury-white/70">
              <span className="text-luxury-gold mt-1">✓</span>
              <span>{highlight}</span>
            </li>
          ))}
          {highlights.length > 3 && (
            <li className="text-sm text-luxury-gold font-semibold">+ {highlights.length - 3} more...</li>
          )}
        </ul>
      </div>

      <div className="border-t border-luxury-gold/20 pt-4 mb-4">
        <p className="text-sm text-luxury-light-gold font-semibold">{certification}</p>
      </div>

      <button
        onClick={onClick}
        className="btn-primary w-full text-center"
      >
        Learn More
      </button>
    </Card>
  )
}

interface FeatureCardProps {
  icon?: string
  title: string
  description: string
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon, title, description }) => {
  return (
    <Card className="text-center">
      {icon && <div className="text-4xl mb-4">{icon}</div>}
      <h3 className="text-lg font-bold text-luxury-white mb-2">{title}</h3>
      <p className="text-luxury-white/70 text-sm">{description}</p>
    </Card>
  )
}

interface StatCardProps {
  number: string
  label: string
}

export const StatCard: React.FC<StatCardProps> = ({ number, label }) => {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold gold-gradient mb-2">{number}</div>
      <p className="text-luxury-white/70 text-sm">{label}</p>
    </div>
  )
}
