# Portfolio Architecture Documentation

## Project Overview
High-end portfolio website for A R Khandoker built with React, Tailwind CSS, and Motion (Framer Motion). Features a minimalist white aesthetic with yellow (#eab308) accent color.

## Tech Stack
- **Framework**: React 18+ with TypeScript
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v4
- **Animation**: Motion/React (Framer Motion)
- **UI Components**: Custom components + shadcn/ui
- **Backend**: Supabase (Database, Storage, Edge Functions)
- **State Management**: React Hooks

## Project Structure

```
/
├── components/
│   ├── sections/          # Page-specific sections
│   │   ├── ParallaxHero.tsx
│   │   ├── FeaturedWork.tsx
│   │   ├── ClientMarquee.tsx
│   │   ├── TestimonialPreview.tsx
│   │   └── ServicesPreview.tsx
│   │
│   ├── layout/            # Layout components
│   │   ├── MainLayout.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── PreFooterCTA.tsx
│   │
│   ├── shared/            # Reusable custom components
│   │   ├── StickyCTA.tsx
│   │   ├── BrandLoader.tsx
│   │   ├── ScrollReveal.tsx
│   │   └── Timeline.tsx
│   │
│   ├── ui/                # UI library components (shadcn)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   └── ...
│   │
│   └── figma/             # Protected Figma components
│       └── ImageWithFallback.tsx
│
├── pages/                 # Page components
│   ├── HomePage.tsx
│   ├── WorkPage.tsx
│   ├── CaseStudyPage.tsx
│   ├── AboutPage.tsx
│   ├── ServicesPage.tsx
│   ├── ContactPage.tsx
│   └── LegalPage.tsx
│
├── data/                  # Data structures and content
│   └── projects.ts        # Single source of truth for projects
│
├── types/                 # TypeScript type definitions
│   └── index.ts           # All project interfaces
│
├── constants/             # App-wide constants
│   ├── navigation.ts      # Navigation configuration
│   └── siteMetadata.ts    # Site metadata and config
│
├── lib/                   # Third-party library setup
│   └── supabase.ts        # Supabase client configuration
│
├── utils/                 # Utility functions
│   └── supabase/
│       └── info.tsx       # Supabase project info
│
├── imports/               # Figma imported assets
│   ├── *.tsx              # Figma components
│   ├── *.ts               # SVG paths
│   └── figma:asset/*      # Raster images (virtual)
│
├── supabase/              # Supabase backend
│   └── functions/
│       └── server/
│           ├── index.tsx  # Hono web server
│           └── kv_store.tsx (protected)
│
├── styles/                # Global styles
│   └── globals.css        # Tailwind config + custom styles
│
└── App.tsx                # Root component with routing
```

## Component Organization

### Sections (`/components/sections`)
Page-specific sections that are typically used once per page. These are large, composite components.

**Examples:**
- `ParallaxHero.tsx` - Homepage hero with parallax effects
- `FeaturedWork.tsx` - Auto-scrolling project carousel
- `ClientMarquee.tsx` - Infinite scrolling client logos
- `TestimonialPreview.tsx` - Featured testimonial display
- `ServicesPreview.tsx` - Services overview section

**Usage:**
```tsx
import { ParallaxHero } from '../components/sections/ParallaxHero';
```

### Layout (`/components/layout`)
Components that define the overall page structure and navigation.

**Examples:**
- `MainLayout.tsx` - Wrapper component with nav and footer
- `Navbar.tsx` - Main navigation bar
- `Footer.tsx` - Site footer
- `PreFooterCTA.tsx` - CTA section before footer

**Usage:**
```tsx
import { MainLayout } from './components/layout/MainLayout';
```

### Shared (`/components/shared`)
Reusable custom components used across multiple pages.

**Examples:**
- `StickyCTA.tsx` - Floating CTA button
- `BrandLoader.tsx` - Initial page loader
- `ScrollReveal.tsx` - Scroll-triggered animation wrapper
- `Timeline.tsx` - Experience timeline component

**Usage:**
```tsx
import { StickyCTA } from '../components/shared/StickyCTA';
```

### UI (`/components/ui`)
Base UI components from shadcn/ui library. These are low-level, highly reusable components.

**Usage:**
```tsx
import { Button } from '../components/ui/button';
import { Card } from '../components/ui/card';
```

## Data Management

### Single Source of Truth
All project data is centralized in `/data/projects.ts`. This ensures consistency across:
- Homepage featured work section
- Work page project grid
- Case study pages

### Type Safety
All data structures have TypeScript interfaces defined in `/types/index.ts`:
- `Project`
- `NavigationLink`
- `Testimonial`
- `Service`
- `TimelineEvent`
- `ContactFormData`

## Critical Files (Do Not Modify)

These files contain manual edits and must be preserved:
1. `/components/sections/ParallaxHero.tsx` - Custom parallax effects
2. `/pages/HomePage.tsx` - Manual layout adjustments
3. `/components/figma/ImageWithFallback.tsx` - Protected system file
4. `/supabase/functions/server/kv_store.tsx` - Protected backend file
5. `/utils/supabase/info.tsx` - Protected config file

## Design System

### Colors
- **Primary**: `#000000` (Black)
- **Secondary**: `#eab308` (Yellow)
- **Background**: `#ffffff` (White)
- **Accent**: `#FAFAFA` (Off-white)

### Typography
Typography is defined in `/styles/globals.css`. Do not override with Tailwind classes unless specifically requested:
- Font sizes are pre-configured per HTML element
- Font weights are standardized
- Line heights are optimized

### Spacing & Layout
- Container max-width: `mx-auto px-6`
- Standard section padding: `py-32` (desktop), `py-20` (mobile)
- Card border radius: `rounded-xl` or `rounded-2xl`

## Animation Patterns

### Page Transitions
All pages use Motion for smooth entrance animations:
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

### Scroll Reveals
Use `ScrollReveal` component for scroll-triggered animations:
```tsx
<ScrollReveal>
  <YourContent />
</ScrollReveal>
```

### Hover Effects
Consistent hover states:
- Buttons: Background color transition
- Cards: Border color + slight scale
- Images: Scale transform (1.05)

## Backend Integration

### Supabase Setup
- **Database**: Key-value store for flexible data storage
- **Storage**: For file uploads (CV, images)
- **Auth**: User authentication system
- **Edge Functions**: Hono web server at `/make-server-4ba1cc9d/*`

### API Routes
All routes prefixed with `/make-server-4ba1cc9d/`

Example:
```tsx
const response = await fetch(
  `https://${projectId}.supabase.co/functions/v1/make-server-4ba1cc9d/your-route`,
  {
    headers: { Authorization: `Bearer ${publicAnonKey}` }
  }
);
```

## Best Practices

### Import Conventions
1. **React imports first**
   ```tsx
   import React from 'react';
   ```

2. **Third-party libraries**
   ```tsx
   import { motion } from 'motion/react';
   import { Link } from 'react-router-dom';
   ```

3. **UI components**
   ```tsx
   import { Button } from '../components/ui/button';
   ```

4. **Custom components by category**
   ```tsx
   import { ParallaxHero } from '../components/sections/ParallaxHero';
   import { StickyCTA } from '../components/shared/StickyCTA';
   ```

5. **Assets last**
   ```tsx
   import heroImage from 'figma:asset/abc123.png';
   import svgPaths from '../imports/svg-abc123';
   ```

### Asset Imports
- **Figma raster images**: `import img from "figma:asset/hash.png"`
- **Figma SVGs**: `import svg from "./imports/svg-hash"`
- **Never prefix figma:asset with paths**: ❌ `"../figma:asset/"` ✅ `"figma:asset/"`

### Component Guidelines
1. Keep components focused and single-purpose
2. Use TypeScript for prop types
3. Prefer composition over props drilling
4. Extract reusable logic into custom hooks
5. Use meaningful component and variable names

## Performance Optimizations

1. **Lazy loading**: Not currently implemented but recommended for future
2. **Image optimization**: Use `ImageWithFallback` for new images
3. **Code splitting**: React Router handles automatic code splitting
4. **Animation performance**: Motion animations use GPU-accelerated transforms

## Testing Strategy

Currently no automated tests. Recommended additions:
- Unit tests for utility functions
- Integration tests for forms
- E2E tests for critical user paths

## Deployment

The application is designed for Figma Make environment with:
- Automatic builds on file changes
- Supabase integration pre-configured
- Environment variables managed via system

## Future Enhancements

Potential improvements:
1. Add CMS integration for easier content updates
2. Implement dark mode support
3. Add analytics tracking
4. Enhance accessibility (ARIA labels, keyboard navigation)
5. Create component documentation with Storybook
6. Add automated testing suite
7. Implement progressive image loading
8. Add internationalization (i18n)

## Maintenance Notes

### When Adding New Projects
1. Update `/data/projects.ts`
2. Add assets to `/imports/` if needed
3. Projects automatically appear on Work page and Featured Work carousel

### When Adding New Pages
1. Create page component in `/pages/`
2. Add route in `/App.tsx`
3. Update navigation in `/constants/navigation.ts`
4. Update footer links if needed

### When Creating New Sections
1. Create component in `/components/sections/`
2. Import and use in relevant page
3. Ensure consistent styling with design system

## Support & Resources

- **Tailwind CSS**: https://tailwindcss.com/docs
- **Motion**: https://motion.dev/docs/react-quick-start
- **React Router**: https://reactrouter.com/
- **Supabase**: https://supabase.com/docs
- **shadcn/ui**: https://ui.shadcn.com/

---

**Last Updated**: December 2024
**Maintained By**: A R Khandoker Portfolio Team
