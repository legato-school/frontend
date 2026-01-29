# Technical Guidelines

## Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **Export**: Static (output: 'export')

## Next.js Configuration

```javascript
// next.config.js
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true  // Required for static export
  }
}
```

## Deployment Architecture

- **Hosting**: S3 bucket configured for static website hosting
- **CDN**: CloudFront distribution for global delivery
- **DNS**: Route 53 for domain management
- **IaC**: Managed in separate repository

## Code Standards

### TypeScript
- Enable strict mode
- Define interfaces for all props
- Avoid `any` type

### Components
- Use functional components with TypeScript
- Props interface naming: `ComponentNameProps`
- Keep components focused and single-purpose

### Styling
- Tailwind utility classes preferred
- Use `cn()` helper for conditional classes
- Define design tokens in `tailwind.config.ts`

### File Naming
- Components: PascalCase (`Button.tsx`)
- Utilities: camelCase (`utils.ts`)
- Pages: lowercase with hyphens (`aws-architecture/`)

## Performance

- Optimize images before adding to `public/`
- Lazy load below-fold content
- Minimize client-side JavaScript
- Use static generation for all pages

## SEO

- Include meta tags on all pages
- Use semantic HTML
- Add structured data for services
- Generate sitemap.xml during build
