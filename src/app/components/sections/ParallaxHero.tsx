import React, { useRef, useLayoutEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { gsap } from "gsap";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";
import { ScrambleTitle } from "../animations/ScrambleTitle";
import { ScrambleText } from "../shared/ScrambleText";
import { useLoaderComplete } from "../../contexts/LoaderContext";

export function ParallaxHero() {
  const containerRef = useRef<HTMLDivElement>(null);

  // ── refs for GSAP entrance ────────────────────────────────────────────────
  const labelRef     = useRef<HTMLAnchorElement>(null);
  const paraRef      = useRef<HTMLParagraphElement>(null);
  const ctaRef       = useRef<HTMLDivElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  // ── Motion: parallax layers ───────────────────────────────────────────────
  const [mousePosition, setMousePosition] = React.useState({ x: 0, y: 0 });
  const { scrollY } = useScroll();
  const yBg         = useTransform(scrollY, [0, 1000], [0, 400]);
  const yMg         = useTransform(scrollY, [0, 1000], [0, 200]);
  const yFg         = useTransform(scrollY, [0, 1000], [0, 50]);
  const opacityHero = useTransform(scrollY, [0, 600], [1, 0]);

  const handleMouseMove = (e: React.MouseEvent) => {
    const { clientX, clientY } = e;
    const x = (clientX / window.innerWidth  - 0.5) * 20;
    const y = (clientY / window.innerHeight - 0.5) * 20;
    setMousePosition({ x, y });
  };

  // ── Wait for brand loader before playing entrance ─────────────────────────
  // On initial load the brand loader covers the hero for ~2.6 s; without this
  // the GSAP timeline would complete while hidden and the hero looks static.
  // On page navigation the loader is already done, so the animation fires
  // immediately — giving the same beautiful entrance every single time.
  const { isLoaderComplete } = useLoaderComplete();

  // Hide all animated elements before first paint (prevents flash of unstyled content)
  useLayoutEffect(() => {
    gsap.set(labelRef.current,     { opacity: 0, y: 18 });
    gsap.set(paraRef.current,      { opacity: 0, y: 24 });
    gsap.set(ctaRef.current,       { opacity: 0, y: 16 });
    gsap.set(imageWrapRef.current, { opacity: 0, scale: 0.95 });
  }, []);

  // Play entrance only once the loader has exited
  useLayoutEffect(() => {
    if (!isLoaderComplete) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

      tl.to(labelRef.current,     { opacity: 1, y: 0, duration: 0.7  }, 0.15)
        .to(paraRef.current,      { opacity: 1, y: 0, duration: 0.85 }, 0.38)
        .to(ctaRef.current,       { opacity: 1, y: 0, duration: 0.7  }, 0.55)
        .to(imageWrapRef.current, {
            opacity: 1,
            scale: 1,
            duration: 1.3,
            ease: 'expo.out',
          }, 0.2);
    }, containerRef);

    return () => ctx.revert();
  }, [isLoaderComplete]);

  return (
    <div
      ref={containerRef}
      className="relative h-[90vh] overflow-hidden flex items-center justify-center bg-white"
      onMouseMove={handleMouseMove}
    >
      {/* Layer 3: Background texture — parallax slowest */}
      <motion.div style={{ y: yBg }} className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[url('https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYjRtbHkyM2l4bnRwMm5yNG5zN3R4cGNlc2hvOXFhOGx1Y2Vmb29pdCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/RLVodDwJC9TcPBFlLB/giphy.gif')] bg-cntain bg-center" />
        
      </motion.div>

      {/* Layer 2: Midground gradients — parallax medium */}
      <motion.div
        style={{ y: yMg }}
        className="absolute inset-0 z-10 pointer-events-none"
      >
        <div className="w-[60vw] h-[60vw] bg-secondary/10 rounded-full blur-[120px] absolute top-1/4 -right-1/4" />
        <div className="w-[40vw] h-[40vw] bg-gray-100/50 rounded-full blur-[100px] absolute bottom-0 -left-10" />
      </motion.div>

      {/* Layer 1: Foreground — full-width editorial layout */}
      <motion.div
        style={{ y: yFg, opacity: opacityHero }}
        className="relative z-20 w-full flex flex-col items-center justify-center px-6"
      >
        {/* ── Availability badge ── */}
        <Link
          ref={labelRef}
          to="/contact"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-black/10 bg-black/5 text-xs font-medium tracking-wide text-black/80 mb-10 hover:bg-black/10 transition-colors cursor-pointer"
          style={{ willChange: 'opacity, transform' }}
        >
          <span className="w-2 h-2 rounded-full bg-secondary animate-pulse" />
          AVAILABLE FOR NEW PROJECTS
        </Link>

        {/*
         * Editorial headline — five lines with gradient text fills.
         * Each line's gradient goes from a strong anchor colour to a lighter one,
         * progressively fading the palette as you read downward.
         * GSAP (paraRef, outside) handles the block entrance; Motion handles the
         * per-line Y-stagger so lines settle into place at staggered offsets.
         */}
        <div
          ref={paraRef}
          className="w-full max-w-[1080px] mx-auto text-center"
          style={{ willChange: 'opacity, transform' }}
        >
          {/*
           * Scroll-responsive headline — 5 lines, each a motion.span.
           *
           * Each line reveals independently as the h1 enters the viewport
           * (whileInView, once:true). The reveal uses:
           *   • opacity  0.18 → 1
           *   • translateY  28px → 0
           *   • filter blur(6px) → blur(0)   ← blur-reduction
           *   • clipPath  inset(0 0 100% 0) → inset(0 0 0% 0)  ← mask reveal
           *
           * Delays step in 110ms increments so lines read sequentially.
           * Inactive lines stay at opacity 0.18 until their reveal fires,
           * reproducing the "current = black, upcoming = grey" effect.
           *
           * For pixel-perfect GSAP scrub (animation tied 1:1 to scroll
           * progress) confirm the outside changes described in the summary.
           */}
          <h1
            className="font-bold tracking-tighter leading-[0.95]"
            style={{ fontSize: 'clamp(2.6rem, 6vw, 5.75rem)' }}
          >
            {/* Line 1 — name: black bloom → purple
                motion.span handles animation only; gradient lives on inner plain span */}
            <motion.span
              className="block"
              style={{ willChange: 'opacity, transform, filter' }}
              initial={{ opacity: 0.18, y: 28, filter: 'blur(6px)', clipPath: 'inset(0 0 30% 0)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', clipPath: 'inset(0 0 0% 0)' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, delay: 0, ease: [0.16, 1, 0.3, 1] }}
            >
              <span style={{
                backgroundImage: 'linear-gradient(105deg, #000000 35%, #a855f7 100%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'block',
              }}>
                <ScrambleTitle className="block" />
              </span>
            </motion.span>

            {/* Line 2 — role start: purple anchor → black + thumbnail */}
            <motion.span
              className="block mt-3"
              style={{ willChange: 'opacity, transform, filter' }}
              initial={{ opacity: 0.18, y: 28, filter: 'blur(6px)', clipPath: 'inset(0 0 30% 0)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', clipPath: 'inset(0 0 0% 0)' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, delay: 0.11, ease: [0.16, 1, 0.3, 1] }}
            >
              <span style={{
                backgroundImage: 'linear-gradient(105deg, #a855f7 0%, #0d0d0d 58%)',
                WebkitBackgroundClip: 'text',
                backgroundClip: 'text',
                color: 'transparent',
                display: 'block',
              }}>
                Product-focused{' '}
                <span
                  ref={imageWrapRef}
                  className="inline-block align-middle mx-2 rounded-xl overflow-hidden border border-black/10 shadow-sm"
                  style={{
                    width:  'clamp(34px, 3.5vw, 58px)',
                    height: 'clamp(34px, 3.5vw, 58px)',
                    willChange: 'opacity, transform',
                  }}
                >
                  <img
                    src="https://cdn.dribbble.com/userupload/45675793/file/abc148459b2fdb99cd1fe963bcd94391.png?resize=400x400&vertical=center"
                    alt="UI Design"
                    className="w-full h-full object-cover"
                    loading="eager"
                  />
                </span>
                {' '}UI/UX
              </span>
            </motion.span>

            {/* Line 3 — role end: plain black */}
            <motion.span
              className="block mt-2 text-black"
              style={{ willChange: 'opacity, transform, filter' }}
              initial={{ opacity: 0.18, y: 28, filter: 'blur(6px)', clipPath: 'inset(0 0 30% 0)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', clipPath: 'inset(0 0 0% 0)' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, delay: 0.22, ease: [0.16, 1, 0.3, 1] }}
            >
              &amp; Motion{' '}
              <span
                className="inline-block align-middle mx-2 rounded-xl overflow-hidden border border-black/10 shadow-sm"
                style={{
                  width:  'clamp(34px, 3.5vw, 58px)',
                  height: 'clamp(34px, 3.5vw, 58px)',
                }}
              >
                <img
                  src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&h=200&fit=crop&q=80"
                  alt="Motion Design"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              </span>
              {' '}Designer,
            </motion.span>

            {/* Line 4 — description: plain black */}
            <motion.span
              className="block mt-2 text-black"
              style={{ willChange: 'opacity, transform, filter' }}
              initial={{ opacity: 0.18, y: 28, filter: 'blur(6px)', clipPath: 'inset(0 0 30% 0)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', clipPath: 'inset(0 0 0% 0)' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, delay: 0.33, ease: [0.16, 1, 0.3, 1] }}
            >
              creating intuitive, scalable
            </motion.span>

            {/* Line 5 — descriptor end: plain black */}
            <motion.span
              className="block mt-2 text-black"
              style={{ willChange: 'opacity, transform, filter' }}
              initial={{ opacity: 0.18, y: 28, filter: 'blur(6px)', clipPath: 'inset(0 0 30% 0)' }}
              whileInView={{ opacity: 1, y: 0, filter: 'blur(0px)', clipPath: 'inset(0 0 0% 0)' }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 1.1, delay: 0.44, ease: [0.16, 1, 0.3, 1] }}
            >
              digital experiences.
            </motion.span>
          </h1>
        </div>

        {/* ── Discipline tags ── */}
        <motion.div
          className="flex items-center gap-3 mt-8 text-[11px] font-semibold uppercase tracking-widest"
          style={{
            background: 'linear-gradient(105deg, #888 0%, #bbb 100%)',
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            color: 'transparent',
          }}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          <span>UI/UX</span>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#bbb', display: 'inline-block', flexShrink: 0 }} />
          <span>Motion Graphics</span>
          <span style={{ width: 4, height: 4, borderRadius: '50%', background: '#bbb', display: 'inline-block', flexShrink: 0 }} />
          <span>Product Design</span>
        </motion.div>

        {/* ── CTA buttons ── */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 mt-10"
          style={{ willChange: 'opacity, transform' }}
        >
          <Button
            size="lg"
            className="bg-black text-white rounded-full h-14 px-8 text-base btn-water btn-water-purple"
            asChild
          >
            <Link to="/contact"><ScrambleText>Book a Consultation</ScrambleText></Link>
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-black/20 text-black rounded-full h-14 px-8 text-base bg-transparent btn-water btn-water-black"
            asChild
          >
            <Link to="/work">
              <ScrambleText>View Case Studies</ScrambleText>{" "}
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 lg:left-8 lg:translate-x-0 z-20 flex flex-col items-center gap-3"
      >
        <div className="w-[26px] h-[40px] rounded-full border border-black/20 flex justify-center pt-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
            className="w-1 h-1.5 rounded-full bg-secondary"
          />
        </div>
        <span className="text-[10px] tracking-widest uppercase text-black/40 font-medium">
          Scroll
        </span>
      </motion.div>
    </div>
  );
}
