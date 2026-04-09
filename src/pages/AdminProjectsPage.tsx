/**
 * Admin Panel - Projects Management
 * Integrated with KV Store Backend
 */

import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Plus, Edit, Trash2, ArrowLeft, Save, X, Loader2, CheckCircle, Upload, Image as ImageIcon, LogOut } from 'lucide-react';
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
  tags?: string[];
  client?: string;
  year?: string;
  link?: string;
}

export function AdminProjectsPage() {
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);
  const [showForm, setShowForm] = useState(false);
  const [editingProject, setEditingProject] = useState<Project | null>(null);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null);
  
  // Image upload states
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');
  const [uploading, setUploading] = useState(false);
  const [uploadProgress, setUploadProgress] = useState(0);

  const [formData, setFormData] = useState<Partial<Project>>({
    title: '',
    category: '',
    metric: '',
    size: 'large',
    image_url: '',
    featured: false,
    order_index: 0,
    description: '',
    tags: [],
    client: '',
    year: new Date().getFullYear().toString(),
    link: '',
  });

  // Fetch projects
  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-4ba1cc9d/projects`,
        {
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      const data = await response.json();
      if (data.success) {
        setProjects(data.projects);
      }
    } catch (error) {
      console.error('Error fetching projects:', error);
      showMessage('error', 'Failed to load projects');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const showMessage = (type: 'success' | 'error', text: string) => {
    setMessage({ type, text });
    setTimeout(() => setMessage(null), 5000);
  };

  // Handle create/update
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const endpoint = editingProject 
        ? `https://${projectId}.supabase.co/functions/v1/make-server-4ba1cc9d/projects/${editingProject.id}`
        : `https://${projectId}.supabase.co/functions/v1/make-server-4ba1cc9d/projects`;

      const method = editingProject ? 'PUT' : 'POST';

      const response = await fetch(endpoint, {
        method,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${publicAnonKey}`,
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (data.success) {
        showMessage('success', editingProject ? 'Project updated!' : 'Project created!');
        fetchProjects();
        resetForm();
      } else {
        showMessage('error', data.error || 'Failed to save project');
      }
    } catch (error) {
      console.error('Error saving project:', error);
      showMessage('error', 'Failed to save project');
    } finally {
      setSaving(false);
    }
  };

  // Handle delete
  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this project?')) return;

    try {
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-4ba1cc9d/projects/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
        }
      );

      const data = await response.json();

      if (data.success) {
        showMessage('success', 'Project deleted!');
        fetchProjects();
      } else {
        showMessage('error', 'Failed to delete project');
      }
    } catch (error) {
      console.error('Error deleting project:', error);
      showMessage('error', 'Failed to delete project');
    }
  };

  // Handle edit
  const handleEdit = (project: Project) => {
    setEditingProject(project);
    setFormData(project);
    setImagePreview(project.image_url || '');
    setShowForm(true);
  };

  // Handle file selection
  const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      // Validate file type
      if (!file.type.startsWith('image/')) {
        showMessage('error', 'Please select an image file');
        return;
      }

      // Validate file size (max 5MB)
      if (file.size > 5 * 1024 * 1024) {
        showMessage('error', 'Image must be less than 5MB');
        return;
      }

      setSelectedFile(file);

      // Create preview
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  // Handle image upload
  const handleImageUpload = async () => {
    if (!selectedFile) {
      showMessage('error', 'Please select an image first');
      return;
    }

    setUploading(true);
    setUploadProgress(0);

    try {
      // Create form data
      const uploadFormData = new FormData();
      uploadFormData.append('file', selectedFile);

      // Simulate progress
      const progressInterval = setInterval(() => {
        setUploadProgress(prev => Math.min(prev + 10, 90));
      }, 200);

      // Upload to server
      const response = await fetch(
        `https://${projectId}.supabase.co/functions/v1/make-server-4ba1cc9d/upload-image`,
        {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${publicAnonKey}`,
          },
          body: uploadFormData,
        }
      );

      clearInterval(progressInterval);
      setUploadProgress(100);

      const data = await response.json();

      if (data.success) {
        // Set the image URL in form data
        setFormData({ ...formData, image_url: data.url });
        showMessage('success', 'Image uploaded successfully!');
        setSelectedFile(null);
      } else {
        showMessage('error', data.error || 'Failed to upload image');
        setImagePreview('');
      }
    } catch (error) {
      console.error('Error uploading image:', error);
      showMessage('error', 'Failed to upload image');
      setImagePreview('');
    } finally {
      setUploading(false);
      setUploadProgress(0);
    }
  };

  // Reset form
  const resetForm = () => {
    setFormData({
      title: '',
      category: '',
      metric: '',
      size: 'large',
      image_url: '',
      featured: false,
      order_index: projects.length + 1,
      description: '',
      tags: [],
      client: '',
      year: new Date().getFullYear().toString(),
      link: '',
    });
    setEditingProject(null);
    setShowForm(false);
    setSelectedFile(null);
    setImagePreview('');
    setUploadProgress(0);
  };

  // Handle logout
  const handleLogout = async () => {
    try {
      await supabase.auth.signOut();
      localStorage.removeItem('admin_token');
      navigate('/admin/login');
    } catch (err) {
      console.error('Logout error:', err);
      showMessage('error', 'Failed to logout');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-secondary" />
          <p className="text-black/60">Loading projects...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-6">
            <Link 
              to="/" 
              className="inline-flex items-center gap-2 text-black/60 hover:text-black transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Site
            </Link>
            <Button
              onClick={handleLogout}
              variant="outline"
              className="text-black/60 hover:text-black hover:bg-red-50 hover:border-red-200"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </Button>
          </div>
          
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-4xl font-bold text-black mb-2">Projects Admin</h1>
              <p className="text-black/60">Manage your portfolio projects</p>
            </div>
            <Button 
              onClick={() => setShowForm(true)}
              className="bg-black text-white hover:bg-secondary hover:text-black transition-colors rounded-full px-6"
            >
              <Plus className="w-5 h-5 mr-2" />
              Add Project
            </Button>
          </div>
        </div>

        {/* Success/Error Messages */}
        <AnimatePresence>
          {message && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              className={`mb-6 p-4 rounded-lg flex items-center gap-3 ${
                message.type === 'success' 
                  ? 'bg-green-50 text-green-800 border border-green-200' 
                  : 'bg-red-50 text-red-800 border border-red-200'
              }`}
            >
              {message.type === 'success' && <CheckCircle className="w-5 h-5" />}
              {message.text}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {projects.map((project) => (
            <Card key={project.id} className="p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
              <div className="aspect-video bg-gray-200 rounded-lg mb-4 overflow-hidden">
                {project.image_url && (
                  <img 
                    src={project.image_url} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-black mb-1">{project.title}</h3>
                  <p className="text-sm text-secondary font-medium">{project.category}</p>
                </div>
                {project.featured && (
                  <span className="bg-secondary/10 text-secondary text-xs px-2 py-1 rounded-full font-medium">
                    Featured
                  </span>
                )}
              </div>

              <p className="text-sm text-black/60 mb-4">{project.metric}</p>

              <div className="flex gap-2">
                <Button
                  onClick={() => handleEdit(project)}
                  variant="outline"
                  size="sm"
                  className="flex-1"
                >
                  <Edit className="w-4 h-4 mr-1" />
                  Edit
                </Button>
                <Button
                  onClick={() => handleDelete(project.id)}
                  variant="outline"
                  size="sm"
                  className="text-red-600 hover:text-red-700 hover:bg-red-50"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Add/Edit Form Modal */}
        <AnimatePresence>
          {showForm && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="fixed inset-0 bg-black/50 z-40"
                onClick={resetForm}
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="fixed inset-4 md:inset-auto md:top-1/2 md:left-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:w-full md:max-w-2xl bg-white rounded-2xl shadow-2xl z-50 overflow-auto max-h-[90vh]"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <h2 className="text-2xl font-bold text-black">
                      {editingProject ? 'Edit Project' : 'Add New Project'}
                    </h2>
                    <button
                      onClick={resetForm}
                      className="text-black/60 hover:text-black transition-colors"
                    >
                      <X className="w-6 h-6" />
                    </button>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Title */}
                    <div>
                      <Label htmlFor="title">Project Title *</Label>
                      <Input
                        id="title"
                        value={formData.title}
                        onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                        placeholder="e.g., Recruit"
                        required
                      />
                    </div>

                    {/* Category */}
                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Input
                        id="category"
                        value={formData.category}
                        onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                        placeholder="e.g., Product Design"
                        required
                      />
                    </div>

                    {/* Metric */}
                    <div>
                      <Label htmlFor="metric">Metric/Tagline *</Label>
                      <Input
                        id="metric"
                        value={formData.metric}
                        onChange={(e) => setFormData({ ...formData, metric: e.target.value })}
                        placeholder="e.g., Conversion Focused"
                        required
                      />
                    </div>

                    {/* Image Upload */}
                    <div>
                      <Label>Project Thumbnail *</Label>
                      
                      {/* Image Preview */}
                      {imagePreview && (
                        <div className="mt-2 mb-4 relative aspect-video bg-gray-100 rounded-lg overflow-hidden">
                          <img 
                            src={imagePreview} 
                            alt="Preview" 
                            className="w-full h-full object-cover"
                          />
                          {formData.image_url && (
                            <div className="absolute top-2 right-2">
                              <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full flex items-center gap-1">
                                <CheckCircle className="w-3 h-3" />
                                Uploaded
                              </span>
                            </div>
                          )}
                        </div>
                      )}

                      {/* File Input */}
                      <div className="flex gap-2">
                        <div className="flex-1">
                          <Input
                            type="file"
                            accept="image/*"
                            onChange={handleFileSelect}
                            disabled={uploading}
                            className="cursor-pointer"
                          />
                        </div>
                        <Button
                          type="button"
                          onClick={handleImageUpload}
                          disabled={!selectedFile || uploading || !!formData.image_url}
                          className="bg-secondary text-black hover:bg-secondary/90"
                        >
                          {uploading ? (
                            <>
                              <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                              {uploadProgress}%
                            </>
                          ) : (
                            <>
                              <Upload className="w-4 h-4 mr-2" />
                              Upload
                            </>
                          )}
                        </Button>
                      </div>

                      {/* Upload Progress */}
                      {uploading && (
                        <div className="mt-2">
                          <div className="w-full bg-gray-200 rounded-full h-2">
                            <div 
                              className="bg-secondary h-2 rounded-full transition-all duration-300"
                              style={{ width: `${uploadProgress}%` }}
                            />
                          </div>
                        </div>
                      )}

                      <p className="text-xs text-black/60 mt-2">
                        Max size: 5MB • Formats: JPG, PNG, GIF, WebP
                      </p>
                      
                      {/* Hidden field for required validation */}
                      <input 
                        type="hidden" 
                        value={formData.image_url} 
                        required 
                      />
                    </div>

                    {/* Description */}
                    <div>
                      <Label htmlFor="description">Description</Label>
                      <Textarea
                        id="description"
                        value={formData.description || ''}
                        onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                        placeholder="Brief description of the project..."
                        rows={3}
                      />
                    </div>

                    {/* Project Link */}
                    <div>
                      <Label htmlFor="link">Project Link</Label>
                      <Input
                        id="link"
                        type="url"
                        value={formData.link || ''}
                        onChange={(e) => setFormData({ ...formData, link: e.target.value })}
                        placeholder="https://behance.net/project or https://dribbble.com/shots/..."
                      />
                      <p className="text-xs text-black/60 mt-1">
                        Where to redirect when someone clicks this project (Behance, Dribbble, live site, etc.)
                      </p>
                    </div>

                    {/* Client */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="client">Client</Label>
                        <Input
                          id="client"
                          value={formData.client || ''}
                          onChange={(e) => setFormData({ ...formData, client: e.target.value })}
                          placeholder="e.g., Acme Corp"
                        />
                      </div>
                      <div>
                        <Label htmlFor="year">Year</Label>
                        <Input
                          id="year"
                          value={formData.year || ''}
                          onChange={(e) => setFormData({ ...formData, year: e.target.value })}
                          placeholder="2024"
                        />
                      </div>
                    </div>

                    {/* Size */}
                    <div>
                      <Label htmlFor="size">Card Size</Label>
                      <Select 
                        value={formData.size} 
                        onValueChange={(value) => setFormData({ ...formData, size: value as 'small' | 'large' })}
                      >
                        <SelectTrigger>
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="small">Small</SelectItem>
                          <SelectItem value="large">Large</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Order Index */}
                    <div>
                      <Label htmlFor="order_index">Display Order</Label>
                      <Input
                        id="order_index"
                        type="number"
                        value={formData.order_index}
                        onChange={(e) => setFormData({ ...formData, order_index: parseInt(e.target.value) })}
                        min="0"
                      />
                      <p className="text-xs text-black/60 mt-1">Lower numbers appear first</p>
                    </div>

                    {/* Featured */}
                    <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div>
                        <Label htmlFor="featured" className="text-base">Featured Project</Label>
                        <p className="text-sm text-black/60">Show on homepage</p>
                      </div>
                      <Switch
                        id="featured"
                        checked={formData.featured}
                        onCheckedChange={(checked) => setFormData({ ...formData, featured: checked })}
                      />
                    </div>

                    {/* Buttons */}
                    <div className="flex gap-3 pt-4">
                      <Button
                        type="button"
                        onClick={resetForm}
                        variant="outline"
                        className="flex-1"
                        disabled={saving}
                      >
                        Cancel
                      </Button>
                      <Button
                        type="submit"
                        className="flex-1 bg-black text-white hover:bg-secondary hover:text-black transition-colors"
                        disabled={saving}
                      >
                        {saving ? (
                          <>
                            <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                            Saving...
                          </>
                        ) : (
                          <>
                            <Save className="w-4 h-4 mr-2" />
                            {editingProject ? 'Update' : 'Create'}
                          </>
                        )}
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