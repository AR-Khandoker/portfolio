# Quick Start Guide

## Project Structure at a Glance

```
components/
├── sections/     → Page-specific sections (ParallaxHero, FeaturedWork, etc.)
├── layout/       → Navigation, Footer, Layout wrappers
├── shared/       → Reusable components (StickyCTA, BrandLoader, Timeline, etc.)
├── ui/           → Base UI library (buttons, cards, forms, etc.)
└── figma/        → Protected Figma components

pages/            → All page components
data/             → Centralized data (projects.ts is single source of truth)
types/            → TypeScript interfaces
constants/        → Navigation, metadata, config
```

## Common Tasks

### Adding a New Project

1. Open `/data/projects.ts`
2. Add new project object to the array:
```typescript
{
  id: 9,
  title: "Project Name",
  category: "Category",
  image: "https://...",
  metric: "Key metric",
  size: "small" // or "large"
}
```
3. If using Figma imports, add assets to `/imports/`
4. Project automatically appears on Work page and Featured Work carousel

### Adding a New Page

1. Create file in `/pages/YourPage.tsx`
2. Add route in `/App.tsx`:
```typescript
<Route path="/your-route" element={<YourPage />} />
```
3. Update `/constants/navigation.ts` to add navigation link
4. Update Footer if needed

### Creating a Reusable Component

**For page-specific sections:**
- Create in `/components/sections/YourSection.tsx`
- Export in `/components/sections/index.ts`

**For shared/reusable components:**
- Create in `/components/shared/YourComponent.tsx`
- Export in `/components/shared/index.ts`

### Importing Components

**Old way (verbose):**
```tsx
import { Button } from '../components/ui/button';
import { StickyCTA } from '../components/shared/StickyCTA';
import { ParallaxHero } from '../components/sections/ParallaxHero';
```

**New way (cleaner with barrel exports):**
```tsx
import { Button } from '../components/ui/button';
import { StickyCTA, BrandLoader, Timeline } from '../components/shared';
import { ParallaxHero, FeaturedWork } from '../components/sections';
```

### Working with Images

**Figma raster images:**
```tsx
import heroImage from "figma:asset/abc123.png";
```

**Figma SVGs:**
```tsx
import svgPaths from "./imports/svg-abc123";
```

**New images (use fallback component):**
```tsx
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

<ImageWithFallback src="..." alt="..." />
```

### Styling Guidelines

**Colors:**
- Primary: `text-black`, `bg-black`
- Secondary (yellow): `text-secondary`, `bg-secondary`
- Background: `bg-white`
- Accent: `bg-[#FAFAFA]`

**Do NOT use these Tailwind classes** (unless specifically requested):
- Font sizes: `text-xl`, `text-2xl`, etc.
- Font weights: `font-bold`, `font-medium`, etc.
- Line heights: `leading-tight`, etc.

Typography is pre-configured in `/styles/globals.css`

**Standard spacing:**
- Section padding: `py-32` (desktop), `py-20` (mobile)
- Container: `container mx-auto px-6`
- Cards: `p-6` or `p-8`

### Animation Patterns

**Page entrance:**
```tsx
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6 }}
>
```

**Scroll-triggered:**
```tsx
import { ScrollReveal } from '../components/shared';

<ScrollReveal>
  <YourContent />
</ScrollReveal>
```

**Stagger children:**
```tsx
{items.map((item, i) => (
  <motion.div
    key={i}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: i * 0.1 }}
    viewport={{ once: true }}
  >
```

## Protected Files

**DO NOT EDIT:**
- `/components/sections/ParallaxHero.tsx` - Manual edits
- `/pages/HomePage.tsx` - Manual edits
- `/components/figma/ImageWithFallback.tsx` - System file
- `/supabase/functions/server/kv_store.tsx` - System file
- `/utils/supabase/info.tsx` - System file

## TypeScript Types

All interfaces are in `/types/index.ts`:
- `Project` - Project data structure
- `NavigationLink` - Nav items
- `Service` - Service cards
- `TimelineEvent` - Timeline items
- `ContactFormData` - Contact form

**Usage:**
```tsx
import type { Project } from '../types';

const myProject: Project = { ... };
```

## Backend (Supabase)

**Making API calls:**
```tsx
import { projectId, publicAnonKey } from './utils/supabase/info';

const response = await fetch(
  `https://${projectId}.supabase.co/functions/v1/make-server-4ba1cc9d/your-route`,
  {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${publicAnonKey}`,
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }
);
```

**All routes MUST:**
- Be prefixed with `/make-server-4ba1cc9d/`
- Include auth header with `publicAnonKey`
- Return JSON responses

## Debugging Tips

1. **Component not showing?**
   - Check import paths
   - Verify component is exported
   - Check for TypeScript errors in console

2. **Styles not applying?**
   - Ensure Tailwind classes are correct
   - Check if custom styles in globals.css conflict
   - Inspect element to see computed styles

3. **Animation not working?**
   - Import from `motion/react` not `framer-motion`
   - Check `initial` and `animate` props are present
   - Verify Motion component wraps your content

4. **Images not loading?**
   - For Figma assets, never prefix with `./` or `../`
   - Check asset hash is correct
   - Use browser dev tools Network tab

## File Naming Conventions

- **Components**: PascalCase `MyComponent.tsx`
- **Types**: lowercase `index.ts`
- **Constants**: camelCase `siteMetadata.ts`
- **Data files**: camelCase `projects.ts`

## Git Workflow (if applicable)

1. Always pull latest before starting work
2. Create feature branches: `feature/your-feature-name`
3. Commit messages: Clear and descriptive
4. Test before pushing
5. Create PR for review

## Resources

- **Full Architecture**: See `/ARCHITECTURE.md`
- **Tailwind Docs**: https://tailwindcss.com/docs
- **Motion Docs**: https://motion.dev/docs/react-quick-start
- **React Router**: https://reactrouter.com/

## Getting Help

1. Check `/ARCHITECTURE.md` for detailed docs
2. Review existing similar components
3. Check console for errors
4. Use TypeScript intellisense for hints

---

**Happy coding! 🚀**
