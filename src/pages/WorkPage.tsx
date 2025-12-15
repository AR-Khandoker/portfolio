import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';
import { StickyCTA } from '../components/shared/StickyCTA';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import { projects, categories } from '../data/projects';
import ThankYou from '../imports/ThankYou';
import FlowTrack from '../imports/Frame1000003093';
import Dashboard from '../imports/Dashboard';
import Slide432 from '../imports/Slide432';
import AdveraHeroImage from 'figma:asset/4fd165c17e93579fe56f7a8dcc6bb4ebf02c7b0c.png';
import SaasDashboardImage from 'figma:asset/e0199dca010bfdf4a3d4bf1010d368e7d489a20f.png';
import AdveraPortfolioImage from 'figma:asset/1acd087c8b0bc2c19b8ab9a8e8f2070ce3c7357d.png';

// Icon components
const DribbbleIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="24" cy="24" r="24" fill="#EA4C89"/>
    <path d="M24 10C16.268 10 10 16.268 10 24C10 31.732 16.268 38 24 38C31.732 38 38 31.732 38 24C38 16.268 31.732 10 24 10ZM32.352 17.578C33.918 19.528 34.85 21.998 34.916 24.668C34.582 24.602 31.328 23.934 28.052 24.338C27.942 24.096 27.844 23.844 27.734 23.592C27.448 22.946 27.14 22.29 26.822 21.656C30.472 19.99 32.154 17.82 32.352 17.578ZM24 13.094C26.902 13.094 29.548 14.23 31.548 16.048C31.384 16.268 29.9 18.26 26.372 19.748C24.536 16.444 22.49 13.732 22.204 13.358C22.792 13.204 23.39 13.094 24 13.094ZM19.714 14.252C19.978 14.604 22.006 17.326 23.864 20.586C18.86 21.942 14.472 21.92 13.978 21.92C14.67 18.414 16.814 15.48 19.714 14.252ZM13.084 24.01C13.084 23.9 13.084 23.79 13.084 23.68C13.556 23.69 18.794 23.756 24.14 22.048C24.536 22.836 24.91 23.636 25.262 24.436C25.086 24.492 24.91 24.546 24.734 24.602C19.19 26.464 16.17 31.404 15.956 31.778C14.186 29.766 13.084 27.022 13.084 24.01ZM24 34.928C21.362 34.928 18.948 34.004 17.054 32.472C17.21 32.11 19.416 27.91 25.548 25.724C25.57 25.714 25.592 25.702 25.614 25.692C27.194 29.744 27.858 33.11 28.03 34.14C26.756 34.65 25.404 34.928 24 34.928ZM30.498 32.95C30.376 32.296 29.756 29.098 28.276 25.092C31.35 24.624 34.032 25.438 34.384 25.548C33.946 28.726 32.564 31.558 30.498 32.95Z" fill="white"/>
  </svg>
);

const BehanceIcon = () => (
  <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
    <circle cx="24" cy="24" r="24" fill="#0057FF"/>
    <path d="M20.4 21.6C21.6 20.7 22.2 19.5 22.2 18C22.2 15.6 20.4 14.4 18 14.4H10.8V33.6H18.6C21.3 33.6 23.4 31.8 23.4 29.1C23.4 27.3 22.5 25.8 21 25.2C21.9 24.6 22.8 23.4 22.8 21.9C22.8 21.9 20.4 21.6 20.4 21.6ZM14.7 18H17.7C18.9 18 19.8 18.6 19.8 19.8C19.8 21 18.9 21.6 17.7 21.6H14.7V18ZM18 30H14.7V25.5H18C19.5 25.5 20.4 26.4 20.4 27.75C20.4 29.1 19.5 30 18 30ZM32.4 20.4C28.2 20.4 24.9 23.7 24.9 27.9C24.9 32.1 28.2 35.4 32.4 35.4C35.7 35.4 38.4 33.6 39.3 30.6H36C35.4 31.8 34.2 32.4 32.7 32.4C30.6 32.4 29.1 31.2 28.5 29.1H39.6C39.9 28.2 40.2 27.3 40.2 27C40.2 22.8 36.6 20.4 32.4 20.4ZM28.5 26.4C29.1 24.6 30.6 23.4 32.4 23.4C34.2 23.4 35.7 24.6 36.3 26.4H28.5ZM29.4 16.8H35.4V18.6H29.4V16.8Z" fill="white"/>
  </svg>
);

