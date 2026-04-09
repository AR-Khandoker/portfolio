import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Advanced GSAP ScrollTrigger Animation Utilities
 * Premium scroll-driven effects for award-winning websites
 */

/**
 * Fade and Slide Up - Classic entrance animation
 */
export function fadeSlideUp(element: HTMLElement | string, options: {
  delay?: number;
  duration?: number;
  y?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
} = {}) {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;
  
  // Ensure parent has proper positioning for ScrollTrigger
  const parent = (el as HTMLElement).parentElement;
  if (parent) {
    const position = window.getComputedStyle(parent).position;
    if (position === 'static') {
      parent.style.position = 'relative';
    }
  }
  
  return gsap.fromTo(
    element,
    {
      opacity: 0,
      y: options.y || 80,
    },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 1.2,
      delay: options.delay || 0,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: options.start || 'top 85%',
        end: options.end || 'top 60%',
        scrub: options.scrub || false,
        toggleActions: 'play none none reverse',
      },
    }
  );
}

/**
 * Parallax Effect - Smooth depth-based movement
 */
export function parallax(element: HTMLElement | string, options: {
  speed?: number;
  direction?: 'up' | 'down';
  start?: string;
  end?: string;
} = {}) {
  const speed = options.speed || 100;
  const yMovement = options.direction === 'up' ? -speed : speed;

  return gsap.to(element, {
    y: yMovement,
    ease: 'none',
    scrollTrigger: {
      trigger: element,
      start: options.start || 'top bottom',
      end: options.end || 'bottom top',
      scrub: 1,
    },
  });
}

/**
 * Pin Element - Sticky scroll effect
 */
export function pinElement(element: HTMLElement | string, options: {
  start?: string;
  end?: string;
  pinSpacing?: boolean;
  scrub?: boolean | number;
} = {}) {
  return ScrollTrigger.create({
    trigger: element,
    start: options.start || 'top top',
    end: options.end || 'bottom top',
    pin: true,
    pinSpacing: options.pinSpacing !== false,
    scrub: options.scrub || false,
  });
}

/**
 * Horizontal Scroll - Premium gallery effect
 */
export function horizontalScroll(container: HTMLElement | string, options: {
  items?: HTMLElement[] | NodeListOf<HTMLElement>;
  start?: string;
  end?: string;
  scrub?: boolean | number;
} = {}) {
  const wrapper = typeof container === 'string' ? document.querySelector(container) : container;
  if (!wrapper) return;

  const items = options.items || wrapper.querySelectorAll(':scope > *');
  const totalWidth = Array.from(items).reduce((acc, item) => acc + (item as HTMLElement).offsetWidth, 0);

  return gsap.to(items, {
    x: () => -(totalWidth - window.innerWidth),
    ease: 'none',
    scrollTrigger: {
      trigger: wrapper,
      start: options.start || 'top top',
      end: options.end || `+=${totalWidth}`,
      scrub: options.scrub !== false ? 1 : false,
      pin: true,
      anticipatePin: 1,
    },
  });
}

/**
 * Scale on Scroll - Zoom in/out effect
 */
export function scaleOnScroll(element: HTMLElement | string, options: {
  from?: number;
  to?: number;
  duration?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
} = {}) {
  return gsap.fromTo(
    element,
    {
      scale: options.from || 0.8,
      opacity: 0,
    },
    {
      scale: options.to || 1,
      opacity: 1,
      duration: options.duration || 1.2,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: element,
        start: options.start || 'top 85%',
        end: options.end || 'top 50%',
        scrub: options.scrub || false,
        toggleActions: 'play none none reverse',
      },
    }
  );
}

/**
 * Rotate on Scroll - Dynamic rotation effect
 */
export function rotateOnScroll(element: HTMLElement | string, options: {
  rotation?: number;
  duration?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
} = {}) {
  return gsap.fromTo(
    element,
    {
      rotation: 0,
    },
    {
      rotation: options.rotation || 360,
      duration: options.duration || 2,
      ease: 'none',
      scrollTrigger: {
        trigger: element,
        start: options.start || 'top bottom',
        end: options.end || 'bottom top',
        scrub: options.scrub !== false ? 1 : false,
      },
    }
  );
}

/**
 * Stagger Children - Sequential reveal
 */
export function staggerReveal(container: HTMLElement | string, options: {
  children?: string;
  stagger?: number;
  duration?: number;
  y?: number;
  start?: string;
} = {}) {
  const wrapper = typeof container === 'string' ? document.querySelector(container) : container;
  if (!wrapper) return;

  const items = options.children ? wrapper.querySelectorAll(options.children) : wrapper.children;

  return gsap.fromTo(
    items,
    {
      opacity: 0,
      y: options.y || 50,
    },
    {
      opacity: 1,
      y: 0,
      duration: options.duration || 0.8,
      stagger: options.stagger || 0.1,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: wrapper,
        start: options.start || 'top 80%',
        toggleActions: 'play none none reverse',
      },
    }
  );
}

