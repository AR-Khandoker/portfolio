import React, { useEffect, useRef } from 'react';
import {
  fadeSlideUp,
  parallax,
  scaleOnScroll,
  staggerReveal,
  textReveal,
  imageReveal,
  clipPathReveal,
} from '../../utils/gsapAnimations';

/**
 * Demo Component showcasing GSAP ScrollTrigger animations
 * Use these patterns throughout your portfolio for premium scroll effects
 */
export function ScrollAnimationDemo() {
  const heroRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLHeadingElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Hero fade slide up
    if (heroRef.current) {
      fadeSlideUp(heroRef.current, {
        duration: 1.5,
        y: 100,
        start: 'top 80%',
      });
    }

    // Stagger reveal cards
    if (cardsRef.current) {
      staggerReveal(cardsRef.current, {
        children: '.demo-card',
        stagger: 0.15,
        duration: 0.8,
        y: 60,
      });
    }

    // Text reveal animation
    if (textRef.current) {
      textReveal(textRef.current, {
        splitBy: 'words',
        stagger: 0.05,
        duration: 0.8,
      });
    }

    // Image reveal with scale
    if (imageRef.current) {
      imageReveal(imageRef.current, {
        scale: 1.2,
        duration: 1.4,
      });
    }

    // Parallax effect
    if (parallaxRef.current) {
      parallax(parallaxRef.current, {
        speed: 80,
        direction: 'down',
      });
    }

    // Cleanup is handled automatically by the animation utilities
  }, []);

  return (
    <div className="bg-white">
      {/* Hero Section with Fade Slide Up */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-purple-50 to-white overflow-hidden">
        <div ref={parallaxRef} className="absolute inset-0 bg-purple-100 opacity-30" />
        <div ref={heroRef} className="relative text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold text-black mb-6">
            Premium Scroll
          </h1>
          <p className="text-xl text-black/60 max-w-2xl mx-auto">
            Award-winning animations powered by GSAP ScrollTrigger
          </p>
        </div>
      </section>

      {/* Text Reveal Section */}
      <section className="relative py-32 px-6 bg-white">
        <div className="container mx-auto max-w-4xl">
          <h2 ref={textRef} className="text-5xl md:text-7xl font-bold text-black text-center mb-12">
            Scroll triggers beautiful animations
          </h2>
        </div>
      </section>

      {/* Stagger Reveal Cards */}
      <section className="relative py-32 px-6 bg-[#FAFAFA]">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-black mb-16 text-center">
            Stagger Animation
          </h3>
          <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="demo-card bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-purple-500 rounded-full mb-6" />
              <h4 className="text-2xl font-bold mb-4">Card One</h4>
              <p className="text-black/60">Elements appear one after another</p>
            </div>
            <div className="demo-card bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-purple-500 rounded-full mb-6" />
              <h4 className="text-2xl font-bold mb-4">Card Two</h4>
              <p className="text-black/60">Creating a smooth cascade effect</p>
            </div>
            <div className="demo-card bg-white p-8 rounded-2xl shadow-sm">
              <div className="w-16 h-16 bg-purple-500 rounded-full mb-6" />
              <h4 className="text-2xl font-bold mb-4">Card Three</h4>
              <p className="text-black/60">Perfect for galleries and grids</p>
            </div>
          </div>
        </div>
      </section>

      {/* Image Reveal Section */}
      <section className="relative py-32 px-6 bg-white">
        <div className="container mx-auto max-w-5xl">
          <h3 className="text-4xl font-bold text-black mb-16 text-center">
            Image Reveal with Scale
          </h3>
          <div ref={imageRef} className="aspect-video rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1200"
              alt="Demo"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Scale Animation */}
      <section className="relative py-32 px-6 bg-black text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <div className="scale-demo">
            <h3 className="text-5xl font-bold mb-6">Scale on Scroll</h3>
            <p className="text-xl text-white/60">
              Elements scale smoothly as they enter the viewport
            </p>
          </div>
        </div>
      </section>

      {/* Instructions */}
      <section className="relative py-32 px-6 bg-purple-500 text-white">
        <div className="container mx-auto max-w-4xl text-center">
          <h3 className="text-4xl font-bold mb-8">
            Ready to Use Throughout Your Portfolio
          </h3>
          <p className="text-xl text-white/90 mb-8">
            Import animations from <code className="bg-white/20 px-2 py-1 rounded">/utils/gsapAnimations.ts</code>
          </p>
          <p className="text-lg text-white/80">
            Check <code className="bg-white/20 px-2 py-1 rounded">/GSAP_ANIMATIONS_GUIDE.md</code> for full documentation
          </p>
        </div>
      </section>
    </div>
  );
}

// Example usage in your components:
/*
import { fadeSlideUp, staggerReveal } from '../utils/gsapAnimations';

function MyComponent() {
  useEffect(() => {
    fadeSlideUp('.my-section', { duration: 1.2, y: 80 });
    staggerReveal('.cards-container', { children: '.card', stagger: 0.15 });
  }, []);
  
  return (
    <div className="my-section">
      <div className="cards-container">
        <div className="card">...</div>
        <div className="card">...</div>
      </div>
    </div>
  );
}
*/