export function WorkPage() {
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects.filter(p => filter === "All" || p.category === filter);

  return (
    <div className="bg-white min-h-screen pb-20">
      <div className="pt-32 pb-20 container mx-auto px-6">
        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Work</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-black">Selected Work</h1>
        
        {/* Filters */}
        <div className="flex flex-wrap gap-4 mb-16">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-6 py-2 rounded-full border transition-all duration-300 ${
                filter === cat 
                  ? "bg-black text-white border-black" 
                  : "bg-transparent text-black/60 border-black/10 hover:border-black/40 hover:text-black"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={project.id}
                className={`group relative cursor-pointer ${project.size === 'large' ? 'md:col-span-2 aspect-[16/9]' : 'aspect-[4/5]'} rounded-xl overflow-hidden bg-gray-100`}
              >
                {project.id === 3 ? (
                  <a 
                    href="https://dribbble.com/shots/26764158-Creative-Studio-Portfolio-Swiss-Minimalism-Meets-Modern-Motion?utm_source=Clipboard_Shot&utm_campaign=AL_RafI001&utm_content=Creative%20Studio%20Portfolio%20%7C%20Swiss%20Minimalism%20Meets%20Modern%20Motion&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=AL_RafI001&utm_content=Creative%20Studio%20Portfolio%20%7C%20Swiss%20Minimalism%20Meets%20Modern%20Motion&utm_medium=Social_Share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <div className="w-full h-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors z-10" />
                      <div className="w-full h-full transition-transform duration-700 group-hover:scale-105 origin-center">
                        <img 
                          src={SaasDashboardImage} 
                          alt="SaaS Dashboard" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-white/90 to-transparent">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-black/60 font-medium mb-1">{project.category}</p>
                          <h3 className="text-2xl md:text-3xl font-bold text-black">{project.title}</h3>
                          <p className="text-black/60 text-sm mt-2">{project.metric}</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </a>
                ) : project.id === 6 ? (
                  <a 
                    href="https://dribbble.com/shots/26881347-Finex-AI-Based-Expense-Tracker-Web-Landing-Page?utm_source=Clipboard_Shot&utm_campaign=AL_RafI001&utm_content=Finex%20-%20AI%20Based%20Expense%20Tracker%20Web%20Landing%20Page&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=AL_RafI001&utm_content=Finex%20-%20AI%20Based%20Expense%20Tracker%20Web%20Landing%20Page&utm_medium=Social_Share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <div className="w-full h-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors z-10" />
                      <div className="w-full h-full transition-transform duration-700 group-hover:scale-105 origin-center">
                        <svg viewBox="0 0 1920 1080" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                           <foreignObject width="1920" height="1080">
                              <Slide432 />
                           </foreignObject>
                        </svg>
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-white/90 to-transparent">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-black/60 font-medium mb-1">{project.category}</p>
                          <h3 className="text-2xl md:text-3xl font-bold text-black">{project.title}</h3>
                          <p className="text-black/60 text-sm mt-2">{project.metric}</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </a>
                ) : project.id === 8 ? (
                  <a 
                    href="https://dribbble.com/shots/26881458-Advera-Brand-Portfolio-web-landing-page-Conversion-focused?new_shot_upload=true&utm_source=Clipboard_Shot&utm_campaign=AL_RafI001&utm_content=Advera%20-%20Brand%20Portfolio%20web%20landing%20page%20(Conversion%20focused)&utm_medium=Social_Share&utm_source=Clipboard_Shot&utm_campaign=AL_RafI001&utm_content=Advera%20-%20Brand%20Portfolio%20web%20landing%20page%20(Conversion%20focused)&utm_medium=Social_Share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full h-full"
                  >
                    <div className="w-full h-full relative overflow-hidden">
                      <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors z-10" />
                      <div className="w-full h-full transition-transform duration-700 group-hover:scale-105 origin-center">
                        <img 
                          src={AdveraPortfolioImage} 
                          alt="Advera Portfolio" 
                          className="w-full h-full object-cover" 
                        />
                      </div>
                    </div>
                    <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-white/90 to-transparent">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-black/60 font-medium mb-1">{project.category}</p>
                          <h3 className="text-2xl md:text-3xl font-bold text-black">{project.title}</h3>
                          <p className="text-black/60 text-sm mt-2">{project.metric}</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </a>
                ) : (
                  <Link to={`/work/${project.id}`} className="block w-full h-full">
                    {project.id === 1 ? (
                      <div className="w-full h-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors z-10" />
                        <div className="w-full h-full transition-transform duration-700 group-hover:scale-105 origin-center">
                          <svg viewBox="0 0 1920 1080" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                             <foreignObject width="1920" height="1080">
                                <ThankYou />
                             </foreignObject>
                          </svg>
                        </div>
                      </div>
                    ) : project.id === 2 ? (
                      <div className="w-full h-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors z-10" />
                        <div className="w-full h-full transition-transform duration-700 group-hover:scale-105 origin-center">
                          <svg viewBox="0 0 1170 1195" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                             <foreignObject width="1170" height="1195">
                                <FlowTrack />
                             </foreignObject>
                          </svg>
                        </div>
                      </div>
                    ) : project.id === 4 ? (
                      <div className="w-full h-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors z-10" />
                        <div className="w-full h-full transition-transform duration-700 group-hover:scale-105 origin-center">
                          <svg viewBox="0 0 1440 1024" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                             <foreignObject width="1440" height="1024">
                                <Dashboard />
                             </foreignObject>
                          </svg>
                        </div>
                      </div>
                    ) : project.id === 7 ? (
                      <div className="w-full h-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors z-10" />
                        <div className="w-full h-full transition-transform duration-700 group-hover:scale-105 origin-center">
                          <img 
                            src={AdveraHeroImage} 
                            alt="Advera Branding" 
                            className="w-full h-full object-cover" 
                          />
                        </div>
                      </div>
                    ) : (
                      <>
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-black/10 transition-colors z-10" />
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                        />
                      </>
                    )}
                    
                    <div className="absolute bottom-0 left-0 p-8 z-20 w-full bg-gradient-to-t from-white/90 to-transparent">
                      <div className="flex justify-between items-end">
                        <div>
                          <p className="text-black/60 font-medium mb-1">{project.category}</p>
                          <h3 className="text-2xl md:text-3xl font-bold text-black">{project.title}</h3>
                          <p className="text-black/60 text-sm mt-2">{project.metric}</p>
                        </div>
                        <div className="w-12 h-12 rounded-full bg-white/80 backdrop-blur-md flex items-center justify-center group-hover:bg-black group-hover:text-white transition-all shadow-sm">
                          <ArrowUpRight className="w-5 h-5" />
                        </div>
                      </div>
                    </div>
                  </Link>
                )}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* External Portfolios */}
        <div className="mt-24 pt-12 border-t border-black/10">
          <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
             <h2 className="text-2xl font-bold tracking-tight text-black">More Work Elsewhere</h2>
             <p className="text-black/60 max-w-md">Check out my experimental work, UI snippets, and detailed presentations on other platforms.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a 
              href="https://dribbble.com/AL_RafI001" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-8 rounded-2xl bg-gray-50 border border-black/5 hover:border-black/20 hover:bg-white transition-all group duration-300"
              aria-label="Visit Dribbble Profile"
            >
              <div className="flex items-center gap-5">
                 <div className="w-12 h-12 rounded-full overflow-hidden group-hover:scale-110 transition-transform shadow-sm">
                   <DribbbleIcon />
                 </div>
                 <div>
                   <h3 className="text-lg font-bold text-black group-hover:text-[#ea4c89] transition-colors">Dribbble</h3>
                   <p className="text-black/60 text-sm">UI Snapshots & Experiments</p>
                 </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-black/30 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>

            <a 
              href="https://www.behance.net/AR_khandoker" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center justify-between p-8 rounded-2xl bg-gray-50 border border-black/5 hover:border-black/20 hover:bg-white transition-all group duration-300"
              aria-label="Visit Behance Profile"
            >
              <div className="flex items-center gap-5">
                 <div className="w-12 h-12 rounded-full overflow-hidden group-hover:scale-110 transition-transform shadow-sm">
                   <BehanceIcon />
                 </div>
                 <div>
                   <h3 className="text-lg font-bold text-black group-hover:text-[#0057ff] transition-colors">Behance</h3>
                   <p className="text-black/60 text-sm">Case Studies & Portfolios</p>
                 </div>
              </div>
              <ArrowUpRight className="w-5 h-5 text-black/30 group-hover:text-black group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" />
            </a>
          </div>
        </div>
      </div>
      <StickyCTA />
    </div>
  );
}