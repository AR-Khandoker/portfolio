import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Play, X, ArrowUpRight, Film } from 'lucide-react';
import { AnimatedSection, AnimatedText } from '../components/shared/AnimatedSection';
import { StickyCTA } from '../components/shared/StickyCTA';
import { useMotionVideos, type MotionVideo } from '../hooks/useMotionVideos';
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '../components/ui/breadcrumb';

// Static fallback — shown when backend has no data yet
const FALLBACK_VIDEOS: MotionVideo[] = [
  {
    id: 'f1',
    title: 'Brand Identity Animation',
    category: 'Motion Poster',
    description: 'Dynamic brand reveal animation blending typography, logo motion and colour storytelling into a seamless visual narrative.',
    thumbnail_url: 'https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&auto=format&fit=crop',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    client: 'Tech Startup',
    year: '2024',
    featured: true,
    order_index: 1,
  },
  {
    id: 'f2',
    title: 'Product Launch Reel',
    category: 'Visual Effects',
    description: 'High-energy product reveal with kinetic typography, particle effects and seamless scene transitions.',
    thumbnail_url: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&auto=format&fit=crop',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    client: 'Consumer Electronics',
    year: '2024',
    featured: false,
    order_index: 2,
  },
  {
    id: 'f3',
    title: 'University Promo Video',
    category: 'Brand Video',
    description: 'Full promotional video combining motion graphics, live footage overlays and brand typography.',
    thumbnail_url: 'https://images.unsplash.com/photo-1523580494863-6f3031224c94?w=800&auto=format&fit=crop',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    client: 'Daffodil International University',
    year: '2023',
    featured: false,
    order_index: 3,
  },
  {
    id: 'f4',
    title: 'App Onboarding Animation',
    category: 'Animation',
    description: 'Smooth micro-interaction system and onboarding flow animation that guides users through a fintech mobile app.',
    thumbnail_url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&auto=format&fit=crop',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    client: 'Finex',
    year: '2024',
    featured: true,
    order_index: 4,
  },
  {
    id: 'f5',
    title: 'Social Media Motion Pack',
    category: 'Motion Poster',
    description: 'A set of animated social media creatives with bold type, gradient transitions and looping poster designs.',
    thumbnail_url: 'https://images.unsplash.com/photo-1558655146-9f40138edfeb?w=800&auto=format&fit=crop',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    client: 'Rosy',
    year: '2026',
    featured: false,
    order_index: 5,
  },
  {
    id: 'f6',
    title: 'Agency Showreel',
    category: 'Brand Video',
    description: 'Cinematic agency showreel showcasing a full year of design and motion work with dynamic pacing and editorial cuts.',
    thumbnail_url: 'https://images.unsplash.com/photo-1536240478700-b869ad10e2c5?w=800&auto=format&fit=crop',
    video_url: 'https://www.youtube.com/embed/dQw4w9WgXcQ',
    client: 'Studio',
    year: '2025',
    featured: false,
    order_index: 6,
  },
];

const CATEGORIES = ['All', 'Animation', 'Motion Poster', 'Visual Effects', 'Brand Video', '3D', 'Storyboard'];

// ── Video Card ────────────────────────────────────────────────────────────────
function VideoCard({ video, onClick }: { video: MotionVideo; onClick: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 20 }}
      layout
      onClick={onClick}
      className="group relative cursor-pointer rounded-2xl overflow-hidden bg-gray-100 border border-black/5 hover:border-black/15 transition-all duration-300 shadow-sm hover:shadow-lg"
    >
      <div className="aspect-video relative overflow-hidden">
        {video.thumbnail_url ? (
          <img
            src={video.thumbnail_url}
            alt={video.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900" />
        )}
        <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors duration-300" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
            <Play className="w-6 h-6 text-black ml-1" fill="black" />
          </div>
        </div>

        <div className="absolute top-4 right-4 px-3 py-1.5 rounded-full bg-white/85 backdrop-blur-md shadow-sm">
          <span className="text-[11px] font-semibold text-black/55 tracking-wider uppercase">
            {video.category}
          </span>
        </div>

        {video.year && (
          <div className="absolute top-4 left-4 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md">
            <span className="text-[11px] font-medium text-white">{video.year}</span>
          </div>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-bold text-black text-lg leading-snug mb-1">{video.title}</h3>
            {video.client && (
              <p className="text-sm text-black/40 font-medium">{video.client}</p>
            )}
          </div>
          <div className="shrink-0 w-9 h-9 rounded-full border border-black/10 flex items-center justify-center group-hover:bg-black group-hover:border-black group-hover:text-white transition-all duration-300">
            <ArrowUpRight className="w-4 h-4" />
          </div>
        </div>
        {video.description && (
          <p className="text-sm text-black/55 leading-relaxed mt-3 line-clamp-2">
            {video.description}
          </p>
        )}
      </div>
    </motion.div>
  );
}

// ── Video Modal ───────────────────────────────────────────────────────────────
function VideoModal({ video, onClose }: { video: MotionVideo; onClose: () => void }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ opacity: 0, scale: 0.95, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.95, y: 20 }}
        transition={{ duration: 0.25 }}
        className="w-full max-w-4xl bg-white rounded-2xl overflow-hidden shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="aspect-video bg-black">
          {video.video_url ? (
            <iframe
              src={video.video_url + (video.video_url.includes('?') ? '&' : '?') + 'autoplay=1&rel=0'}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="w-full h-full"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center text-white/40">
              <Film className="w-12 h-12" />
            </div>
          )}
        </div>

        <div className="p-6 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-secondary mb-1">
              {video.category}
            </p>
            <h2 className="text-xl font-bold text-black">{video.title}</h2>
            {video.client && (
              <p className="text-sm text-black/50 mt-1">
                {video.client}{video.year ? ` · ${video.year}` : ''}
              </p>
            )}
            {video.description && (
              <p className="text-sm text-black/60 leading-relaxed mt-3 max-w-xl">
                {video.description}
              </p>
            )}
          </div>
          <button
            onClick={onClose}
            className="shrink-0 w-10 h-10 rounded-full bg-black/5 hover:bg-black/10 flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>
      </motion.div>
    </motion.div>
  );
}

