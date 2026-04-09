# 🎬 Text Split Animations - Complete Guide

Premium character, word, and line animations that trigger on scroll, inspired by GSAP SplitText.

---

## 🚀 Quick Start

### 3-Step Implementation

```tsx
// 1. Import the hook
import { useSlideInChars } from '../hooks/useTextSplitAnimations';

// 2. Create a ref
const titleRef = useSlideInChars();

// 3. Attach to your heading
<h1 ref={titleRef}>Your Title Animates on Scroll!</h1>
```

**Done!** The title will now animate character by character when scrolled into view.

---

## 📚 Available Animation Styles

### Character Animations
Each letter animates individually with stagger effect

| Hook | Effect | Best For |
|------|--------|----------|
| `useSlideInChars` | Slide from right | Headlines, hero titles |
| `useFadeInChars` | Fade up from bottom | Subtitles, descriptions |
| `useBlurInChars` | Blur to sharp | Dramatic reveals |

### Word Animations
Each word animates as a unit

| Hook | Effect | Best For |
|------|--------|----------|
| `useDropWords` | Drop with random rotation | Playful headlines |
| `useSlideWords` | Slide from left | Clean reveals |
| `useScaleWords` | Scale from zero | Dynamic entrances |

### Line Animations
Multi-line text animates line by line

| Hook | Effect | Best For |
|------|--------|----------|
| `useFlipLines` | 3D flip effect | Dramatic paragraphs |
| `useSlideUpLines` | Rise from bottom | Long text blocks |

---

## 🎨 Real Examples

### Hero Title (Character Animation)
```tsx
import { useSlideInChars } from '../hooks/useTextSplitAnimations';

function Hero() {
  const titleRef = useSlideInChars({ stagger: 0.03, duration: 0.8 });
  
  return (
    <h1 ref={titleRef} className="text-8xl font-bold">
      A R Khandoker
    </h1>
  );
}
```

### Section Headline (Word Animation)
```tsx
import { useDropWords } from '../hooks/useTextSplitAnimations';

function Section() {
  const headlineRef = useDropWords({ stagger: 0.12 });
  
  return (
    <h2 ref={headlineRef} className="text-6xl font-bold">
      Design That Makes A Difference
    </h2>
  );
}
```

### Service Card Title
```tsx
function ServiceCard() {
  const titleRef = useSlideInChars({ stagger: 0.03 });
  
  return (
    <div className="card">
      <h3 ref={titleRef} className="text-2xl font-bold">
        UI/UX Design
      </h3>
      <p>Beautiful interfaces users love</p>
    </div>
  );
}
```

### Multi-line Paragraph
```tsx
import { useFlipLines } from '../hooks/useTextSplitAnimations';

function Content() {
  const paragraphRef = useFlipLines({ stagger: 0.2 });
  
  return (
    <p ref={paragraphRef} className="text-xl">
      I combine product thinking, UX strategy, and refined UI craft
      to design digital experiences that are functional, scalable,
      and visually clear.
    </p>
  );
}
```

---

## ⚙️ Customization Options

### Stagger Speed
Control delay between characters/words/lines

```tsx
// Fast
useSlideInChars({ stagger: 0.02 })

// Medium (default)
useSlideInChars({ stagger: 0.04 })

// Slow
useSlideInChars({ stagger: 0.08 })
```

### Duration
Control animation speed

```tsx
// Quick
useSlideInChars({ duration: 0.5 })

// Normal (default)
useSlideInChars({ duration: 0.7 })

// Slow
useSlideInChars({ duration: 1.2 })
```

### Scroll Trigger Point
Control when animation starts

```tsx
// Trigger earlier (when 90% down viewport)
useSlideInChars({ start: 'top 90%' })

// Default (85% down viewport)
useSlideInChars({ start: 'top 85%' })

// Trigger later (75% down viewport)
useSlideInChars({ start: 'top 75%' })
```

---

## 🎯 Custom Animations

For full control, use the custom hooks:

### Custom Character Animation
```tsx
import { useCustomChars } from '../hooks/useTextSplitAnimations';

const titleRef = useCustomChars({
  x: 200,           // Distance to move
  y: -50,           // Vertical movement
  rotation: 15,     // Rotation angle
  opacity: 0,       // Start opacity
  stagger: 0.03,    // Delay between chars
  duration: 0.8,    // Animation duration
  ease: 'elastic.out(1, 0.3)',  // Easing function
  start: 'top 80%', // Trigger point
});

<h1 ref={titleRef}>Custom Animation</h1>
```

### Custom Word Animation
```tsx
import { useCustomWords } from '../hooks/useTextSplitAnimations';

const titleRef = useCustomWords({
  y: -150,
  rotation: 'random(-90, 90)',  // Random rotation
  opacity: 0,
  stagger: 0.15,
  duration: 0.9,
  ease: 'back.out(1.7)',
});

<h2 ref={titleRef}>Dynamic Words</h2>
```

### Custom Line Animation
```tsx
import { useCustomLines } from '../hooks/useTextSplitAnimations';

const textRef = useCustomLines({
  rotationX: -120,
  rotationY: 20,
  transformOrigin: '50% 50% -200px',
  opacity: 0,
  stagger: 0.3,
  duration: 1,
  ease: 'power3.out',
});

<p ref={textRef}>Multi-line content here</p>
```

