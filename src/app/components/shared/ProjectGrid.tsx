import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import type { Project } from '../../types';

// ── Layout helpers ─────────────────────────────────────────────────────────────
// Repeating group of 3: full | half half | full | half half | …
function isFullWidth(index: number): boolean {
  return index % 3 === 0;
}

// Second card in a half-pair gets a small stagger delay
function enterDelay(index: number): number {
  return index % 3 === 2 ? 0.12 : 0;
}

// Category gradient fallback when there is no image
const CATEGORY_GRADIENT: Record<string, string> = {
  'Product Design':   'from-slate-700 to-slate-900',
  'Mobile Product':   'from-indigo-800 to-slate-900',
  'Landing Page':     'from-violet-800 to-purple-900',
  'Branding':         'from-amber-800 to-orange-900',
  'Fintech':          'from-emerald-800 to-teal-900',
  'SaaS Dashboard':   'from-blue-800 to-cyan-900',
  'Health & Fitness': 'from-green-800 to-emerald-900',
  'Retail':           'from-rose-800 to-pink-900',
};
const fallbackGradient = (cat: string) =>
  CATEGORY_GRADIENT[cat] ?? 'from-zinc-700 to-zinc-900';

// ── Image ─────────────────────────────────────────────────────────────────────
function CardImage({ project }: { project: Project }) {
  if (project.imageType === 'component' && project.imageComponent) {
    const Comp = project.imageComponent;
    return (
      <div className="absolute inset-0 transition-transform duration-700 ease-out group-hover:scale-[1.04]">
        <svg
          viewBox={project.svgViewBox ?? '0 0 1920 1080'}
          className="w-full h-full"
          preserveAspectRatio="xMidYMid slice"
        >
          <foreignObject width="100%" height="100%">
            <Comp />
          </foreignObject>
        </svg>
      </div>
    );
  }

  const src = project.imageType === 'figma' ? project.figmaAsset : project.image;
  if (src) {
    return (
      <img
        src={src}
        alt={project.title}
        loading="lazy"
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
      />
    );
  }

  return (
    <div
      className={`absolute inset-0 bg-gradient-to-br ${fallbackGradient(project.category)}`}
    />
  );
}

// ── Card ──────────────────────────────────────────────────────────────────────
function ProjectCard({
  project,
  index,
  full,
}: {
  project: Project;
  index: number;
  full: boolean;
}) {
  const external  = project.link || project.externalLink;
  const href      = external || `/work/${project.id}`;
  const isExternal = !!external;

  const inner = (
    <>
      {/* image layer */}
      <div className="absolute inset-0 overflow-hidden">
        <CardImage project={project} />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-0 bg-[#a855f7]/0 group-hover:bg-[#a855f7]/10 transition-colors duration-500" />
      </div>

      {/* index */}
      <div className="absolute top-5 left-5 z-10 select-none">
        <span className="text-[11px] font-bold tabular-nums tracking-widest text-white/40">
          {String(index + 1).padStart(2, '0')}
        </span>
      </div>

      {/* category pill */}
      <div className="absolute top-5 right-5 z-10 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/15">
        <span className="text-[11px] font-semibold text-white/80 tracking-wider uppercase">
          {project.category}
        </span>
      </div>

      {/* bottom bar */}
      <div className="absolute bottom-0 left-0 right-0 z-10 p-6 md:p-7">
        <div className="flex items-end justify-between gap-4">
          <div className="flex-1 min-w-0">
            <p className="text-white/45 text-[11px] font-semibold uppercase tracking-widest mb-2">
              {project.metric}
            </p>
            <h3
              className={`font-bold text-white leading-tight truncate ${
                full ? 'text-xl md:text-3xl' : 'text-lg md:text-xl'
              }`}
            >
              {project.title}
            </h3>
          </div>
          <div className="shrink-0 w-10 h-10 rounded-full border border-white/20 bg-white/10 backdrop-blur-sm flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 text-white group-hover:text-black transition-colors duration-300" />
          </div>
        </div>
      </div>
    </>
  );

  const linkClass =
    'group relative block w-full h-full rounded-2xl overflow-hidden cursor-pointer transition-shadow duration-300 hover:shadow-2xl';

  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.55, delay: enterDelay(index), ease: [0.22, 1, 0.36, 1] }}
      className={[
        full ? 'col-span-2' : 'col-span-2 md:col-span-1',
        full ? 'h-[56vh] min-h-[340px]' : 'h-[42vh] min-h-[260px]',
      ].join(' ')}
    >
      {isExternal ? (
        <a href={href} target="_blank" rel="noopener noreferrer" className={linkClass}>
          {inner}
        </a>
      ) : (
        <Link to={href} className={linkClass}>
          {inner}
        </Link>
      )}
    </motion.div>
  );
}

// ── Grid ──────────────────────────────────────────────────────────────────────
export function ProjectGrid({ projects }: { projects: Project[] }) {
  if (!projects.length) return null;

  return (
    <div className="grid grid-cols-2 gap-4 md:gap-5 mb-16">
      {projects.map((p, i) => (
        <ProjectCard key={p.id} project={p} index={i} full={isFullWidth(i)} />
      ))}
    </div>
  );
}
