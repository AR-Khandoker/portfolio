import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Advanced Text Split Animations for Scroll Trigger
 * Free alternative to GSAP SplitText plugin
 * Animates characters, words, and lines on scroll
 */

/**
 * Split text into characters, words, or lines
 */
export function splitText(element: HTMLElement, type: 'chars' | 'words' | 'lines' | 'all') {
  const text = element.textContent || '';
  
  if (type === 'chars') {
    return splitIntoChars(element, text);
  } else if (type === 'words') {
    return splitIntoWords(element, text);
  } else if (type === 'lines') {
    return splitIntoLines(element, text);
  } else if (type === 'all') {
    return splitIntoAll(element, text);
  }
}

function splitIntoChars(element: HTMLElement, text: string) {
  const chars = text.split('');
  element.innerHTML = chars
    .map(char => {
      if (char === ' ') return '<span class="char-space"> </span>';
      return `<span class="char inline-block" style="display: inline-block;">${char}</span>`;
    })
    .join('');
  return element.querySelectorAll('.char');
}

function splitIntoWords(element: HTMLElement, text: string) {
  const words = text.split(' ');
  element.innerHTML = words
    .map(word => `<span class="word inline-block" style="display: inline-block;">${word}</span>`)
    .join(' ');
  return element.querySelectorAll('.word');
}

function splitIntoLines(element: HTMLElement, text: string) {
  const words = text.split(' ');
  element.innerHTML = words
    .map(word => `<span style="display: inline-block;">${word}</span>`)
    .join(' ');
  
  // Group words into lines based on their Y position
  const spans = Array.from(element.querySelectorAll('span'));
  const lines: HTMLElement[][] = [];
  let currentLine: HTMLElement[] = [];
  let currentY = -1;
  
  spans.forEach((span) => {
    const rect = span.getBoundingClientRect();
    if (currentY === -1) {
      currentY = rect.top;
    }
    
    if (Math.abs(rect.top - currentY) < 5) {
      currentLine.push(span as HTMLElement);
    } else {
      if (currentLine.length > 0) {
        lines.push([...currentLine]);
      }
      currentLine = [span as HTMLElement];
      currentY = rect.top;
    }
  });
  
  if (currentLine.length > 0) {
    lines.push(currentLine);
  }
  
  // Wrap each line in a container
  element.innerHTML = '';
  lines.forEach(lineSpans => {
    const lineDiv = document.createElement('div');
    lineDiv.className = 'line';
    lineDiv.style.overflow = 'hidden';
    lineSpans.forEach(span => {
      lineDiv.appendChild(span);
      lineDiv.appendChild(document.createTextNode(' '));
    });
    element.appendChild(lineDiv);
  });
  
  return element.querySelectorAll('.line');
}

function splitIntoAll(element: HTMLElement, text: string) {
  // Split into words first, then chars within each word
  const words = text.split(' ');
  element.innerHTML = words
    .map(word => {
      const chars = word.split('').map(char => 
        `<span class="char inline-block" style="display: inline-block;">${char}</span>`
      ).join('');
      return `<span class="word inline-block" style="display: inline-block;">${chars}</span>`;
    })
    .join(' ');
  
  return {
    words: element.querySelectorAll('.word'),
    chars: element.querySelectorAll('.char'),
  };
}

/**
 * Character Animation - Slide from right with fade
 */
export function animateChars(element: HTMLElement | string, options: {
  x?: number;
  y?: number;
  opacity?: number;
  rotation?: number;
  stagger?: number;
  duration?: number;
  ease?: string;
  start?: string;
  scrub?: boolean | number;
} = {}) {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  
  // Ensure parent has proper positioning for ScrollTrigger
  const parent = el.parentElement;
  if (parent) {
    const position = window.getComputedStyle(parent).position;
    if (position === 'static') {
      parent.style.position = 'relative';
    }
  }
  
  const chars = splitIntoChars(el as HTMLElement, el.textContent || '');
  
  return gsap.from(chars, {
    x: options.x !== undefined ? options.x : 150,
    y: options.y || 0,
    opacity: options.opacity !== undefined ? options.opacity : 0,
    rotation: options.rotation || 0,
    duration: options.duration || 0.7,
    ease: options.ease || 'power4',
    stagger: options.stagger || 0.04,
    scrollTrigger: {
      trigger: el,
      start: options.start || 'top 85%',
      toggleActions: 'play none none reverse',
      scrub: options.scrub || false,
    },
  });
}

/**
 * Word Animation - Drop from top with rotation
 */
export function animateWords(element: HTMLElement | string, options: {
  x?: number;
  y?: number;
  opacity?: number;
  rotation?: string | number;
  stagger?: number;
  duration?: number;
  ease?: string;
  start?: string;
  scrub?: boolean | number;
} = {}) {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  
  // Ensure parent has proper positioning for ScrollTrigger
  const parent = el.parentElement;
  if (parent) {
    const position = window.getComputedStyle(parent).position;
    if (position === 'static') {
      parent.style.position = 'relative';
    }
  }
  
  const words = splitIntoWords(el as HTMLElement, el.textContent || '');
  
  return gsap.from(words, {
    x: options.x || 0,
    y: options.y !== undefined ? options.y : -100,
    opacity: options.opacity !== undefined ? options.opacity : 0,
    rotation: options.rotation || 'random(-80, 80)',
    duration: options.duration || 0.7,
    ease: options.ease || 'back',
    stagger: options.stagger || 0.15,
    scrollTrigger: {
      trigger: el,
      start: options.start || 'top 85%',
      toggleActions: 'play none none reverse',
      scrub: options.scrub || false,
    },
  });
}

