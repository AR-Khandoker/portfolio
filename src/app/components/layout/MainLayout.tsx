import React, { useEffect } from 'react';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { PreFooterCTA } from './PreFooterCTA';
import { Toaster } from '../ui/sonner';
import { useLocation } from 'react-router-dom';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

export function MainLayout({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top on route change
    window.scrollTo(0, 0);

    // Give React one frame to finish rendering the new page,
    // then tell GSAP to recalculate ALL ScrollTrigger positions.
    // This ensures AnimatedText / AnimatedSection elements that are
    // already in the viewport on short pages still get revealed.
    const raf = requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname]);

  const showPreFooter = pathname !== '/contact';

  return (
    <div className="min-h-screen bg-white text-black selection:bg-black/10 selection:text-black relative">
      <Navbar />
      <main className="pt-20 relative">
        {children}
      </main>
      {showPreFooter && <PreFooterCTA />}
      <Footer />
      <Toaster />
    </div>
  );
}