/**
 * Text Reveal - Character-by-character animation
 */
export function textReveal(element: HTMLElement | string, options: {
  splitBy?: 'words' | 'chars' | 'lines';
  stagger?: number;
  duration?: number;
  start?: string;
} = {}) {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  const text = el.textContent || '';
  const splitBy = options.splitBy || 'words';
  const stagger = options.stagger || 0.03;

  // Split text into spans
  const parts = splitBy === 'words' 
    ? text.split(' ') 
    : splitBy === 'chars' 
    ? text.split('') 
    : text.split('\n');

  el.innerHTML = parts
    .map(part => {
      const space = splitBy === 'words' ? '&nbsp;' : '';
      return `<span class="inline-block overflow-hidden"><span class="inline-block">${part}${space}</span></span>`;
    })
    .join('');

  const spans = el.querySelectorAll('span > span');

  return gsap.fromTo(
    spans,
    {
      y: '100%',
      opacity: 0,
    },
    {
      y: '0%',
      opacity: 1,
      duration: options.duration || 0.8,
      stagger: stagger,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: el,
        start: options.start || 'top 80%',
        toggleActions: 'play none none none',
      },
    }
  );
}

/**
 * Clip Path Reveal - Modern wipe effect
 */
export function clipPathReveal(element: HTMLElement | string, options: {
  direction?: 'left' | 'right' | 'top' | 'bottom';
  duration?: number;
  start?: string;
  end?: string;
  scrub?: boolean | number;
} = {}) {
  const clipPaths = {
    left: { from: 'inset(0 100% 0 0)', to: 'inset(0 0% 0 0)' },
    right: { from: 'inset(0 0 0 100%)', to: 'inset(0 0 0 0%)' },
    top: { from: 'inset(100% 0 0 0)', to: 'inset(0% 0 0 0)' },
    bottom: { from: 'inset(0 0 100% 0)', to: 'inset(0 0 0% 0)' },
  };

  const direction = options.direction || 'left';
  const { from, to } = clipPaths[direction];

  return gsap.fromTo(
    element,
    {
      clipPath: from,
    },
    {
      clipPath: to,
      duration: options.duration || 1.5,
      ease: 'power3.inOut',
      scrollTrigger: {
        trigger: element,
        start: options.start || 'top 80%',
        end: options.end || 'top 50%',
        scrub: options.scrub || false,
        toggleActions: 'play none none reverse',
      },
    }
  );
}

/**
 * Smooth Counter Animation
 */
export function animateCounter(element: HTMLElement | string, options: {
  start?: number;
  end: number;
  duration?: number;
  decimals?: number;
  suffix?: string;
  scrollStart?: string;
} = {}) {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  const obj = { value: options.start || 0 };

  return gsap.to(obj, {
    value: options.end,
    duration: options.duration || 2,
    ease: 'power2.out',
    scrollTrigger: {
      trigger: el,
      start: options.scrollStart || 'top 80%',
      toggleActions: 'play none none none',
    },
    onUpdate: () => {
      const decimals = options.decimals || 0;
      const suffix = options.suffix || '';
      el.textContent = obj.value.toFixed(decimals) + suffix;
    },
  });
}

/**
 * Image Reveal with Scale
 */
export function imageReveal(element: HTMLElement | string, options: {
  scale?: number;
  duration?: number;
  start?: string;
  end?: string;
} = {}) {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  const img = el.querySelector('img') || el;

  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: el,
      start: options.start || 'top 85%',
      end: options.end || 'top 50%',
      toggleActions: 'play none none reverse',
    },
  });

  tl.fromTo(
    el,
    { clipPath: 'inset(100% 0 0 0)' },
    { clipPath: 'inset(0% 0 0 0)', duration: options.duration || 1.2, ease: 'power3.out' }
  ).fromTo(
    img,
    { scale: options.scale || 1.3 },
    { scale: 1, duration: options.duration || 1.2, ease: 'power3.out' },
    0
  );

  return tl;
}

/**
 * Batch Animations - Optimize multiple similar elements
 */
export function batchAnimate(selector: string, options: {
  animation?: 'fade' | 'slide' | 'scale';
  stagger?: number;
  start?: string;
} = {}) {
  ScrollTrigger.batch(selector, {
    onEnter: (batch) => {
      const animation = options.animation || 'fade';
      
      if (animation === 'fade') {
        gsap.fromTo(batch, { opacity: 0, y: 50 }, { opacity: 1, y: 0, stagger: options.stagger || 0.1 });
      } else if (animation === 'slide') {
        gsap.fromTo(batch, { x: -100, opacity: 0 }, { x: 0, opacity: 1, stagger: options.stagger || 0.1 });
      } else if (animation === 'scale') {
        gsap.fromTo(batch, { scale: 0.8, opacity: 0 }, { scale: 1, opacity: 1, stagger: options.stagger || 0.1 });
      }
    },
    start: options.start || 'top 85%',
  });
}

export { gsap, ScrollTrigger };