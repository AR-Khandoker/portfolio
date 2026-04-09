# GSAP ScrollTrigger Animation System

Premium scroll-driven animations for your portfolio, inspired by award-winning websites.

## 🎯 Setup

The GSAP ScrollTrigger system is fully integrated with Lenis smooth scroll in your application. All animations are synchronized for buttery 60fps performance.

### Global Configuration

Located in `/hooks/useLenis.ts` - automatically initialized in App.tsx:
- ✅ GSAP ScrollTrigger registered
- ✅ Lenis smooth scroll integrated
- ✅ Synchronized animation frame loop
- ✅ Responsive resize handling
- ✅ Automatic cleanup on unmount

## 📚 Available Animations

Import from `/utils/gsapAnimations.ts`:

```tsx
import { fadeSlideUp, parallax, scaleOnScroll, staggerReveal } from '../utils/gsapAnimations';
```

### 1. Fade & Slide Up
Classic entrance animation - elements fade in and slide up

```tsx
useEffect(() => {
  fadeSlideUp('.my-element', {
    delay: 0.2,
    duration: 1.2,
    y: 80,
    start: 'top 85%',
  });
}, []);
```

### 2. Parallax Effect
Smooth depth-based movement on scroll

```tsx
useEffect(() => {
  parallax('.background-image', {
    speed: 100,
    direction: 'down',
  });
}, []);
```

### 3. Pin Element
Sticky scroll effect - pins element while scrolling

```tsx
useEffect(() => {
  pinElement('.hero-section', {
    start: 'top top',
    end: '+=500',
    pinSpacing: true,
  });
}, []);
```

### 4. Horizontal Scroll
Premium gallery effect - scroll horizontally

```tsx
useEffect(() => {
  horizontalScroll('.gallery-container', {
    scrub: 1,
  });
}, []);
```

### 5. Scale on Scroll
Zoom in/out effect as user scrolls

```tsx
useEffect(() => {
  scaleOnScroll('.card', {
    from: 0.8,
    to: 1,
    duration: 1.2,
  });
}, []);
```

### 6. Rotate on Scroll
Dynamic rotation tied to scroll position

```tsx
useEffect(() => {
  rotateOnScroll('.logo', {
    rotation: 360,
    scrub: 1,
  });
}, []);
```

### 7. Stagger Reveal
Sequential reveal of child elements

```tsx
useEffect(() => {
  staggerReveal('.card-container', {
    children: '.card',
    stagger: 0.15,
    duration: 0.8,
    y: 60,
  });
}, []);
```

### 8. Text Reveal
Character/word-by-character animation

```tsx
useEffect(() => {
  textReveal('.headline', {
    splitBy: 'words',
    stagger: 0.05,
    duration: 0.8,
  });
}, []);
```

### 9. Clip Path Reveal
Modern wipe effect using clip-path

```tsx
useEffect(() => {
  clipPathReveal('.image-container', {
    direction: 'left',
    duration: 1.5,
  });
}, []);
```

### 10. Counter Animation
Smooth number counting on scroll

```tsx
useEffect(() => {
  animateCounter('.stat-number', {
    start: 0,
    end: 150,
    duration: 2,
    suffix: '+',
  });
}, []);
```

### 11. Image Reveal
Image reveal with scale effect

```tsx
useEffect(() => {
  imageReveal('.image-wrapper', {
    scale: 1.3,
    duration: 1.2,
  });
}, []);
```

### 12. Batch Animations
Optimize performance for multiple similar elements

```tsx
useEffect(() => {
  batchAnimate('.project-card', {
    animation: 'fade',
    stagger: 0.1,
  });
}, []);
```

## 🎨 Complete Example

```tsx
import React, { useEffect, useRef } from 'react';
import { fadeSlideUp, staggerReveal, parallax } from '../utils/gsapAnimations';

export function MyComponent() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Animate hero section
    if (heroRef.current) {
      fadeSlideUp(heroRef.current, {
        duration: 1.5,
        y: 100,
      });
    }

    // Stagger animate cards
    if (cardsRef.current) {
      staggerReveal(cardsRef.current, {
        children: '.card',
        stagger: 0.2,
      });
    }

    // Parallax background
    parallax('.bg-element', {
      speed: 50,
      direction: 'down',
    });
  }, []);

  return (
    <div>
      <div ref={heroRef} className="hero">
        <h1>Premium Animation</h1>
      </div>
      
      <div ref={cardsRef} className="cards">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
        <div className="card">Card 3</div>
      </div>
      
      <div className="bg-element">Background</div>
    </div>
  );
}
```

## 🎬 Animation Options

### Common Options
- `duration`: Animation duration in seconds (default: 1.2)
- `delay`: Delay before animation starts (default: 0)
- `start`: ScrollTrigger start position (default: 'top 85%')
- `end`: ScrollTrigger end position
- `scrub`: Tie animation to scroll position (true/false/number)

### ScrollTrigger Start/End Values
- `'top top'` - When element's top hits viewport top
- `'top 80%'` - When element's top hits 80% down viewport
- `'center center'` - When element center hits viewport center
- `'bottom top'` - When element's bottom hits viewport top
- `'+=500'` - 500px after trigger point

## 🔧 Debugging

Enable scroll markers to visualize trigger points:

In `/hooks/useLenis.ts`, set:
```tsx
ScrollTrigger.defaults({
  markers: true, // Shows visual debug markers
  toggleActions: 'play none none reverse',
});
```

## ⚡ Performance Tips

1. **Use `scrub`** for scroll-tied animations (smoother)
2. **Use `batch`** for many similar elements
3. **Avoid animating too many elements simultaneously**
4. **Keep `duration` values reasonable (0.8-1.5s)**
5. **Use `will-change: transform` CSS for animated elements**

## 🎯 Best Practices

1. Always clean up ScrollTriggers in useEffect return
2. Use refs to target specific elements
3. Initialize animations after component mounts
4. Test on mobile devices (adjust start/end positions)
5. Use `toggleActions` to control animation behavior

## 📱 Mobile Considerations

Lenis `smoothTouch` is disabled by default for better mobile performance. ScrollTrigger animations work perfectly on mobile with native scroll.

Adjust trigger points for mobile:
```tsx
fadeSlideUp('.element', {
  start: window.innerWidth < 768 ? 'top 90%' : 'top 85%',
});
```

---

Your portfolio now has premium scroll-driven animations powered by GSAP ScrollTrigger + Lenis smooth scroll! 🚀
