import React, { useRef, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import saasDashboard   from 'figma:asset/e0199dca010bfdf4a3d4bf1010d368e7d489a20f.png';
import adveraPortfolio from 'figma:asset/1acd087c8b0bc2c19b8ab9a8e8f2070ce3c7357d.png';
import adveraHero      from 'figma:asset/4fd165c17e93579fe56f7a8dcc6bb4ebf02c7b0c.png';

gsap.registerPlugin(ScrollTrigger);

// ── Content ───────────────────────────────────────────────────────────────────
// Copy taken verbatim from the About Preview section — no new copy introduced.
const SENTENCES = [
  { text: 'I combine product thinking,',  visual: saasDashboard,   tag: 'Product Strategy'   },
  { text: 'UX strategy,',                  visual: adveraPortfolio, tag: 'User Experience'     },
  { text: 'and refined UI craft',           visual: adveraHero,     tag: 'Visual Design'       },
  { text: 'to design digital experiences', visual: saasDashboard,  tag: 'Product Design'      },
  { text: 'that are functional, scalable,', visual: adveraPortfolio,tag: 'Design Systems'      },
  { text: 'and visually clear.',            visual: adveraHero,     tag: 'Motion & Interaction'},
];

// Each sentence gets this many vh of scroll to activate + hold
const SCROLL_PER = 80; // vh
// Outer height = scroll budget + one viewport for the pin to settle
const OUTER_H = SENTENCES.length * SCROLL_PER + 100; // vh

// ── Component ─────────────────────────────────────────────────────────────────
export function StorytellingSection() {
  const outerRef    = useRef<HTMLDivElement>(null);
  const innerRef    = useRef<HTMLDivElement>(null);
  const sentenceEls = useRef<(HTMLSpanElement | null)[]>([]);
  const visualEls   = useRef<(HTMLDivElement  | null)[]>([]);

  useLayoutEffect(() => {
    if (!outerRef.current || !innerRef.current) return;

    const ctx = gsap.context(() => {
      const N = SENTENCES.length;

      // ── Initial states ───────────────────────────────────────────────────
      sentenceEls.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, {
          color:   i === 0 ? '#888888' : '#cccccc',
          opacity: i === 0 ? 0.45 : 0.3,
          y:       i === 0 ? 0 : 8,
        });
      });
      visualEls.current.forEach((el, i) => {
        if (!el) return;
        gsap.set(el, { opacity: 0, scale: 0.97 });
      });

      // ── Scrubbed animation timeline ──────────────────────────────────────
      // Each sentence occupies 3 "units" in the timeline:
      //   [0 → 1]  activate (colour + opacity + visual in)
      //   [1 → 2]  hold (user reads; timeline pauses here naturally with scrub)
      //   [2 → 3]  deactivate (fade to past; not added for last sentence)
      const tl = gsap.timeline();

      SENTENCES.forEach((_, i) => {
        const isLast = i === N - 1;
        const pos    = i * 3; // position label in the timeline

        tl.addLabel(`s${i}`, pos);

        // Activate sentence
        tl.to(sentenceEls.current[i], {
          color: '#000000', opacity: 1, y: 0,
          duration: 0.9, ease: 'power2.out',
        }, `s${i}`);

        // Show visual
        tl.to(visualEls.current[i], {
          opacity: 1, scale: 1,
          duration: 0.9, ease: 'power2.out',
        }, `s${i}+=0.1`);

        if (!isLast) {
          // Deactivate → past state
          tl.to(sentenceEls.current[i], {
            color: '#aaaaaa', opacity: 0.25,
            duration: 0.6, ease: 'power1.in',
          }, `s${i}+=2.2`);

          // Hide visual
          tl.to(visualEls.current[i], {
            opacity: 0, scale: 0.96,
            duration: 0.5, ease: 'power1.in',
          }, `s${i}+=2.2`);
        }
      });

      // ── Pin + scrub ──────────────────────────────────────────────────────
      ScrollTrigger.create({
        trigger:    outerRef.current,
        start:      'top top',
        end:        'bottom bottom',
        pin:        innerRef.current,
        pinSpacing: false,
        animation:  tl,
        scrub:      1.5,
      });

    }, outerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={outerRef}
      style={{ height: `${OUTER_H}vh` }}
      className="relative bg-white"
    >
      {/* ── Pinned viewport ────────────────────────────────────────────────── */}
      <div
        ref={innerRef}
        className="h-screen flex items-center overflow-hidden"
      >
        <div className="container mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1fr_420px] xl:grid-cols-[1fr_480px] gap-12 xl:gap-20 items-center">

          {/* ── Left: sentences ──────────────────────────────────────────── */}
          <div>
            {/* Section label */}
            <p className="text-[11px] font-bold uppercase tracking-[0.25em] text-secondary mb-10 md:mb-12">
              The Approach
            </p>

            {/* Sentence stack */}
            <div className="space-y-4 md:space-y-5">
              {SENTENCES.map((s, i) => (
                <span
                  key={i}
                  ref={(el) => { sentenceEls.current[i] = el; }}
                  className="block text-[2rem] md:text-[2.5rem] lg:text-[3rem] font-bold tracking-tighter leading-[1.15]"
                  style={{ willChange: 'color, opacity, transform' }}
                >
                  {s.text}
                </span>
              ))}
            </div>

            {/* Progress hint */}
            <p className="mt-10 text-xs text-black/25 uppercase tracking-widest hidden md:block">
              Scroll to continue reading
            </p>
          </div>

          {/* ── Right: contextual visuals ─────────────────────────────────── */}
          <div className="relative h-[52vh] rounded-2xl overflow-hidden hidden lg:block bg-black/5">
            {SENTENCES.map((s, i) => (
              <div
                key={i}
                ref={(el) => { visualEls.current[i] = el; }}
                className="absolute inset-0"
                style={{ willChange: 'opacity, transform' }}
              >
                <img
                  src={s.visual}
                  alt={s.tag}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
                {/* Gradient overlay for legibility */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                {/* Tag badge */}
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-white/85 backdrop-blur-sm rounded-full">
                  <span className="text-[10px] font-bold uppercase tracking-widest text-black/60">
                    {s.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
