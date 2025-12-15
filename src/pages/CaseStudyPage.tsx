import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'motion/react';
import { ArrowLeft, ArrowRight, X } from 'lucide-react';
import LandingPage from '../imports/LandingPage';
import ThankYou from '../imports/ThankYou';
import FlowTrack from '../imports/Frame1000003093';
import Dashboard from '../imports/Dashboard';
import Cover from '../imports/Cover';
import AdveraHeroImage from 'figma:asset/4fd165c17e93579fe56f7a8dcc6bb4ebf02c7b0c.png';
import AdveraVisuals from '../imports/Branding';
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

// Mock Data
const caseStudies = {
  "1": {
    title: "Recruit HRM Platform",
    category: "SaaS Product Design",
    heroImage: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?q=80&w=2000&auto=format&fit=crop",
    role: "Lead Designer",
    timeline: "4 Months",
    challenge: "HR teams struggle with fragmented tools for payroll, attendance, and compliance, leading to errors and operational inefficiency.",
    solution: "We designed a unified, automated HRM platform that simplifies complex workflows into an intuitive dashboard for teams of all sizes.",
    impact: [
      { label: "Time Saved", value: "60%" },
      { label: "Active Users", value: "2.3M+" },
      { label: "Satisfaction", value: "98%" }
    ]
  },
  "2": {
    title: "FlowTrack",
    category: "Mobile Product",
    heroImage: "",
    role: "Product Designer",
    timeline: "2 Months",
    challenge: "Building consistent habits is difficult without visual reinforcement and intelligent feedback loops.",
    solution: "FlowTrack utilizes AI to analyze daily routines and suggests optimal times for habit execution, visualizing progress with beautiful data streaks.",
    impact: [
      { label: "User Consistency", value: "+15%" },
      { label: "App Store Rating", value: "4.9" },
      { label: "Daily Active", value: "85%" }
    ]
  },
  "3": {
    title: "SaaS Dashboard",
    category: "UI Systems",
    heroImage: "https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1000&auto=format&fit=crop",
    role: "UI Designer",
    timeline: "3 Weeks",
    challenge: "Designing a complex dashboard that remains intuitive and accessible for non-technical users.",
    solution: "We created a clean, modular design system with clear visual hierarchy and customizable widgets.",
    impact: [
      { label: "Efficiency", value: "+30%" },
      { label: "Errors", value: "-15%" },
      { label: "Adoption", value: "90%" }
    ]
  },
  "4": {
    title: "FlowTrack Web Dashboard",
    category: "SaaS Dashboard",
    heroImage: "",
    role: "Lead Product Designer",
    timeline: "3 Months",
    challenge: "Users needed a comprehensive desktop view to analyze long-term habit trends and manage their routines efficiently.",
    solution: "We designed a modular, widget-based dashboard that provides deep insights into habit consistency, focus scores, and AI-driven recommendations.",
    impact: [
      { label: "Retention", value: "+25%" },
      { label: "Desktop Usage", value: "40%" },
      { label: "NPS Score", value: "72" }
    ]
  },
  "6": {
    title: "Finex",
    category: "Fintech",
    heroImage: "",
    role: "Product Designer",
    timeline: "2 Months",
    challenge: "Traditional banking apps are cluttered and hard to navigate, discouraging users from managing their finances effectively.",
    solution: "We created Finex, a clean and intuitive mobile wallet that simplifies wealth management with clear visualizations and zero friction.",
    impact: [
      { label: "Transactions", value: "+45%" },
      { label: "User Growth", value: "2x" },
      { label: "Engagement", value: "85%" }
    ]
  },
  "7": {
    title: "Advera",
    category: "Branding",
    heroImage: "",
    role: "Brand Designer",
    timeline: "1 Month",
    challenge: "Creating a distinct visual identity for a marketing agency that stands out in a crowded market.",
    solution: "A bold, modern brand system using vibrant gradients and clean typography to convey innovation and trust.",
    impact: [
      { label: "Brand Recall", value: "High" },
      { label: "Leads", value: "+40%" },
      { label: "Social", value: "10k+" }
    ]
  },
  "default": {
    title: "Project Title",
    category: "Category",
    heroImage: "https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&w=2000&auto=format&fit=crop",
    role: "Designer",
    timeline: "Duration",
    challenge: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    solution: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    impact: [
      { label: "Metric 1", value: "+20%" },
      { label: "Metric 2", value: "2x" },
      { label: "Metric 3", value: "10k" }
    ]
  }
};

