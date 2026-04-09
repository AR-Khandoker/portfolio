# 🚀 GSAP ScrollTrigger - Quick Start Guide

## Installation Complete! ✅

Your portfolio now has premium scroll-driven animations like award-winning websites on https://gsap.com/scroll/

---

## 🎯 Start Using in 3 Steps

### Step 1: Import the Hook
```tsx
import { useFadeSlideUp } from '../hooks/useGSAPAnimations';
```

### Step 2: Create a Ref
```tsx
const myRef = useFadeSlideUp({ duration: 1.2, y: 80 });
```

### Step 3: Attach to Element
```tsx
<div ref={myRef}>This will animate on scroll!</div>
```

---

## 📦 Most Common Animations

### 1️⃣ Fade In Section
```tsx
import { useFadeSlideUp } from '../hooks/useGSAPAnimations';

const heroRef = useFadeSlideUp({ duration: 1.5, y: 100 });

<section ref={heroRef}>
  <h1>Your Content</h1>
</section>
```

### 2️⃣ Stagger Cards/Items
```tsx
import { useStaggerReveal } from '../hooks/useGSAPAnimations';

const cardsRef = useStaggerReveal({ stagger: 0.15, duration: 0.8 });

<div ref={cardsRef}>
  <div className="card">Card 1</div>
  <div className="card">Card 2</div>
  <div className="card">Card 3</div>
</div>
```

### 3️⃣ Text Reveal (Word by Word)
```tsx
import { useTextReveal } from '../hooks/useGSAPAnimations';

const headlineRef = useTextReveal({ splitBy: 'words', stagger: 0.05 });

<h1 ref={headlineRef}>Your Amazing Headline</h1>
```

### 4️⃣ Animated Counter
```tsx
import { useCounter } from '../hooks/useGSAPAnimations';

const counterRef = useCounter({ start: 0, end: 150, suffix: '+' });

<div ref={counterRef}>0+</div>
```

### 5️⃣ Parallax Background
```tsx
import { useParallax } from '../hooks/useGSAPAnimations';

const bgRef = useParallax({ speed: 100, direction: 'down' });

<div className="relative">
  <div ref={bgRef} className="absolute inset-0 bg-gradient" />
  <div className="relative z-10">Content on top</div>
</div>
```

### 6️⃣ Image Reveal with Scale
```tsx
import { useImageReveal } from '../hooks/useGSAPAnimations';

const imgRef = useImageReveal({ scale: 1.2, duration: 1.4 });

<div ref={imgRef} className="overflow-hidden rounded-2xl">
  <img src="your-image.jpg" alt="Description" />
</div>
```

---

## 🎨 Complete Component Example

```tsx
import React from 'react';
import { 
  useFadeSlideUp, 
  useStaggerReveal, 
  useTextReveal,
  useCounter 
} from '../hooks/useGSAPAnimations';

export function MySection() {
  // Create refs with animations
  const heroRef = useFadeSlideUp({ duration: 1.5, y: 100 });
  const headlineRef = useTextReveal({ splitBy: 'words', stagger: 0.05 });
  const cardsRef = useStaggerReveal({ stagger: 0.15 });
  const counterRef = useCounter({ start: 0, end: 98, suffix: '+' });

  return (
    <section ref={heroRef} className="py-32">
      <h1 ref={headlineRef} className="text-6xl font-bold mb-12">
        Premium Animation System
      </h1>
      
      <div ref={counterRef} className="text-4xl font-bold text-purple-500 mb-16">
        0+
      </div>
      
      <div ref={cardsRef} className="grid grid-cols-3 gap-8">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
      </div>
    </section>
  );
}
```

---

## 🎬 All Available Hooks

| Hook | Description | Common Use |
|------|-------------|------------|
| `useFadeSlideUp` | Fade in + slide up | Sections, cards |
| `useStaggerReveal` | Sequential reveals | Grids, lists |
| `useTextReveal` | Word/char reveals | Headlines |
| `useImageReveal` | Image + scale | Hero images |
| `useParallax` | Depth movement | Backgrounds |
| `useScaleOnScroll` | Zoom in/out | Cards, images |
| `useRotateOnScroll` | Rotation effect | Logos, icons |
| `useClipPathReveal` | Wipe effect | Sections |
| `useCounter` | Number counting | Stats |
| `usePinElement` | Sticky scroll | Headers |

---

## ⚙️ Customization Options

### Duration
```tsx
useFadeSlideUp({ duration: 2 }) // Slow
useFadeSlideUp({ duration: 0.8 }) // Fast
```

### Distance
```tsx
useFadeSlideUp({ y: 150 }) // Large movement
useFadeSlideUp({ y: 30 }) // Subtle movement
```

### Delay
```tsx
useFadeSlideUp({ delay: 0.5 }) // Wait 0.5s before starting
```

### Stagger Timing
```tsx
useStaggerReveal({ stagger: 0.3 }) // Slow cascade
useStaggerReveal({ stagger: 0.05 }) // Quick cascade
```

---

## 🐛 Troubleshooting

### Animation not working?
1. ✅ Check ref is attached: `<div ref={myRef}>`
2. ✅ Element must be in viewport when scrolling
3. ✅ Check browser console for errors

### Enable debug markers:
In `/hooks/useLenis.ts`, line 46:
```tsx
ScrollTrigger.defaults({
  markers: true, // Shows visual debug lines
});
```

### Animation triggers too early/late?
Adjust the start position:
```tsx
// Custom start position
useEffect(() => {
  fadeSlideUp('.element', { start: 'top 90%' }); // Trigger earlier
}, []);
```

---

## 📚 Learn More

- **Full Documentation**: `/GSAP_ANIMATIONS_GUIDE.md`
- **Code Examples**: `/components/examples/EnhancedAboutSection.tsx`
- **Quick Reference**: `/docs/gsap-quick-reference.tsx`
- **Demo Component**: `/components/demo/ScrollAnimationDemo.tsx`
- **GSAP Official**: https://gsap.com/docs/v3/Plugins/ScrollTrigger/

---

## ✨ Already Working

Your `ClientMarquee` component on the HomePage is already using GSAP ScrollTrigger with:
- Fade and slide up on scroll
- Staggered client name reveals
- Smooth integration with continuous marquee animation

Check `/components/sections/ClientMarquee.tsx` to see it in action!

---

## 🎯 Next Steps

1. ✅ **System is ready** - Start adding to your pages
2. 📄 Open `/INSTALLATION_SUMMARY.md` for overview
3. 📖 Check `/GSAP_ANIMATIONS_GUIDE.md` for all features
4. 🎨 Try examples from `/docs/gsap-quick-reference.tsx`
5. 🚀 Apply to WorkPage, AboutPage, ServicesPage

**Your portfolio now has world-class scroll animations! 🎉**