// ── Page ──────────────────────────────────────────────────────────────────────
export function MotionGraphicsPage() {
  const [filter, setFilter] = useState('All');
  const [activeVideo, setActiveVideo] = useState<MotionVideo | null>(null);
  const { videos: backendVideos, loading } = useMotionVideos();

  // Use backend videos if available, otherwise show fallback
  const allVideos = backendVideos.length > 0 ? backendVideos : FALLBACK_VIDEOS;

  const filtered = allVideos.filter(
    (v) => filter === 'All' || v.category === filter,
  );

  return (
    <div className="bg-white min-h-screen relative">

      {/* ── Header ── */}
      <div className="pt-32 pb-12 container mx-auto px-6">

        <Breadcrumb className="mb-8">
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link to="/">Home</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild><Link to="/work">Work</Link></BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Motion Graphics</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>

        {/* Section tabs */}
        <div className="flex gap-2 mb-10">
          <Link
            to="/work"
            className="px-5 py-2 rounded-full border border-black/10 text-black/55 hover:border-black/35 hover:text-black text-sm font-medium transition-all duration-300"
          >
            Design Work
          </Link>
          <div className="px-5 py-2 rounded-full bg-black text-white text-sm font-medium">
            Motion Graphics
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <AnimatedText
            as="h1"
            splitBy="words"
            stagger={0.05}
            className="text-5xl md:text-7xl font-bold tracking-tighter text-black"
          >
            Motion Work
          </AnimatedText>
          <AnimatedSection animation="fade" delay={0.3}>
            <p className="text-black/35 text-sm tabular-nums">
              {loading ? '…' : `${filtered.length} ${filtered.length === 1 ? 'video' : 'videos'}`}
            </p>
          </AnimatedSection>
        </div>

        {/* Category filters */}
        <AnimatedSection animation="fade" delay={0.2}>
          <div className="flex flex-wrap gap-3">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-5 py-2 rounded-full border text-sm font-medium transition-all duration-300 ${
                  filter === cat
                    ? 'bg-black text-white border-black'
                    : 'bg-transparent text-black/55 border-black/10 hover:border-black/35 hover:text-black'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </AnimatedSection>
      </div>

      {/* ── Video grid ── */}
      <div className="container mx-auto px-6 pb-24">
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="rounded-2xl overflow-hidden bg-gray-100 animate-pulse">
                <div className="aspect-video bg-gray-200" />
                <div className="p-6 space-y-3">
                  <div className="h-5 bg-gray-200 rounded w-3/4" />
                  <div className="h-4 bg-gray-200 rounded w-1/2" />
                </div>
              </div>
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="bg-gray-50 border border-black/10 rounded-2xl p-12 text-center my-8">
            <Film className="w-10 h-10 text-black/20 mx-auto mb-4" />
            <p className="text-black/60 mb-1">No videos in this category</p>
            <p className="text-black/35 text-sm">Try selecting a different filter</p>
          </div>
        ) : (
          <AnimatePresence mode="popLayout">
            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((video) => (
                <VideoCard
                  key={video.id}
                  video={video}
                  onClick={() => setActiveVideo(video)}
                />
              ))}
            </motion.div>
          </AnimatePresence>
        )}
      </div>

      {/* ── Video modal ── */}
      <AnimatePresence>
        {activeVideo && (
          <VideoModal video={activeVideo} onClose={() => setActiveVideo(null)} />
        )}
      </AnimatePresence>

      <StickyCTA />
    </div>
  );
}
