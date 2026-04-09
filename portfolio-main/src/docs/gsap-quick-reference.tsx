/**
 * GSAP ScrollTrigger Quick Reference
 * Copy-paste these snippets into your components
 */

// ============================================
// METHOD 1: Using Custom Hooks (Easiest)
// ============================================

import { useFadeSlideUp, useStaggerReveal, useParallax } from '../hooks/useGSAPAnimations';

function MyComponent() {
  // Simple ref assignment - hook handles everything
  const heroRef = useFadeSlideUp({ duration: 1.5, y: 100 });
  const cardsRef = useStaggerReveal({ stagger: 0.15 });
  const bgRef = useParallax({ speed: 80, direction: 'down' });

  return (
    <div>
      <div ref={heroRef}>Animated Hero</div>
      <div ref={cardsRef}>
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
      </div>
      <div ref={bgRef}>Parallax Background</div>
    </div>
  );
}

// ============================================
// METHOD 2: Using Animation Functions
// ============================================

import { useEffect, useRef } from 'react';
import { fadeSlideUp, staggerReveal, textReveal } from '../utils/gsapAnimations';

function MyComponent() {
  const sectionRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    // More control over when animations run
    if (sectionRef.current) {
      fadeSlideUp(sectionRef.current, {
        duration: 1.2,
        y: 80,
        start: 'top 85%',
      });
    }

    // Animate by class name
    textReveal('.headline', {
      splitBy: 'words',
      stagger: 0.05,
    });

    staggerReveal('.cards-container', {
      children: '.card',
      stagger: 0.2,
    });
  }, []);

  return (
    <div ref={sectionRef}>
      <h1 className="headline">Text reveals word by word</h1>
      <div className="cards-container">
        <div className="card">Card 1</div>
        <div className="card">Card 2</div>
      </div>
    </div>
  );
}

// ============================================
// COMMON PATTERNS
// ============================================

// Pattern 1: Fade in section
const sectionRef = useFadeSlideUp({ duration: 1.2, y: 60 });
<section ref={sectionRef}>Content</section>

// Pattern 2: Stagger cards/items
const gridRef = useStaggerReveal({ stagger: 0.15, y: 50 });
<div ref={gridRef} className="grid">
  <div className="card">Item</div>
  <div className="card">Item</div>
</div>

// Pattern 3: Parallax background
const parallaxRef = useParallax({ speed: 100, direction: 'down' });
<div className="relative">
  <div ref={parallaxRef} className="absolute inset-0 bg-image" />
  <div className="relative z-10">Content on top</div>
</div>

// Pattern 4: Animated text
const headlineRef = useTextReveal({ splitBy: 'words', stagger: 0.03 });
<h1 ref={headlineRef}>Your Amazing Headline</h1>

// Pattern 5: Scale on scroll
const imageRef = useScaleOnScroll({ from: 0.9, to: 1, duration: 1 });
<div ref={imageRef} className="image-wrapper">
  <img src="..." />
</div>

// Pattern 6: Counter animation
const statRef = useCounter({ start: 0, end: 150, suffix: '+' });
<div ref={statRef}>0+</div>

// Pattern 7: Image reveal
const imgContainerRef = useImageReveal({ scale: 1.2, duration: 1.4 });
<div ref={imgContainerRef} className="overflow-hidden rounded-2xl">
  <img src="..." />
</div>

// Pattern 8: Rotate on scroll
const logoRef = useRotateOnScroll({ rotation: 360, scrub: 1 });
<div ref={logoRef}>Logo</div>

// ============================================
// ADVANCED: Multiple animations on one element
// ============================================

function AdvancedComponent() {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (elementRef.current) {
      // Apply multiple animations
      fadeSlideUp(elementRef.current, { duration: 1 });
      scaleOnScroll(elementRef.current, { from: 0.95, to: 1 });
    }
  }, []);

  return <div ref={elementRef}>Multi-animated element</div>;
}

// ============================================
// DEBUGGING
// ============================================

// Enable visual markers to see trigger points
// In /hooks/useLenis.ts, set:
ScrollTrigger.defaults({
  markers: true, // Shows colored debug markers
  toggleActions: 'play none none reverse',
});

// ============================================
// PERFORMANCE TIP
// ============================================

// For many similar elements, use batch animation
import { batchAnimate } from '../utils/gsapAnimations';

useEffect(() => {
  batchAnimate('.project-card', {
    animation: 'fade',
    stagger: 0.1,
  });
}, []);

// ============================================
// RESPONSIVE ANIMATIONS
// ============================================

// Adjust animation based on screen size
const isMobile = window.innerWidth < 768;

const ref = useFadeSlideUp({
  duration: isMobile ? 1 : 1.5,
  y: isMobile ? 40 : 80,
  start: isMobile ? 'top 90%' : 'top 85%',
});

export {};
