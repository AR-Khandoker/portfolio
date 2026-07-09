/**
 * Admin Panel — Design Projects + Motion Graphics
 */

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import {
  Plus, Edit, Trash2, ArrowLeft, Save, X,
  Loader2, CheckCircle, Upload, LogOut, Film,
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Textarea } from '../components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../components/ui/select';
import { Switch } from '../components/ui/switch';
import { Card } from '../components/ui/card';
import { projectId, publicAnonKey } from '../utils/supabase/info';
import { supabase } from '../utils/supabase/client';

// ── Types ──────────────────────────────────────────────────────────────────
interface Project {
  id: string;
  title: string;
  category: string;
  metric: string;
  size: 'small' | 'large';
  image_url: string;
  featured: boolean;
  order_index: number;
  description?: string;
  client?: string;
  year?: string;
  link?: string;
}

interface MotionVideo {
  id: string;
  title: string;
  category: string;
  description: string;
  thumbnail_url: string;
  video_url: string;
  client?: string;
  year?: string;
  featured: boolean;
  order_index: number;
}

const MOTION_CATEGORIES = ['Animation', 'Motion Poster', 'Visual Effects', 'Brand Video', '3D', 'Storyboard'];

const API = (path: string) =>
  `https://${projectId}.supabase.co/functions/v1/make-server-4ba1cc9d${path}`;

const AUTH = { Authorization: `Bearer ${publicAnonKey}` };

// ── Image-upload hook ──────────────────────────────────────────────────────
function useImageUpload(onUploaded: (url: string) => void, onError: (msg: string) => void) {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState('');
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);

  const selectFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const f = e.target.files?.[0];
    if (!f) return;
    if (!f.type.startsWith('image/')) { onError('Please select an image file'); return; }
    if (f.size > 5 * 1024 * 1024) { onError('Image must be less than 5 MB'); return; }
    setFile(f);
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(f);
  };

  const upload = async (alreadyUploaded: boolean) => {
    if (!file) { onError('Select an image first'); return; }
    if (alreadyUploaded) return;
    setUploading(true);
    setProgress(0);
    const interval = setInterval(() => setProgress(p => Math.min(p + 10, 90)), 200);
    try {
      const fd = new FormData();
      fd.append('file', file);
      const res = await fetch(API('/upload-image'), { method: 'POST', headers: AUTH, body: fd });
      clearInterval(interval);
      setProgress(100);
      const data = await res.json();
      if (data.success) { onUploaded(data.url); setFile(null); }
      else { onError(data.error || 'Upload failed'); setPreview(''); }
    } catch {
      clearInterval(interval);
      onError('Upload failed');
      setPreview('');
    } finally { setUploading(false); setProgress(0); }
  };

  const reset = () => { setFile(null); setPreview(''); setProgress(0); };

  return { file, preview, setPreview, uploading, progress, selectFile, upload, reset };
}

