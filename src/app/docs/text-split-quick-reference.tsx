/**
 * ═══════════════════════════════════════════════════════════════
 *          TEXT SPLIT ANIMATIONS - QUICK REFERENCE
 *     Character, Word & Line Animations on Scroll
 * ═══════════════════════════════════════════════════════════════
 */

// ============================================
// STEP 1: Import the hook you want
// ============================================

import { 
  useSlideInChars,    // Characters slide from right
  useFadeInChars,     // Characters fade up
  useBlurInChars,     // Characters blur to sharp
  useDropWords,       // Words drop with rotation
  useSlideWords,      // Words slide from left
  useScaleWords,      // Words scale from zero
  useFlipLines,       // Lines flip in 3D
  useSlideUpLines,    // Lines rise from bottom
} from '../hooks/useTextSplitAnimations';

// ============================================
// STEP 2: Create ref in component
// ============================================

const titleRef = useSlideInChars();

// ============================================
// STEP 3: Attach to element
// ============================================

<h1 ref={titleRef}>Animated Title</h1>

// ============================================
// DONE! Title animates on scroll
// ============================================

/*
┌─────────────────────────────────────────────────────────────┐
│               CHARACTER ANIMATIONS (LETTERS)                 │
└─────────────────────────────────────────────────────────────┘
*/

// Slide from right (typing effect)
const ref1 = useSlideInChars();
<h1 ref={ref1}>Hello World</h1>

// Fade up from bottom
const ref2 = useFadeInChars();
<h2 ref={ref2}>Subtitle Here</h2>

// Blur reveal
const ref3 = useBlurInChars();
<h3 ref={ref3}>Sharp Focus</h3>

// Custom character animation
const ref4 = useCustomChars({
  x: 200,
  y: -50,
  rotation: 15,
  stagger: 0.03,
  duration: 0.8,
  ease: 'elastic.out(1, 0.3)',
});
<h1 ref={ref4}>Custom Style</h1>

/*
┌─────────────────────────────────────────────────────────────┐
│                 WORD ANIMATIONS (WORDS)                      │
└─────────────────────────────────────────────────────────────┘
*/

// Drop with random rotation
const ref5 = useDropWords();
<h2 ref={ref5}>Playful Headline</h2>

// Slide from left
const ref6 = useSlideWords();
<h2 ref={ref6}>Clean Reveal</h2>

// Scale from zero
const ref7 = useScaleWords();
<h2 ref={ref7}>Dynamic Entrance</h2>

// Custom word animation
const ref8 = useCustomWords({
  y: -150,
  rotation: 'random(-90, 90)',
  stagger: 0.15,
  ease: 'back.out(1.7)',
});
<h2 ref={ref8}>Random Magic</h2>

/*
┌─────────────────────────────────────────────────────────────┐
│                 LINE ANIMATIONS (LINES)                      │
└─────────────────────────────────────────────────────────────┘
*/

// 3D flip effect
const ref9 = useFlipLines();
<p ref={ref9}>Multi-line paragraph that flips in 3D space</p>

// Rise from bottom
const ref10 = useSlideUpLines();
<p ref={ref10}>Lines rise sequentially from below</p>

/*
┌─────────────────────────────────────────────────────────────┐
│                  REAL WORLD EXAMPLES                         │
└─────────────────────────────────────────────────────────────┘
*/

// EXAMPLE 1: Hero Title
import { useSlideInChars } from '../hooks/useTextSplitAnimations';

function Hero() {
  const titleRef = useSlideInChars({ stagger: 0.03 });
  
  return (
    <section className="min-h-screen flex items-center justify-center">
      <h1 ref={titleRef} className="text-8xl font-bold">
        A R Khandoker
      </h1>
    </section>
  );
}

// EXAMPLE 2: Section Headline
import { useDropWords } from '../hooks/useTextSplitAnimations';

function Section() {
  const headlineRef = useDropWords({ stagger: 0.12 });
  
  return (
    <section className="py-32">
      <h2 ref={headlineRef} className="text-6xl font-bold text-center">
        What I Do Best
      </h2>
    </section>
  );
}

// EXAMPLE 3: Service Card
function ServiceCard() {
  const titleRef = useSlideInChars({ stagger: 0.03, duration: 0.6 });
  
  return (
    <div className="card">
      <h3 ref={titleRef} className="text-2xl font-bold">
        UI/UX Design
      </h3>
      <p>Beautiful interfaces that users love</p>
    </div>
  );
}

// EXAMPLE 4: Multiple Animations
function ComplexSection() {
  const titleRef = useSlideInChars();
  const subtitleRef = useDropWords();
  const descRef = useSlideWords();
  
  return (
    <section>
      <h1 ref={titleRef}>Main Title</h1>
      <h2 ref={subtitleRef}>Secondary Headline</h2>
      <p ref={descRef}>Supporting description text</p>
    </section>
  );
}

