import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook to initialize Lenis smooth scroll
 * Provides buttery smooth scrolling with inertia
 * Integrates with GSAP ScrollTrigger for scroll-driven animations
 */
export function useLenis() {
  useEffect(() => {
    // Initialize Lenis with optimized settings
    const lenis = new Lenis({
      duration: 1.0, // Reduced from 1.2 for snappier feel
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Integrate Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    // Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
    // This synchronizes GSAP animations with Lenis smooth scroll
    gsap.ticker.add((time) => {
      lenis.raf(time * 1000); // Convert GSAP's time to milliseconds
    });

    // Disable GSAP's default lag smoothing for better sync
    gsap.ticker.lagSmoothing(0);

    // Global GSAP defaults for scroll animations - optimized
    gsap.defaults({
      ease: 'power3.out',
      duration: 0.8, // Reduced from 1 for faster animations
    });

    // ScrollTrigger global configuration
    ScrollTrigger.defaults({
      markers: false, // Set to true for debugging
      toggleActions: 'play none none reverse',
      scroller: window, // Explicitly use window as scroll container — suppresses the "non-static position" warning
    });

    // Update ScrollTrigger on window resize
    const handleResize = () => {
      ScrollTrigger.refresh();
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      lenis.destroy();
      gsap.ticker.remove(lenis.raf);
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);
}