import React from 'react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="bg-[#050505] text-white/60 py-20 border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="md:col-span-2">
            <Link to="/" className="text-2xl font-bold tracking-tighter text-white block mb-6">
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
                <Link to="/" className="group relative hover:text-white transition-colors">
                  Home
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 ease-out group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link to="/work" className="group relative hover:text-white transition-colors">
                  Work
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 ease-out group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link to="/services" className="group relative hover:text-white transition-colors">
                  Services
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 ease-out group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link to="/about" className="group relative hover:text-white transition-colors">
                  About
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 ease-out group-hover:w-full" />
                </Link>
              </li>
              <li>
                <Link to="/contact" className="group relative hover:text-white transition-colors">
                  Contact
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 ease-out group-hover:w-full" />
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-6">Socials</h4>
            <ul className="space-y-4">
              <li>
                <a 
                  href="https://www.linkedin.com/in/al-rafi-khandoker-083841198" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative hover:text-white transition-colors"
                >
                  LinkedIn
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              </li>
              <li>
                <a 
                  href="https://www.behance.net/AR_khandoker" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative hover:text-white transition-colors"
                >
                  Behance
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              </li>
              <li>
                <a 
                  href="https://dribbble.com/AL_RafI001" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="group relative hover:text-white transition-colors"
                >
                  Dribbble
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-secondary transition-all duration-300 ease-out group-hover:w-full" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5 text-sm">
          <p>© {new Date().getFullYear()} A R Khandoker. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}