import React, { useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const clients = [
  "Google", "Spotify", "Airbnb", "Stripe", "Uber", "Netflix", "Adobe", "Figma", "Shopify"
];

export function ClientMarquee() {
  const containerRef = useRef<HTMLDivElement>(null);
  const marqueeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const marquee = marqueeRef.current;
    
    if (!container || !marquee) return;

    // Ensure parent has proper positioning for ScrollTrigger
    const parent = container.parentElement;
    if (parent) {
      const position = window.getComputedStyle(parent).position;
      if (position === 'static') {
        parent.style.position = 'relative';
      }
    }

    // Optimized: Faster fade in animation
    gsap.fromTo(
      container,
      {
        opacity: 0,
        y: 60,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8, // Reduced from 1.2
        ease: 'power3.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 85%',
          end: 'top 65%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    // Stagger animation for individual client names
    const clientElements = marquee.querySelectorAll('span');
    gsap.fromTo(
      clientElements,
      {
        opacity: 0,
        y: 20,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6, // Reduced from 0.8
        stagger: 0.04, // Reduced from 0.05
        ease: 'power2.out',
        scrollTrigger: {
          trigger: container,
          start: 'top 80%',
          toggleActions: 'play none none reverse',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => {
        if (trigger.vars.trigger === container) {
          trigger.kill();
        }
      });
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative py-12 bg-white border-y border-black/5 overflow-hidden"
    >
      <div className="flex relative">
        <motion.div 
          ref={marqueeRef}
          className="flex gap-16 whitespace-nowrap px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <span key={`${client}-${i}`} className="text-2xl md:text-3xl font-bold text-black/20 uppercase tracking-tighter">
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}