import React from 'react';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export function TestimonialPreview() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6 text-center">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           whileInView={{ opacity: 1, scale: 1 }}
           viewport={{ once: true }}
           className="max-w-4xl mx-auto"
        >
          <div className="flex justify-center gap-1 mb-8 text-black">
            {[1, 2, 3, 4, 5].map(i => <Star key={i} fill="currentColor" className="w-6 h-6" />)}
          </div>
          <h3 className="text-3xl md:text-5xl font-medium leading-tight mb-10 text-black">
            "The most detail-oriented designer we've worked with. The conversion rate of our new landing page increased by <span className="text-black decoration-black underline underline-offset-4 decoration-2">240%</span> within the first month."
          </h3>
          <div className="flex items-center justify-center gap-4">
            <img 
              src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop" 
              alt="Sarah Jenkins" 
              className="w-16 h-16 rounded-full object-cover border-2 border-black/10"
            />
            <div className="text-left">
              <p className="text-black font-bold text-lg">Sarah Jenkins</p>
              <p className="text-black/40 text-sm">CMO at TechFlow</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
