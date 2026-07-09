/**
 * ═══════════════════════════════════════════════════════════════════════════
 * ABOUT CONTENT API - Using KV Store
 * ═══════════════════════════════════════════════════════════════════════════
 * 
 * Handles about page content from KV store
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
    console.log('🔍 Checking if about content exists in KV store...');
    
    // Check if we have any about content
    const existingContent = await kv.getByPrefix('about:');
    
    if (!existingContent || existingContent.length === 0) {
      console.log('📦 Seeding initial about content...');
      
      // Seed initial about content
      const seedContent = [
        {
          section_key: 'hero',
          title: 'About Me',
          content: 'I\'m A R Khandoker, a product designer crafting meaningful digital experiences.',
          is_active: true,
          order_index: 1
        },
        {
          section_key: 'bio',
          title: 'My Story',
          content: 'With over 5 years of experience in product design, I specialize in creating user-centered solutions that drive business growth. My approach combines strategic thinking with beautiful design.',
          is_active: true,
          order_index: 2
        },
        {
          section_key: 'skills',
          title: 'What I Do',
          content: 'UX/UI Design • Product Strategy • User Research • Prototyping • Design Systems',
          is_active: true,
          order_index: 3
        }
      ];
      
      // Store each content section
      for (const content of seedContent) {
        await kv.set(`about:${content.section_key}`, content);
      }
      
      console.log(`✅ Seeded ${seedContent.length} about sections!`);
    } else {
      console.log(`✅ Found ${existingContent.length} existing about sections`);
    }
    
    initialized = true;
  } catch (error) {
    console.error('❌ Initialization error:', error);
  }
}

// ═══════════════════════════════════════════════════════════════════════════
// Route: GET /about
// Returns all about page content sections
// ═══════════════════════════════════════════════════════════════════════════
app.get('/make-server-4ba1cc9d/about', async (c) => {
  try {
    await ensureInitialized();
    
    console.log('📥 Fetching about content from KV store...');
    
    // Get all about content
    const content = await kv.getByPrefix('about:');
    
    if (!content) {
      return c.json({ 
        success: true, 
        content: []
      });
    }
    
    // Filter active and sort by order_index
    const activeContent = content
      .filter(c => c.is_active !== false)
      .sort((a, b) => (a.order_index || 0) - (b.order_index || 0));
    
    console.log(`✅ Returning ${activeContent.length} about sections`);
    
    return c.json({ 
      success: true, 
      content: activeContent
    });
  } catch (error) {
    console.error('❌ Error fetching about content:', error);
    return c.json({ 
      success: false, 
      error: 'Failed to fetch about content',
      details: error.message 
    }, 500);
  }
});

// ═══════════════════════════════════════════════════════════════════════════
// Route: GET /about/:section
// Returns specific section by key
// ═══════════════════════════════════════════════════════════════════════════
app.get('/make-server-4ba1cc9d/about/:section', async (c) => {
  try {
    await ensureInitialized();
    
    const sectionKey = c.req.param('section');
    console.log(`📥 Fetching about section: ${sectionKey}`);
    
    const content = await kv.get(`about:${sectionKey}`);
    
    if (!content || content.is_active === false) {
      return c.json({ 
        success: false, 
        error: 'Section not found' 
      }, 404);
    }
    
    console.log(`✅ Found section: ${content.section_key}`);
    
    return c.json({ 
      success: true, 
      content
    });
  } catch (error) {
    console.error('❌ Error fetching about section:', error);
    return c.json({ 
      success: false, 
      error: 'Failed to fetch section',
      details: error.message 
    }, 500);
  }
});

export default app;