/**
 * Line Animation - 3D rotation reveal
 */
export function animateLines(element: HTMLElement | string, options: {
  rotationX?: number;
  rotationY?: number;
  opacity?: number;
  y?: number;
  stagger?: number;
  duration?: number;
  ease?: string;
  start?: string;
  transformOrigin?: string;
  scrub?: boolean | number;
} = {}) {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  
  // Ensure parent has proper positioning for ScrollTrigger
  const parent = el.parentElement;
  if (parent) {
    const position = window.getComputedStyle(parent).position;
    if (position === 'static') {
      parent.style.position = 'relative';
    }
  }
  
  const lines = splitIntoLines(el as HTMLElement, el.textContent || '');
  
  return gsap.from(lines, {
    rotationX: options.rotationX !== undefined ? options.rotationX : -100,
    rotationY: options.rotationY || 0,
    y: options.y || 0,
    transformOrigin: options.transformOrigin || '50% 50% -160px',
    opacity: options.opacity !== undefined ? options.opacity : 0,
    duration: options.duration || 0.8,
    ease: options.ease || 'power3',
    stagger: options.stagger || 0.25,
    scrollTrigger: {
      trigger: el,
      start: options.start || 'top 85%',
      toggleActions: 'play none none reverse',
      scrub: options.scrub || false,
    },
  });
}

/**
 * Preset Animation Styles for Quick Use
 */

// Slide in from right (like typing)
export function slideInChars(element: HTMLElement | string) {
  return animateChars(element, {
    x: 150,
    opacity: 0,
    stagger: 0.04,
    duration: 0.7,
    ease: 'power4',
  });
}

// Fade in from bottom
export function fadeInChars(element: HTMLElement | string) {
  return animateChars(element, {
    y: 50,
    opacity: 0,
    stagger: 0.02,
    duration: 0.6,
    ease: 'power3.out',
  });
}

// Blur in effect
export function blurInChars(element: HTMLElement | string) {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  
  const chars = splitIntoChars(el as HTMLElement, el.textContent || '');
  
  return gsap.from(chars, {
    opacity: 0,
    filter: 'blur(10px)',
    duration: 0.8,
    ease: 'power2.out',
    stagger: 0.03,
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  });
}

// Words drop with rotation
export function dropWords(element: HTMLElement | string) {
  return animateWords(element, {
    y: -100,
    opacity: 0,
    rotation: 'random(-80, 80)',
    stagger: 0.15,
    duration: 0.7,
    ease: 'back',
  });
}

// Words slide from left
export function slideWords(element: HTMLElement | string) {
  return animateWords(element, {
    x: -100,
    opacity: 0,
    rotation: 0,
    stagger: 0.1,
    duration: 0.6,
    ease: 'power3.out',
  });
}

// Words scale up
export function scaleWords(element: HTMLElement | string) {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  
  const words = splitIntoWords(el as HTMLElement, el.textContent || '');
  
  return gsap.from(words, {
    scale: 0,
    opacity: 0,
    duration: 0.6,
    ease: 'back.out(1.7)',
    stagger: 0.1,
    scrollTrigger: {
      trigger: el,
      start: 'top 85%',
      toggleActions: 'play none none reverse',
    },
  });
}

// 3D flip lines
export function flipLines(element: HTMLElement | string) {
  return animateLines(element, {
    rotationX: -100,
    opacity: 0,
    stagger: 0.25,
    duration: 0.8,
    ease: 'power3',
    transformOrigin: '50% 50% -160px',
  });
}

// Lines slide up
export function slideUpLines(element: HTMLElement | string) {
  return animateLines(element, {
    y: 100,
    rotationX: 0,
    opacity: 0,
    stagger: 0.2,
    duration: 0.8,
    ease: 'power3.out',
    transformOrigin: '50% 50%',
  });
}

/**
 * Auto-detect and animate all titles on a page
 */
export function animateAllTitles(options: {
  selector?: string;
  animation?: 'chars' | 'words' | 'lines';
  style?: 'slide' | 'fade' | 'drop' | 'flip' | 'scale' | 'blur';
} = {}) {
  const selector = options.selector || 'h1, h2, h3';
  const animation = options.animation || 'chars';
  const style = options.style || 'slide';
  
  const titles = document.querySelectorAll(selector);
  
  titles.forEach((title) => {
    if (animation === 'chars') {
      if (style === 'slide') slideInChars(title as HTMLElement);
      else if (style === 'fade') fadeInChars(title as HTMLElement);
      else if (style === 'blur') blurInChars(title as HTMLElement);
    } else if (animation === 'words') {
      if (style === 'drop') dropWords(title as HTMLElement);
      else if (style === 'slide') slideWords(title as HTMLElement);
      else if (style === 'scale') scaleWords(title as HTMLElement);
    } else if (animation === 'lines') {
      if (style === 'flip') flipLines(title as HTMLElement);
      else if (style === 'slide') slideUpLines(title as HTMLElement);
    }
  });
}

export { gsap, ScrollTrigger };