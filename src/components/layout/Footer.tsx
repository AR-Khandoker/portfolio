import React from 'react';
import { Link } from 'react-router-dom';
import { Lock, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#050505] text-white/60 py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white block mb-6 hover:text-secondary transition-colors">
              A R Khandoker<span className="text-secondary">.</span>
            </Link>
            <p className="max-w-md text-lg leading-relaxed">
              Senior Product Designer & UX/UI Expert helping ambitious brands build cinematic, high-conversion digital experiences.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-6">Sitemap</h4>
            <ul className="space-y-4">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/work" className="hover:text-white transition-colors">
                  Work
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div className="flex justify-between gap-8">
            <div>
              <h4 className="text-white font-semibold mb-6">Socials</h4>
              <ul className="space-y-4">
                <li>
                  <a 
                    href="https://www.linkedin.com/in/al-rafi-khandoker-083841198" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a 
                    href="https://www.behance.net/AR_khandoker" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Behance
                  </a>
                </li>
                <li>
                  <a 
                    href="https://dribbble.com/AL_RafI001" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="hover:text-white transition-colors"
                  >
                    Dribbble
                  </a>
                </li>
              </ul>
            </div>
            
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="group h-12 w-12 rounded-full border border-white/20 hover:border-secondary hover:bg-secondary/10 transition-all duration-300 flex items-center justify-center self-start"
              aria-label="Go to top"
            >
              <ArrowUp className="w-5 h-5 text-white/60 group-hover:text-secondary group-hover:-translate-y-0.5 transition-all" />
            </motion.button>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm">
          <p>© {new Date().getFullYear()} A R Khandoker. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0 items-center">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
            <Link 
              to="/admin/projects" 
              className="group relative hover:text-secondary transition-colors flex items-center gap-1.5"
            >
              <Lock className="w-3.5 h-3.5" />
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}