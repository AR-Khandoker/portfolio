import { useEffect, useRef, RefObject } from 'react';
import {
  animateChars,
  animateWords,
  animateLines,
  slideInChars,
  fadeInChars,
  blurInChars,
  dropWords,
  slideWords,
  scaleWords,
  flipLines,
  slideUpLines,
} from '../utils/textSplitAnimations';

/**
 * React Hooks for Text Split Animations on Scroll
 * Use these hooks for titles, headlines, and text throughout your portfolio
 */

/**
 * Character animations - Each letter animates individually
 */

// Slide in from right (typing effect)
export function useSlideInChars<T extends HTMLElement>(options: {
  stagger?: number;
  duration?: number;
  start?: string;
} = {}): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      animateChars(ref.current, {
        x: 150,
        opacity: 0,
        stagger: options.stagger || 0.04,
        duration: options.duration || 0.7,
        ease: 'power4',
        start: options.start,
      });
    }
  }, [options.stagger, options.duration, options.start]);

  return ref;
}

// Fade in from bottom
export function useFadeInChars<T extends HTMLElement>(options: {
  stagger?: number;
  duration?: number;
} = {}): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      fadeInChars(ref.current);
    }
  }, [options.stagger, options.duration]);

  return ref;
}

// Blur reveal effect
export function useBlurInChars<T extends HTMLElement>(): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      blurInChars(ref.current);
    }
  }, []);

  return ref;
}

/**
 * Word animations - Each word animates as a unit
 */

// Drop from top with random rotation
export function useDropWords<T extends HTMLElement>(options: {
  stagger?: number;
  duration?: number;
} = {}): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      animateWords(ref.current, {
        y: -100,
        opacity: 0,
        rotation: 'random(-80, 80)',
        stagger: options.stagger || 0.15,
        duration: options.duration || 0.7,
        ease: 'back',
      });
    }
  }, [options.stagger, options.duration]);

  return ref;
}

// Slide from left
export function useSlideWords<T extends HTMLElement>(options: {
  stagger?: number;
  duration?: number;
} = {}): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      slideWords(ref.current);
    }
  }, [options.stagger, options.duration]);

  return ref;
}

// Scale up from zero
export function useScaleWords<T extends HTMLElement>(options: {
  stagger?: number;
  duration?: number;
} = {}): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      scaleWords(ref.current);
    }
  }, [options.stagger, options.duration]);

  return ref;
}

/**
 * Line animations - Each line animates together
 */

// 3D flip effect
export function useFlipLines<T extends HTMLElement>(options: {
  stagger?: number;
  duration?: number;
} = {}): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      flipLines(ref.current);
    }
  }, [options.stagger, options.duration]);

  return ref;
}

// Slide up from bottom
export function useSlideUpLines<T extends HTMLElement>(options: {
  stagger?: number;
  duration?: number;
} = {}): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      slideUpLines(ref.current);
    }
  }, [options.stagger, options.duration]);

  return ref;
}

/**
 * Custom animations - Full control
 */

// Custom character animation
export function useCustomChars<T extends HTMLElement>(options: {
  x?: number;
  y?: number;
  opacity?: number;
  rotation?: number;
  stagger?: number;
  duration?: number;
  ease?: string;
  start?: string;
}): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      animateChars(ref.current, options);
    }
  }, [options]);

  return ref;
}

// Custom word animation
export function useCustomWords<T extends HTMLElement>(options: {
  x?: number;
  y?: number;
  opacity?: number;
  rotation?: string | number;
  stagger?: number;
  duration?: number;
  ease?: string;
  start?: string;
}): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      animateWords(ref.current, options);
    }
  }, [options]);

  return ref;
}

// Custom line animation
export function useCustomLines<T extends HTMLElement>(options: {
  rotationX?: number;
  rotationY?: number;
  opacity?: number;
  y?: number;
  stagger?: number;
  duration?: number;
  ease?: string;
  start?: string;
  transformOrigin?: string;
}): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      animateLines(ref.current, options);
    }
  }, [options]);

  return ref;
}

/**
 * Example Usage:
 * 
 * // Character animation (typing effect)
 * const titleRef = useSlideInChars();
 * <h1 ref={titleRef}>Animated Title</h1>
 * 
 * // Word animation (drop with rotation)
 * const headlineRef = useDropWords({ stagger: 0.2 });
 * <h2 ref={headlineRef}>Your Amazing Headline</h2>
 * 
 * // Line animation (3D flip)
 * const paragraphRef = useFlipLines();
 * <p ref={paragraphRef}>Multi-line text content</p>
 * 
 * // Custom animation
 * const customRef = useCustomChars({
 *   x: 100,
 *   y: -50,
 *   rotation: 45,
 *   stagger: 0.05,
 *   duration: 1,
 *   ease: 'elastic.out(1, 0.3)',
 * });
 * <h3 ref={customRef}>Custom Animation</h3>
 */

export {
  animateChars,
  animateWords,
  animateLines,
  slideInChars,
  fadeInChars,
  blurInChars,
  dropWords,
  slideWords,
  scaleWords,
  flipLines,
  slideUpLines,
};
