import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

interface StickyCTAProps {
  to?: string;
}

export function StickyCTA({ to = "/contact" }: StickyCTAProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 800) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-8 right-8 z-40"
        >
          <Link 
            to={to}
            className="flex items-center gap-3 bg-black text-white pl-6 pr-2 py-2 rounded-full shadow-2xl hover:bg-secondary hover:text-black transition-colors duration-300 group"
          >
            <span className="font-medium">Let's Talk</span>
            <div className="w-10 h-10 bg-white text-black rounded-full flex items-center justify-center group-hover:-rotate-45 transition-transform duration-300">
              <ArrowRight className="w-5 h-5" />
            </div>
          </Link>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
