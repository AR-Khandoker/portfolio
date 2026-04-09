# 🎬 Animation System Documentation

## Overview

Your portfolio now features a professional-grade animation system powered by:

1. **GSAP + ScrollTrigger** - Industry-standard animation library for scroll-based interactions
2. **Lenis Smooth Scroll** - Butter-smooth scrolling with inertia (like award-winning websites)

---

## 🌊 Lenis Smooth Scroll

### What It Does
Replaces native browser scrolling with a smooth, physics-based scroll experience.

### Implementation
Automatically initialized in `/App.tsx` via the `useLenis()` hook.

```tsx
// In App.tsx
import { useLenis } from './hooks/useLenis';

function App() {
  useLenis(); // ✨ Smooth scroll activated!
  // ...
}
```

### Configuration
Located in `/hooks/useLenis.ts`:
- **Duration**: `1.2` - How long scroll momentum lasts
- **Easing**: Custom easing function for natural deceleration
- **Smooth Wheel**: `true` - Applies to mouse wheel scrolling
- **Smooth Touch**: `false` - Native touch scrolling (better for mobile)

---

## 🎨 GSAP ScrollTrigger Animations

### Animation Hooks

Located in `/hooks/useScrollAnimation.ts`:

#### 1. `useFadeIn(options)`
Fade in with optional upward movement.

```tsx
const ref = useFadeIn({ delay: 0.2, duration: 1, y: 50 });
return <div ref={ref}>Content fades in</div>;
```

**Options:**
- `delay` - Animation delay in seconds
- `duration` - Animation duration in seconds
- `y` - Vertical offset (default: 50)

#### 2. `useStaggerReveal(options)`
Animate children with staggered delays.

```tsx
const ref = useStaggerReveal({ stagger: 0.1, duration: 0.8 });
return (
  <div ref={ref}>
    <div>Item 1</div> {/* Animates first */}
    <div>Item 2</div> {/* Animates 0.1s later */}
    <div>Item 3</div> {/* Animates 0.2s later */}
  </div>
);
```

**Options:**
- `stagger` - Delay between each child (seconds)
- `duration` - Animation duration

#### 3. `useTextReveal(options)`
Split text by words/characters and animate them in sequence.

```tsx
const ref = useTextReveal({ splitBy: 'words', stagger: 0.03 });
return <h1 ref={ref}>This text reveals word by word</h1>;
```

**Options:**
- `splitBy` - `'words'` or `'chars'`
- `stagger` - Delay between each word/char

#### 4. `useScaleIn(options)`
Scale up from smaller size with fade.

```tsx
const ref = useScaleIn({ from: 0.8, duration: 1 });
return <div ref={ref}>Scales from 80% to 100%</div>;
```

**Options:**
- `from` - Starting scale (default: 0.8)
- `duration` - Animation duration

#### 5. `useParallax(speed)`
Parallax scrolling effect.

```tsx
const ref = useParallax(0.5);
return <div ref={ref}>Moves slower than scroll</div>;
```

**Parameters:**
- `speed` - Parallax intensity (0.5 = half scroll speed)

---

## 📦 AnimatedSection Component

High-level wrapper for easy animations.

Located in `/components/shared/AnimatedSection.tsx`

### Usage

```tsx
import { AnimatedSection, AnimatedText } from '../components/shared/AnimatedSection';

// Fade in animation
<AnimatedSection animation="fade" delay={0.2}>
  <p>This fades in on scroll</p>
</AnimatedSection>

// Stagger children
<AnimatedSection animation="stagger" stagger={0.15}>
  <div>Card 1</div>
  <div>Card 2</div>
  <div>Card 3</div>
</AnimatedSection>

// Scale in animation
<AnimatedSection animation="scale" duration={1.2}>
  <img src="..." alt="..." />
</AnimatedSection>

// Animated text (word-by-word reveal)
<AnimatedText 
  as="h1" 
  splitBy="words" 
  stagger={0.05}
  className="text-4xl font-bold"
>
  This headline reveals word by word
</AnimatedText>
```

