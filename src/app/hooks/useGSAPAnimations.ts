import { useEffect, useRef, RefObject } from 'react';
import {
  fadeSlideUp,
  parallax,
  scaleOnScroll,
  staggerReveal,
  textReveal,
  rotateOnScroll,
  clipPathReveal,
  imageReveal,
  animateCounter,
  pinElement,
} from '../utils/gsapAnimations';

/**
 * React Hooks for GSAP ScrollTrigger Animations
 * Simplify animation setup in React components
 */

/**
 * useFadeSlideUp - Fade and slide element on scroll
 */
export function useFadeSlideUp<T extends HTMLElement>(
  options: {
    delay?: number;
    duration?: number;
    y?: number;
    start?: string;
  } = {}
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      fadeSlideUp(ref.current, options);
    }
  }, [options.delay, options.duration, options.y, options.start]);

  return ref;
}

/**
 * useParallax - Parallax effect on scroll
 */
export function useParallax<T extends HTMLElement>(
  options: {
    speed?: number;
    direction?: 'up' | 'down';
  } = {}
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      parallax(ref.current, options);
    }
  }, [options.speed, options.direction]);

  return ref;
}

/**
 * useScaleOnScroll - Scale animation on scroll
 */
export function useScaleOnScroll<T extends HTMLElement>(
  options: {
    from?: number;
    to?: number;
    duration?: number;
  } = {}
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      scaleOnScroll(ref.current, options);
    }
  }, [options.from, options.to, options.duration]);

  return ref;
}

/**
 * useStaggerReveal - Stagger children animation
 */
export function useStaggerReveal<T extends HTMLElement>(
  options: {
    children?: string;
    stagger?: number;
    duration?: number;
    y?: number;
  } = {}
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      staggerReveal(ref.current, options);
    }
  }, [options.children, options.stagger, options.duration, options.y]);

  return ref;
}

/**
 * useTextReveal - Text reveal animation
 */
export function useTextReveal<T extends HTMLElement>(
  options: {
    splitBy?: 'words' | 'chars' | 'lines';
    stagger?: number;
    duration?: number;
  } = {}
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      textReveal(ref.current, options);
    }
  }, [options.splitBy, options.stagger, options.duration]);

  return ref;
}

/**
 * useRotateOnScroll - Rotation animation tied to scroll
 */
export function useRotateOnScroll<T extends HTMLElement>(
  options: {
    rotation?: number;
    scrub?: boolean | number;
  } = {}
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      rotateOnScroll(ref.current, options);
    }
  }, [options.rotation, options.scrub]);

  return ref;
}

/**
 * useClipPathReveal - Clip path reveal animation
 */
export function useClipPathReveal<T extends HTMLElement>(
  options: {
    direction?: 'left' | 'right' | 'top' | 'bottom';
    duration?: number;
  } = {}
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      clipPathReveal(ref.current, options);
    }
  }, [options.direction, options.duration]);

  return ref;
}

/**
 * useImageReveal - Image reveal with scale effect
 */
export function useImageReveal<T extends HTMLElement>(
  options: {
    scale?: number;
    duration?: number;
  } = {}
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      imageReveal(ref.current, options);
    }
  }, [options.scale, options.duration]);

  return ref;
}

/**
 * useCounter - Animated counter on scroll
 */
export function useCounter<T extends HTMLElement>(
  options: {
    start?: number;
    end: number;
    duration?: number;
    decimals?: number;
    suffix?: string;
  }
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      animateCounter(ref.current, options);
    }
  }, [options.start, options.end, options.duration, options.decimals, options.suffix]);

  return ref;
}

/**
 * usePinElement - Pin element on scroll
 */
export function usePinElement<T extends HTMLElement>(
  options: {
    start?: string;
    end?: string;
    pinSpacing?: boolean;
  } = {}
): RefObject<T> {
  const ref = useRef<T>(null);

  useEffect(() => {
    if (ref.current) {
      pinElement(ref.current, options);
    }
  }, [options.start, options.end, options.pinSpacing]);

  return ref;
}

/**
 * Example Usage:
 * 
 * function MyComponent() {
 *   const heroRef = useFadeSlideUp({ duration: 1.5, y: 100 });
 *   const cardsRef = useStaggerReveal({ children: '.card', stagger: 0.15 });
 *   const counterRef = useCounter({ start: 0, end: 150, suffix: '+' });
 * 
 *   return (
 *     <div>
 *       <div ref={heroRef}>Hero Section</div>
 *       <div ref={cardsRef}>
 *         <div className="card">Card 1</div>
 *         <div className="card">Card 2</div>
 *       </div>
 *       <div ref={counterRef}>0</div>
 *     </div>
 *   );
 * }
 */

export {
  fadeSlideUp,
  parallax,
  scaleOnScroll,
  staggerReveal,
  textReveal,
  rotateOnScroll,
  clipPathReveal,
  imageReveal,
  animateCounter,
  pinElement,
};
