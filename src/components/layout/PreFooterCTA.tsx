import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

export function PreFooterCTA() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end end"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, 0]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [0, 1]);

  return (
    <section ref={containerRef} className="relative py-32 overflow-hidden border-t border-black/5 bg-white">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#FAFAFA] pointer-events-none" />
      
      {/* Abstract Background Shape */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[40vw] bg-black/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div 
          style={{ y, opacity }}
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-black/10 bg-black/5 text-black text-sm font-medium mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-black opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-black"></span>
            </span>
            Available for new collaborations
          </div>

          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-[1.1]">
            Ready to build <br />
            <span className="text-black/40">the extraordinary?</span>
          </h2>
          
          <p className="text-xl text-black/60 max-w-2xl mb-12 leading-relaxed">
            From early-stage startups to enterprise systems, I help ambitious teams build high-converting, award-winning digital products.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-6">
            <Button size="lg" className="h-16 px-10 rounded-full bg-black text-white hover:bg-black/80 hover:scale-105 transition-all duration-300 text-lg group" asChild>
              <Link to="/contact">
                Start a Project
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            
            <a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=alrafikhandoker7@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 text-black/60 hover:text-black transition-colors px-6 py-4 rounded-full hover:bg-black/5"
            >
              <div className="w-10 h-10 rounded-full bg-black/5 flex items-center justify-center group-hover:bg-black group-hover:text-white transition-colors">
                <Mail className="w-4 h-4" />
              </div>
              <span className="font-medium">alrafikhandoker7@gmail.com</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
