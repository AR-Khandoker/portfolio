import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

/**
 * Custom hook for GSAP ScrollTrigger animations
 * Ties scroll position to animations for text reveals, section transitions, etc.
 * 
 * NOTE: For new implementations, consider using the hooks from /hooks/useGSAPAnimations.ts
 * or animation utilities from /utils/gsapAnimations.ts for more options
 */
export function useScrollAnimation() {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    // Ensure ScrollTrigger is available
    if (!ScrollTrigger) return;

    return () => {
      // Kill all ScrollTriggers on unmount
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return elementRef;
}

/**
 * Fade in animation on scroll
 */
export function useFadeIn(options: {
  delay?: number;
  duration?: number;
  y?: number;
} = {}) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Ensure parent has proper positioning for ScrollTrigger
    const parent = element.parentElement;
    if (parent) {
      const position = window.getComputedStyle(parent).position;
      if (position === 'static') {
        parent.style.position = 'relative';
      }
    }

    const animation = gsap.fromTo(
      element,
      {
        opacity: 0,
        y: options.y || 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: options.duration || 0.8, // Reduced from 1
        delay: options.delay || 0,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          end: 'top 50%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [options.delay, options.duration, options.y]);

  return elementRef;
}

/**
 * Stagger animation for lists
 */
export function useStaggerReveal(options: {
  stagger?: number;
  duration?: number;
} = {}) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Ensure parent has proper positioning for ScrollTrigger
    const parent = container.parentElement;
    if (parent) {
      const position = window.getComputedStyle(parent).position;
      if (position === 'static') {
        parent.style.position = 'relative';
      }
    }

    const children = container.children;

    const animation = gsap.fromTo(
      children,
      {
        opacity: 0,
        y: 30,
      },
      {
        opacity: 1,
        y: 0,
        duration: options.duration || 0.8,
        stagger: options.stagger || 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, [options.stagger, options.duration]);

  return containerRef;
}

/**
 * Parallax effect on scroll
 */
export function useParallax(speed: number = 0.5) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const animation = gsap.to(element, {
      y: () => window.innerHeight * speed,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true,
      },
    });

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [speed]);

  return elementRef;
}

/**
 * Text reveal animation (split by words/characters)
 */
export function useTextReveal(options: {
  splitBy?: 'words' | 'chars';
  stagger?: number;
} = {}) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Ensure parent has proper positioning for ScrollTrigger
    const parent = element.parentElement;
    if (parent) {
      const position = window.getComputedStyle(parent).position;
      if (position === 'static') {
        parent.style.position = 'relative';
      }
    }

    const text = element.textContent || '';
    const splitBy = options.splitBy || 'words';
    const stagger = options.stagger || 0.025; // Reduced from 0.03

    // Split text
    const parts = splitBy === 'words' ? text.split(' ') : text.split('');
    element.innerHTML = parts
      .map((part) => `<span class="inline-block overflow-hidden"><span class="inline-block">${part}${splitBy === 'words' ? '&nbsp;' : ''}</span></span>`)
      .join('');

    const spans = element.querySelectorAll('span > span');

    const animation = gsap.fromTo(
      spans,
      {
        y: '100%',
        opacity: 0,
      },
      {
        y: '0%',
        opacity: 1,
        duration: 0.6, // Reduced from 0.8
        stagger: stagger,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [options.splitBy, options.stagger]);

  return elementRef;
}

/**
 * Scale animation on scroll
 */
export function useScaleIn(options: {
  from?: number;
  duration?: number;
} = {}) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Ensure parent has proper positioning for ScrollTrigger
    const parent = element.parentElement;
    if (parent) {
      const position = window.getComputedStyle(parent).position;
      if (position === 'static') {
        parent.style.position = 'relative';
      }
    }

    const animation = gsap.fromTo(
      element,
      {
        scale: options.from || 0.8,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: options.duration || 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      animation.kill();
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [options.from, options.duration]);

  return elementRef;
}

export { gsap, ScrollTrigger };