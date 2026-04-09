/**
 * ═══════════════════════════════════════════════════════════════════════════
 * PROJECTS API - Using KV Store
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Handles all project-related operations using the KV store
 * Manage content directly from Supabase Table Editor (kv_store_4ba1cc9d table)!
 * 
 * ═══════════════════════════════════════════════════════════════════════════
 */

import { Hono } from "npm:hono";
import * as kv from "./kv_new.tsx";

const app = new Hono();

// Auto-initialize with seed data on first request
let initialized = false;

async function ensureInitialized() {
  if (initialized) return;
  
  try {
    console.log('🔍 Checking if projects exist in KV store...');
    
    // Check if we have any projects
    const existingProjects = await kv.getByPrefix('project:');
    
    if (!existingProjects || existingProjects.length === 0) {
      console.log('📦 Seeding initial projects...');
      
      // Seed initial projects
      const seedProjects = [
        {
          id: '1',
          title: 'Recruit',
          category: 'Product Design',
          metric: 'Conversion Focused',
          size: 'large',
          image_url: 'https://images.unsplash.com/photo-1719925219818-a09debbf804f?w=1080',
          featured: true,
          order_index: 1,
          link: 'https://behance.net/gallery/example-recruit',
          description: 'A comprehensive recruitment platform focusing on conversion optimization',
          client: 'Tech Startup',
          year: '2024'
        },
        {
          id: '2',
          title: 'FlowTrack',
          category: 'Mobile Product',
          metric: 'Habit Formation',
          size: 'small',
          image_url: 'https://images.unsplash.com/photo-1610985725707-bb0766bf123b?w=1080',
          featured: true,
          order_index: 2,
          link: 'https://dribbble.com/shots/example-flowtrack',
          description: 'Mobile app designed to help users build and maintain healthy habits',
          client: 'Health Tech',
          year: '2024'
        },
        {
          id: '3',
          title: 'Finex',
          category: 'Fintech',
          metric: 'Wealth Management',
          size: 'large',
          image_url: 'https://images.unsplash.com/photo-1668091818168-61a18ea51275?w=1080',
          featured: true,
          order_index: 3,
          link: '',
          description: 'Modern fintech platform for wealth management and investment tracking',
          client: 'Financial Services',
          year: '2023'
        },
        {
          id: '4',
          title: 'Wellness App',
          category: 'Health & Fitness',
          metric: 'User Engagement',
          size: 'small',
          image_url: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=1080',
          featured: false,
          order_index: 4,
          link: '',
          description: 'Comprehensive wellness tracking application',
          year: '2023'
        },
        {
          id: '5',
          title: 'E-Commerce Platform',
          category: 'Retail',
          metric: 'Sales Growth',
          size: 'large',
          image_url: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=1080',
          featured: false,
          order_index: 5,
          link: '',
          description: 'Full-featured e-commerce platform with advanced analytics',
          year: '2023'
        },
        {
          id: '6',
          title: 'Social Network',
          category: 'Social Media',
          metric: 'Active Users',
          size: 'small',
          image_url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1080',
          featured: false,
          order_index: 6,
          link: '',
          description: 'Next-generation social networking platform',
          year: '2023'
        },
        {
          id: '7',
          title: 'Dashboard Analytics',
          category: 'Data Visualization',
          metric: 'Insights Driven',
          size: 'large',
          image_url: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1080',
          featured: false,
          order_index: 7,
          link: '',
          description: 'Real-time analytics dashboard for business intelligence',
          year: '2023'
        }
      ];
      
      // Store each project
      for (const project of seedProjects) {
        await kv.set(`project:${project.id}`, project);
      }
      
      console.log(`✅ Seeded ${seedProjects.length} projects!`);
    } else {
      console.log(`✅ Found ${existingProjects.length} existing projects`);
    }
    
    initialized = true;
  } catch (error) {
    console.error('❌ Initialization error:', error);
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// Route: GET /projects
// Returns all projects, optionally filtered
// ═══════════════════════════════════════════════════════════════════════════
app.get('/make-server-4ba1cc9d/projects', async (c) => {
  try {
    await ensureInitialized();
    
    console.log('📥 Fetching projects from KV store...');
    
    // Get all projects
    const projects = await kv.getByPrefix('project:');
    
    if (!projects) {
      return c.json({ 
        success: true, 
        projects: [],
        count: 0
      });
    }
    
    // Apply filters
    const featured = c.req.query('featured');
    const category = c.req.query('category');
    
    let filteredProjects = [...projects];
    
    if (featured === 'true') {
      filteredProjects = filteredProjects.filter(p => p.featured === true);
    }
    
    if (category) {
      filteredProjects = filteredProjects.filter(p => p.category === category);
    }
    
    // Sort by order_index
    filteredProjects.sort((a, b) => (a.order_index || 0) - (b.order_index || 0));
    
    console.log(`✅ Returning ${filteredProjects.length} projects`);
    
    return c.json({ 
      success: true, 
      projects: filteredProjects,
      count: filteredProjects.length
    });
  } catch (error) {
    console.error('❌ Error fetching projects:', error);
    return c.json({ 
      success: false, 
      error: 'Failed to fetch projects',
      details: error.message
    }, 500);
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// Route: GET /projects/:id
// Returns a single project by ID
// ═══════════════════════════════════════════════════════════════════════════
app.get('/make-server-4ba1cc9d/projects/:id', async (c) => {
  try {
    await ensureInitialized();
    
    const id = c.req.param('id');
    console.log(`📥 Fetching project ID: ${id}`);
    
    const project = await kv.get(`project:${id}`);
    
    if (!project) {
      return c.json({ 
        success: false, 
        error: 'Project not found' 
      }, 404);
    }
    
    console.log(`✅ Found project: ${project.title}`);
    
    return c.json({ 
      success: true, 
      project
    });
  } catch (error) {
    console.error('❌ Error fetching project:', error);
    return c.json({ 
      success: false, 
      error: 'Failed to fetch project',
      details: error.message 
    }, 500);
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// Route: POST /projects
// Create a new project
// ═══════════════════════════════════════════════════════════════════════════
app.post('/make-server-4ba1cc9d/projects', async (c) => {
  try {
    await ensureInitialized();
    
    const body = await c.req.json();
    console.log('📝 Creating new project:', body.title);
    
    // Get all existing projects to determine next ID
    const existingProjects = await kv.getByPrefix('project:');
    const maxId = existingProjects.reduce((max, p) => {
      const id = parseInt(p.id);
      return id > max ? id : max;
    }, 0);
    
    const newId = (maxId + 1).toString();
    
    const newProject = {
      id: newId,
      title: body.title,
      category: body.category,
      metric: body.metric,
      size: body.size || 'large',
      image_url: body.image_url,
      featured: body.featured || false,
      order_index: body.order_index || maxId + 1,
      description: body.description || '',
      tags: body.tags || [],
      client: body.client || '',
      year: body.year || new Date().getFullYear().toString(),
      link: body.link || '',
    };
    
    await kv.set(`project:${newId}`, newProject);
    
    console.log(`✅ Created project: ${newProject.title} (ID: ${newId})`);
    
    return c.json({
      success: true,
      project: newProject,
      message: 'Project created successfully'
    });
  } catch (error) {
    console.error('❌ Error creating project:', error);
    return c.json({
      success: false,
      error: 'Failed to create project',
      details: error.message
    }, 500);
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// Route: PUT /projects/:id
// Update an existing project
// ═══════════════════════════════════════════════════════════════════════════
app.put('/make-server-4ba1cc9d/projects/:id', async (c) => {
  try {
    await ensureInitialized();
    
    const id = c.req.param('id');
    const body = await c.req.json();
    console.log(`📝 Updating project ID: ${id}`);
    
    // Check if project exists
    const existingProject = await kv.get(`project:${id}`);
    if (!existingProject) {
      return c.json({
        success: false,
        error: 'Project not found'
      }, 404);
    }
    
    // Update project
    const updatedProject = {
      ...existingProject,
      ...body,
      id, // Keep the same ID
    };
    
    await kv.set(`project:${id}`, updatedProject);
    
    console.log(`✅ Updated project: ${updatedProject.title}`);
    
    return c.json({
      success: true,
      project: updatedProject,
      message: 'Project updated successfully'
    });
  } catch (error) {
    console.error('❌ Error updating project:', error);
    return c.json({
      success: false,
      error: 'Failed to update project',
      details: error.message
    }, 500);
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// Route: DELETE /projects/:id
// Delete a project
// ═══════════════════════════════════════════════════════════════════════════
app.delete('/make-server-4ba1cc9d/projects/:id', async (c) => {
  try {
    await ensureInitialized();
    
    const id = c.req.param('id');
    console.log(`🗑️ Deleting project ID: ${id}`);
    
    // Check if project exists
    const existingProject = await kv.get(`project:${id}`);
    if (!existingProject) {
      return c.json({
        success: false,
        error: 'Project not found'
      }, 404);
    }
    
    await kv.del(`project:${id}`);
    
    console.log(`✅ Deleted project: ${existingProject.title}`);
    
    return c.json({
      success: true,
      message: 'Project deleted successfully'
    });
  } catch (error) {
    console.error('❌ Error deleting project:', error);
    return c.json({
      success: false,
      error: 'Failed to delete project',
      details: error.message
    }, 500);
  }
});

export default app;