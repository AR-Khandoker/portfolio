import React from 'react';

interface TimelineItem {
  title: string;
  subtitle: string;
  date: string;
  description: string;
}

interface TimelineProps {
  items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
  return (
    <div className="space-y-12 border-l border-black/10 ml-3 pl-8 relative">
      {items.map((item, i) => (
        <div key={i} className="relative">
          <div className="absolute -left-[37px] top-1.5 w-4 h-4 rounded-full bg-white border-2 border-black/20" />
          <h4 className="text-xl font-bold text-black">{item.title}</h4>
          <p className="text-black/60 font-medium">{item.subtitle}</p>
          <p className="text-black/40 text-sm font-mono mb-2">{item.date}</p>
          <p className="text-black/60 leading-relaxed">{item.description}</p>
        </div>
      ))}
    </div>
  );
}
