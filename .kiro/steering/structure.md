# Project Structure

```
logixdev-website/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── about/
│   │   │   └── page.tsx        # About page
│   │   ├── services/
│   │   │   ├── page.tsx        # Services overview
│   │   │   ├── aws-architecture/
│   │   │   │   └── page.tsx    # AWS consulting details
│   │   │   └── security/
│   │   │       └── page.tsx    # Security services details
│   │   ├── contact/
│   │   │   └── page.tsx        # Contact form
│   │   └── blog/
│   │       ├── page.tsx        # Blog listing
│   │       └── [slug]/
│   │           └── page.tsx    # Individual blog post
│   │
│   ├── components/
│   │   ├── ui/                 # Reusable UI components
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Input.tsx
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   └── sections/           # Page sections
│   │       ├── Hero.tsx
│   │       ├── Services.tsx
│   │       ├── Pillars.tsx
│   │       └── ContactForm.tsx
│   │
│   ├── lib/                    # Utilities and helpers
│   │   ├── utils.ts
│   │   └── constants.ts
│   │
│   ├── content/                # Static content (MDX/JSON)
│   │   ├── services.json
│   │   └── blog/
│   │
│   └── styles/
│       └── globals.css         # Global styles + Tailwind
│
├── public/                     # Static assets
│   ├── images/
│   ├── icons/
│   └── favicon.ico
│
├── .kiro/
│   └── steering/
│       ├── product.md
│       ├── structure.md
│       └── tech.md
│
├── next.config.js              # Next.js config (static export)
├── tailwind.config.ts          # Tailwind configuration
├── tsconfig.json               # TypeScript config
├── package.json
└── Readme.md
```

## Key Conventions

- **App Router**: Use Next.js 14 App Router for routing
- **Components**: Organize by purpose (ui, layout, sections)
- **Content**: Keep static content in `src/content/` for easy updates
- **Assets**: All static files in `public/`