// ── Main component ─────────────────────────────────────────────────────────────
export function AdminProjectsPage() {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState<'projects' | 'motion'>('projects');
  const [message, setMessage] = useState<{ type: 'success' | 'error'; text: string } | null>(null);

  const showMsg = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      localStorage.removeItem('admin_token');
      navigate('/admin/login');
    } catch { showMsg('error', 'Failed to logout'); }
  };

  // ── Design projects state ────────────────────────────────────────────────
  const [projects, setProjects] = useState<Project[]>([]);
  const [projectsLoading, setProjectsLoading] = useState(true);
  const [showProjectForm, setShowProjectForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [savingProject, setSavingProject] = useState(false);
  const [projectForm, setProjectForm] = useState<Partial<Project>>({
    title: '', category: '', metric: '', size: 'large',
    image_url: '', featured: false, order_index: 0,
    description: '', client: '', year: new Date().getFullYear().toString(), link: '',
  });

  const projectImg = useImageUpload(
    (url) => setProjectForm(f => ({ ...f, image_url: url })),
    showMsg,
  );

  const fetchProjects = async () => {
    setProjectsLoading(true);
    try {
      const res = await fetch(API('/projects'), { headers: AUTH });
      const data = await res.json();
      if (data.success) setProjects(data.projects);
    } catch { showMsg('error', 'Failed to load projects'); }
    finally { setProjectsLoading(false); }
  };

  useEffect(() => { fetchProjects(); }, []);

  const saveProject = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingProject(true);
    try {
      const url = editingProject ? API(`/projects/${editingProject.id}`) : API('/projects');
      const res = await fetch(url, {
        method: editingProject ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json', ...AUTH },
        body: JSON.stringify(projectForm),
      });
      const data = await res.json();
      if (data.success) {
        showMsg('success', editingProject ? 'Project updated!' : 'Project created!');
        fetchProjects();
        resetProjectForm();
      } else showMsg('error', data.error || 'Failed to save');
    } catch { showMsg('error', 'Failed to save project'); }
    finally { setSavingProject(false); }
  };

  const deleteProject = async (id: string) => {
    if (!confirm('Delete this project?')) return;
    try {
      const res = await fetch(API(`/projects/${id}`), { method: 'DELETE', headers: AUTH });
      const data = await res.json();
      if (data.success) { showMsg('success', 'Deleted!'); fetchProjects(); }
      else showMsg('error', 'Failed to delete');
    } catch { showMsg('error', 'Failed to delete'); }
  };

  const editProject = (p: Project) => {
    setEditingProject(p);
    setProjectForm(p);
    projectImg.setPreview(p.image_url || '');
    setShowProjectForm(true);
  };

  const resetProjectForm = () => {
    setProjectForm({
      title: '', category: '', metric: '', size: 'large',
      image_url: '', featured: false, order_index: projects.length + 1,
      description: '', client: '', year: new Date().getFullYear().toString(), link: '',
    });
    setEditingProject(null);
    setShowProjectForm(false);
    projectImg.reset();
  };

  // ── Motion videos state ──────────────────────────────────────────────────
  const [videos, setVideos] = useState<MotionVideo[]>([]);
  const [videosLoading, setVideosLoading] = useState(true);
  const [showVideoForm, setShowVideoForm] = useState(false);
  const [editingVideo, setEditingVideo] = useState<MotionVideo | null>(null);
  const [savingVideo, setSavingVideo] = useState(false);
  const [videoForm, setVideoForm] = useState<Partial<MotionVideo>>({
    title: '', category: 'Animation', description: '',
    thumbnail_url: '', video_url: '', client: '',
    year: new Date().getFullYear().toString(), featured: false, order_index: 0,
  });

  const videoImg = useImageUpload(
    (url) => setVideoForm(f => ({ ...f, thumbnail_url: url })),
    showMsg,
  );

  const fetchVideos = async () => {
    setVideosLoading(true);
    try {
      const res = await fetch(API('/projects'), { headers: AUTH });
      if (!res.ok) throw new Error(`Server error ${res.status}`);
      const data = await res.json();
      if (data.success) {
        const motionItems = (data.projects || [])
          .filter((p: any) => p.metric === '__motion__')
          .map((p: any): MotionVideo => ({
            id: p.id,
            title: p.title || '',
            category: p.category || 'Animation',
            description: p.description || '',
            thumbnail_url: p.image_url || '',
            video_url: p.link || '',
            client: p.client || '',
            year: p.year || '',
            featured: p.featured || false,
            order_index: p.order_index || 0,
          }))
          .sort((a: MotionVideo, b: MotionVideo) => a.order_index - b.order_index);
        setVideos(motionItems);
      } else showMsg('error', data.error || 'Failed to load videos');
    } catch (err) {
      showMsg('error', `Failed to load motion videos: ${err instanceof Error ? err.message : 'network error'}`);
    } finally { setVideosLoading(false); }
  };

  useEffect(() => {
    if (activeTab === 'motion') fetchVideos();
  }, [activeTab]);

  const saveVideo = async (e: React.FormEvent) => {
    e.preventDefault();
    setSavingVideo(true);
    try {
      // Motion videos are stored via the /projects endpoint with metric='__motion__'
      // thumbnail_url → image_url, video_url → link (matching the projects KV schema)
      const payload = {
        title: videoForm.title,
        category: videoForm.category,
        description: videoForm.description,
        image_url: videoForm.thumbnail_url,
        link: videoForm.video_url,
        client: videoForm.client,
        year: videoForm.year,
        featured: videoForm.featured,
        order_index: videoForm.order_index,
        metric: '__motion__',
        size: 'small',
      };
      const url = editingVideo ? API(`/projects/${editingVideo.id}`) : API('/projects');
      const res = await fetch(url, {
        method: editingVideo ? 'PUT' : 'POST',
        headers: { 'Content-Type': 'application/json', ...AUTH },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error(`Server error ${res.status}`);
      const data = await res.json();
      if (data.success) {
        showMsg('success', editingVideo ? 'Video updated!' : 'Video created!');
        fetchVideos();
        resetVideoForm();
      } else showMsg('error', data.error || 'Failed to save video');
    } catch (err) {
      showMsg('error', `Failed to save video: ${err instanceof Error ? err.message : 'network error'}`);
    } finally { setSavingVideo(false); }
  };

  const deleteVideo = async (id: string) => {
    if (!confirm('Delete this video?')) return;
    try {
      const res = await fetch(API(`/projects/${id}`), { method: 'DELETE', headers: AUTH });
      const data = await res.json();
      if (data.success) { showMsg('success', 'Deleted!'); fetchVideos(); }
      else showMsg('error', 'Failed to delete');
    } catch { showMsg('error', 'Failed to delete'); }
  };

  const editVideo = (v: MotionVideo) => {
    setEditingVideo(v);
    setVideoForm(v);
    videoImg.setPreview(v.thumbnail_url || '');
    setShowVideoForm(true);
  };

  const resetVideoForm = () => {
    setVideoForm({
      title: '', category: 'Animation', description: '',
      thumbnail_url: '', video_url: '', client: '',
      year: new Date().getFullYear().toString(), featured: false, order_index: videos.length + 1,
    });
    setEditingVideo(null);
    setShowVideoForm(false);
    videoImg.reset();
  };

  // ── Shared image upload UI ────────────────────────────────────────────────
  const ImageUploadField = ({
    label, hook, uploadedUrl, onClear,
  }: {
    label: string;
    hook: ReturnType<typeof useImageUpload>;
    uploadedUrl: string;
    onClear: () => void;
  }) => (
    <div>
      <Label>{label}</Label>
      {hook.preview && (
        <div className="mt-2 mb-3 relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
          <img src={hook.preview} alt="Preview" className="w-full h-full object-cover" />
          {uploadedUrl && (
            <div className="absolute top-2 right-2 flex gap-2">
              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                <CheckCircle className="w-3 h-3" /> Uploaded
              </span>
              <button type="button" onClick={onClear} className="bg-white/80 text-black text-xs px-2 py-1 rounded-full">Change</button>
            </div>
          )}
        </div>
      )}
      <div className="flex gap-2">
        <Input type="file" accept="image/*" onChange={hook.selectFile} disabled={hook.uploading} className="flex-1 cursor-pointer" />
        <Button
          type="button"
          onClick={() => hook.upload(!!uploadedUrl)}
          disabled={!hook.file || hook.uploading || !!uploadedUrl}
          className="bg-secondary text-black hover:bg-secondary/90 shrink-0"
        >
          {hook.uploading ? <><Loader2 className="w-4 h-4 mr-1 animate-spin" />{hook.progress}%</> : <><Upload className="w-4 h-4 mr-1" />Upload</>}
        </Button>
      </div>
      {hook.uploading && (
        <div className="mt-2 w-full bg-gray-200 rounded-full h-1.5">
          <div className="bg-secondary h-1.5 rounded-full transition-all" style={{ width: `${hook.progress}%` }} />
        </div>
      )}
      <p className="text-xs text-black/50 mt-1">Max 5 MB · JPG, PNG, WebP</p>
    </div>
  );

  // ── Render ─────────────────────────────────────────────────────────────────
  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Top nav */}
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors">
            <ArrowLeft className="w-4 h-4" /> Back to Site
          </Link>
          <Button onClick={handleLogout} variant="outline" className="text-black/60 hover:bg-red-50 hover:border-red-200">
            <LogOut className="w-4 h-4 mr-2" /> Logout
          </Button>
        </div>

        {/* Header */}
        <div className="flex items-end justify-between mb-6">
          <h1 className="text-4xl font-bold text-black">Admin Panel</h1>
          <Button
            onClick={() => activeTab === 'projects' ? setShowProjectForm(true) : setShowVideoForm(true)}
            className="bg-black text-white hover:bg-secondary hover:text-black transition-colors rounded-full px-6"
          >
            <Plus className="w-5 h-5 mr-2" />
            {activeTab === 'projects' ? 'Add Project' : 'Add Video'}
          </Button>
        </div>

        {/* Tabs */}
        <div className="flex gap-2 mb-8">
          <button
            onClick={() => setActiveTab('projects')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
              activeTab === 'projects' ? 'bg-black text-white' : 'bg-white text-black/60 border border-black/10 hover:border-black/30'
            }`}
          >
            Design Projects
          </button>
          <button
            onClick={() => setActiveTab('motion')}
            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              activeTab === 'motion' ? 'bg-black text-white' : 'bg-white text-black/60 border border-black/10 hover:border-black/30'
            }`}
          >
            <Film className="w-4 h-4" /> Motion Graphics
          </button>
        </div>

        {/* Toast */}
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
              className={`mb-6 p-4 rounded-lg flex items-center gap-3 border ${
                message.type === 'success'
                  ? 'bg-green-50 text-green-800 border-green-200'
                  : 'bg-red-50 text-red-800 border-red-200'
              }`}
            >
              {message.type === 'success' && <CheckCircle className="w-5 h-5 shrink-0" />}
              {message.text}
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── DESIGN PROJECTS TAB ───────────────────────────────────────────── */}
        {activeTab === 'projects' && (
          projectsLoading ? (
            <div className="flex justify-center items-center h-48">
              <Loader2 className="w-8 h-8 animate-spin text-secondary" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {projects.map((p) => (
                <Card key={p.id} className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden">
                    {p.image_url && <img src={p.image_url} alt={p.title} className="w-full h-full object-cover" />}
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-bold text-black">{p.title}</h3>
                      <p className="text-sm text-secondary font-medium">{p.category}</p>
                    </div>
                    {p.featured && (
                      <span className="bg-secondary/10 text-secondary text-xs px-2 py-1 rounded-full">Featured</span>
                    )}
                  </div>
                  <p className="text-sm text-black/60 mb-4">{p.metric}</p>
                  <div className="flex gap-2">
                    <Button onClick={() => editProject(p)} variant="outline" size="sm" className="flex-1">
                      <Edit className="w-4 h-4 mr-1" /> Edit
                    </Button>
                    <Button onClick={() => deleteProject(p.id)} variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )
        )}

        {/* ── MOTION GRAPHICS TAB ───────────────────────────────────────────── */}
        {activeTab === 'motion' && (
          videosLoading ? (
            <div className="flex justify-center items-center h-48">
              <Loader2 className="w-8 h-8 animate-spin text-secondary" />
            </div>
          ) : videos.length === 0 ? (
            <div className="text-center py-20 bg-white rounded-2xl border border-black/5">
              <Film className="w-10 h-10 text-black/20 mx-auto mb-4" />
              <p className="text-black/60 mb-1">No motion videos yet</p>
              <p className="text-black/35 text-sm">Click "Add Video" to create your first entry</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {videos.map((v) => (
                <Card key={v.id} className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
                  <div className="aspect-video bg-gray-100 rounded-lg mb-4 overflow-hidden relative">
                    {v.thumbnail_url && <img src={v.thumbnail_url} alt={v.title} className="w-full h-full object-cover" />}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center">
                        <Film className="w-4 h-4 text-black" />
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start justify-between mb-2">
                    <div className="flex-1">
                      <h3 className="font-bold text-black">{v.title}</h3>
                      <p className="text-sm text-secondary font-medium">{v.category}</p>
                    </div>
                    {v.featured && (
                      <span className="bg-secondary/10 text-secondary text-xs px-2 py-1 rounded-full">Featured</span>
                    )}
                  </div>
                  {v.client && <p className="text-sm text-black/60 mb-4">{v.client} {v.year ? `· ${v.year}` : ''}</p>}
                  <div className="flex gap-2">
                    <Button onClick={() => editVideo(v)} variant="outline" size="sm" className="flex-1">
                      <Edit className="w-4 h-4 mr-1" /> Edit
                    </Button>
                    <Button onClick={() => deleteVideo(v.id)} variant="outline" size="sm" className="text-red-600 hover:bg-red-50">
                      <Trash2 className="w-4 h-4" />
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          )
        )}

        {/* ── DESIGN PROJECT FORM MODAL ─────────────────────────────────────── */}
        <AnimatePresence>
          {showProjectForm && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40" onClick={resetProjectForm} />
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white rounded-2xl shadow-2xl z-50 overflow-auto max-h-[90vh]">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-black">{editingProject ? 'Edit Project' : 'Add Project'}</h2>
                    <button onClick={resetProjectForm} className="text-black/60 hover:text-black"><X className="w-6 h-6" /></button>
                  </div>
                  <form onSubmit={saveProject} className="space-y-5">
                    <div>
                      <Label>Title *</Label>
                      <Input value={projectForm.title} onChange={e => setProjectForm(f => ({ ...f, title: e.target.value }))} placeholder="e.g., Recruit" required />
                    </div>
                    <div>
                      <Label>Category *</Label>
                      <Input value={projectForm.category} onChange={e => setProjectForm(f => ({ ...f, category: e.target.value }))} placeholder="e.g., Product Design" required />
                    </div>
                    <div>
                      <Label>Metric / Tagline *</Label>
                      <Input value={projectForm.metric} onChange={e => setProjectForm(f => ({ ...f, metric: e.target.value }))} placeholder="e.g., Conversion Focused" required />
                    </div>
                    <ImageUploadField
                      label="Thumbnail *"
                      hook={projectImg}
                      uploadedUrl={projectForm.image_url || ''}
                      onClear={() => { setProjectForm(f => ({ ...f, image_url: '' })); projectImg.reset(); }}
                    />
                    <div>
                      <Label>Description</Label>
                      <Textarea value={projectForm.description || ''} onChange={e => setProjectForm(f => ({ ...f, description: e.target.value }))} rows={3} />
                    </div>
                    <div>
                      <Label>Project Link</Label>
                      <Input type="url" value={projectForm.link || ''} onChange={e => setProjectForm(f => ({ ...f, link: e.target.value }))} placeholder="https://behance.net/..." />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div><Label>Client</Label><Input value={projectForm.client || ''} onChange={e => setProjectForm(f => ({ ...f, client: e.target.value }))} /></div>
                      <div><Label>Year</Label><Input value={projectForm.year || ''} onChange={e => setProjectForm(f => ({ ...f, year: e.target.value }))} placeholder="2024" /></div>
                    </div>
                    <div>
                      <Label>Card Size</Label>
                      <Select value={projectForm.size} onValueChange={v => setProjectForm(f => ({ ...f, size: v as 'small' | 'large' }))}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>Display Order</Label>
                      <Input type="number" min="0" value={projectForm.order_index} onChange={e => setProjectForm(f => ({ ...f, order_index: parseInt(e.target.value) }))} />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div><Label className="text-base">Featured</Label><p className="text-sm text-black/60">Show on homepage</p></div>
                      <Switch checked={!!projectForm.featured} onCheckedChange={v => setProjectForm(f => ({ ...f, featured: v }))} />
                    </div>
                    <div className="flex gap-3 pt-2">
                      <Button type="button" onClick={resetProjectForm} variant="outline" className="flex-1" disabled={savingProject}>Cancel</Button>
                      <Button type="submit" className="flex-1 bg-black text-white hover:bg-secondary hover:text-black" disabled={savingProject}>
                        {savingProject ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Saving…</> : <><Save className="w-4 h-4 mr-2" />{editingProject ? 'Update' : 'Create'}</>}
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

        {/* ── MOTION VIDEO FORM MODAL ───────────────────────────────────────── */}
        <AnimatePresence>
          {showVideoForm && (
            <>
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40" onClick={resetVideoForm} />
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white rounded-2xl shadow-2xl z-50 overflow-auto max-h-[90vh]">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-black">{editingVideo ? 'Edit Video' : 'Add Motion Video'}</h2>
                    <button onClick={resetVideoForm} className="text-black/60 hover:text-black"><X className="w-6 h-6" /></button>
                  </div>
                  <form onSubmit={saveVideo} className="space-y-5">
                    <div>
                      <Label>Title *</Label>
                      <Input value={videoForm.title} onChange={e => setVideoForm(f => ({ ...f, title: e.target.value }))} placeholder="e.g., Brand Identity Animation" required />
                    </div>
                    <div>
                      <Label>Category *</Label>
                      <Select value={videoForm.category} onValueChange={v => setVideoForm(f => ({ ...f, category: v }))}>
                        <SelectTrigger><SelectValue /></SelectTrigger>
                        <SelectContent>
                          {MOTION_CATEGORIES.map(c => <SelectItem key={c} value={c}>{c}</SelectItem>)}
                        </SelectContent>
                      </Select>
                    </div>
                    <div>
                      <Label>YouTube Embed URL *</Label>
                      <Input
                        value={videoForm.video_url}
                        onChange={e => setVideoForm(f => ({ ...f, video_url: e.target.value }))}
                        placeholder="https://www.youtube.com/embed/VIDEO_ID"
                        required
                      />
                      <p className="text-xs text-black/40 mt-1">Use the embed URL format: youtube.com/embed/VIDEO_ID</p>
                    </div>
                    <ImageUploadField
                      label="Thumbnail"
                      hook={videoImg}
                      uploadedUrl={videoForm.thumbnail_url || ''}
                      onClear={() => { setVideoForm(f => ({ ...f, thumbnail_url: '' })); videoImg.reset(); }}
                    />
                    <div>
                      <Label>Description</Label>
                      <Textarea value={videoForm.description || ''} onChange={e => setVideoForm(f => ({ ...f, description: e.target.value }))} rows={3} />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div><Label>Client</Label><Input value={videoForm.client || ''} onChange={e => setVideoForm(f => ({ ...f, client: e.target.value }))} /></div>
                      <div><Label>Year</Label><Input value={videoForm.year || ''} onChange={e => setVideoForm(f => ({ ...f, year: e.target.value }))} placeholder="2024" /></div>
                    </div>
                    <div>
                      <Label>Display Order</Label>
                      <Input type="number" min="0" value={videoForm.order_index} onChange={e => setVideoForm(f => ({ ...f, order_index: parseInt(e.target.value) }))} />
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div><Label className="text-base">Featured</Label><p className="text-sm text-black/60">Highlight this video</p></div>
                      <Switch checked={!!videoForm.featured} onCheckedChange={v => setVideoForm(f => ({ ...f, featured: v }))} />
                    </div>
                    <div className="flex gap-3 pt-2">
                      <Button type="button" onClick={resetVideoForm} variant="outline" className="flex-1" disabled={savingVideo}>Cancel</Button>
                      <Button type="submit" className="flex-1 bg-black text-white hover:bg-secondary hover:text-black" disabled={savingVideo}>
                        {savingVideo ? <><Loader2 className="w-4 h-4 mr-2 animate-spin" />Saving…</> : <><Save className="w-4 h-4 mr-2" />{editingVideo ? 'Update' : 'Create'}</>}
                      </Button>
                    </div>
                  </form>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
