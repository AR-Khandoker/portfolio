import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../ui/utils';
import { ScrambleText } from '../shared/ScrambleText';

// Preload a route's JS chunk on nav-link hover → near-instant navigation
const preloadRoute = (path: string) => {
  const map: Record<string, () => Promise<any>> = {
    '/work':     () => import('../../pages/WorkPage'),
    '/services': () => import('../../pages/ServicesPage'),
    '/about':    () => import('../../pages/AboutPage'),
    '/contact':  () => import('../../pages/ContactPage'),
  };
  map[path]?.();
};

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Track scroll position for navbar effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 border-b transition-all duration-300",
      scrolled 
        ? "bg-white/95 backdrop-blur-xl border-black/10 shadow-sm" 
        : "bg-white/80 backdrop-blur-md border-black/5"
    )}>
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-black z-50 flex items-center gap-1 transition-transform hover:scale-105">
          A R Khandoker<span className="text-secondary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onMouseEnter={() => preloadRoute(link.path)}
              className={cn(
                "group relative text-sm font-medium transition-colors hover:text-black",
                location.pathname === link.path ? "text-black" : "text-black/60"
              )}
            >
              {link.name}
              <span className={cn(
                "absolute -bottom-1 left-0 h-0.5 bg-secondary transition-all duration-300 ease-out",
                location.pathname === link.path ? "w-full" : "w-0 group-hover:w-full"
              )} />
            </Link>
          ))}
          
          <Button asChild className="bg-black text-white rounded-full px-6 btn-water btn-water-purple">
            <a href="https://drive.google.com/file/d/1fLf8BONTW3WZq0-L72_-3fTCLSid2ve9/view?usp=sharing" target="_blank" rel="noopener noreferrer">
              <ScrambleText>Download CV</ScrambleText>
            </a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <button
            className="text-black transition-transform hover:scale-110"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className="absolute top-0 left-0 w-full h-screen bg-white flex flex-col items-center justify-center gap-8 md:hidden"
            >
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-light text-black hover:text-black/60 transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: navLinks.length * 0.1 }}
              >
                <Button asChild size="lg" className="bg-black text-white rounded-full mt-4 btn-water btn-water-purple">
                  <Link to="/contact" onClick={() => setIsOpen(false)}>
                    <ScrambleText>Book Consultation</ScrambleText>
                  </Link>
                </Button>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}