### Props

**AnimatedSection:**
- `animation` - `'fade'`, `'stagger'`, `'scale'`, or `'none'`
- `className` - CSS classes
- `delay` - Animation delay (seconds)
- `duration` - Animation duration (seconds)
- `stagger` - Delay between children (for stagger animation)

**AnimatedText:**
- `as` - HTML element (`'h1'`, `'h2'`, `'p'`, etc.)
- `splitBy` - `'words'` or `'chars'`
- `stagger` - Delay between each word/character
- `className` - CSS classes

---

## 🎯 Where Animations Are Applied

### Homepage (`/pages/HomePage.tsx`)
- ✅ Hero section text reveals word-by-word
- ✅ About preview portrait scales in
- ✅ About preview text fades in with stagger
- ✅ Smooth scroll throughout

### About Page (`/pages/AboutPage.tsx`)
- ✅ Portrait scales in on load
- ✅ Main headline reveals word-by-word
- ✅ Content sections fade in with delays
- ✅ Skills stagger in sequentially

### Work Page (`/pages/WorkPage.tsx`)
- ✅ Import statement added for animated components
- ✅ Ready to apply animations to project grid

### Sections
- ✅ **FeaturedWork** - Carousel items animate on scroll
- ✅ **ServicesPreview** - Service cards stagger in, headline word reveal
- ✅ **TestimonialPreview** - Scales in on scroll

---

## 🛠️ How to Add Animations

### Method 1: Use AnimatedSection (Easiest)

```tsx
<AnimatedSection animation="fade">
  <YourComponent />
</AnimatedSection>
```

### Method 2: Use Hooks Directly

```tsx
import { useFadeIn } from '../hooks/useScrollAnimation';

function MyComponent() {
  const ref = useFadeIn({ delay: 0.2 });
  return <div ref={ref}>Content</div>;
}
```

### Method 3: Custom GSAP Animations

```tsx
import { useEffect, useRef } from 'react';
import { gsap, ScrollTrigger } from '../hooks/useScrollAnimation';

function MyComponent() {
  const ref = useRef(null);
  
  useEffect(() => {
    gsap.fromTo(ref.current, 
      { opacity: 0, x: -100 },
      { 
        opacity: 1, 
        x: 0,
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        }
      }
    );
  }, []);
  
  return <div ref={ref}>Custom animation</div>;
}
```

---

## 🎬 Animation Best Practices

### 1. Don't Overdo It
- Use animations sparingly for key elements
- Too many animations = distraction

### 2. Consistent Timing
- Stick to `0.8-1.2s` for durations
- Use `0.1-0.15s` for stagger delays

### 3. Performance
- GSAP and Lenis are highly optimized
- Avoid animating heavy images simultaneously
- Use `will-change` CSS for frequently animated elements

### 4. Mobile Considerations
- Lenis smooth scroll is disabled on touch devices (better UX)
- Keep animations subtle on mobile
- Test on actual devices

---

## 📚 Resources

- **GSAP Documentation**: https://gsap.com/docs/v3/
- **ScrollTrigger Docs**: https://gsap.com/docs/v3/Plugins/ScrollTrigger/
- **Lenis Smooth Scroll**: https://github.com/darkroomengineering/lenis

---

## 🐛 Troubleshooting

### Animations Not Triggering
- Check ScrollTrigger start/end positions
- Use `markers: true` in ScrollTrigger config for debugging
- Ensure element has proper dimensions

### Choppy Scrolling
- Check if multiple scroll libraries are conflicting
- Disable browser extensions that affect scrolling
- Check console for errors

### Text Reveal Not Working
- Ensure text is plain text (not nested elements)
- Check that the element has proper display properties
- Verify `splitBy` parameter is correct

---

## 🎉 Result

Your portfolio now has that "award-winning website feel" with:
- **Buttery smooth scrolling** with inertia
- **Professional scroll-triggered animations**
- **Text reveals** that create engagement
- **Staggered animations** for visual rhythm
- **Scale and fade effects** for depth

All while maintaining excellent performance! 🚀
