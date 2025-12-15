import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';
import ThankYou from '../../imports/ThankYou';
import FlowTrack from '../../imports/Frame1000003093';
import Dashboard from '../../imports/Dashboard';
import Cover from '../../imports/Cover';
import Slide432 from '../../imports/Slide432';
import AdveraHeroImage from 'figma:asset/4fd165c17e93579fe56f7a8dcc6bb4ebf02c7b0c.png';
import SaasDashboardImage from 'figma:asset/e0199dca010bfdf4a3d4bf1010d368e7d489a20f.png';
import AdveraPortfolioImage from 'figma:asset/1acd087c8b0bc2c19b8ab9a8e8f2070ce3c7357d.png';
import { projects } from '../../data/projects';
import type { Project } from '../../types';

export function FeaturedWork() {
  const [randomProjects, setRandomProjects] = useState<Project[]>([]);
  const [mobileProjects, setMobileProjects] = useState<Project[]>([]);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const scrollContainerRef = React.useRef<HTMLDivElement>(null);

  useEffect(() => {
    const shuffled = [...projects].sort(() => Math.random() - 0.5);
    // Show more projects for the carousel (desktop)
    setRandomProjects(shuffled.slice(0, 6));
    // Show 3 projects for mobile
    setMobileProjects(shuffled.slice(0, 3));
  }, []);

  // Auto-scroll effect
  useEffect(() => {
    if (isPaused || !scrollContainerRef.current) return;

    const interval = setInterval(() => {
      setScrollPosition((prev) => {
        const container = scrollContainerRef.current;
        if (!container) return prev;

        const maxScroll = container.scrollWidth - container.clientWidth;
        const newPosition = prev + 1;

        // Reset to start when reaching the end
        if (newPosition >= maxScroll) {
          return 0;
        }

        return newPosition;
      });
    }, 30); // Adjust speed here (lower = faster)

    return () => clearInterval(interval);
  }, [isPaused]);

  // Apply scroll position
  useEffect(() => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollLeft = scrollPosition;
    }
  }, [scrollPosition]);

  const renderProjectImage = (project: Project) => {
    if (project.id === 1) {
      return (
        <svg viewBox="0 0 1920 1080" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
           <foreignObject width="1920" height="1080">
              <ThankYou />
           </foreignObject>
        </svg>
      );
    }
    if (project.id === 2) {
      return (
        <svg viewBox="0 0 1170 1195" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
           <foreignObject width="1170" height="1195">
              <FlowTrack />
           </foreignObject>
        </svg>
      );
    }
    if (project.id === 3) {
      return (
        <img 
          src={SaasDashboardImage} 
          alt={project.title} 
          className="w-full h-full object-cover" 
        />
      );
    }
    if (project.id === 4) {
      return (
        <svg viewBox="0 0 1440 1024" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
           <foreignObject width="1440" height="1024">
              <Dashboard />
           </foreignObject>
        </svg>
      );
    }
    if (project.id === 6) {
      return (
        <svg viewBox="0 0 1920 1080" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
           <foreignObject width="1920" height="1080">
              <Slide432 />
           </foreignObject>
        </svg>
      );
    }
    if (project.id === 7) {
      return (
        <img 
          src={AdveraHeroImage} 
          alt={project.title} 
          className="w-full h-full object-cover" 
        />
      );
    }
    if (project.id === 8) {
      return (
        <img 
          src={AdveraPortfolioImage} 
          alt={project.title} 
          className="w-full h-full object-cover" 
        />
      );
    }
    
    // Default fallback
    return (
      <img 
        src={project.image} 
        alt={project.title}
        className="w-full h-full object-cover"
      />
    );
  };

  return (
    <section className="py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-4 text-black">Selected Work</h2>
            <p className="text-black/60 text-lg">Curated projects defining the future of digital.</p>
          </div>
          <Button asChild variant="outline" className="hidden md:flex rounded-full px-6 h-12 border-black/10 hover:bg-black hover:text-white transition-all">
            <Link to="/work">
              View All Projects <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        {/* Desktop: Auto-scrolling carousel */}
        <div 
          ref={scrollContainerRef}
          className="hidden md:flex gap-8 overflow-x-hidden hover:overflow-x-auto scrollbar-hide"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          style={{ scrollBehavior: 'auto' }}
        >
          {randomProjects.map((project, index) => {
            const content = (
              <>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 mb-6">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors z-10" />
                  
                  <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
                    {renderProjectImage(project)}
                  </div>
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full shadow-sm">
                    <span className="text-xs font-medium text-black">{project.metric}</span>
                  </div>

                  {/* Hover Reveal Button */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-secondary text-black flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-secondary font-medium mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold text-black group-hover:text-black/70 transition-colors">{project.title}</h3>
                </div>
              </>
            );

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative flex-shrink-0 w-[400px]"
              >
                <Link to={`/work/${project.id}`} className="block cursor-pointer">
                  {content}
                </Link>
              </motion.div>
            );
          })}
        </div>

        {/* Mobile: Static grid */}
        <div className="grid grid-cols-1 gap-8 md:hidden">
          {mobileProjects.map((project, index) => {
            const content = (
              <>
                <div className="relative aspect-[4/5] overflow-hidden rounded-xl bg-gray-100 mb-6">
                  <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors z-10" />
                  
                  <div className="w-full h-full transition-transform duration-700 group-hover:scale-105">
                    {renderProjectImage(project)}
                  </div>
                  
                  {/* Floating Metric Badge */}
                  <div className="absolute top-4 right-4 z-20 bg-white/80 backdrop-blur-md border border-white/20 px-3 py-1.5 rounded-full shadow-sm">
                    <span className="text-xs font-medium text-black">{project.metric}</span>
                  </div>

                  {/* Hover Reveal Button */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 rounded-full bg-secondary text-black flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                      <ArrowUpRight className="w-6 h-6" />
                    </div>
                  </div>
                </div>

                <div>
                  <p className="text-sm text-secondary font-medium mb-2">{project.category}</p>
                  <h3 className="text-2xl font-bold text-black group-hover:text-black/70 transition-colors">{project.title}</h3>
                </div>
              </>
            );

            return (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group relative"
              >
                <Link to={`/work/${project.id}`} className="block cursor-pointer">
                  {content}
                </Link>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-12 md:hidden text-center">
          <Link to="/work" className="inline-flex items-center gap-2 text-black hover:text-black/60 transition-colors">
            View All Projects <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