// EXAMPLE 5: Conditional Animation
function ResponsiveTitle() {
  const isMobile = window.innerWidth < 768;
  const titleRef = useSlideInChars({
    stagger: isMobile ? 0.02 : 0.04,
    duration: isMobile ? 0.5 : 0.7,
  });
  
  return <h1 ref={titleRef}>Responsive Animation</h1>;
}

/*
┌─────────────────────────────────────────────────────────────┐
│                  CUSTOMIZATION OPTIONS                       │
└─────────────────────────────────────────────────────────────┘
*/

// Stagger speed (delay between items)
useSlideInChars({ stagger: 0.02 })  // Fast
useSlideInChars({ stagger: 0.04 })  // Normal
useSlideInChars({ stagger: 0.08 })  // Slow

// Duration (animation speed)
useSlideInChars({ duration: 0.5 })  // Quick
useSlideInChars({ duration: 0.7 })  // Normal
useSlideInChars({ duration: 1.2 })  // Slow

// Trigger point (when animation starts)
useSlideInChars({ start: 'top 90%' })  // Early
useSlideInChars({ start: 'top 85%' })  // Normal
useSlideInChars({ start: 'top 75%' })  // Late

/*
┌─────────────────────────────────────────────────────────────┐
│                   AUTO-ANIMATE ALL TITLES                    │
└─────────────────────────────────────────────────────────────┘
*/

import { useEffect } from 'react';
import { animateAllTitles } from '../utils/textSplitAnimations';

// In your App.tsx or main component
function App() {
  useEffect(() => {
    // Automatically animate all titles on the page
    animateAllTitles({
      selector: 'h1, h2, h3',  // What to animate
      animation: 'chars',       // chars, words, or lines
      style: 'slide',          // slide, fade, drop, etc.
    });
  }, []);
  
  return <YourApp />;
}

/*
┌─────────────────────────────────────────────────────────────┐
│                    COMMON EASING OPTIONS                     │
└─────────────────────────────────────────────────────────────┘
*/

ease: 'power3.out'           // Smooth (recommended)
ease: 'power4'               // Very smooth
ease: 'back.out(1.7)'        // Bouncy
ease: 'elastic.out(1, 0.3)'  // Elastic
ease: 'none'                 // Linear

/*
┌─────────────────────────────────────────────────────────────┐
│                   WHICH ANIMATION TO USE?                    │
└─────────────────────────────────────────────────────────────┘

Hero Titles (h1)          → useSlideInChars()
Section Headers (h2)      → useDropWords() or useSlideWords()
Card Titles (h3)          → useSlideInChars({ stagger: 0.03 })
Subtitles                 → useFadeInChars()
Long Paragraphs           → useFlipLines() or useSlideUpLines()
Dramatic Reveals          → useBlurInChars()
Playful Headlines         → useDropWords()
Clean Professional        → useSlideWords()

┌─────────────────────────────────────────────────────────────┐
│                      PERFORMANCE TIPS                        │
└─────────────────────────────────────────────────────────────┘

✅ Use character animations for short titles (< 20 chars)
✅ Use word animations for medium text (5-10 words)
✅ Use line animations for long paragraphs
✅ Reduce stagger on mobile for faster performance
✅ Don't animate more than 5 elements per screen
✅ Test on actual devices, not just browser

┌─────────────────────────────────────────────────────────────┐
│                      TROUBLESHOOTING                         │
└─────────────────────────────────────────────────────────────┘

Problem: Animation doesn't trigger
Fix: Check ref is attached and element scrolls into view

Problem: Text looks broken
Fix: Ensure parent has display: block or inline-block

Problem: Too slow on mobile
Fix: Reduce stagger and duration for mobile devices

Problem: Multiple animations conflict
Fix: Use different start positions or delays

┌─────────────────────────────────────────────────────────────┐
│                     WHERE TO LEARN MORE                      │
└─────────────────────────────────────────────────────────────┘

📖 Full Guide:          /TEXT_SPLIT_GUIDE.md
🎨 Live Demo:           /components/demo/TextSplitDemo.tsx
💼 Real Examples:       /components/examples/PortfolioSectionsWithTextSplit.tsx
⚙️ Core Functions:      /utils/textSplitAnimations.ts
🎣 React Hooks:         /hooks/useTextSplitAnimations.ts
🌐 GSAP Docs:           https://gsap.com/docs/

═══════════════════════════════════════════════════════════════
              🎬 TEXT SPLIT ANIMATIONS READY TO USE!
═══════════════════════════════════════════════════════════════
*/

export {};
