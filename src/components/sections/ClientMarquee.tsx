import React from 'react';
import { motion } from 'motion/react';

const clients = [
  "Google", "Spotify", "Airbnb", "Stripe", "Uber", "Netflix", "Adobe", "Figma", "Shopify"
];

export function ClientMarquee() {
  return (
    <div className="py-12 bg-white border-y border-black/5 overflow-hidden">
      <div className="flex relative">
        <motion.div 
          className="flex gap-16 whitespace-nowrap px-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
        >
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <span key={`${client}-${i}`} className="text-2xl md:text-3xl font-bold text-black/20 uppercase tracking-tighter">
              {client}
            </span>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
