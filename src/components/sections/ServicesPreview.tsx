import React from 'react';
import { motion } from 'motion/react';
import { Layout, Zap, PenTool, Search, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const services = [
  {
    icon: <Layout className="w-6 h-6" />,
    title: "Product Design",
    description: "End-to-end product design from concept to handoff."
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "UX Strategy",
    description: "Research, user journey mapping, and information architecture."
  },
  {
    icon: <PenTool className="w-6 h-6" />,
    title: "UI Systems",
    description: "Comprehensive component libraries and style guides."
  },
  {
    icon: <Search className="w-6 h-6" />,
    title: "Design Audit",
    description: "Expert review to identify usability issues and bottlenecks."
  }
];

export function ServicesPreview() {
  return (
    <section className="py-32 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-sm uppercase tracking-widest text-secondary font-medium mb-4">
              What I Do
            </p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tighter text-black mb-6">
              Services & Expertise
            </h2>
            <p className="text-xl text-black/60 leading-relaxed">
              From strategy to execution, I help bring digital products to life with clarity and precision.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-[#FAFAFA] border border-black/5 hover:border-black/20 hover:bg-white transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-full bg-white border border-black/10 flex items-center justify-center mb-6 text-black group-hover:bg-secondary group-hover:text-black group-hover:border-secondary transition-all shadow-sm">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold mb-3 text-black">
                {service.title}
              </h3>
              <p className="text-sm text-black/60 leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 h-12 border-black/10 hover:bg-black hover:text-white transition-all"
          >
            <Link to="/services">
              View All Services
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
