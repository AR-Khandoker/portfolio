import { useEffect } from 'react';
import Lenis from 'lenis';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

/**
 * Initialises Lenis smooth scroll + GSAP ScrollTrigger.
 *
 * Scroll-limit fix (the root cause of the WorkPage freeze):
 * Lenis caches document height at init time. Async content (project grid)
 * makes the page taller AFTER init, so Lenis refused further scroll.
 * We now update the limit via three complementary mechanisms:
 *   1. ResizeObserver on <html> — fires when content height changes
 *   2. 400 ms height-poll setInterval as a failsafe
 *   3. Custom event 'portfolio:content-loaded' dispatched by pages
 *      that load async data (WorkPage does this after useProjects resolves)
 */
export function useLenis() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    // Keep GSAP ScrollTrigger positions in sync with Lenis scroll position
    lenis.on('scroll', ScrollTrigger.update);

    // Drive Lenis from GSAP ticker — stored reference so we can remove it cleanly
    const onTick = (time: number) => lenis.raf(time * 1000);
    gsap.ticker.add(onTick);

    // GSAP global defaults
    gsap.defaults({ ease: 'power3.out', duration: 0.8 });
    ScrollTrigger.defaults({
      markers: false,
      toggleActions: 'play none none none',
      scroller: window,
    });

    // ── Scroll-limit update helpers ────────────────────────────────────────
    const refresh = () => {
      lenis.resize();
      ScrollTrigger.refresh();
    };

    // 1. ResizeObserver on <html>
    const ro = new ResizeObserver(refresh);
    ro.observe(document.documentElement);

    // 2. Height-poll failsafe
    let lastH = document.documentElement.scrollHeight;
    const poll = setInterval(() => {
      const h = document.documentElement.scrollHeight;
      if (h !== lastH) { lastH = h; refresh(); }
    }, 400);

    // 3. Custom event fired by WorkPage after async project load
    window.addEventListener('portfolio:content-loaded', refresh);
    window.addEventListener('resize', refresh);

    return () => {
      ro.disconnect();
      clearInterval(poll);
      lenis.destroy();
      gsap.ticker.remove(onTick);
      window.removeEventListener('portfolio:content-loaded', refresh);
      window.removeEventListener('resize', refresh);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);
}
