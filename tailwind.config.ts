import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'luxury-black': '#0a0a0a',
        'luxury-dark': '#1a1a1a',
        'luxury-gold': '#d4af37',
        'luxury-light-gold': '#e8d4a8',
        'luxury-white': '#f5f5f5',
        'luxury-gray': '#2a2a2a',
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.white'),
            a: {
              color: theme('colors.luxury-gold'),
              '&:hover': {
                color: theme('colors.luxury-light-gold'),
              },
            },
          },
        },
      }),
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in',
        'slide-up': 'slideUp 0.6s ease-out',
        'pulse-subtle': 'pulseSubtle 2s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        pulseSubtle: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.8' },
        },
      },
    },
  },
  plugins: [],
}

export default config
