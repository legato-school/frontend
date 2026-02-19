# UI/UX Pro Max Skill

An AI skill that provides design intelligence for building professional UI/UX across multiple platforms and frameworks.

*Source: https://github.com/nextlevelbuilder/ui-ux-pro-max-skill*

## Design System Generation

When building UI, generate a complete design system that includes:

1. **Pattern** - Layout structure (Hero-Centric, Social Proof, Feature-Rich, etc.)
2. **Style** - Visual aesthetic from 67 available styles
3. **Colors** - Industry-specific palette with Primary, Secondary, CTA, Background, Text
4. **Typography** - Curated font pairing with Google Fonts
5. **Key Effects** - Shadows, transitions, hover states
6. **Anti-patterns** - What to avoid for this specific design

## Available UI Styles (Key Selection)

| Style | Best For |
|-------|----------|
| Minimalism & Swiss Style | Enterprise apps, dashboards, documentation |
| Glassmorphism | Modern SaaS, financial dashboards |
| Neumorphism | Health/wellness apps, meditation platforms |
| Brutalism | Design portfolios, artistic projects |
| Claymorphism | Educational apps, children's apps, SaaS |
| Dark Mode (OLED) | Night-mode apps, coding platforms |
| Neubrutalism | Gen Z brands, startups, Figma-style |
| Bento Box Grid | Dashboards, product pages, portfolios |
| AI-Native UI | AI products, chatbots, copilots |
| Soft UI Evolution | Modern enterprise apps, SaaS |
| Liquid Glass | Premium SaaS, high-end e-commerce |

## Landing Page Styles

| Style | Best For |
|-------|----------|
| Hero-Centric Design | Products with strong visual identity |
| Conversion-Optimized | Lead generation, sales pages |
| Feature-Rich Showcase | SaaS, complex products |
| Social Proof-Focused | Services, B2C products |
| Storytelling-Driven | Brands, agencies, nonprofits |

## Pre-Delivery Checklist

Always verify before delivery:

- [ ] No emojis as icons (use SVG: Heroicons/Lucide)
- [ ] `cursor-pointer` on all clickable elements
- [ ] Hover states with smooth transitions (150-300ms)
- [ ] Light mode: text contrast 4.5:1 minimum
- [ ] Focus states visible for keyboard navigation
- [ ] `prefers-reduced-motion` respected
- [ ] Responsive: 375px, 768px, 1024px, 1440px breakpoints

## Industry-Specific Design Rules

| Category | Examples |
|----------|----------|
| Tech & SaaS | SaaS, Micro SaaS, B2B Enterprise, Developer Tools, AI/Chatbot Platform |
| Finance | Fintech, Banking, Crypto, Insurance, Trading Dashboard |
| Healthcare | Medical Clinic, Pharmacy, Dental, Veterinary, Mental Health |
| E-commerce | General, Luxury, Marketplace, Subscription Box |
| Services | Beauty/Spa, Restaurant, Hotel, Legal, Consulting |
| Creative | Portfolio, Agency, Photography, Gaming, Music Streaming |

## Color Palette Guidelines

For **7jezle** (Barbershop/Services):

```
Primary:    Deep Blue (#1E3A8A) - Trust, professionalism
Secondary:  Gold (#F59E0B) - Premium, attention
CTA:        Teal (#0D9488) - Action, freshness
Background: Light (#F9FAFB) / Dark (#111827)
Text:       Primary (#111827) / Secondary (#6B7280)
```

## Typography Recommendations

For Services/Barbershop:
- **Display**: Bold, characterful (Satoshi, Cabinet Grotesk, General Sans)
- **Body**: Clean, readable (DM Sans, Plus Jakarta Sans)
- **Avoid**: Inter, Roboto, Arial, system fonts

## Animation Guidelines

- Micro-interactions: 150-300ms duration
- Page transitions: 300-500ms
- Scroll animations: Use Framer Motion `whileInView`
- Hover states: Scale, shadow, or color shift
- Always respect `prefers-reduced-motion`

## Supported Tech Stacks

This project uses: **Next.js + React + Tailwind CSS + Framer Motion**

Stack-specific guidelines:
- Use Tailwind utility classes
- Use Framer Motion for animations
- Use Lucide React for icons
- Use CSS variables for theming
- Use shadcn/ui patterns where applicable
