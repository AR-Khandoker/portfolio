import React, { useRef, useEffect, ReactNode } from 'react';
import { useFadeIn, useStaggerReveal, useTextReveal, useScaleIn } from '../../hooks/useScrollAnimation';

interface AnimatedSectionProps {
  children: ReactNode;
  animation?: 'fade' | 'stagger' | 'scale' | 'none';
  className?: string;
  delay?: number;
  duration?: number;
  stagger?: number;
}

/**
 * Animated Section Component
 * Wraps content with GSAP scroll-triggered animations
 */
export function AnimatedSection({
  children,
  animation = 'fade',
  className = '',
  delay = 0,
  duration = 0.8, // Reduced default from 1
  stagger = 0.08, // Reduced default from 0.1
}: AnimatedSectionProps) {
  const fadeRef = useFadeIn({ delay, duration });
  const staggerRef = useStaggerReveal({ stagger, duration });
  const scaleRef = useScaleIn({ duration });

  // Select the appropriate ref based on animation type
  let ref;
  switch (animation) {
    case 'stagger':
      ref = staggerRef;
      break;
    case 'scale':
      ref = scaleRef;
      break;
    case 'fade':
      ref = fadeRef;
      break;
    case 'none':
    default:
      ref = useRef(null);
  }

  // Ensure parent has proper positioning for ScrollTrigger
  useEffect(() => {
    if (animation === 'none') return;
    
    const element = ref.current;
    if (!element) return;
    
    const parent = element.parentElement;
    if (parent) {
      const position = window.getComputedStyle(parent).position;
      if (position === 'static') {
        parent.style.position = 'relative';
      }
    }
  }, [animation]); // Removed 'ref' from dependencies

  return (
    <div ref={ref as any} className={`relative ${className}`}>
      {children}
    </div>
  );
}

interface AnimatedTextProps {
  children: ReactNode;
  splitBy?: 'words' | 'chars';
  stagger?: number;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
}

/**
 * Animated Text Component
 * Splits text and animates each word/character on scroll
 */
export function AnimatedText({
  children,
  splitBy = 'words',
  stagger = 0.025, // Reduced from 0.03 for faster animation
  className = '',
  as: Component = 'p',
}: AnimatedTextProps) {
  const textRef = useTextReveal({ splitBy, stagger });

  return (
    <Component ref={textRef as any} className={className}>
      {children}
    </Component>
  );
}