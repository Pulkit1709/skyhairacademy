# Sky Hair Academy - Premium Website

A luxury, conversion-focused website for Sky Hair Academy - a professional hair styling training institute in Delhi.

## 🎯 Features

### Design & UX
- **Luxury Aesthetic**: Black, gold, and white color palette with premium Apple-like UI
- **Responsive Design**: Mobile-first approach with perfect responsiveness across all devices
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Performance**: Optimized for fast loading and excellent lighthouse scores

### Conversion Features
- ✅ WhatsApp CTA in every section
- ✅ Admission inquiry form with direct WhatsApp integration
- ✅ Sticky "Join Now" button on mobile
- ✅ Exit-intent popup form
- ✅ Floating WhatsApp button

### Content Sections
1. **Hero Section** - Compelling headline with founder image
2. **Why Choose Us** - 6 key differentiators with icons
3. **Courses** - 4 course cards with detailed information
4. **Curriculum** - 8 key training topics
5. **Gallery** - Student success stories in masonry layout
6. **Testimonials** - 6 student reviews with ratings
7. **Career Opportunities** - 6 career paths post-training
8. **About Founder** - Alam Khan's story and credentials
9. **FAQ** - 8 common questions with expandable answers
10. **Contact** - Multi-channel contact information

### SEO & Technical
- ✅ Next.js 15 with App Router
- ✅ TypeScript for type safety
- ✅ Tailwind CSS for styling
- ✅ Framer Motion for animations
- ✅ SEO optimized with metadata
- ✅ Schema.org structured data
- ✅ Meta tags and Open Graph
- ✅ Performance optimizations

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ and npm/yarn
- Git

### Installation

```bash
# Clone the repository
git clone <repo-url>
cd sky-hair-academy

# Install dependencies
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Production Build

```bash
npm run build
npm start
# or
yarn build
yarn start
```

## 📁 Project Structure

```
sky-hair-academy/
├── app/
│   ├── layout.tsx           # Root layout with SEO metadata
│   ├── page.tsx             # Main page with all sections
│   └── globals.css          # Global styles and animations
├── components/
│   ├── Button.tsx           # Button & WhatsApp button components
│   ├── Header.tsx           # Navigation header
│   ├── Footer.tsx           # Footer with links
│   ├── Card.tsx             # Reusable card components
│   ├── Modal.tsx            # Forms and testimonial cards
│   └── sections/            # Section components
│       ├── HeroSection.tsx
│       ├── WhyChooseUsSection.tsx
│       ├── CoursesSection.tsx
│       ├── CurriculumSection.tsx
│       ├── GallerySection.tsx
│       ├── TestimonialSection.tsx
│       ├── CareerSection.tsx
│       ├── FounderSection.tsx
│       ├── FAQSection.tsx
│       └── ContactSection.tsx
├── config/
│   └── business.ts          # Business configuration & content
├── public/                  # Static assets
├── package.json
├── tsconfig.json
├── next.config.js
├── tailwind.config.ts
└── postcss.config.js
```

## 🎨 Customization

### Update Business Information
Edit `config/business.ts` to update:
- Contact details
- Course information
- FAQ content
- Statistics
- SEO keywords

### Color Palette
Colors are defined in `tailwind.config.ts`:
- Primary Gold: `#d4af37`
- Light Gold: `#e8d4a8`
- Luxury Black: `#0a0a0a`
- Luxury Dark: `#1a1a1a`

### Add Images
Replace placeholder images in sections with actual images:
1. Store images in `/public` folder
2. Update image URLs in component files

## 📱 Responsive Breakpoints

- **Mobile**: 0px - 640px
- **Tablet**: 641px - 1024px
- **Desktop**: 1025px+

## 🔍 SEO Features

- Metadata in `layout.tsx`
- Schema.org structured data
- Open Graph tags for social sharing
- Twitter cards
- Keywords: Hair Styling Course Delhi, Hair Academy Delhi, etc.

## 🚀 Deployment

### Vercel (Recommended)
```bash
npm i -g vercel
vercel
```

### Docker
```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN npm install
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

### Traditional Server
```bash
npm run build
npm start
```

## 📊 Analytics Integration

Add to `app/layout.tsx`:
```typescript
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_ID"></script>
```

## 🔐 Environment Variables

Create `.env.local`:
```
NEXT_PUBLIC_GOOGLE_ANALYTICS_ID=your_id
```

## 📝 License

Private project for Sky Hair Academy

## 📧 Support

For any issues or customizations:
- Email: business.alamkhan786@gmail.com
- WhatsApp: +91 7042520702
- Instagram: https://www.instagram.com/sky_hairartist

---

Built with ❤️ for Sky Hair Academy
