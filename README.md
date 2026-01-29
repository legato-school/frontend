# Legato School - Music Education Platform

A modern, responsive website for Legato School, offering personalized piano and cello lessons for all ages.

## Features

- 🎹 **Piano & Cello Lessons** - Private lessons for all skill levels
- 📚 **Training Programs** - Structured 8-week programs for different age groups
- 📅 **Calendly Integration** - Easy online booking system
- 🎨 **Modern UI** - Beautiful animations and responsive design
- ⚡ **Fast Performance** - Static site generation with Next.js
- 📱 **Mobile Friendly** - Optimized for all devices

## Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Booking**: React Calendly
- **Icons**: Lucide React
- **Deployment**: Static export for S3/CloudFront

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run start
```

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Homepage
│   ├── lessons/            # Lessons page
│   ├── programs/           # Programs page
│   ├── about/              # About page
│   └── contact/            # Contact page with Calendly
├── components/
│   ├── ui/                 # Reusable UI components
│   ├── layout/             # Header and Footer
│   └── sections/           # Page sections
├── lib/
│   ├── data.ts             # Content and data
│   ├── utils.ts            # Utility functions
│   └── constants.ts        # Constants
└── styles/
    └── globals.css         # Global styles
```

## Configuration

### Calendly Integration

Update the Calendly URL in `src/lib/data.ts`:

```typescript
export const siteInfo = {
  // ...
  calendlyUrl: 'https://calendly.com/your-username',
};
```

### Contact Information

Update contact details in `src/lib/data.ts`:

```typescript
export const siteInfo = {
  name: 'Legato School',
  email: 'school.legato@gmail.com',
  phone: '71026139',
  countryCode: '+961',
  instagram: 'https://www.instagram.com/legatoschool.music',
  youtube: 'https://youtube.com/@rimfarhat1967',
};
```

## Deployment

The site is configured for static export and can be deployed to:

- AWS S3 + CloudFront
- Vercel
- Netlify
- Any static hosting service

```bash
# Build static site
npm run build

# Output will be in the 'out' directory
```

## Features Overview

### Lessons

- Piano lessons (in-person and online)
- Cello lessons (in-person and online)
- Flexible scheduling
- All age groups and skill levels

### Programs

- Melody Star (Ages 5-7)
- Harmony Hero (Ages 7-11)
- Tempo Master (Ages 11-15)
- Sonata Virtuoso (Ages 15+)
- Cello Foundations (Ages 7-11)
- Cello Intermediate (Ages 11+)

### About

- Instructor biography
- Education and credentials
- Teaching philosophy
- Professional experience

### Contact

- Calendly booking integration
- Contact information
- Social media links
- Location details

## Customization

### Colors

Edit `tailwind.config.ts` to customize the color scheme:

```typescript
colors: {
  primary: { /* ... */ },
  secondary: { /* ... */ },
  accent: { /* ... */ },
  musical: {
    piano: '#2dd4bf',
    cello: '#f97316',
  }
}
```

### Content

All content is centralized in `src/lib/data.ts` for easy updates.

## License

© 2026 Legato School. All rights reserved.
