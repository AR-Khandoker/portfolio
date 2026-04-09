import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import {
  useSlideInChars,
  useDropWords,
  useSlideWords,
} from '../../hooks/useTextSplitAnimations';
import { useFadeSlideUp, useStaggerReveal } from '../../hooks/useGSAPAnimations';

/**
 * Real Portfolio Sections with Text Split Animations
 * Copy these patterns to your existing pages
 */

/**
 * EXAMPLE 1: Hero Section with Character Animation
 */
export function HeroWithTextSplit() {
  const titleRef = useSlideInChars({ stagger: 0.03, duration: 0.8 });
  const subtitleRef = useDropWords({ stagger: 0.1 });
  const ctaRef = useFadeSlideUp({ delay: 0.8, y: 40 });

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white to-purple-50 px-6">
      <div className="max-w-5xl text-center">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl lg:text-9xl font-bold text-black mb-8 tracking-tight"
        >
          A R Khandoker
        </h1>
        <h2 
          ref={subtitleRef}
          className="text-2xl md:text-4xl text-black/70 mb-12 font-light"
        >
          UI/UX Designer & Product Strategist
        </h2>
        <div ref={ctaRef}>
          <Link
            to="/work"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-purple-500 transition-colors group"
          >
            <span className="font-medium">View My Work</span>
            <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
}

/**
 * EXAMPLE 2: About Section with Multiple Text Animations
 */
export function AboutWithTextSplit() {
  const headlineRef = useSlideInChars({ stagger: 0.04 });
  const subheadRef = useSlideWords();
  const statsRef = useStaggerReveal({ stagger: 0.15 });

  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="text-center mb-20">
          <h2 
            ref={headlineRef}
            className="text-5xl md:text-7xl font-bold text-black mb-6"
          >
            Design that makes a difference
          </h2>
          <p 
            ref={subheadRef}
            className="text-xl md:text-2xl text-black/60 max-w-3xl mx-auto"
          >
            Crafting digital experiences with purpose and precision
          </p>
        </div>

        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <StatCard number="98+" label="Projects" />
          <StatCard number="12+" label="Products" />
          <StatCard number="50+" label="Clients" />
          <StatCard number="5+" label="Years" />
        </div>
      </div>
    </section>
  );
}

function StatCard({ number, label }: { number: string; label: string }) {
  return (
    <div className="text-center">
      <div className="text-4xl md:text-5xl font-bold text-purple-500 mb-2">
        {number}
      </div>
      <div className="text-sm text-black/60 uppercase tracking-wide">
        {label}
      </div>
    </div>
  );
}

/**
 * EXAMPLE 3: Services Section with Word Animations
 */
export function ServicesWithTextSplit() {
  const titleRef = useDropWords({ stagger: 0.12 });
  const cardsRef = useStaggerReveal({ stagger: 0.2 });

  const services = [
    {
      title: 'UI/UX Design',
      description: 'Beautiful interfaces that users love',
      icon: '🎨',
    },
    {
      title: 'Product Strategy',
      description: 'Strategic thinking for digital products',
      icon: '🎯',
    },
    {
      title: 'Design Systems',
      description: 'Scalable design foundations',
      icon: '📐',
    },
    {
      title: 'Prototyping',
      description: 'Interactive prototypes that feel real',
      icon: '⚡',
    },
  ];

  return (
    <section className="py-32 bg-[#FAFAFA]">
      <div className="container mx-auto px-6 max-w-6xl">
        <h2 
          ref={titleRef}
          className="text-5xl md:text-7xl font-bold text-black text-center mb-20"
        >
          What I Do Best
        </h2>

        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ title, description, icon }: {
  title: string;
  description: string;
  icon: string;
}) {
  const titleRef = useSlideInChars({ stagger: 0.03, duration: 0.6 });

  return (
    <div className="bg-white p-8 rounded-2xl border border-black/5 hover:border-purple-500/50 hover:shadow-xl transition-all group">
      <div className="text-5xl mb-6 group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 
        ref={titleRef}
        className="text-2xl font-bold text-black mb-3"
      >
        {title}
      </h3>
      <p className="text-black/60">
        {description}
      </p>
    </div>
  );
}

/**
 * EXAMPLE 4: Work Page Header with Text Animation
 */
export function WorkHeaderWithTextSplit() {
  const titleRef = useSlideInChars({ stagger: 0.02 });
  const descRef = useSlideWords({ stagger: 0.08 });

  return (
    <section className="pt-32 pb-20 bg-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h1 
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold text-black mb-8"
        >
          Selected Work
        </h1>
        <p 
          ref={descRef}
          className="text-xl md:text-2xl text-black/60"
        >
          A collection of projects that showcase design thinking and craft
        </p>
      </div>
    </section>
  );
}

/**
 * EXAMPLE 5: Contact Section with Animation
 */
export function ContactWithTextSplit() {
  const headlineRef = useSlideInChars({ stagger: 0.03 });
  const subheadRef = useDropWords({ stagger: 0.1 });

  return (
    <section className="py-32 bg-black text-white">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 
          ref={headlineRef}
          className="text-5xl md:text-7xl font-bold mb-8"
        >
          Let's Create Something Amazing
        </h2>
        <p 
          ref={subheadRef}
          className="text-xl md:text-2xl text-white/70 mb-12"
        >
          Ready to bring your vision to life
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 bg-purple-500 text-white px-8 py-4 rounded-full hover:bg-purple-600 transition-colors group"
        >
          <span className="font-medium">Get In Touch</span>
          <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
        </Link>
      </div>
    </section>
  );
}

/**
 * HOW TO USE IN YOUR EXISTING PAGES:
 * 
 * 1. Import the hook at the top:
 *    import { useSlideInChars } from '../hooks/useTextSplitAnimations';
 * 
 * 2. Create a ref in your component:
 *    const titleRef = useSlideInChars();
 * 
 * 3. Attach to your heading:
 *    <h1 ref={titleRef}>Your Title</h1>
 * 
 * That's it! The title will animate on scroll automatically.
 */

export {
  HeroWithTextSplit,
  AboutWithTextSplit,
  ServicesWithTextSplit,
  WorkHeaderWithTextSplit,
  ContactWithTextSplit,
};
