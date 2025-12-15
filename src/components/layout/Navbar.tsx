import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '../ui/button';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '../ui/utils';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Work', path: '/work' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-black/5">
      <div className="container mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-2xl font-bold tracking-tighter text-black z-50 flex items-center gap-1">
          A R Khandoker<span className="text-secondary">.</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={cn(
                "group relative text-sm font-medium transition-colors hover:text-black",
                location.pathname === link.path ? "text-black" : "text-black/60"
              )}
            >
              {link.name}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 ease-out group-hover:w-full" />
            </Link>
          ))}
          <Button asChild className="bg-black text-white hover:bg-secondary hover:text-black rounded-full px-6 transition-colors duration-300">
            <a href="https://drive.google.com/file/d/1fLf8BONTW3WZq0-L72_-3fTCLSid2ve9/view?usp=sharing" target="_blank" rel="noopener noreferrer">Download CV</a>
          </Button>
        </nav>

        {/* Mobile Toggle */}
        <div className="flex items-center gap-4 md:hidden z-50">
          <button
            className="text-black"
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
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-3xl font-light text-black hover:text-black/60 transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <Button asChild size="lg" className="bg-black text-white hover:bg-black/90 rounded-full mt-4">
                <Link to="/contact" onClick={() => setIsOpen(false)}>Book Consultation</Link>
              </Button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
