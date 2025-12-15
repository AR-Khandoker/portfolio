import React from 'react';
import { 
  Award, 
  Users, 
  Heart, 
  ArrowRight, 
  Download,
  Briefcase,
  Code,
  Palette,
  Target,
  Globe,
  Zap,
  Lightbulb,
  CheckCircle,
} from 'lucide-react';
import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { StickyCTA } from '../components/shared/StickyCTA';
import { Link } from 'react-router-dom';
import { Timeline } from '../components/shared/Timeline';
import { ScrollReveal } from '../components/shared/ScrollReveal';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';
import designerPortrait from 'figma:asset/459dc648b1cd15ce7d834e6ca0f4ebb46995942f.png';

export function AboutPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Hero */}
      <div className="pt-32 pb-20 container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="lg:sticky lg:top-32"
          >
            <div className="aspect-[3/4] rounded-2xl overflow-hidden relative grayscale hover:grayscale-0 transition-all duration-700">
              <img 
                src={designerPortrait} 
                alt="Portrait" 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex gap-4 mt-8">
              <Button variant="outline" className="w-full border-black/20 text-black hover:bg-black hover:text-white transition-colors" asChild>
                <a href="https://drive.google.com/file/d/1fLf8BONTW3WZq0-L72_-3fTCLSid2ve9/view?usp=sharing" target="_blank" rel="noopener noreferrer">
                  <Download className="mr-2 w-4 h-4" /> Download CV
                </a>
              </Button>
            </div>

            <div className="mt-12 space-y-8">
              {[
                { 
                  category: "Design", 
                  items: ["Auto Layout", "Design Systems", "Style Guides", "Wireframing", "User Flows", "Prototyping", "Design Strategy"] 
                },
                { 
                  category: "Motion Graphics", 
                  items: ["Animation", "Motion Posters", "Visual Effects", "3D Basics", "Storyboarding"] 
                },
                { 
                  category: "Research", 
                  items: ["Surveys", "Card Sorting", "A/B Testing", "Competitive Analysis", "User Journey Mapping"] 
                },
                { 
                  category: "Other", 
                  items: ["YouTube SEO", "Online/Offline SEO", "MS Office", "AI-based productivity tools"] 
                }
              ].map((skillSet, i) => (
                <div key={i}>
                  <h4 className="text-xs font-bold text-black uppercase tracking-wider mb-3 opacity-40">{skillSet.category}</h4>
                  <div className="flex flex-wrap gap-2">
                    {skillSet.items.map((skill, j) => (
                      <span key={j} className="px-3 py-1 bg-black/5 text-black/80 rounded-md text-sm font-medium hover:bg-black hover:text-white transition-colors cursor-default">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <Breadcrumb className="mb-8">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="/">Home</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>About</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
            <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-8 text-black">Designing for impact.</h1>
            <div className="space-y-6 text-xl text-black/60 leading-relaxed font-light">
              <p>
                I’m a Product Designer specializing in UI/UX and Motion Graphics, with experience spanning digital product design, system thinking, and visual storytelling. My work blends functional clarity with clean, modern aesthetics—crafting intuitive interfaces that feel effortless to use.
              </p>
              <p>
                My journey started in graphic design, evolved through brand strategy, video production, and web development, and matured into product design and UX. This multi-disciplinary background allows me to approach problems holistically, balancing usability, visual craft, and business impact.
              </p>
              <p>
                I believe great design is invisible—quietly powering user success. My approach is minimalist yet strategic, removing unnecessary noise to highlight what truly matters: clarity, usability, and measurable results.
              </p>
              <p>
                Today, I work as a UI/UX Designer at Powerman Local, shaping their end-to-end product experience across HRM, CRM, and internal tools. Beyond that, I’ve collaborated with agencies, tech startups, universities, and marketing teams to deliver digital experiences that improve efficiency, engagement, and brand perception.
              </p>
            </div>



            {/* Experience */}
            <div className="max-w-3xl mx-auto mt-20 mb-32">
                <ScrollReveal>
                    <h2 className="text-3xl font-bold mb-12 text-black">Experience</h2>
                    <Timeline items={[
                      { 
                        title: "Senior UI/UX Designer", 
                        subtitle: "Powerman Local", 
                        date: "Apr 2025 – Present",
                        description: "Crafting their product design from the ground up, maintaining UX & CX flows, and contributing to HRM and CRM development."
                      },
                      { 
                        title: "UI Designer (Remote)", 
                        subtitle: "Sawm Agency", 
                        date: "Jun 2024 – Nov 2024",
                        description: "Designed dashboards, super-admin panels, and full website redesigns for global clients."
                      },
                      { 
                        title: "Motion Graphic Designer", 
                        subtitle: "Daffodil Computers Ltd.", 
                        date: "Feb 2024 – Jun 2024",
                        description: "Produced motion graphics, brand visuals, and promotional content as a video editor and voiceover contributor."
                      },
                      { 
                        title: "Asst. Administrative Officer (Creative Wing)", 
                        subtitle: "Daffodil International University", 
                        date: "Aug 2023 – Dec 2023",
                        description: "Created university promotional visuals, editing content, and supporting communication media."
                      },
                      { 
                        title: "Brand Manager", 
                        subtitle: "Travel Network Bangladesh", 
                        date: "Jan 2023 – Mar 2023",
                        description: "Led brand and marketing strategy, ensuring cohesive communication across digital channels."
                      },
                      { 
                        title: "Graphic Designer (Intern)", 
                        subtitle: "Binary Pathshala", 
                        date: "Jun 2020 – Nov 2020",
                        description: "Designed thumbnails, banners, and handled SEO optimization for online content."
                      },
                    ]} />
                </ScrollReveal>
            </div>

            {/* Featured Projects */}
            <div className="mt-20">
               <h3 className="text-2xl font-bold mb-8 text-black">Latest Projects</h3>
               <div className="space-y-8">
                 {[
                   { name: "Scraggle – Campaign Management Tool", desc: "International donation management and delivery campaign platform (SaaS)." },
                   { name: "P.M. Local – HRM Tool", desc: "A full Human Resource Management system covering employees, tasks, expenses, and recruitment." }
                 ].map((project, i) => (
                   <div key={i} className="border-b border-black/10 pb-6 last:border-0">
                     <h4 className="text-lg font-bold text-black mb-1">{project.name}</h4>
                     <p className="text-black/60">{project.desc}</p>
                   </div>
                 ))}
               </div>
            </div>

            {/* Case Studies */}
            <div className="mt-12">
               <h3 className="text-2xl font-bold mb-8 text-black">Case Studies</h3>
               <div className="space-y-8">
                 {[
                   { name: "Flow Track", desc: "AI-powered habit tracking app — UX/UI case study." },
                   { name: "Advera", desc: "Modern marketing agency website — UX/UI case study." }
                 ].map((project, i) => (
                   <div key={i} className="border-b border-black/10 pb-6 last:border-0">
                     <h4 className="text-lg font-bold text-black mb-1">{project.name}</h4>
                     <p className="text-black/60">{project.desc}</p>
                   </div>
                 ))}
               </div>
            </div>

            {/* MVP Work */}
            <div className="mt-12">
               <h3 className="text-2xl font-bold mb-8 text-black">MVP Work</h3>
               <div className="space-y-8">
                 {[
                   { name: "Electrifying Australia", desc: "Company portfolio & quotation management platform." },
                   { name: "Algorify Labs", desc: "Agency portfolio & customer support website." }
                 ].map((project, i) => (
                   <div key={i} className="border-b border-black/10 pb-6 last:border-0">
                     <h4 className="text-lg font-bold text-black mb-1">{project.name}</h4>
                     <p className="text-black/60">{project.desc}</p>
                   </div>
                 ))}
               </div>
            </div>


          </motion.div>
        </div>
      </div>
      <StickyCTA />
    </div>
  );
}