---

## 🔥 Pro Patterns

### Pattern 1: Combine Multiple Animations
```tsx
function Section() {
  const titleRef = useSlideInChars();
  const subtitleRef = useDropWords();
  const contentRef = useFadeSlideUp({ delay: 0.5 });
  
  return (
    <section>
      <h2 ref={titleRef}>Main Title</h2>
      <h3 ref={subtitleRef}>Subtitle Here</h3>
      <div ref={contentRef}>
        <p>Content appears after title animations</p>
      </div>
    </section>
  );
}
```

### Pattern 2: Different Styles for Different Headings
```tsx
function Page() {
  const h1Ref = useSlideInChars();   // Heroes
  const h2Ref = useDropWords();      // Sections
  const h3Ref = useSlideWords();     // Cards
  
  return (
    <div>
      <h1 ref={h1Ref}>Page Title</h1>
      <h2 ref={h2Ref}>Section Title</h2>
      <h3 ref={h3Ref}>Card Title</h3>
    </div>
  );
}
```

### Pattern 3: Animate All Titles Automatically
```tsx
import { useEffect } from 'react';
import { animateAllTitles } from '../utils/textSplitAnimations';

function App() {
  useEffect(() => {
    // Automatically animate all h1, h2, h3 on the site
    animateAllTitles({
      selector: 'h1, h2, h3',
      animation: 'chars',
      style: 'slide',
    });
  }, []);
  
  return <YourApp />;
}
```

---

## 📱 Responsive Adjustments

### Mobile Optimization
```tsx
const isMobile = window.innerWidth < 768;

const titleRef = useSlideInChars({
  stagger: isMobile ? 0.02 : 0.04,  // Faster on mobile
  duration: isMobile ? 0.5 : 0.7,   // Quicker on mobile
});
```

### Conditional Animation Type
```tsx
const isMobile = window.innerWidth < 768;

// Use simpler animation on mobile for performance
const titleRef = isMobile 
  ? useFadeInChars()        // Simpler
  : useSlideInChars();      // More complex
```

---

## 🐛 Troubleshooting

### Animation not triggering?
- ✅ Check ref is attached: `<h1 ref={titleRef}>`
- ✅ Element must scroll into view
- ✅ Check for JavaScript errors in console

### Text looks broken?
- ✅ Ensure element has `display: inline-block` or `display: block`
- ✅ Parent container should not have `overflow: hidden` on scroll

### Performance issues?
- ✅ Use simpler animations (chars instead of lines)
- ✅ Reduce stagger speed
- ✅ Use fewer animated elements per screen

---

## 🎬 GSAP Easing Options

Common easing functions for different feels:

```tsx
// Smooth and natural
ease: 'power3.out'

// Bouncy/elastic
ease: 'elastic.out(1, 0.3)'

// Snappy
ease: 'back.out(1.7)'

// Linear (constant speed)
ease: 'none'

// Anticipation
ease: 'power4.inOut'
```

---

## 📦 Complete Example Component

```tsx
import React from 'react';
import { Link } from 'react-router-dom';
import {
  useSlideInChars,
  useDropWords,
  useSlideWords,
} from '../hooks/useTextSplitAnimations';
import { useFadeSlideUp, useStaggerReveal } from '../hooks/useGSAPAnimations';

export function AboutPage() {
  // Text animations
  const heroTitleRef = useSlideInChars({ stagger: 0.03 });
  const heroSubRef = useDropWords({ stagger: 0.1 });
  const sectionTitleRef = useSlideWords();
  
  // Other animations
  const statsRef = useStaggerReveal({ stagger: 0.15 });
  const ctaRef = useFadeSlideUp({ delay: 0.8 });

  return (
    <div className="bg-white">
      {/* Hero */}
      <section className="py-32">
        <h1 ref={heroTitleRef} className="text-8xl font-bold mb-6">
          About Me
        </h1>
        <h2 ref={heroSubRef} className="text-3xl text-black/70">
          Designer, Strategist, Problem Solver
        </h2>
      </section>

      {/* Stats */}
      <section className="py-32">
        <h2 ref={sectionTitleRef} className="text-6xl font-bold mb-16">
          By The Numbers
        </h2>
        <div ref={statsRef} className="grid grid-cols-4 gap-8">
          <div>98+ Projects</div>
          <div>12+ Products</div>
          <div>50+ Clients</div>
          <div>5+ Years</div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32">
        <div ref={ctaRef}>
          <Link to="/contact" className="btn">
            Get In Touch
          </Link>
        </div>
      </section>
    </div>
  );
}
```

---

## 📚 Additional Resources

- **Live Demo**: `/components/demo/TextSplitDemo.tsx`
- **Real Examples**: `/components/examples/PortfolioSectionsWithTextSplit.tsx`
- **Core Functions**: `/utils/textSplitAnimations.ts`
- **React Hooks**: `/hooks/useTextSplitAnimations.ts`
- **GSAP Docs**: https://gsap.com/docs/v3/GSAP/gsap.from()

---

## 🎯 Next Steps

1. ✅ Start with one title using `useSlideInChars()`
2. 📖 Test different animation styles
3. 🎨 Apply to all major headings
4. ⚡ Fine-tune timing and stagger
5. 🚀 Deploy your animated portfolio

**Your titles now animate beautifully on scroll! 🎉**
