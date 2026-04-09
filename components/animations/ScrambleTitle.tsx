import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { useLoaderComplete } from '../../contexts/LoaderContext';

interface ScrambleTitleProps {
  className?: string;
}

const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*';

export function ScrambleTitle({ className = '' }: ScrambleTitleProps) {
  const containerRef = useRef<HTMLHeadingElement>(null);
  const { isLoaderComplete } = useLoaderComplete();

  useEffect(() => {
    // Wait for loader to complete before animating
    if (!isLoaderComplete || !containerRef.current) return;

    const container = containerRef.current;
    const part1 = container.querySelector('.part-1');
    const part2 = container.querySelector('.part-2') as HTMLElement | null;

    if (!part1 || !part2) return;

    // Ensure parent has proper positioning for GSAP animations
    const parent = container.parentElement;
    if (parent) {
      const position = window.getComputedStyle(parent).position;
      if (position === 'static') {
        parent.style.position = 'relative';
      }
    }

    // Also ensure container itself has relative positioning
    const containerPosition = window.getComputedStyle(container).position;
    if (containerPosition === 'static') {
      container.style.position = 'relative';
    }

    const text1 = 'Designing for';
    const text2 = 'Humans.';

    // Split "Designing for" into character spans
    part1.innerHTML = text1
      .split('')
      .map((char) => {
        return `<span class="inline-block" style="opacity: 0; transform: translateY(20px)">${char === ' ' ? '&nbsp;' : char}</span>`;
      })
      .join('');

    // Create scramble container for "Humans." — hidden until part-1 finishes
    part2.innerHTML = `<span class="scramble-text inline-block" style="opacity: 0;">&nbsp;</span>`;

    const chars1 = part1.querySelectorAll('span');
    const scrambleEl = part2.querySelector('.scramble-text') as HTMLElement;

    // Animate "Designing for" character by character
    gsap.to(chars1, {
      opacity: 1,
      y: 0,
      duration: 0.4,
      stagger: 0.04,
      ease: 'power3.out',
      delay: 0.2,
      onComplete: () => {
        // After character animation finishes, reveal & scramble "Humans."
        if (scrambleEl) {
          // Fade in the element, then start scramble
          gsap.to(scrambleEl, {
            opacity: 1,
            duration: 0.15,
            ease: 'power2.out',
            onComplete: () => {
              startScrambleAnimation(scrambleEl, text2);
            },
          });
        }
      },
    });
  }, [isLoaderComplete]);

  const startScrambleAnimation = (element: HTMLElement, finalText: string) => {
    const duration = 1.0; // Reduced from 1.5 for faster animation
    const iterations = 25; // Reduced from 30 for better performance
    let frame = 0;

    const scrambleInterval = setInterval(() => {
      if (frame >= iterations) {
        clearInterval(scrambleInterval);
        element.textContent = finalText;
        return;
      }

      // Calculate how many characters should be "resolved" based on progress
      const progress = frame / iterations;
      const resolvedCount = Math.floor(progress * finalText.length);

      // Build the text: resolved characters + scrambled remaining
      let scrambledText = '';
      for (let i = 0; i < finalText.length; i++) {
        if (i < resolvedCount) {
          // This character is resolved
          scrambledText += finalText[i];
        } else {
          // This character is still scrambling
          scrambledText += chars[Math.floor(Math.random() * chars.length)];
        }
      }

      element.textContent = scrambledText;
      frame++;
    }, (duration * 1000) / iterations);
  };

  return (
    <h1 ref={containerRef} className={className}>
      <span className="part-1"></span>
      <br />
      <span className="part-2 text-transparent bg-clip-text bg-gradient-to-r from-black via-black to-secondary"></span>
    </h1>
  );
}