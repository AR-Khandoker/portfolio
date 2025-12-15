import { motion } from 'motion/react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';
import { StickyCTA } from '../components/shared/StickyCTA';
import { 
  Layout, 
  Zap, 
  PenTool, 
  Search, 
  ArrowRight,
  CheckCircle,
  Users,
  Clock,
  Globe
} from 'lucide-react';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';

const services = [
  {
    icon: <Layout className="w-8 h-8" />,
    title: "Product Design",
    description: "End-to-end product design from concept to handoff. I build scalable design systems and intuitive interfaces."
  },
  {
    icon: <Zap className="w-8 h-8" />,
    title: "UX Strategy",
    description: "Deep dive research, user journey mapping, and information architecture to ensure your product solves real problems."
  },
  {
    icon: <PenTool className="w-8 h-8" />,
    title: "UI Systems",
    description: "Creating comprehensive component libraries and style guides that ensure consistency and speed up development."
  },
  {
    icon: <Search className="w-8 h-8" />,
    title: "Design Audit",
    description: "Expert review of your existing product to identify usability issues and conversion bottlenecks."
  }
];

const process = [
  { step: "01", title: "Discovery", desc: "Understanding your business goals and user needs." },
  { step: "02", title: "Strategy", desc: "Defining the roadmap and information architecture." },
  { step: "03", title: "Design", desc: "Iterative prototyping and high-fidelity visual design." },
  { step: "04", title: "Handoff", desc: "Pixel-perfect specs and support for your dev team." }
];

export function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      <div className="pt-32 pb-20 container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-20"
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
                <BreadcrumbPage>Services</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tighter mb-6 text-black">Expertise.</h1>
          <p className="text-xl text-black/60 leading-relaxed">
            I help startups and enterprise clients build digital products that are as beautiful as they are functional. My process is transparent, collaborative, and results-driven.
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-32">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-8 rounded-2xl bg-black/5 border border-black/5 hover:border-black/20 transition-colors group"
            >
              <div className="w-16 h-16 rounded-full bg-white flex items-center justify-center mb-6 text-black group-hover:text-secondary transition-colors shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4 text-black">{service.title}</h3>
              <p className="text-black/60 leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Process */}
        <div className="mb-32">
          <h2 className="text-3xl md:text-5xl font-bold mb-16 text-black">How I Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {process.map((step, i) => (
              <div key={step.step} className="relative">
                <div className="text-6xl font-bold text-black/5 mb-4">{step.step}</div>
                <h3 className="text-xl font-bold mb-2 text-black">{step.title}</h3>
                <p className="text-black/60 text-sm">{step.desc}</p>
                {i < 3 && <div className="hidden md:block absolute top-8 -right-4 w-8 h-[1px] bg-black/10" />}
              </div>
            ))}
          </div>
        </div>

        {/* Pricing Cues */}
        <div className="bg-[#FAFAFA] rounded-3xl p-12 border border-black/5 text-center">
          <h2 className="text-3xl font-bold mb-6 text-black">Ready to start?</h2>
          <p className="text-black/60 mb-10 max-w-lg mx-auto">
            Whether you need a full product overhaul or a specific design sprint, I have flexible engagement models.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left max-w-4xl mx-auto">
            <div className="p-6 rounded-xl bg-white border border-black/5 shadow-sm">
              <h4 className="font-bold text-lg mb-2 text-black">Design Sprint</h4>
              <p className="text-sm text-black/50 mb-4">Quick validation & prototyping</p>
              <div className="text-black font-medium">2 Weeks</div>
            </div>
            <div className="p-6 rounded-xl bg-white border border-black/10 relative overflow-hidden shadow-md ring-1 ring-black/5">
               <div className="absolute top-0 right-0 bg-secondary text-black text-[10px] font-bold px-2 py-1">POPULAR</div>
              <h4 className="font-bold text-lg mb-2 text-black">Product Overhaul</h4>
              <p className="text-sm text-black/50 mb-4">Full redesign & system</p>
              <div className="text-black font-medium">4-8 Weeks</div>
            </div>
            <div className="p-6 rounded-xl bg-white border border-black/5 shadow-sm">
              <h4 className="font-bold text-lg mb-2 text-black">Retainer</h4>
              <p className="text-sm text-black/50 mb-4">Ongoing design support</p>
              <div className="text-black font-medium">Monthly</div>
            </div>
          </div>
          <div className="mt-12">
            <Button size="lg" className="bg-black text-white hover:bg-secondary hover:text-black rounded-full px-8 transition-colors duration-300" asChild>
              <Link to="/contact">Book a Discovery Call</Link>
            </Button>
          </div>
        </div>
      </div>
      <StickyCTA />
    </div>
  );
}