function LandingPagePreview() {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        // LandingPage is 1440px wide
        setScale(Math.min(width / 1440, 1));
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div ref={containerRef} className="w-full relative overflow-hidden bg-white rounded-xl shadow-2xl border border-black/5" style={{ height: 9615 * scale }}>
      <div className="absolute top-0 left-0 origin-top-left" style={{ transform: `scale(${scale})`, width: 1440, height: 9615 }}>
        <LandingPage />
      </div>
    </div>
  );
}

export function CaseStudyPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const data = caseStudies[id as keyof typeof caseStudies] || caseStudies["default"];
  const { scrollY } = useScroll();
  const yHero = useTransform(scrollY, [0, 500], [0, 200]);
  const [showFixedNav, setShowFixedNav] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  useEffect(() => {
    const handleScroll = () => {
      setShowFixedNav(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white min-h-screen">
      
      {/* Floating Navigation Bar - appears on scroll */}
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ 
          y: showFixedNav ? 0 : -100, 
          opacity: showFixedNav ? 1 : 0 
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-black/10 shadow-sm"
      >
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <button 
            onClick={() => navigate('/work')}
            className="flex items-center gap-2 text-black hover:text-black/60 transition-colors group"
          >
            <div className="w-10 h-10 rounded-full bg-black/5 group-hover:bg-secondary flex items-center justify-center transition-all">
              <ArrowLeft className="w-5 h-5" />
            </div>
            <span className="font-medium hidden sm:inline">Back to Work</span>
          </button>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:block">
              <p className="text-xs text-black/40 uppercase tracking-wider">{data.category}</p>
              <p className="font-medium text-black">{data.title}</p>
            </div>
            <button 
              onClick={() => navigate('/work')}
              className="w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-all"
            >
              <X className="w-5 h-5 text-black" />
            </button>
          </div>
        </div>
      </motion.div>

      {/* Hero Banner */}
      <div className="relative h-[80vh] overflow-hidden">
        {/* Prominent Back Button in Hero */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="absolute top-24 left-6 md:left-12 z-20"
        >
          <button
            onClick={() => navigate('/work')}
            className="group flex items-center gap-3 px-6 py-3 bg-white/90 backdrop-blur-md hover:bg-white border border-white/20 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
          >
            <div className="w-8 h-8 rounded-full bg-black text-white group-hover:bg-secondary group-hover:text-black flex items-center justify-center transition-all">
              <ArrowLeft className="w-4 h-4" />
            </div>
            <span className="font-medium text-black pr-1">Back to Work</span>
          </button>
        </motion.div>
        
        <motion.div 
          style={{ y: yHero }}
          className="absolute inset-0"
        >
          {id === "1" ? (
             <div className="w-full h-full relative">
                <svg viewBox="0 0 1920 1080" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <foreignObject width="1920" height="1080">
                     <ThankYou />
                  </foreignObject>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
             </div>
          ) : id === "2" ? (
             <div className="w-full h-full relative">
                <svg viewBox="0 0 1170 1195" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <foreignObject width="1170" height="1195">
                     <FlowTrack />
                  </foreignObject>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
             </div>
          ) : id === "4" ? (
             <div className="w-full h-full relative">
                <svg viewBox="0 0 1440 1024" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <foreignObject width="1440" height="1024">
                     <Dashboard />
                  </foreignObject>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
             </div>
          ) : id === "6" ? (
             <div className="w-full h-full relative">
                <svg viewBox="0 0 1920 1080" className="w-full h-full" preserveAspectRatio="xMidYMid slice">
                  <foreignObject width="1920" height="1080">
                     <Cover />
                  </foreignObject>
                </svg>
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
             </div>
          ) : id === "7" ? (
             <div className="w-full h-full relative">
                <img 
                  src={AdveraHeroImage} 
                  alt="Advera Branding" 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
             </div>
          ) : (
             <>
               <img src={data.heroImage} alt={data.title} className="w-full h-full object-cover opacity-90" />
               <div className="absolute inset-0 bg-gradient-to-t from-white via-white/20 to-transparent" />
             </>
          )}
        </motion.div>
        
        <div className="absolute bottom-0 left-0 w-full p-6 pb-20 container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Breadcrumb className="mb-6">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/work">Work</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage className="line-clamp-1">{data.title}</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <p className="text-black font-medium mb-4">{data.category}</p>
            <h1 className="text-5xl md:text-8xl font-bold tracking-tighter mb-8 max-w-4xl text-black">{data.title}</h1>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-black/20 pt-8">
              <div>
                <p className="text-black/40 text-sm mb-1">Role</p>
                <p className="font-medium text-black">{data.role}</p>
              </div>
              <div>
                <p className="text-black/40 text-sm mb-1">Timeline</p>
                <p className="font-medium text-black">{data.timeline}</p>
              </div>
              <div>
                <p className="text-black/40 text-sm mb-1">Tools</p>
                <p className="font-medium text-black">Figma, React</p>
              </div>
              <div>
                <p className="text-black/40 text-sm mb-1">Year</p>
                <p className="font-medium text-black">2023</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-24 max-w-5xl">
        {/* Challenge & Solution */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-32">
          <section>
            <h2 className="text-3xl font-bold mb-6 text-black">The Challenge</h2>
            <p className="text-xl text-black/60 leading-relaxed">{data.challenge}</p>
          </section>
          <section>
            <h2 className="text-3xl font-bold mb-6 text-black">The Solution</h2>
            <p className="text-xl text-black/60 leading-relaxed">{data.solution}</p>
          </section>
        </div>

        {/* Impact Stats */}
        <div className="bg-[#FAFAFA] border border-black/5 rounded-3xl p-12 mb-32">
          <h2 className="text-2xl font-bold mb-12 text-center text-black">Project Impact</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {data.impact.map((stat, i) => (
              <div key={i}>
                <div className="text-5xl md:text-6xl font-bold text-black mb-2">{stat.value}</div>
                <p className="text-black/60">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Visuals / Process Mockups */}
        <div className="space-y-16 mb-32">
          {id === "1" ? (
            <div className="w-full">
              <h2 className="text-2xl font-bold mb-8 text-black">Final Design</h2>
              <LandingPagePreview />
            </div>
          ) : id === "2" ? (
            <div className="w-full flex justify-center bg-[#FDF8F3] py-20 rounded-xl">
               <div className="relative w-full max-w-3xl aspect-square">
                   <svg viewBox="0 0 1170 1195" className="w-full h-full">
                      <foreignObject width="1170" height="1195">
                         <FlowTrack />
                      </foreignObject>
                   </svg>
               </div>
            </div>
          ) : id === "4" ? (
            <div className="w-full flex justify-center bg-[#F0F4F8] py-20 rounded-xl">
               <div className="relative w-full max-w-6xl aspect-[1440/1024] shadow-2xl rounded-2xl overflow-hidden">
                   <svg viewBox="0 0 1440 1024" className="w-full h-full">
                      <foreignObject width="1440" height="1024">
                         <Dashboard />
                      </foreignObject>
                   </svg>
               </div>
            </div>
          ) : id === "6" ? (
            <div className="w-full flex justify-center bg-[#F5F5F0] py-20 rounded-xl">
               <div className="relative w-full max-w-6xl aspect-[1920/1080] shadow-2xl rounded-2xl overflow-hidden">
                   <svg viewBox="0 0 1920 1080" className="w-full h-full">
                      <foreignObject width="1920" height="1080">
                         <Cover />
                      </foreignObject>
                   </svg>
               </div>
            </div>
          ) : id === "7" ? (
            <div className="w-full flex justify-center bg-black py-20 rounded-xl">
               <div className="relative w-full max-w-6xl aspect-[1809/3500] shadow-2xl rounded-2xl overflow-hidden">
                   <svg viewBox="0 0 1809 3500" className="w-full h-full">
                      <foreignObject width="1809" height="3500">
                         <AdveraVisuals />
                      </foreignObject>
                   </svg>
               </div>
            </div>
          ) : (
            <>
              <div className="aspect-video bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-black/5">
                 <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2000&auto=format&fit=crop" alt="Process 1" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                 <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-black/5">
                    <img src="https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=1000&auto=format&fit=crop" alt="Process 2" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                 </div>
                 <div className="aspect-[4/3] bg-gray-100 rounded-2xl overflow-hidden shadow-lg border border-black/5">
                    <img src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1000&auto=format&fit=crop" alt="Process 3" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
                 </div>
              </div>
            </>
          )}
        </div>

        {/* Next Project Navigation */}
        <div className="border-t border-black/10 pt-20 flex justify-between items-center">
          <Link to="/work" className="text-black/60 hover:text-black flex items-center gap-2">
            <ArrowLeft className="w-4 h-4" /> All Projects
          </Link>
          <Link to="/work" className="text-2xl md:text-4xl font-bold hover:text-black/60 transition-colors flex items-center gap-4 text-black">
            Next Project <ArrowRight className="w-8 h-8" />
          </Link>
        </div>

      </div>
      <StickyCTA />
    </div>
  );
}