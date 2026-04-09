import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import {
  useFadeSlideUp,
  useStaggerReveal,
  useTextReveal,
  useImageReveal,
  useCounter,
  useParallax,
} from '../../hooks/useGSAPAnimations';

/**
 * Real-world example: Enhanced About Section
 * Demonstrates multiple GSAP ScrollTrigger animations working together
 */
export function EnhancedAboutSection() {
  // Using hooks for simple animations
  const parallaxBgRef = useParallax({ speed: 80, direction: 'down' });
  const headlineRef = useTextReveal({ splitBy: 'words', stagger: 0.05 });
  const imageRef = useImageReveal({ scale: 1.2, duration: 1.4 });
  const statsRef = useStaggerReveal({ stagger: 0.15, duration: 0.8 });
  const ctaRef = useFadeSlideUp({ delay: 0.3, y: 40 });
  
  // Counter refs
  const projectsCounterRef = useCounter({ start: 0, end: 98, suffix: '+' });
  const productsCounterRef = useCounter({ start: 0, end: 12, suffix: '+' });
  const yearsCounterRef = useCounter({ start: 0, end: 5, suffix: '+' });

  return (
    <section className="py-32 bg-gradient-to-b from-white to-purple-50 relative overflow-hidden">
      {/* Parallax Background Element */}
      <div 
        ref={parallaxBgRef}
        className="absolute inset-0 bg-gradient-to-b from-purple-100/30 to-transparent pointer-events-none"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Animated Headline with Text Reveal */}
        <h2 
          ref={headlineRef}
          className="text-5xl md:text-7xl font-bold text-black text-center mb-16"
        >
          More than just a designer
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image with Reveal Animation */}
          <div ref={imageRef} className="relative rounded-2xl overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800"
              alt="Portrait"
              className="w-full h-auto object-cover"
            />
            <div className="absolute bottom-8 left-8 bg-purple-500 text-white px-6 py-4 rounded-xl">
              <p className="text-2xl font-bold">A R Khandoker</p>
              <p className="text-sm opacity-90">UI/UX Designer</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="space-y-8">
            <div className="prose prose-lg">
              <p className="text-xl text-black/70 leading-relaxed">
                I combine product thinking, UX strategy, and refined UI craft 
                to design digital experiences that are functional, scalable, 
                and visually clear. My work is guided by user needs, informed 
                by research, and enhanced through motion and interaction.
              </p>
            </div>

            {/* Animated Stats with Counters */}
            <div ref={statsRef} className="grid grid-cols-3 gap-6 py-8">
              <div className="text-center">
                <div 
                  ref={projectsCounterRef}
                  className="text-4xl font-bold text-purple-500 mb-2"
                >
                  0+
                </div>
                <p className="text-sm text-black/60">Projects Delivered</p>
              </div>
              <div className="text-center">
                <div 
                  ref={productsCounterRef}
                  className="text-4xl font-bold text-purple-500 mb-2"
                >
                  0+
                </div>
                <p className="text-sm text-black/60">Products Developed</p>
              </div>
              <div className="text-center">
                <div 
                  ref={yearsCounterRef}
                  className="text-4xl font-bold text-purple-500 mb-2"
                >
                  0+
                </div>
                <p className="text-sm text-black/60">Years Experience</p>
              </div>
            </div>

            {/* Animated CTA Button */}
            <div ref={ctaRef}>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-full hover:bg-purple-500 transition-colors group"
              >
                <span className="font-medium">Read Full Story</span>
                <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>

        {/* Skills Section with Stagger */}
        <SkillsGrid />
      </div>
    </section>
  );
}

/**
 * Skills Grid with Stagger Animation
 */
function SkillsGrid() {
  const gridRef = useStaggerReveal({ stagger: 0.1, duration: 0.6 });

  const skills = [
    { name: 'UI Design', icon: '🎨' },
    { name: 'UX Research', icon: '🔍' },
    { name: 'Prototyping', icon: '⚡' },
    { name: 'Design Systems', icon: '📐' },
    { name: 'Motion Design', icon: '✨' },
    { name: 'User Testing', icon: '👥' },
  ];

  return (
    <div className="mt-24">
      <h3 className="text-3xl font-bold text-center mb-12">Core Skills</h3>
      <div 
        ref={gridRef}
        className="grid grid-cols-2 md:grid-cols-3 gap-6"
      >
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="skill-card bg-white p-6 rounded-xl border border-black/5 hover:border-purple-500/50 hover:shadow-lg transition-all group"
          >
            <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
              {skill.icon}
            </div>
            <h4 className="text-lg font-semibold text-black">{skill.name}</h4>
          </div>
        ))}
      </div>
    </div>
  );
}

/**
 * Alternative: Using animation functions directly for more control
 */
export function EnhancedAboutSectionAlternative() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Import animation functions
    const { fadeSlideUp, staggerReveal, textReveal, imageReveal, animateCounter } = 
      require('../../utils/gsapAnimations');

    // Apply animations manually for fine-tuned control
    fadeSlideUp('.about-section', {
      duration: 1.5,
      y: 100,
      start: 'top 90%',
    });

    textReveal('.about-headline', {
      splitBy: 'words',
      stagger: 0.05,
      duration: 0.8,
    });

    imageReveal('.about-image', {
      scale: 1.3,
      duration: 1.6,
    });

    staggerReveal('.stats-grid', {
      children: '.stat-item',
      stagger: 0.2,
      y: 40,
    });

    animateCounter('.projects-count', { start: 0, end: 98, suffix: '+' });
    animateCounter('.products-count', { start: 0, end: 12, suffix: '+' });
    animateCounter('.years-count', { start: 0, end: 5, suffix: '+' });

    staggerReveal('.skills-grid', {
      children: '.skill-card',
      stagger: 0.1,
      y: 30,
    });
  }, []);

  return (
    <div ref={sectionRef} className="about-section">
      {/* Component structure here */}
    </div>
  );
}

export default EnhancedAboutSection;
